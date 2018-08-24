import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class LoadingIndicator extends Component {
	static propTypes = {
		big: PropTypes.bool,
		color: PropTypes.oneOf(['Green', 'Gray']),
	};

	static defaultProps = {
		big: false,
		color: 'Green',
	};

	render () {
		return (
			<div className={classnames('LoadingIndicator', {
				'--Gray': this.props.color === 'Gray',
				'--Big': this.props.big,
			})}>
				<div className="LoadingIndicator_Bounce1" />
				<div className="LoadingIndicator_Bounce2" />
				{this.props.big && <div className="LoadingIndicator_Bounce3" />}
			</div>
		);
	}
}
