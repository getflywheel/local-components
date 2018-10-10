import React, { Component } from 'react';
import classnames from 'classnames';
import CompleteSVG from '../../svg/complete.svg';
import PropTypes from 'prop-types';
import styles from './Stepper.sass';

export class Stepper extends Component {
	render () {
		return (
			<div
				className={classnames(
					styles.Stepper, {
						[styles.__Steps__2]: this.props.children.length === 2,
						[styles.__Steps__3]: this.props.children.length === 3,
					}
				)}>
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
			<div
				className={classnames(
					styles.Step, {
						[styles.Step__Done]: this.props.done,
						[styles.Step__Active]: this.props.active,
						[styles.Step__Disabled]: this.props.disabled,
					}
				)}
			>
				{
					!this.props.done ? <span>{this.props.number}</span> : <CompleteSVG />
				}
				{this.props.children}
			</div>
		);
	}
}
