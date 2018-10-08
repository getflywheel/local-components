import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './ProgressBar.sass';

export default class ProgressBar extends Component {
	static propTypes = {
		progress: PropTypes.number,
		stripes: PropTypes.bool,
	};

	renderStripes () {
		return <div className={classnames(styles.ProgressBarStripes)} />;
	}

	renderRegularBar () {
		return <div
			className={classnames(
                styles.ProgressBarIndicator, {
					[styles.ProgressBar__ShowNumber]: this.props.showNumber }
				)
			}
			style={{ width: `${this.props.progress}%` }}
		/>;
	}

	render () {
		return (
			<div className={styles.ProgressBar}>
				{
					!this.props.stripes ? this.renderRegularBar() : this.renderStripes()
				}
			</div>
		);
	}
}
