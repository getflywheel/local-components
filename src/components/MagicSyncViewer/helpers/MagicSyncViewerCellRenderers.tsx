import * as React from 'react';
import * as styles from './MagicSyncViewerCellRenderers.scss';
import classnames from 'classnames';
import { IMagicSyncViewerState } from '../MagicSyncViewer';
import Checkbox from '../../Checkbox';
import { MagicSyncViewerCellRendererFilename } from './MagicSyncViewerCellRendererFilename';
import FileGtSVG from '../../../svg/magic-sync-file-gt';
import FileLtSVG from '../../../svg/magic-sync-file-lt';
import FileAddedSVG from '../../../svg/magic-sync-file-added';
import FileRemovedSVG from '../../../svg/magic-sync-file-removed';
import LockLockedSVG from '../../../svg/magic-sync-lock-locked';
import LockUnlockedSVG from '../../../svg/magic-sync-lock-unlocked';
import { IVirtualTableCellRendererDataArgs, VirtualTableCellRenderer } from '../../VirtualTable/VirtualTable';

export class MagicSyncViewerCellRenderers {

	protected _cellRendererFilename: MagicSyncViewerCellRendererFilename;
	/** a callback to use the viewer component's 'setState' method */
	protected _setStateCallback: (state: IMagicSyncViewerState) => void;

	constructor (setStateCallback: (state: IMagicSyncViewerState) => void) {
		this._setStateCallback = setStateCallback;
		this._cellRendererFilename = new MagicSyncViewerCellRendererFilename(setStateCallback);
	}

	public renderersFactory: VirtualTableCellRenderer = (dataArgs: IVirtualTableCellRendererDataArgs) => {
		const rendererResult = this._renderersFactory(dataArgs);

		return (
			<div className={styles.MagicSyncViewerCellRenderer_CellInner}>
				<div>
					{rendererResult || dataArgs.children}
				</div>
			</div>
		);
	};

	protected _renderersFactory: VirtualTableCellRenderer = (dataArgs: IVirtualTableCellRendererDataArgs) => {
		switch (dataArgs.colKey) {
			case 'locked':
				return this._rendererColLocked(dataArgs);
			case 'selected':
				return this._rendererColSelected(dataArgs);
			case 'filename':
				return this._cellRendererFilename.renderer(dataArgs);
			case 'localDate':
			case 'flywheelDate':
				return this._rendererColDate(dataArgs.cellData, dataArgs.isHeader);
			case 'gtlt':
				return this._rendererColGtLt(dataArgs);
		}

		return null;
	};

	protected _rendererColLocked (dataArgs: IVirtualTableCellRendererDataArgs) {
		if (dataArgs.rowData.selected) {
			return null;
		}

		const Icon: React.ReactNode = dataArgs.rowData.locked
			?
			<LockLockedSVG className={styles.MagicSyncViewerCellRenderer_Lock_Locked} />
			:
			<LockUnlockedSVG className={styles.MagicSyncViewerCellRenderer_Lock_Unlocked} />
		;

		return (
			<div
				className={styles.MagicSyncViewerCellRenderer_Lock}
				onClick={() => {dataArgs.rowData.locked = !dataArgs.rowData.locked; dataArgs.changeFn!(dataArgs.rowData.locked)}}
			>
				{Icon}
			</div>
		);
	}

	protected _rendererColSelected (dataArgs: IVirtualTableCellRendererDataArgs) {
		return (
			<Checkbox
				checked={dataArgs.cellData}
				disabled={dataArgs.rowData.locked}
				onChange={dataArgs.changeFn}
			/>
		);
	}

	protected _rendererColDate (cellData: any, isHeader: boolean) {
		if (isHeader) {
			return null;
		}

		return (
			<>
				{this._getFormattedDate(cellData as Date)}
			</>
		);
	}

	protected _rendererColGtLt (dataArgs: IVirtualTableCellRendererDataArgs) {
		if (dataArgs.isHeader) {
			return '';
		}

		const className: string = classnames({
			[styles.MagicSyncViewerCellRenderer_Filestatus__Locked]: dataArgs.rowData.locked === true,
			[styles.MagicSyncViewerCellRenderer_Filestatus__Unselected]: dataArgs.rowData.selected === false,
		});
		let Icon: React.ReactNode;

		if (!dataArgs.rowData.localDate) {
			Icon = <FileRemovedSVG className={className} />;
		}
		else if (!dataArgs.rowData.flywheelDate) {
			Icon = <FileAddedSVG className={className} />;
		}
		else {
			Icon = dataArgs.rowData.flywheelDate === dataArgs.rowData.localDate
				?
				'='
				:
				dataArgs.rowData.localDate > dataArgs.rowData.flywheelDate
					?
					<FileGtSVG className={className} />
					:
					<FileLtSVG
						className={classnames(
							styles.MagicSyncViewerCellRenderer_Filestatus_Lt,
							className,
						)}
					/>
			;
		}

		return <>{Icon}</>;
	}

	protected _getFormattedDate (date: Date) {
		if (!date) {
			return '---';
		}

		const year: number = date.getFullYear();
		const month: string = (1 + date.getMonth()).toString().padStart(2, '0');
		let day: string = date.getDate().toString().padStart(2, '0');
		let hour: string | number = date.getHours();
		let amPm: string = hour > 12 ? 'pm' : 'am';
		hour = (hour % 12 || 12).toString().padStart(2, '0');
		let minute: string = (date.getMinutes()).toString().padStart(2, '0');

		return `${month}/${day}/${year} ${hour}:${minute}${amPm}`;
	}
}
