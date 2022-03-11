import * as React from 'react';
import classnames from 'classnames';
import * as styles from './FlyTooltip.scss';
import ExclamationSVG from '../../../svg/exclamation.svg';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';

interface IProps extends IReactComponentProps {
	content?: React.ReactNode;
	exclamation?: boolean;
	forceShowState?: boolean;
	hoverIntent?: boolean;
	position?: 'top' | 'bottom' | 'right' | 'center';
	width: '300' | 'auto' | 'max-content';
}

export default class FlyTooltip extends React.Component<IProps> {
	static defaultProps: Partial<IProps> = {
		exclamation: false,
		forceShowState: false,
		position: 'top',
		width: '300',
	};

	render () {
		return (
			<div
				className={classnames(
					styles.FlyTooltip_Container,
					'FlyTooltip_Container', // this also needs to be globally accessible so other component styles can reference it
					{
						[styles.FlyTooltip_Container__HoverIntent]: this.props.hoverIntent,
						[styles.FlyTooltip_Container__ForceShowState]: this.props.forceShowState,
					},
				)}
			>
				<div
					className={classnames(
						styles.FlyTooltip,
						{
							[styles.FlyTooltip__PositionBottom]: this.props.position === 'bottom',
							[styles.FlyTooltip__PositionCenter]: this.props.position === 'center',
							[styles.FlyTooltip__PositionRight]: this.props.position === 'right',
							[styles.FlyTooltip__PositionTop]: this.props.position === 'top',
							[styles.FlyTooltip__WidthAuto]: this.props.width === 'auto',
							[styles.FlyTooltip__WidthMaxContent]: this.props.width === 'max-content',
						},
						this.props.className,
					)}
					id={this.props.id}
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
