import * as React from 'react';
import classnames from 'classnames';
import { IVirtualListProps } from '../VirtualList';
import * as styles from '../VirtualList.scss';

export interface IVirtualListHelperCalculations {
	containerSizePx: number;
	itemSizePx: number;
	itemsCount: number;
	overscanItemsAheadInt: number;
	overscanItemsBehindInt: number;
	overscanItemsCount: number;
	overscanItemsCountInt: number;
	overscanSizePx: number;
	scrollTop: number;
	scrollIndex: number;
	viewportEndIndex: number;
	viewportEndIndexInt: number;
	viewportItemsCount: number;
	viewportSizePx: number;
	viewportStartIndex: number;
	viewportStartIndexInt: number;
	virtualEndIndexInt: number;
	virtualItemsCount: number;
	virtualStartIndexInt: number;
}

export class VirtualListHelper {

	public calculateItems (
		itemsCount: number,
		itemHeight: number,
		wrapperSizePx: number,
		scrollTop: number,
		overscan: IVirtualListProps['overscan'],
		disableVirtualization: boolean = false,
	): IVirtualListHelperCalculations {
		const measurements: IVirtualListHelperCalculations = {
			containerSizePx: itemsCount * itemHeight,
			itemsCount: itemsCount,
			itemSizePx: itemHeight,
			overscanItemsBehindInt: NaN,
			overscanItemsAheadInt: NaN,
			overscanItemsCount: NaN,
			overscanItemsCountInt: NaN,
			overscanSizePx: NaN,
			scrollTop: scrollTop,
			scrollIndex: scrollTop / itemHeight,
			viewportEndIndex: NaN,
			viewportEndIndexInt: NaN,
			viewportItemsCount: wrapperSizePx / itemHeight,
			viewportSizePx: wrapperSizePx,
			viewportStartIndex: NaN,
			viewportStartIndexInt: NaN,
			virtualEndIndexInt: NaN,
			virtualItemsCount: NaN,
			virtualStartIndexInt: NaN,
		};

		// calculate the first index to appear in the viewport (whether partially out of view or entirely in view)
		measurements.viewportStartIndex = measurements.scrollTop / measurements.itemSizePx;
		// round down to index
		// note: cap the start index to 0 just in case this scrolls above the first index (which can happen because of scrolling momentum)
		measurements.viewportStartIndexInt = Math.max(Math.floor(measurements.viewportStartIndex), 0);
		// calculate the last index to appear in the viewport (whether partially out of view or entirely in view)
		measurements.viewportEndIndex = measurements.viewportStartIndex + (measurements.viewportSizePx / measurements.itemSizePx);
		// round up because an index of 4.05 means 5% of index 5 is visible therefore round up to render that row
		// note: cap the end index at 'itemsCount' just in case this scrolls past the last index (which can happen because of border width or scrolling momentum)
		measurements.viewportEndIndexInt = Math.min(Math.ceil(measurements.viewportEndIndex), measurements.itemsCount);

		if (disableVirtualization) {
			measurements.overscanSizePx = 0;
			measurements.overscanItemsCount = 0;
			measurements.overscanItemsCountInt = 0;
			measurements.overscanItemsAheadInt = 0;
			measurements.overscanItemsBehindInt = 0;
			measurements.virtualStartIndexInt = 0;
			measurements.virtualEndIndexInt = measurements.itemsCount;
			measurements.virtualItemsCount = measurements.itemsCount;
		}
		else {
			// overscan calcs
			const autoOverscan: number = measurements.itemSizePx * 2 > 500 ? measurements.itemSizePx * 2 : 500;
			measurements.overscanSizePx = overscan === 'auto' ? autoOverscan : Number(overscan);
			measurements.overscanItemsCount = measurements.overscanSizePx / measurements.itemSizePx;
			measurements.overscanItemsCountInt = Math.ceil(measurements.overscanItemsCount);
			measurements.overscanItemsAheadInt = Math.min(Math.floor(measurements.viewportStartIndex), measurements.overscanItemsCountInt);
			measurements.overscanItemsBehindInt = Math.min(measurements.itemsCount - measurements.viewportEndIndexInt, measurements.overscanItemsCountInt);

			// virtual calcs
			measurements.virtualStartIndexInt = Math.max(measurements.viewportStartIndexInt - measurements.overscanItemsAheadInt, 0);
			measurements.virtualEndIndexInt = Math.min(measurements.viewportEndIndexInt + measurements.overscanItemsBehindInt, measurements.itemsCount);
			measurements.virtualItemsCount = measurements.virtualEndIndexInt - measurements.virtualStartIndexInt;
		}

		return measurements;
	}

	public generateAndGetRenderedItems (
		data: IVirtualListProps['data'],
		itemRenderer: IVirtualListProps['itemRenderer'],
		calculations: IVirtualListHelperCalculations,
		itemRendererExtraData: IVirtualListProps['itemRendererExtraData'],
		striped: boolean,
	): ReturnType<IVirtualListProps['itemRenderer']>[] {
		const renderedListItems: ReturnType<IVirtualListProps['itemRenderer']>[] = [];
		const customRendererStyles: {transform: string} = {
			transform: `translateY(${calculations.virtualStartIndexInt * calculations.itemSizePx}px)`,
		};
		let renderedItem: React.ReactElement<any>;
		let className: string;

		if (data) {
			for (let index = calculations.virtualStartIndexInt; index < calculations.virtualEndIndexInt; index++) {
				renderedItem = itemRenderer(data[index], index, customRendererStyles, itemRendererExtraData) as React.ReactElement<any>;
				className = !striped ? '' : (index + 1) % 2 === 0 ? styles.VirtualList_Item__StripedEven : styles.VirtualList_Item__StripedOdd;

				renderedListItems.push(React.cloneElement(
					renderedItem,
					{
						className: classnames(renderedItem.props.className || '', className),
						style: {...(renderedItem.props.style || {}), ...customRendererStyles},
					},
				));
			}
		}

		return renderedListItems;
	}

}
