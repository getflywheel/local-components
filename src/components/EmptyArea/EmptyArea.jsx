import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class EmptyArea extends Component {
	static propTypes = {
		border: PropTypes.bool,
		FadeIn: PropTypes.bool,
	};

	render () {
		return (
			<div className={classnames({
				'EmptyArea': true,
				'--NoBorder': this.props.border === false,
				'--FadeIn': this.props.FadeIn,
			})}>
				{this.props.children}
			</div>
		);
	}
}
