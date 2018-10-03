import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Exclamation from '../../svg/exclamation.svg';

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
			<div className={classnames('FlyTooltip--Container', { 'FlyTooltip--Container--HoverIntent': this.props.hoverIntent }, this.props.className)}>
				<div className={classnames('FlyTooltip', `FlyTooltip--${this.props.position}`, this.props.className)} style={this.props.style}>
					{
						this.props.exclamation &&
						<span className="FlyTooltip--Exclamation" key="exclamation"><Exclamation /></span>
					}

					{this.props.content}
				</div>
				{this.props.children}
			</div>
		);
	}

}
