import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Exclamation from '../../svg/exclamation.svg';
import styles from './FlyTooltip.sass';

export default class FlyTooltip extends Component {

	static propTypes = {
		content: PropTypes.node,
		hoverIntent: PropTypes.bool,
		position: PropTypes.oneOf(['top', 'bottom', 'right']),
		exclamation: PropTypes.bool,
	};

	static defaultProps = {
		position: 'top',
		exclamation: false,
	};

	render () {
		return (
			<div
				className={classnames(
					styles.FlyTooltip_Container,
					'FlyTooltip_Container', // this also needs to be globally accessible so other component styles can reference it
					{
						[styles.FlyTooltip_Container__HoverIntent]: this.props.hoverIntent,
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
						this.props.exclamation &&
						<span
							className={styles.FlyTooltip_Exclamation}
							key="exclamation"
						>
							<Exclamation />
						</span>
					}

					{this.props.content}
				</div>
				{this.props.children}
			</div>
		);
	}

}
