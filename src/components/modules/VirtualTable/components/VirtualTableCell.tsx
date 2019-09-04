import * as React from 'react';
import IReactComponentProps from '../../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from '../VirtualTable.scss';
import { VirtualTableContext, IVirtualTableContext } from '../helpers/VirtualTableContext';
import { IVirtualTableCellRendererDataArgs, IVirtualTableProps, IVirtualTableOnChangeRowDataArgs } from '../VirtualTable';

export interface IVirtualTableCellProps extends IReactComponentProps {
	cellData: any;
	cellIndex: number;
	colKey: string | number;
	/** whether this cell is part of a header row or not */
	isHeader: boolean;
	/** */
	onChangeRowData: IVirtualTableProps['onChangeRowData'];
	/** the raw row data passed in and could be an array or object-based */
	rowData: any;
	/** the table row index for this cell */
	rowIndex: number;
}

export class VirtualTableCell extends React.Component<IVirtualTableCellProps> {

	// the default change event if none is passed in as a prop to VirtualTable
	protected _changeFn = (newValue: any): void => {
		this.props.rowData[this.props.colKey] = newValue;

		if (this.props.onChangeRowData) {
			const dataArgs: IVirtualTableOnChangeRowDataArgs = {
				colKey: this.props.colKey,
				isHeader: this.props.isHeader,
				rowData: this.props.rowData,
				rowIndex: this.props.rowIndex,
				value: newValue,
			};

			this.props.onChangeRowData(dataArgs);
		}
	};

	protected _renderCell = (context: IVirtualTableContext) => {
		// this is the default rendered cell contents (which can either be used or ignored by a custom renderer)
		const children: React.ReactNode = this.props.cellData;
		const cellRendererDataArgs: IVirtualTableCellRendererDataArgs = {
			cellData: this.props.cellData,
			colKey: this.props.colKey,
			changeFn: context.cellRendererChangeFn || this._changeFn,
			data: context.data,
			children,
			isHeader: this.props.isHeader,
			rowData: this.props.rowData,
			rowIndex: this.props.rowIndex,
		};
		const customCellRendererResult: ReturnType<IVirtualTableContext['cellRenderer']> = context.cellRenderer ? context.cellRenderer(cellRendererDataArgs) : null;

		return (
			<div
				className={classnames(
					styles.VirtualTable_Cell,
					this.props.className,
					context.cellClassName,
					context.columnClassNames[this.props.cellIndex],
				)}
				style={{
					// set explicit flex value if defined
					...((context.columnFlexWidths[this.props.cellIndex] && {flex: context.columnFlexWidths[this.props.cellIndex]})),
				}}
			>
				{customCellRendererResult !== null && customCellRendererResult !== undefined
					?
					customCellRendererResult
					:
					children
				}
			</div>
		);
	};

	render () {
		return (
			<VirtualTableContext.Consumer>
				{(context: IVirtualTableContext) => this._renderCell(context)}
			</VirtualTableContext.Consumer>
		);
	}

}
