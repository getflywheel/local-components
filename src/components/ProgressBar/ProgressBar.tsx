import React from 'react';
import classnames from 'classnames';
import styles from './ProgressBar.sass';
import ReactComponentPropsI from '../../common/structures/ReactComponentPropsI';

interface PropsI {

	progress?: number;
	showNumber?: number;
	stripes?: boolean;

}

export default class ProgressBar extends React.Component<PropsI & ReactComponentPropsI> {

	renderStripes () {
		return (
			<div className={classnames(styles.ProgressBarStripes)} />
		);
	}

	renderRegularBar () {
		return (
			<div
				className={classnames(
					styles.ProgressBarIndicator,
					{
						[styles.ProgressBar__ShowNumber]: this.props.showNumber
					}
				)}
				style={{ width: `${this.props.progress}%` }}
			/>
		);
	}

	render () {
		return (
			<div
				className={classnames(
					styles.ProgressBar,
					'ProgressBar', // this also needs to be globally accessible so other component styles can reference it
				)}
			>
				{!this.props.stripes ? this.renderRegularBar() : this.renderStripes()}
			</div>
		);
	}

}
