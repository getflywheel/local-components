import * as React from 'react';
import * as styles from './MagicSyncViewerCellRenderers.scss';
import classnames from 'classnames';
import { IDataItem, IMagicSyncViewerState } from '../MagicSyncViewer';
import FolderOpened from '../../../svg/folder-opened';
import FolderClosed from '../../../svg/folder-closed';
import {
	IVirtualTableCellRendererDataArgs,
	VirtualTableCellRenderer,
} from '../../VirtualTable/VirtualTable';

export class MagicSyncViewerCellRendererFilename {

	/** whether to force open all nested directories regardless of previously capture open/close status (useful for debugging) */
	protected _forceOpenNestedDirectoriesOnClick: boolean = false;
	/** whether to re-open previously nested folders when parent folder was closed and is now re-opened */
	protected _rememberOpenStatusOfClosedNestedFolders: boolean = true;
	/**
	 * tracks closed status for folder rows (note: weakmap used to avoid having to modify the original object to track this status
	 * note: if a parent folder is closed, that doesn't necessarily mean nested folders are too as this map is used to remember the last state of all folders opened or closed
	 */
	protected _rowIsClosedMap = new WeakMap<IDataItem, boolean>();
	/** tracks tree depth for rows */
	protected _rowTreeDepthMap = new WeakMap<IDataItem, number>();
	/** a callback to use the viewer component's 'setState' method */
	protected _setStateCallback: (state: IMagicSyncViewerState) => void;

	constructor (setStateCallback: (state: IMagicSyncViewerState) => void) {
		this._setStateCallback = setStateCallback;
	}

	public renderer: VirtualTableCellRenderer = (dataArgs: IVirtualTableCellRendererDataArgs) => {
		if (dataArgs.isHeader) {
			return null;
		}

		// get row's tree depth otherwise assume its the root if undefined
		let rowTreeDepth: number = this._rowTreeDepthMap.get(dataArgs.rowData) || 0;

		// if single file
		if (!dataArgs.rowData.children) {
			return (
				<div>
					{this._renderRow(dataArgs, rowTreeDepth, false)}
				</div>
			);
		}

		return (
			<div
				onClick={() => {
					// get status for row
					const isClosed: boolean = this._rowIsClosed(dataArgs.rowData);

					if (isClosed) {
						dataArgs.data = this._insert(
							dataArgs.data,
							dataArgs.rowIndex + 1,
							this._getListOfOpenFoldersAndContents(
								[],
								dataArgs.rowData,
								this._forceOpenNestedDirectoriesOnClick,
								this._rowTreeDepthMap.get(dataArgs.rowData) || 0,
							)
						);
					}
					else {
						// close dictory by recursively removing children/descendents
						dataArgs.data.splice(dataArgs.rowIndex + 1, this._countDescendentRowsRecusively(dataArgs.rowData, dataArgs.rowData.children));
					}

					// toggle closed status of clicked row/folder
					this._rowIsClosedMap.set(dataArgs.rowData, !isClosed);

					// loop over clicked row/folder's children and store their depth for lookup later
					dataArgs.rowData.children!.forEach((childRowData: IDataItem) => {
						// parent's depth or assume we're at the root if undefined
						const parentTreeDepth: number = this._rowTreeDepthMap.get(dataArgs.rowData) || 0;

						// if depth hasn't yet been stored for this row/file/folder
						if (!this._rowTreeDepthMap.has(childRowData)) {
							// store the depth value for this child row
							this._rowTreeDepthMap.set(childRowData, parentTreeDepth + 1);
						}
					});

					// update viewer state
					this._setStateCallback({
						data: [...dataArgs.data],
					});
				}}
			>
				{this._renderRow(dataArgs, rowTreeDepth, true)}
			</div>
		);
	}

