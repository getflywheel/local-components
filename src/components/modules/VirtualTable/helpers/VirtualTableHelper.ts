/* eslint-disable class-methods-use-this */
import * as React from 'react';
import memoizeOne from 'memoize-one';
import * as styles from '../VirtualTable.scss';
import { IVirtualTableProps, VirtualTableDataType, VirtualTableHeaderObjectType } from '../VirtualTable';
import { IVirtualTableRowProps } from '../components/VirtualTableRow';

export interface VirtualTableHelperCalculations {
	columnClassNames: VirtualTableHeaderObjectType['className'][];
	columnFlexWidths: string[];
	dataKeysOrderedColumns: (string | number)[];
	dataKeyToColIndexLookup: Map<string | number, number>;
	headersNormalized: VirtualTableDataType | undefined;
}

export class VirtualTableHelper {
	public getRowHeight(ref: React.RefObject<HTMLTableElement>): Promise<number | null> {
		return new Promise((resolve) => {
			const rowHeight: number | null = this._getRowHeight(ref);

			// if value is found, then return it
			if (rowHeight !== null) {
				resolve(rowHeight);
			}
			// else try once more after delay
			// note: for some reason, css variables are not always immediately available after an element renders
			else {
				setTimeout(() => {
					resolve(this._getRowHeight(ref));
				});
			}
		});
	}

	public _getRowHeight(ref: React.RefObject<HTMLTableElement>): number | null {
		if (ref.current) {
			// get table descendent for this specific instance of the component
			// note: can't set ref directly on table because it isn't available in time for 'onDid...' events
			const tableEl = ref.current.querySelector(`.${styles.VirtualTable}`);

			if (tableEl) {
				const cssRowHeight: number = parseInt(
					getComputedStyle(tableEl).getPropertyValue(styles.CSSVARNAME_ROWHEIGHT)
				);

				if (isNaN(cssRowHeight)) {
					return null;
				}

				return cssRowHeight;
			}

			// todo - crum: must throw error
		} else {
			// todo - crum: must throw error
		}

		return null;
	}

	public getDataCalculationsMemoized = memoizeOne((props: IVirtualTableProps): VirtualTableHelperCalculations => {
		const headersNormalized = VirtualTableHelper.normalizeHeadersMemoized(props.headers);
		const dataKeyToColIndexLookup = VirtualTableHelper.createColumnIndexLookupMemoized(
			props.data,
			headersNormalized
		);
		const dataKeysOrderedColumns = Array.from(dataKeyToColIndexLookup.keys() as any as (string | number)[]);
		const { columnFlexWidths, columnClassNames } = VirtualTableHelper.getColumnFlexWidthsMemoized(
			props.headers,
			dataKeysOrderedColumns
		);

		return {
			columnFlexWidths,
			dataKeysOrderedColumns,
			dataKeyToColIndexLookup,
			headersNormalized,
			columnClassNames,
		};
	});

	public static getColumnFlexWidthsMemoized = memoizeOne(
		(
			headers: IVirtualTableProps['headers'],
			dataKeysOrderedColumns: VirtualTableHelperCalculations['dataKeysOrderedColumns']
		) => {
			if (!headers || (headers.length && typeof headers[0] === 'string')) {
				return { columnClassNames: [], columnFlexWidths: [] };
			}

			const columnClassNames: string[] = [];
			const columnFlexWidths: string[] = [];
			let header: VirtualTableHeaderObjectType;
			let key: number;

			for (const index in headers) {
				header = headers[index] as VirtualTableHeaderObjectType;
				key = dataKeysOrderedColumns.indexOf(header.key);

				// if flex is defined for the header, the key is valid, and the key exists as a value in the list of ordered column keys
				if (header.flex && header.key && dataKeysOrderedColumns.includes(header.key)) {
					// set flex string value to the ordered index so it matches the column order
					columnFlexWidths[key] = header.flex;
				}

				// if flex is defined for the header, the key is valid, and the key exists as a value in the list of ordered column keys
				if (header.className && header.className && dataKeysOrderedColumns.includes(header.key)) {
					// set flex string value to the ordered index so it matches the column order
					columnClassNames[key] = header.className || '';
				}
			}

			return { columnFlexWidths, columnClassNames };
		}
	);

