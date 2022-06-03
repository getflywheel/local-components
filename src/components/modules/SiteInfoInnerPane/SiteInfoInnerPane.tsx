import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import styles from './SiteInfoInnerPane.sass';

export default function SiteInfoInnerPane(props: IReactComponentProps) {
	const {
		children,
		id,
		style,
		...propsWithoutChildren
	} = props;

	return (
		<div
			className={styles.SiteInfoInnerPane}
			id={id}
			style={style}
			{...propsWithoutChildren}
		>
			{children}
		</div>
	);
}
