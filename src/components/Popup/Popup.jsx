import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Popup.sass';
import onClickOutside from "react-onclickoutside";

class Popup extends Component {
	static propTypes = {
		items: PropTypes.array,
		position: PropTypes.oneOf(['bottom', 'right', 'top']),
		navItem: PropTypes.bool,
		navItemActive: PropTypes.bool,
		triggerContent: PropTypes.node,
	};

	static defaultProps = {
		items: [],
		position: 'bottom',
		navItem: false,
		navItemActive: false,
	};

	constructor (props) {
		super(props);

		this.state = {
			open: false,
			tipItemHover: false,
		};

		this.onClick = this.onClick.bind(this);
	}

	onClick () {
		this.setState({
			open: !this.state.open,
		});
	}

	handleClickOutside() {
		this.setState({
			open: false,
		});
	}

	tipItemHoverFactory (i, value) {
		if (this.props.position === 'bottom' && i !== 0) {
			return null;
		}

		if (this.props.position === 'top' && i !== this.props.items.length - 1) {
			return null;
		}

		return () => {
			this.setState({ tipItemHover: value });
		};
	}

	render () {
		return (
			<div
				className={classnames(
					styles.Popup,
					{
						[styles.Popup__Open]: this.state.open,
						[styles.Popup__PositionBottom]: this.props.position === 'bottom',
						[styles.Popup__PositionRight]: this.props.position === 'right',
						[styles.Popup__PositionTop]: this.props.position === 'top',
					},
					this.props.className,
				)}
				tabIndex="0"
				onClick={this.onClick}
			>
				<div className={styles.Popup_BubbleWrapper}>
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
				{this.props.triggerContent}
			</div>
		);
	}
}

export default onClickOutside(Popup);

