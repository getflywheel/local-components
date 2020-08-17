import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import * as styles from './SiteInfoInnerPane.sass';

export default function SiteInfoInnerPane(props: IReactComponentProps) {
	const { children, ...propsWithoutChildren } = props;

	return (
		<div
			className={styles.SiteInfoInnerPane}
			{...propsWithoutChildren}
		>
			{children}
		</div>
	);
}
