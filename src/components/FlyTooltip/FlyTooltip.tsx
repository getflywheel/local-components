import * as React from 'react';
import classnames from 'classnames';
import * as styles from './FlyTooltip.sass';
import ExclamationSVG from '../../svg/exclamation';
import IReactComponentProps from '../../common/structures/IReactComponentProps';

interface IProps extends IReactComponentProps {

	content?: React.ReactNode;
	exclamation?: boolean;
	forceHoverState?: boolean;
	hoverIntent?: boolean;
	position?: 'top' | 'bottom' | 'right';
	widthIsFluid: boolean;

}

export default class FlyTooltip extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		exclamation: false,
		forceHoverState: false,
		position: 'top',
		widthIsFluid: false,
	};

	render () {
		return (
			<div
				className={classnames(
					styles.FlyTooltip_Container,
					'FlyTooltip_Container', // this also needs to be globally accessible so other component styles can reference it
					{
						[styles.FlyTooltip_Container__HoverIntent]: this.props.hoverIntent,
						[styles.FlyTooltip_Container__ForceHoverState]: this.props.forceHoverState,
						[styles.FlyTooltip__WidthIsFluid]: this.props.widthIsFluid,
					},
					this.props.className,
				)}
			>
				<div
					className={classnames(
						styles.FlyTooltip,
						{
							[styles.FlyTooltip__PositionBottom]: this.props.position === 'bottom',
							[styles.FlyTooltip__PositionRight]: this.props.position === 'right',
							[styles.FlyTooltip__PositionTop]: this.props.position === 'top',
						},
						this.props.className,
					)}
					style={this.props.style}
				>
					{
						this.props.exclamation
						&&
						<span
							className={styles.FlyTooltip_Exclamation}
							key="exclamation"
						>
							<ExclamationSVG />
						</span>
					}

					{this.props.content}
				</div>
				{this.props.children}
			</div>
		);
	}

}
