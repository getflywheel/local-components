import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CheckSVG from '../../svg/checkmark--big.svg';
import styles from './FlyLargeConfirm.sass';

export default class FlyLargeConfirm extends Component {

	static propTypes = {
		bodyText: PropTypes.any,
		buttonText: PropTypes.string,
		onConfirm: PropTypes.func,
	};

	constructor (props) {
		super(props);

		this.state = {
			confirmed: false,
		};

		this.onConfirm = this.onConfirm.bind(this);
	}

	onConfirm () {
		this.setState({ confirmed: true });

		if (this.props.onConfirm) {
			this.props.onConfirm();
		}
	}

	render () {

		return <div
			className={classnames(
				styles.FlyLargeConfirm, {
					[styles.FlyLargeConfirm__Confirmed]: this.state.confirmed
				}
			)}
		>
			<p>{this.props.bodyText}</p>

			<button
				className="__Pill"
				onClick={this.onConfirm}
				disabled={this.state.confirmed}
			>
				{this.state.confirmed && <CheckSVG />}
				{this.state.confirmed ? 'Confirmed' : this.props.buttonText}
			</button>
		</div>;

	}

}
