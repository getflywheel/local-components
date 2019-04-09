import * as React from 'react';
import * as styles from './MagicSyncViewerRowRenderer.scss';
import classnames from 'classnames';
import { IVirtualTableRowRendererDataArgs, VirtualTableRowRenderer } from '../../VirtualTable/VirtualTable';


export class MagicSyncViewerRowRenderer {

	public renderer: VirtualTableRowRenderer = (dataArgs: IVirtualTableRowRendererDataArgs) => {
		return (
			<div
				className={classnames(
					styles.MagicSyncViewerRowRenderer,
					{
						[styles.MagicSyncViewerRowRenderer__Locked]: dataArgs.rowData.locked === true,
						[styles.MagicSyncViewerRowRenderer__Unselected]: dataArgs.rowData.selected === false,
					}
				)}
			>
				{dataArgs.children}
			</div>
		);
	}

}
