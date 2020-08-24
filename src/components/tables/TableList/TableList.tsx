import * as React from 'react';
import classnames from 'classnames';
import * as styles from './TableList.sass';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';

interface IProps extends IReactComponentProps {
	form?: boolean;
	stripes?: boolean;
}

export class TableList extends React.Component<IProps> {
	render () {
		return (
			<ul
				className={classnames(
					styles.TableList,
					'TableList', // this also needs to be globally accessible so other component styles can reference it
					this.props.className,
					{
						[styles.Form]: this.props.form,
						[styles.TableList__NoStripes]: this.props.stripes === false,
					},
				)}
				id={this.props.id}
				style={this.props.style}
			>
				{this.props.children}
			</ul>
		);
	}
}

interface ITableListRowProps extends IReactComponentProps {
	form?: boolean;
	label?: string;
	selectable?: boolean;
}

export class TableListRow extends React.Component<ITableListRowProps> {
	render () {
		return (
			<li
				className={classnames(
					styles.TableListRow,
					'TableListRow', // this also needs to be globally accessible so other component styles can reference it
					this.props.className,
				)}
			>
				{this.props.label && <strong>{this.props.label}</strong>}

				<div>
					{
						this.props.selectable && typeof this.props.children !== 'object'
							?
							<input
								type="text"
								readOnly={true}
								value={this.props.children as string | string[] | number}
							/>
							: this.props.children
					}
				</div>
			</li>
		);
	}
}
