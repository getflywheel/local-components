import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './Tooltip.scss';
import { Manager, Reference, Popper } from 'react-popper';

interface IProps extends IReactComponentProps {
	/** the content that should show the tooltip upon the user's mouse entering it **/
	content?: React.ReactElement;
	/** whether to force the tooltip to show and ignore mouse events **/
	forceHover?: boolean;
	/** the number of milliseconds to delay hiding the tooltip after the user's mouse leaves this component **/
	hideDelay?: number;
	/** the position/placement of the tooltip relative to the content **/
	position?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
	/** whether to use just JavaScript to show and hide the tooltip **/
	useJsHover?: boolean;
}

interface IState {
	/** whether to prevent CSS-driven fading out of the tooltip if the JS-driven events determine it shouldn't fire (e.g. force hover, delayed exit, still hovering over popper element) **/
	doPreventTransitionOut: boolean;
	isMouseOverPopper: boolean;
	isMouseOverReference: boolean;
	isTransitionLeaving: boolean;
}

export class Tooltip extends React.Component<IProps, IState> {

	static defaultProps: Partial<IProps> = {
		hideDelay: 500,
		forceHover: false,
		position: 'top',
		useJsHover: false,
	};

	protected _delayTimeoutIdPopper: number = NaN;
	protected _delayTimeoutIdReference: number = NaN;

	constructor (props: IReactComponentProps) {
		super(props);

		this.state = {
			doPreventTransitionOut: false,
			isMouseOverPopper: false,
			isMouseOverReference: false,
			isTransitionLeaving: false,
		};
	}

	protected _onMouseEnterContentPopper = () => {
		// cancel any timeout attempts to hide tooltip
		clearTimeout(this._delayTimeoutIdPopper);
		clearTimeout(this._delayTimeoutIdReference);

		this.setState({
			isMouseOverPopper: true,
		});
	};

	protected _onMouseLeaveContentPopper = () => {
		this.setState({
			isMouseOverPopper: false,
		});

		// delay hiding popper/tooltip
		this._delayTimeoutIdPopper = setTimeout(() => {
			this.setState({
				// check reference hover, if now hovering over it then prevent hiding the tooltip
				doPreventTransitionOut: this.state.isMouseOverReference,
				isTransitionLeaving: !this.state.isMouseOverReference,
			});
		}, this.props.hideDelay);
	};

	protected _onMouseEnterReference = () => {
		// cancel any timeout attempts to hide tooltip
		clearTimeout(this._delayTimeoutIdPopper);
		clearTimeout(this._delayTimeoutIdReference);

		this.setState({
			isMouseOverReference: true,
		});

		this.setState({
			doPreventTransitionOut: true,
			isMouseOverReference: true,
		});
	};

	protected _onMouseOverReference = () => {
		this.setState({
			isMouseOverReference: false,
		});

		// delay hiding popper/tooltip
		this._delayTimeoutIdReference = setTimeout(() => {
			this.setState({
				// check popper hover, if now hovering over it then prevent hiding the tooltip
				doPreventTransitionOut: this.state.isMouseOverPopper,
				isTransitionLeaving: !this.state.isMouseOverPopper,
			});
		}, this.props.hideDelay);
	};

	protected _onTransitionEndPopperInner = () => {
		this.setState({
			isTransitionLeaving: false,
		});
	};

	render () {
		return (
			<Manager>
				<Reference>
					{({ ref }) => {
						if(!this.props.children) {
							return null;
						}

						return React.Children.map(this.props.children as React.ReactElement, (child: React.ReactElement) => {
							return React.cloneElement(
								child,
								{
									ref,
									className: classnames(
										child.props.className,
										styles.Tooltip_Content,
										'Tooltip_Content',
									),
									onMouseEnter: this._onMouseEnterReference,
									onMouseLeave: this._onMouseOverReference,
								}
							);
						});
					}}
				</Reference>
				{(this.props.forceHover || !this.props.useJsHover || this.state.isMouseOverReference) && (
					<Popper placement={this.props.position}>
						{({ ref, style, placement, arrowProps }) => (
							<div
								ref={ref}
								className={classnames(
									styles.Tooltip_Popper,
									'Tooltip_Popper',
									{
										[styles.Tooltip_Popper__DoPreventTransitionOut]: this.state.doPreventTransitionOut,
										[styles.Tooltip_Popper__ForceHover]: this.props.forceHover,
										[styles.Tooltip_Popper__IsTransitionLeaving]: this.state.isTransitionLeaving,
									},
									this.props.className,
								)}
								style={{...style, ...(this.props.style || {})}}
								data-placement={placement}
								onMouseEnter={this._onMouseEnterContentPopper}
								onMouseLeave={this._onMouseLeaveContentPopper}
							>
								<div
									className={styles.Tooltip_Popper_Inner}
									data-placement={placement}
									onTransitionEnd={this._onTransitionEndPopperInner}
								>
									<div
										className={classnames(
											styles.Tooltip_Popper_Content,
											'Tooltip_Popper_Content',
										)}
									>
										{this.props.content}
									</div>
									<div
										className={classnames(
											styles.Tooltip_Popper_Arrow,
											'Tooltip_Popper_Arrow',
										)}
										ref={arrowProps.ref}
										data-placement={placement}
									/>
								</div>
							</div>
						)}
					</Popper>
				)}
			</Manager>
		);
	}

}
