import * as React from 'react';
import { VirtualList } from '../VirtualList/VirtualList';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import { VirtualTableRow } from './components/VirtualTableRow';
import classnames from 'classnames';
import styles from './VirtualTable.scss';
import { VirtualTableHelper } from './helpers/VirtualTableHelper';
import { IVirtualTableContext, VirtualTableContext } from './helpers/VirtualTableContext';
import {IVirtualListProps} from "../VirtualList/VirtualList";

export interface VirtualTableCSSProperties extends React.CSSProperties {
	'--VirtualTable_RowHeight': string;
}

export type GenericObject = { [key: string]: any };

export interface IVirtualTableCellRendererDataArgs {
	cellData: any;
	changeFn: IVirtualTableProps['cellRendererChangeFn'];
	/** the default rendered cell contents that can either be rendered within a custom cell renderer or ignored all together */
	children: React.ReactNode;
	colKey: string | number;
	data: IVirtualTableContext['data'] | any;
	extraData?: GenericObject;
	isHeader: boolean;
	rowData: VirtualTableDataType | any;
	rowIndex: number;
}

export interface IVirtualTableRowRendererDataArgs {
	/** the default rendered cell contents that can either be rendered within a custom row renderer or ignored all together */
	children: React.ReactNode;
	data: IVirtualTableContext['data'] | any;
	extraData?: GenericObject;
	isHeader: boolean;
	rowData: VirtualTableDataType | any;
	rowIndex: number;
}

export interface IVirtualTableOnChangeRowDataArgs {
	colKey: string | number;
	extraData?: GenericObject;
	isHeader: boolean;
	rowData: VirtualTableDataType | any;
	rowIndex: number;
	value: any;
}

export type VirtualTableDataType = {[key: string]: any} | any[];
export type VirtualTableHeaderObjectType = {key: string | number, value: any, flex?: string, className?: string};
export type VirtualTableHeaderType = string | VirtualTableHeaderObjectType;
export type VirtualTableCellRenderer = (dataArgs: IVirtualTableCellRendererDataArgs) => React.ReactNode | null | undefined;
export type VirtualTableRowRenderer = (dataArgs: IVirtualTableRowRendererDataArgs) => React.ReactNode | null | undefined;

export interface IVirtualTableProps extends IReactComponentProps {

	cellClassName: string;
	/** custom cell renderer (return an element to custom render, false to bypass and use default text cell) */
	cellRenderer?: VirtualTableCellRenderer;
	/** the function called when a table input is changed (if no function is defined, then the default changeFn will be used) */
	cellRendererChangeFn?: (newValue: any) => void;
	/** className for the container element */
	containerClassName?: string;
	/**
	 * Object or array data used to populate rows and their cells.
	 * e.g. data={[[1, 'one', true], [2, 'two', true]]} // array-based
	 * e.g. data={[{index: 1, name: 'one', selected: true}, {index: 2, name: 'two', selected: true}]} // object-based
	 */
	data: VirtualTableDataType[] | null | undefined;
	/** */
	extraData?: GenericObject;
	/**
	 * header data is the order in which is will be displayed
	 * the header data much match the same type as the data (either array or object-based)
	 * note: only the columns defined in this header data will result in drawn columns (even if array-based an the data has 3 items but this header data only has 2)
	 */
	headers?: VirtualTableHeaderType[];
	/** capitalization options for the header */
	headersCapitalize?: true | 'none' | 'lower' | 'upper';
	/** header's font weight */
	headersWeight?: 300 | 400 | 500 | 700 | 900;
	/** */
	rowKeyPropName: string;
	/** */
	onChangeRowData: (dataArgs: IVirtualTableOnChangeRowDataArgs) => void;
	/** class to be applied to every row */
	rowClassName: string;
	/** Row height as size values or explicit number of pixels */
	rowHeightSize?: 's' | 'm' | 'l' | number;
	/**
	 * Row header height (using size values).
	 * Note: the 'auto' setting matches that of 'rowHeightSize' resulting in the header and row heights being identical.
	 */
	rowHeaderHeightSize?: 'auto' | 's' | 'm' | 'l';
	/** custom row renderer (return an element to custom render, false to bypass and use default) */
	rowRenderer?: VirtualTableRowRenderer;
	/** Whether to show alternating row stripes. */
	striped?: boolean;
	/** Overscan value to be passed into VirtualList */
	overscan?: IVirtualListProps['overscan'];
}

export interface IVirtualTableState {
	rowHeight: number;
}

export class VirtualTable extends React.Component<IVirtualTableProps, IVirtualTableState> {
	static defaultProps: Partial<IVirtualTableProps> = {
		headersCapitalize: 'none',
		headersWeight: 700,
		rowHeightSize: 'l',
		rowHeaderHeightSize: 'auto',
		striped: true,
		extraData: {},
	};

	protected _helper: VirtualTableHelper = new VirtualTableHelper();
	protected _tableContainerRef = React.createRef<HTMLTableElement>();

	constructor (props: IVirtualTableProps) {
		super(props);

		this.state = {
			rowHeight: 20,
		};
	}

