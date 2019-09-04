import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import * as styles from './SiteInfoInnerPane.sass';

export default class SiteInfoInnerPane extends React.Component<IReactComponentProps> {
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
