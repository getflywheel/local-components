import React from 'react';
import ReactComponentPropsI from '../../common/structures/ReactComponentPropsI';
import styles from './SiteInfoInnerPane.sass';

export default class SiteInfoInnerPane extends React.Component<ReactComponentPropsI> {
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
