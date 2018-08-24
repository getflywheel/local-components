import React, { Component } from 'react';
import classnames from 'classnames';
import CompleteSVG from '../../svg/complete.svg';
import PropTypes from 'prop-types';

export class Stepper extends Component {
	render () {
		return (
			<div className={classnames('Stepper', `--Steps__${this.props.children.length}`)}>
				{this.props.children}
			</div>
		);
	}
}

export class Step extends Component {
	static propTypes = {
		number: PropTypes.number,
		done: PropTypes.bool,
		active: PropTypes.bool,
	};

	render () {
		return (
			<div className={classnames('Step', {
				'--Done': this.props.done,
				'--Active': this.props.active,
				'--Disabled': this.props.disabled,
			})}>
				{
					!this.props.done ? <span>{this.props.number}</span> : <CompleteSVG />
				}
				{this.props.children}
			</div>
		);
	}
}
