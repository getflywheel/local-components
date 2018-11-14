import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Divider.sass';

export default class Divider extends Component {

	static propTypes = {
	};

	static defaultProps = {
	};

	render() {

		return (
			<div
				className={classnames(
					styles.Divider,
					this.props.className,
				)}
				onClick={this.props.onClick}
			/>
		);
	}

}