	protected _renderRow (dataArgs: IVirtualTableCellRendererDataArgs, rowTreeDepth: number, isFolder: boolean) {
		return (
			<div
				className={classnames(
					styles.MagicSyncViewerCellRenderer_FilenameContainer,
					{
						[styles.MagicSyncViewerCellRenderer_FilenameContainer__Unselected]: dataArgs.rowData.selected === false,
					}
				)}
			>
				<span className={styles.MagicSyncViewerCellRenderer_Filename_VlineContainer}>
					{Array(rowTreeDepth).fill(0).map((value: number, index: number) => {
						return (
							<span
								className={styles.MagicSyncViewerCellRenderer_Filename_Vline}
								key={index}
							/>
						);
					})}
				</span>
				<span>
					{isFolder == true && (this._rowIsClosed(dataArgs.rowData)
						?
						<FolderClosed className={styles.MagicSyncViewerCellRenderer_Filename_Folder} />
						:
						<FolderOpened className={styles.MagicSyncViewerCellRenderer_Filename_Folder} />
					)}
					<span>
						{String(dataArgs.cellData)}
						{isFolder && '/'}
					</span>
				</span>
			</div>
		);
	}

	protected _getListOfOpenFoldersAndContents (newRowsToBeInserted: IDataItem[], parentRowData: IDataItem, forceOpenNestedDirectoriesOnClick: boolean, parentTreeDepth: number) {
		if (parentRowData.children) {
			// loop over children files and folders to display
			parentRowData.children.forEach((childRowData: IDataItem) => {
				// add to list of new rows to be rendered
				newRowsToBeInserted.push(childRowData);

				if (forceOpenNestedDirectoriesOnClick) {
					// if depth hasn't yet been stored for this row/file/folder
					if (!this._rowTreeDepthMap.has(childRowData)) {
						// store the depth value for this child row
						this._rowTreeDepthMap.set(childRowData, parentTreeDepth + 1);
					}
					// console.log('treeDepth: ', parentTreeDepth, ' = ', childRowData.filename);
					// force open no matter what it was previous set
					this._rowIsClosedMap.set(childRowData, false);
				}

				// if folder, was last known to be open and setting calls to re-open previously opened folders
				if (childRowData.children && ((this._rememberOpenStatusOfClosedNestedFolders && this._rowIsOpened(childRowData)) || forceOpenNestedDirectoriesOnClick)) {
					this._getListOfOpenFoldersAndContents(newRowsToBeInserted, childRowData, forceOpenNestedDirectoriesOnClick, parentTreeDepth + 1);
				}
			});
		}

		return newRowsToBeInserted;
	}

	protected _countDescendentRowsRecusively (parentRowData: IDataItem, parentRowChildren?: IDataItem[]): number {
		let childrenCount: number = 0;

		// if parent has children/folders and is open (else there's nothing to close so don't count)
		if (parentRowChildren && this._rowIsOpened(parentRowData)) {
			parentRowChildren.forEach((childRowData: IDataItem) => {
				childrenCount++;
				childrenCount += this._countDescendentRowsRecusively(childRowData, childRowData.children);

				// if set to remember open/close status and has children (is folder)
				// note: this must occur after counting open descendents
				if (this._rememberOpenStatusOfClosedNestedFolders === false && childRowData.children) {
					// set folder as closed so it doesn't auto-open if parent/ancestor folder is opened
					// toggle closed status
					this._rowIsClosedMap.set(childRowData, true);
				}
			});
		}

		return childrenCount;
	}

	protected _rowIsClosed (rowData: IDataItem): boolean {
		return !this._rowIsOpened(rowData);
	}

	protected _rowIsOpened (rowData: IDataItem): boolean {
		return this._rowIsClosedMap.get(rowData) === false;
	}

	protected _insert (originalData: any[], index: number, newData: any[]) {
		let firstHalf = originalData.slice(0, index);
		let secondHalf = originalData.slice(index);
		return firstHalf.concat(newData).concat(secondHalf);
	}

}
