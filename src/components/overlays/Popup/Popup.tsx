import * as React from 'react';
import classnames from 'classnames';
import * as styles from './Popup.sass';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import cloneNodes from '../../../utils/cloneNodes';

/**
 * Try catch for Local vs. Styleguidist
 */

declare let __non_webpack_require__: any;
let ReactDOM: any;

try {
	ReactDOM = __non_webpack_require__('react-dom');
}
catch (e) {
	ReactDOM = require('react-dom');
}

interface IProps extends IReactComponentProps {
	items?: any[];
	offsetX?: string;
	offsetY?: string;
	padding?: boolean;
	position?: 'bottom' | 'right' | 'top';
	triggerContent?: React.ReactNode;
	triggerAble?: boolean;
	closeOnPopupClick?: boolean;
	centerTail?: boolean;
	closeOnTrigger?: boolean;
}

interface IState {
	open: boolean;
	tipItemHover: boolean;
}

export default class Popup extends React.Component<IProps, IState> {
	static defaultProps = {
		items: [],
		padding: true,
		position: 'bottom',
		triggerAble: true,
		closeOnPopupClick: true,
		centerTail: false,
		closeOnTrigger: false,
	};

	constructor (props: IProps) {
		super(props);

		this.state = {
			open: false,
			tipItemHover: false,
		};

		this.onClick = this.onClick.bind(this);
		this.onClickOutside = this.onClickOutside.bind(this);
		this.maybeClose = this.maybeClose.bind(this);
	}

	componentDidMount () {
		document.addEventListener('click', this.onClickOutside, true);
	}

	componentWillUnmount () {
		document.removeEventListener('click', this.onClickOutside, true);
	}

	onClick () {
		const { open } = this.state;
		const { triggerAble, closeOnPopupClick } = this.props;
		if ((!open && !triggerAble) || (open && !closeOnPopupClick)) {
			return;
		}

		this.setState({
			open: !this.state.open,
		});
	}

	onClickOutside (event: any) {
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

	maybeClose (event: any) {
		const shouldClose = event.target.classList.contains(styles.Popup_BubbleWrapper) && this.props.closeOnTrigger;
		if (shouldClose) this.handleClose();
	}

	handleClose = () => this.setState({ open: false });

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
						[styles.Popup__CenteredTail]: this.props.centerTail,
						[styles.Popup__Cursor_Pointer]: this.props.closeOnPopupClick,
					},
					this.props.className,
				)}
				id={this.props.id}
				onClick={this.onClick}
				style={this.props.style}
				tabIndex={0}
			>
				<div
					className={classnames(styles.Popup_BubbleWrapper, {
						[styles.Popup__Cursor_Pointer]: this.props.closeOnTrigger,
					})}
					onClick={this.maybeClose}
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
								{/**
								 * Clone children and pass a handler function to close the Popup so child nodes can control closing the popup if necessary
								 */}
								{cloneNodes(this.props.children, { handleClosePopup: this.handleClose })}
							</div>
						</div>
					</div>
				</div>
				{/**
				 * Clone top level triggerContents elements and pass this.state to them
				 * This will allow triggerContents to be state aware to make appropriate styling decisions, etc.
				 */}
				{cloneNodes(this.props.triggerContent, { popupState: { ...this.state }})}
			</div>
		);
	}
}