	public static normalizeHeadersMemoized = memoizeOne(
		(headers: IVirtualTableProps['headers']): VirtualTableDataType | undefined => {
			// if undefined or array of header strings
			if (!headers || (headers.length && typeof headers[0] === 'string')) {
				return headers;
			}

			const headersNormalized: VirtualTableHelperCalculations['headersNormalized'] = (headers || []).reduce(
				(accumulator: { [key: string]: any }, currentValue: any) => {
					accumulator[currentValue.key] = currentValue.value;
					return accumulator;
				},
				{}
			);

			return headersNormalized;
		}
	);

	// map data keys (object strings or array indices) to column order index (number)
	// note: the lookup is based off the keys in the first data item and any deviations from that won't be accounted for
	public static createColumnIndexLookupMemoized = memoizeOne(
		(
			data: IVirtualTableProps['data'],
			headersNormalized: VirtualTableDataType | undefined
		): VirtualTableHelperCalculations['dataKeyToColIndexLookup'] => {
			const dataKeyToColIndexLookup: VirtualTableHelperCalculations['dataKeyToColIndexLookup'] = new Map();

			if (data && data.length) {
				let firstRowData: any[] | { [key: string]: any };

				if (headersNormalized) {
					firstRowData = headersNormalized;
				} else {
					firstRowData = data[0];
				}

				// if data is array-based
				if (Array.isArray(firstRowData)) {
					for (let i = 0; i < firstRowData.length; i++) {
						dataKeyToColIndexLookup.set(i, i);
					}
				}
				// else data is object-based
				else {
					let i: number = 0;

					for (const key in firstRowData) {
						dataKeyToColIndexLookup.set(key, i++);
					}
				}
			}

			return dataKeyToColIndexLookup;
		}
	);

	public getOrderedData(
		rowData: VirtualTableDataType,
		headers: IVirtualTableProps['headers'],
		dataKeyToColIndexLookup: VirtualTableHelperCalculations['dataKeyToColIndexLookup']
	) {
		const rowDataOrdered: IVirtualTableRowProps['rowDataOrdered'] = [];

		if (Array.isArray(rowData)) {
			for (let i = 0; i < rowData.length; i++) {
				if (dataKeyToColIndexLookup.has(i)) {
					rowDataOrdered[dataKeyToColIndexLookup.get(i) as any] = rowData[i];
				}
			}
		} else if (headers) {
			for (let i = 0; i < headers.length; i++) {
				const key: string =
					typeof headers[i] === 'string'
						? (headers[i] as string)
						: (headers[i] as { [key: string]: string }).key;
				rowDataOrdered.push(rowData[key] || '');
			}
		} else {
			// loop over keys (doesn't matter if it's an object or array)
			for (const key in rowData) {
				if (dataKeyToColIndexLookup.has(key)) {
					rowDataOrdered[dataKeyToColIndexLookup.get(key) as any] = rowData[key];
				}
			}
		}

		// check for holes if array-based object
		if (Array.isArray(rowData) && rowData.length < dataKeyToColIndexLookup.size) {
			// loop over missing indices
			for (let i: number = rowData.length; i < dataKeyToColIndexLookup.size; i++) {
				// add filler empty string so empty column will be rendered
				// note: this is less intelligent than object-based as it data may be shifted over if accidentally missing items in data array
				rowDataOrdered[i] = '';
			}
		}
		// if data array has a hole in it (e.g. not data for an expected column)
		// note: this should will only happen for object-based data that is missing a property
		// note: it's important to account for this here because 'Array.map' will skip over these items and what's rendered may be unexpected and columns not align
		else if (rowDataOrdered.includes(undefined)) {
			for (let i = rowDataOrdered.length - 1; i > -1; i--) {
				if (typeof rowDataOrdered[i] === 'undefined') {
					// replace with empty string so empty column will be rendered
					rowDataOrdered[i] = '';
				}
			}
		}

		return rowDataOrdered;
	}
}
