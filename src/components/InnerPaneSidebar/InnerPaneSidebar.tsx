import React from 'react';
import classnames from 'classnames';
import styles from './InnerPaneSidebar.sass';
import IReactComponentProps from '../../common/structures/IReactComponentProps';

interface IProps extends IReactComponentProps {

	title: string;

}

export function InnerPaneSidebar (props: IReactComponentProps) {
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

export function InnerPaneSidebarHeader (props: IProps) {
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

export function InnerPaneSidebarAddNew (props: IReactComponentProps) {
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

export function InnerPaneSidebarContent (props: IReactComponentProps) {
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

export function InnerPaneSidebarContentItem (props: IReactComponentProps) {
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
