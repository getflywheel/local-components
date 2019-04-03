import * as React from 'react';
import classnames from 'classnames';
import * as styles from './MagicSyncViewer.scss';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import { VirtualTable } from '../VirtualTable';
import { MagicSyncViewerHeader } from './components/MagicSyncViewerHeader';
import { MagicSyncViewerMenu } from './components/MagicSyncViewerMenu';
import { MagicSyncViewerStactionbar } from './components/MagicSyncViewerStactionbar';
import { ConnectDirectionType, mockDataFiles, parseMockFiles } from './helpers/magicSyncViewMock';
import { MagicSyncViewerCellRenderers } from './helpers/MagicSyncViewerCellRenderers';
import { MagicSyncViewerRowRenderer } from './helpers/MagicSyncViewerRowRenderer';
import { IVirtualTableOnChangeRowDataArgs } from '../VirtualTable/VirtualTable';

export interface IDataItem {
	children?: IDataItem[];
	filename: string;
	flywheelDate: Date | undefined;
	index: number;
	localDate: Date | undefined;
	locked: boolean;
	selected: boolean;
}

interface IMagicSyncViewerProps extends IReactComponentProps {
	connectDirection: ConnectDirectionType;
}

export interface IMagicSyncViewerState {
	data: IDataItem[];
}

export class MagicSyncViewer extends React.Component<IMagicSyncViewerProps, IMagicSyncViewerState> {

	protected _cellRenderers: MagicSyncViewerCellRenderers;
	protected _rowRenderer: MagicSyncViewerRowRenderer;

	protected _headers = [
		{key: 'locked', value: '', className: styles.MagicSyncViewer_Column_Locked},
		{key: 'selected', value: 'Is Selected', className: styles.MagicSyncViewer_Column_Selected},
		{key: 'filename', value: 'Filename', className: styles.MagicSyncViewer_Column_Filename},
		{key: 'localDate', value: 'Local', className: styles.MagicSyncViewer_Column_LocalDate},
		{key: 'gtlt', value: '', className: styles.MagicSyncViewer_Column_DateIcons},
		{key: 'flywheelDate', value: 'Flywheel (Staging)', className: styles.MagicSyncViewer_Column_FlywheelDate},
	];

	constructor (props: IMagicSyncViewerProps) {
		super(props);

		const data = parseMockFiles(mockDataFiles);

		this.state ={
			data,
		};

		this._cellRenderers = new MagicSyncViewerCellRenderers(
			(state: IMagicSyncViewerState) => {
				this.setState(state);
			},
		);
		this._rowRenderer = new MagicSyncViewerRowRenderer();
	}

	protected _onChangeRowData = (dataArgs: IVirtualTableOnChangeRowDataArgs) => {
		// update viewer state to force row re-renderering
		this.setState({
			data: [...this.state.data],
		});
	};

	render () {
		return (
			<div
				className={classnames(
					styles.MagicSyncViewer,
					this.props.className,
				)}
			>
				<MagicSyncViewerHeader
					connectDirection={'pull'}
					siteName={'Fuzzy Letter Eye Care'}
				/>
				<div className={styles.MagicSyncViewer_Body}>
					<MagicSyncViewerMenu
						connectDirection={'pull'}
					/>
					<div className={styles.MagicSyncViewer_Content}>
						<MagicSyncViewerStactionbar
							connectDirection={'pull'}
						/>
						<VirtualTable
							cellClassName={styles.MagicSyncViewer_ColumnCell}
							cellRenderer={this._cellRenderers.renderersFactory}
							data={this.state.data}
							headers={this._headers}
							headersCapitalize="none"
							headersWeight={500}
							onChangeRowData={this._onChangeRowData}
							rowClassName={styles.MagicSyncViewer_TableRow}
							rowHeightSize={"s"}
							rowHeaderHeightSize={"m"}
							rowRenderer={this._rowRenderer.renderer}
						/>
					</div>
				</div>
			</div>
		);
	}

}
