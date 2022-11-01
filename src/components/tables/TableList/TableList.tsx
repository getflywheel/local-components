import * as React from 'react';
import classnames from 'classnames';
import styles from './TableList.sass';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';

interface IProps extends IReactComponentProps {
	form?: boolean;
	stripes?: boolean;
}

export const TableList = (props: IProps) => {
	const { className, form, stripes, children, ...otherProps } = props;
	return (
		<ul
			className={classnames(
				styles.TableList,
				'TableList', // this also needs to be globally accessible so other component styles can reference it
				className,
				{
					[styles.Form]: form,
					[styles.TableList__NoStripes]: stripes === false,
				}
			)}
			{...otherProps}
		>
			{children}
		</ul>
	);
};

interface ITableListRowProps extends IReactComponentProps {
	label?: string;
	selectable?: boolean;
	alignMiddle?: boolean;
}

export const TableListRow = (props: ITableListRowProps) => {
	const { className, label, selectable, children, alignMiddle, style } = props;

	return (
		<li
			className={classnames(
				styles.TableListRow,
				'TableListRow', // this also needs to be globally accessible so other component styles can reference it
				className
			)}
			style={style}
		>
			{label && <strong>{label}</strong>}

			<div className={alignMiddle ? styles.TableListRow__AlignMiddle : ''}>
				{selectable && typeof children !== 'object' ? (
					<input type="text" readOnly value={children as string | string[] | number} />
				) : (
					children
				)}
			</div>
		</li>
	);
};
