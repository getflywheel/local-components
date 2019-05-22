import * as React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './Tooltip.scss';
import { Manager, Reference, Popper } from 'react-popper';

interface IProps extends IReactComponentProps {
	content?: React.ReactElement;
	forceHover?: boolean;
	position?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
}

export class Tooltip extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		forceHover: false,
		position: 'top',
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
								}
							);
						});
					}}
				</Reference>
				<Popper placement={this.props.position}>
					{({ ref, style, placement, arrowProps }) => (
						<div
							ref={ref}
							className={classnames(
								styles.Tooltip_Popper,
								'Tooltip_Popper',
								{
									[styles.Tooltip_Popper__ForceHover]: this.props.forceHover,
								}
							)}
							style={style}
							data-placement={placement}
						>
							<div
								className={styles.Tooltip_Popper_Inner}
								data-placement={placement}
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
									// style={arrowProps.style}
									data-placement={placement}
								/>
							</div>
						</div>
					)}
				</Popper>
			</Manager>
		);
	}

}
