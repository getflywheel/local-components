import React from 'react';
import classnames from 'classnames';
import styles from './FlyTooltip.sass';
import Exclamation from '../../svg/exclamation.svg';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';

interface PropsI extends LocalComponentPropsI {

	content?: React.ReactNode;
	exclamation?: boolean;
	forceHoverState?: boolean;
	hoverIntent?: boolean;
	position?: 'top' | 'bottom' | 'right';

}

export default class FlyTooltip extends React.Component<PropsI> {

	static defaultProps: Partial<PropsI> = {
		exclamation: false,
		forceHoverState: false,
		position: 'top',
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
							<svg>{Exclamation}</svg>
						</span>
					}

					{this.props.content}
				</div>
				{this.props.children}
			</div>
		);
	}

}
