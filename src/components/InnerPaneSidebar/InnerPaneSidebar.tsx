import React from 'react';
import classnames from 'classnames';
import styles from './InnerPaneSidebar.sass';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';

interface PropsI extends LocalComponentPropsI {

	title: string,

}

export function InnerPaneSidebar (props: LocalComponentPropsI) {
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

export function InnerPaneSidebarAddNew (props: LocalComponentPropsI) {
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

export function InnerPaneSidebarContent (props: LocalComponentPropsI) {
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

export function InnerPaneSidebarContentItem (props: LocalComponentPropsI) {
    return (
    	<div
			className={classnames(
				styles.InnerPaneSidebarContentItem,
				props.className,
			)}>
			{props.children}
		</div>
	);
}
