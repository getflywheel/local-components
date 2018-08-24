import React, { Component } from 'react';
import styles from './SiteInfoInnerPane.sass';

export default class SiteInfoInnerPane extends Component {
	render () {
		const propsWithoutChildren = { ...this.props };
		delete propsWithoutChildren.children;

		return (
			<div
				className={styles.SiteInfoInnerPane}
				{...propsWithoutChildren}
			>
				{this.props.children}
			</div>
		);
	}
}