	componentDidMount (): void {
		this._onDidMountOrUpdate();
	}

	componentDidUpdate () {
		this._onDidMountOrUpdate();
	}

	protected _isRowHeightSizeAnExplicitNumber () {
		return typeof this.props.rowHeightSize === 'number';
	}

	protected async _onDidMountOrUpdate () {
		const rowHeight: number | null = this._isRowHeightSizeAnExplicitNumber()
			? this.props.rowHeightSize as number
			: await this._helper.getRowHeight(this._tableContainerRef);

		if (rowHeight !== null && rowHeight !== this.state.rowHeight) {
			this.setState(() => ({
				rowHeight,
			}));
		}
	}

	protected _rowRenderer = (rowData: any, rowIndex: number, customRendererStyles: {transform: string}, extraData: GenericObject) => {
		const key: string = this.props.rowKeyPropName ? rowData[this.props.rowKeyPropName] : `${rowIndex}.${JSON.stringify(rowData)}`;

		return (
			<VirtualTableRow
				className={this.props.rowClassName}
				extraData={extraData}
				isHeader={extraData.isHeader}
				key={key}
				onChangeRowData={this.props.onChangeRowData}
				rowData={rowData}
				rowDataOrdered={this._helper.getOrderedData(rowData, this.props.headers, this._helper.getDataCalculationsMemoized(this.props).dataKeyToColIndexLookup)}
				rowIndex={rowIndex}
			/>
		);
	};

	protected _tableBodyRenderer = (children: React.ReactNode) => {
		return (
			<div>
				{children}
			</div>
		);
	};

	protected _renderTable () {
		return (
			<div
				className={classnames(
					styles.VirtualTable,
					'VirtualTable',
					{
						[styles.VirtualTable__RowHeaderCapitalize]: this.props.headersCapitalize === true,
						[styles.VirtualTable__RowHeaderCapitalizeLower]: this.props.headersCapitalize === 'lower',
						[styles.VirtualTable__RowHeaderCapitalizeUpper]: this.props.headersCapitalize === 'upper',
						[styles.VirtualTable__RowHeaderWeight300]: this.props.headersWeight === 300,
						[styles.VirtualTable__RowHeaderWeight400]: this.props.headersWeight === 400,
						[styles.VirtualTable__RowHeaderWeight500]: this.props.headersWeight === 500,
						[styles.VirtualTable__RowHeaderWeight700]: this.props.headersWeight === 700,
						[styles.VirtualTable__RowHeaderWeight900]: this.props.headersWeight === 900,
						[styles.VirtualTable__RowHeightS]: this.props.rowHeightSize === 's',
						[styles.VirtualTable__RowHeightM]: this.props.rowHeightSize === 'm',
						[styles.VirtualTable__RowHeaderHeightS]: this.props.rowHeaderHeightSize === 's',
						[styles.VirtualTable__RowHeaderHeightM]: this.props.rowHeaderHeightSize === 'm',
						[styles.VirtualTable__RowHeaderHeightL]: this.props.rowHeaderHeightSize === 'l',
					},
					this.props.className,
				)}
				style={{
					...(this._isRowHeightSizeAnExplicitNumber() && {
						['--VirtualTable_RowHeight']: `${this.props.rowHeightSize}px`,
					}) as VirtualTableCSSProperties,
					...this.props.style,
				}}
				id={this.props.id}
			>
				<VirtualTableContext.Provider
					value={{
						cellClassName: this.props.cellClassName,
						cellRenderer: this.props.cellRenderer,
						cellRendererChangeFn: this.props.cellRendererChangeFn,
						columnClassNames: this._helper.getDataCalculationsMemoized(this.props).columnClassNames,
						columnFlexWidths: this._helper.getDataCalculationsMemoized(this.props).columnFlexWidths,
						data: this.props.data,
						dataKeysOrderedColumns: this._helper.getDataCalculationsMemoized(this.props).dataKeysOrderedColumns,
						rowRenderer: this.props.rowRenderer,
					}}
				>
					{this._helper.getDataCalculationsMemoized(this.props).headersNormalized && (
						<div className={classnames(
							styles.VirtualTable_Header,
							'VirtualTable_Header',
						)}>
							{this._rowRenderer(this._helper.getDataCalculationsMemoized(this.props).headersNormalized, -1, {} as any, {...this.props.extraData, isHeader: true})}
						</div>
					)}
					<VirtualList
						data={this.props.data}
						disableResizeObserver={false}
						disableVirtualization={false}
						itemHeight={this.state.rowHeight}
						itemRenderer={this._rowRenderer}
						overscan={this.props.overscan}
						striped={this.props.striped}
						wrapperRenderer={this._tableBodyRenderer}
						itemRendererExtraData={this.props.extraData}
					/>
				</VirtualTableContext.Provider>
			</div>
		);
	}

	render () {
		return (
			<div
				className={classnames(
					styles.VirtualTable_Container,
					'VirtualTable_Container',
					this.props.containerClassName,
				)}
				style={this.props.style}
				ref={this._tableContainerRef}
			>
				{this._renderTable()}
			</div>
		);
	}
}
