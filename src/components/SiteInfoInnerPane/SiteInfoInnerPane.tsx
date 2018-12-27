import React from 'react';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';
import styles from './SiteInfoInnerPane.sass';

export default class SiteInfoInnerPane extends React.Component<LocalComponentPropsI> {
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
