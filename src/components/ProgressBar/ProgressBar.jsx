import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class ProgressBar extends Component {
	static propTypes = {
		progress: PropTypes.number,
		stripes: PropTypes.bool,
	};

	renderStripes () {
		return <div className={classnames('ProgressBarStripes')} />;
	}

	renderRegularBar () {
		return <div className={classnames('ProgressBarIndicator', { '--ShowNumber': this.props.showNumber })} style={{ width: `${this.props.progress}%` }} />;
	}

	render () {
		return (
			<div className="ProgressBar">
				{
					!this.props.stripes ? this.renderRegularBar() : this.renderStripes()
				}
			</div>
		);
	}
}
