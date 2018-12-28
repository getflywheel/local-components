import React from 'react';
import classnames from 'classnames';
import styles from './InnerPaneSidebar.sass';
import ReactComponentPropsI from '../../common/structures/ReactComponentPropsI';

interface PropsI extends ReactComponentPropsI {

	title: string;

}

export function InnerPaneSidebar (props: ReactComponentPropsI) {
	return (
		<div
			className={classnames(
				styles.InnerPaneSidebar,
				props.className,
			)}
		>
			{props.children}
		</div>
	);
}

export function InnerPaneSidebarHeader (props: PropsI) {
	return (
		<div
			className={classnames(
				styles.InnerPaneSidebarHeader,
				props.className,
			)}
		>
			<h3>{props.title}</h3>

			{
				props.children
					?
					<div className={classnames(styles.InnerPaneSidebarHeaderButtons)}>
						{props.children}
					</div>
					: ''
			}
		</div>
	);
}

export function InnerPaneSidebarAddNew (props: ReactComponentPropsI) {
	return (
		<div
			className={classnames(
				styles.InnerPaneSidebarAddNew,
				props.className,
			)}
		>
			{props.children}
		</div>
	);
}

export function InnerPaneSidebarContent (props: ReactComponentPropsI) {
	return (
		<div
			className={classnames(
				styles.InnerPaneSidebarContent,
				props.className,
			)}
		>
			{props.children}
		</div>
	);
}

export function InnerPaneSidebarContentItem (props: ReactComponentPropsI) {
	return (
		<div
			className={classnames(
				styles.InnerPaneSidebarContentItem,
				props.className,
			)}
		>
			{props.children}
		</div>
	);
}
