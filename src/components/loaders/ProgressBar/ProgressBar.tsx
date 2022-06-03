import * as React from 'react';
import classnames from 'classnames';
import styles from './ProgressBar.sass';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';

interface IProps {

	progress?: number;
	showNumber?: number;
	stripes?: boolean;

}

export default class ProgressBar extends React.Component<IProps & IReactComponentProps> {

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
						[styles.ProgressBar__ShowNumber]: this.props.showNumber,
					},
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
					this.props.className
				)}
				id={this.props.id}
				style={this.props.style}
			>
				{!this.props.stripes ? this.renderRegularBar() : this.renderStripes()}
			</div>
		);
	}

}
