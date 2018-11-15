import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Popup.sass';

/**
 * Try catch for Local vs. Styleguidist
 */
let ReactDOM;

try {
	ReactDOM = __non_webpack_require__('react-dom');
} catch (e) {
	ReactDOM = require('react-dom');
}

export default class Popup extends Component {
	static propTypes = {
		items: PropTypes.array,
		offsetX: PropTypes.string,
		offsetY: PropTypes.string,
		position: PropTypes.oneOf(['bottom', 'right', 'top']),
		triggerContent: PropTypes.node,
	};

	static defaultProps = {
		items: [],
		padding: true,
		position: 'bottom',
	};

	constructor (props) {
		super(props);

		this.state = {
			open: false,
			tipItemHover: false,
		};

		this.onClick = this.onClick.bind(this);
		this.onClickOutside = this.onClickOutside.bind(this);
	}

	componentDidMount () {
		document.addEventListener('click', this.onClickOutside, true);
	}

	componentWillUnmount () {
		document.removeEventListener('click', this.onClickOutside, true);
	}

	onClick () {
		this.setState({
			open: !this.state.open,
		});
	}

	onClickOutside (event) {
		try {
			const domNode = ReactDOM.findDOMNode(this);

			if (!domNode || !domNode.contains(event.target)) {
				this.setState({
					open: false,
				});
			}
		}
		catch (error) {}
	}

	render () {
const transformStyles = [
	...(this.props.offsetX ? [`translateX(${this.props.offsetX})`] : []),
	...(this.props.offsetY ? [`translateY(${this.props.offsetY})`] : []),
];

		return (
			<div
				className={classnames(
					styles.Popup,
					{
						[styles.Popup__Open]: this.state.open,
						[styles.Popup__Padding]: this.props.padding,
						[styles.Popup__PositionBottom]: this.props.position === 'bottom',
						[styles.Popup__PositionRight]: this.props.position === 'right',
						[styles.Popup__PositionTop]: this.props.position === 'top',
					},
					this.props.className,
				)}
				tabIndex="0"
				onClick={this.onClick}
			>
				<div
					className={styles.Popup_BubbleWrapper}
				>
					<div
						className={styles.Popup_BubbleOffsetContainer}
						style={{
							...((this.props.offsetX || this.props.offsetY) && {transform: transformStyles.join(' ')}),
						}}
					>
						<div
							className={classnames(
								styles.Popup_Bubble,
								{
									[styles.Popup_Bubble__TipItemHover]: this.state.tipItemHover,
								},
								typeof this.state.tipItemHover === 'string' && this.state.tipItemHover === 'red' ? styles.Popup_Bubble__TipItemHover : null,
							)}
						>
							<div className={styles.Popup_BubbleContent}>
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
				{this.props.triggerContent}
			</div>
		);
	}
}

