import * as React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './Tooltip.scss';
import { Manager, Reference, Popper } from 'react-popper';

interface IProps extends IReactComponentProps {
	content?: React.ReactElement;
	forceHover?: boolean;
	position?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
	useJsHover?: boolean;
}

interface IState {
	isHover: boolean;
	isLeavingTransition: boolean;
}

export class Tooltip extends React.Component<IProps, IState> {

	static defaultProps: Partial<IProps> = {
		forceHover: false,
		position: 'top',
		useJsHover: false,
	};

	constructor (props: IReactComponentProps) {
		super(props);

		this.state = {
			isHover: false,
			isLeavingTransition: false,
		};
	}

	protected _onMouseEnterContentReference = () => {
		this.setState({
			isHover: true,
		});
	};

	protected _onMouseLeaveContentReference = () => {
		this.setState({
			isLeavingTransition: true,
			isHover: false,
		});
	};

	protected _onTransitionEndPopperInner = () => {
		this.setState({
			isLeavingTransition: false,
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
									onMouseEnter: this._onMouseEnterContentReference,
									onMouseLeave: this._onMouseLeaveContentReference,
								}
							);
						});
					}}
				</Reference>
				{(this.props.forceHover || !this.props.useJsHover || this.state.isHover) && (
					<Popper placement={this.props.position}>
						{({ ref, style, placement, arrowProps }) => (
							<div
								ref={ref}
								className={classnames(
									styles.Tooltip_Popper,
									'Tooltip_Popper',
									{
										[styles.Tooltip_Popper__ForceHover]: this.props.forceHover,
										[styles.Tooltip_Popper__TransitionLeaving]: this.state.isLeavingTransition,
									},
									this.props.className,
								)}
								style={{...style, ...(this.props.style || {})}}
								data-placement={placement}
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
