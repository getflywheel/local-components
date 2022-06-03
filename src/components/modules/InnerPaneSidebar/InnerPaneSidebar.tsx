import * as React from 'react';
import styles from './InnerPaneSidebar.sass';
import classnames from 'classnames';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import { Title } from '../../text/Title/Title';

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
			style={props.style}
			id={props.id}
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
			<Title size="m">{props.title}</Title>
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
