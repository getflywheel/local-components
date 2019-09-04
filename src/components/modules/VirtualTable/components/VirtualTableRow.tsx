import * as React from 'react';
import * as styles from '../VirtualTable.scss';
import classnames from 'classnames';
import IReactComponentProps from '../../../../common/structures/IReactComponentProps';
import { VirtualTableCell } from './VirtualTableCell';
import { VirtualTableContext, IVirtualTableContext } from '../helpers/VirtualTableContext';
import { IVirtualTableProps, IVirtualTableRowRendererDataArgs, VirtualTableDataType } from '../VirtualTable';

export interface IVirtualTableRowProps extends IReactComponentProps {
	/** whether this is a header row or not */
	isHeader: boolean;
	/** */
	onChangeRowData: IVirtualTableProps['onChangeRowData'];
	/** the raw row data passed in and could be an array or object-based */
	rowData: VirtualTableDataType;
	/** an column-ordered list of the 'rowData' prop data ready to be rendered as is */
	rowDataOrdered: any[];
	/** the overall table row index */
	rowIndex: number;
}

export class VirtualTableRow extends React.Component<IVirtualTableRowProps> {

	protected _renderRow (context: IVirtualTableContext) {
		// this is the default rendered cell contents (which can either be used or ignored by a custom renderer)
		const children: React.ReactNode = this.props.rowDataOrdered && this.props.rowDataOrdered.map((cellData: any, colIndex: number) => (
			<VirtualTableCell
				cellData={cellData}
				cellIndex={colIndex}
				colKey={context.dataKeysOrderedColumns![colIndex]}
				isHeader={this.props.isHeader}
				key={`${colIndex}.${JSON.stringify(cellData)}`}
				onChangeRowData={this.props.onChangeRowData}
				rowData={this.props.rowData}
				rowIndex={this.props.rowIndex}
			/>
		));
		const rowRendererDataArgs: IVirtualTableRowRendererDataArgs = {
			children,
			data: context.data,
			isHeader: this.props.isHeader,
			rowData: this.props.rowData,
			rowIndex: this.props.rowIndex,
		};
		const customRowRendererResult: ReturnType<IVirtualTableContext['rowRenderer']> = context.rowRenderer ? context.rowRenderer(rowRendererDataArgs) : null;

		return (
			<div
				className={classnames(
					styles.VirtualTable_Row,
					this.props.className,
				)}
				style={this.props.style}
			>
				{customRowRendererResult !== null && customRowRendererResult !== undefined
					?
					customRowRendererResult
					:
					children
				}
			</div>
		);
	}

	render () {
		return (
			<VirtualTableContext.Consumer>
				{(context: IVirtualTableContext) => this._renderRow(context)}
			</VirtualTableContext.Consumer>
		);
	}

}
