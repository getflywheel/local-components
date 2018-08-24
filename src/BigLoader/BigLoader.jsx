import React, { Component } from 'react';
import LoadingIndicator from '../LoadingIndicator';
import PropTypes from 'prop-types';

export default class BigLoader extends Component {
	static propTypes = {
		message: PropTypes.string,
	};

	render () {
		return (
			<div className="BigLoader MainPanel" style={this.props.style}>
				<LoadingIndicator big={true} />
				{
					this.props.message && <h3>{this.props.message}</h3>
				}
			</div>
		);
	}
}
