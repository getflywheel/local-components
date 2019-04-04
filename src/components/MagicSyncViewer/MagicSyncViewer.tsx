import * as React from 'react';
import classnames from 'classnames';
import * as styles from './MagicSyncViewer.scss';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import { VirtualTable } from '../VirtualTable';
import { MagicSyncViewerHeader } from './components/MagicSyncViewerHeader';
import { MagicSyncViewerMenu } from './components/MagicSyncViewerMenu';
import { MagicSyncViewerStatusbar } from './components/MagicSyncViewerStatusbar';
import { ConnectDirectionType, mockDataFiles, parseMockFiles } from './helpers/magicSyncViewMock';
import { MagicSyncViewerCellRenderers } from './helpers/MagicSyncViewerCellRenderers';
import { MagicSyncViewerRowRenderer } from './helpers/MagicSyncViewerRowRenderer';
import { IVirtualTableOnChangeRowDataArgs } from '../VirtualTable/VirtualTable';
import PushSVG from '../../svg/connect-push';
import PullSVG from '../../svg/connect-pull';
import { Container } from '../Container/Container';
import LoadingIndicator from '../LoadingIndicator';

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
	flywheelSiteId: string | null;
	flywheelSiteName: string | null;
	localSiteName: string;
	onClose: () => void;
}

export interface IMagicSyncViewerState {
	data: IDataItem[] | null;
	environment: 'staging' | 'production' | null;
	flywheelSiteId: string | null;
	flywheelSiteName: string | null;
	isLoading: boolean;
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

		this.state ={
			data: !!props.flywheelSiteId ? this._generateMockData() : null,
			environment: 'staging',
			flywheelSiteId: props.flywheelSiteId,
			flywheelSiteName: props.flywheelSiteName,
			isLoading: false,
		};

		this._cellRenderers = new MagicSyncViewerCellRenderers(
			(state: IMagicSyncViewerState) => {
				this.setState(state);
			},
		);
		this._rowRenderer = new MagicSyncViewerRowRenderer();
	}

	componentWillReceiveProps (nextProps: IMagicSyncViewerProps) {
		this.setState({
			data: null,
			environment: !!nextProps.flywheelSiteId ? this.state.environment : null,
			flywheelSiteId: nextProps.flywheelSiteId,
			flywheelSiteName: nextProps.flywheelSiteName,
			isLoading: true,
		});

		setTimeout (
			() => {
				this.setState({
					data: !!nextProps.flywheelSiteId ? this._generateMockData() : null,
					isLoading: false,
				});
			},
			1000,
		)
	}

	protected _generateMockData () {
		return parseMockFiles(mockDataFiles);
	}

	protected _onChangeRowData = (dataArgs: IVirtualTableOnChangeRowDataArgs) => {
		// update viewer state to force row re-renderering
		this.setState({
			data: [...(this.state.data || [])],
		});
	};

	protected _onChangeEnvironment = (environment: 'staging' | 'production') => {
		this.setState({
			data: null,
			environment,
			isLoading: true,
		});

		setTimeout (
			() => {
				this.setState({
					data: this._generateMockData(),
					isLoading: false,
				});
			},
			1000,
		)
	};

	protected _onChangeSite = (flywheelSiteId: string) => {
		this.setState({
			data: null,
			environment: 'staging',
			flywheelSiteId,
			flywheelSiteName: 'Fuzzy Letter Live',
			isLoading: true,
		});

		setTimeout (
			() => {
				this.setState({
					data: !!flywheelSiteId ? this._generateMockData() : null,
					isLoading: false,
				});
			},
			1000,
		)
	};

	render () {
		return (
			<div
				className={classnames(
					styles.MagicSyncViewer,
					this.props.className,
				)}
				style={this.props.style}
			>
				<MagicSyncViewerHeader
					connectDirection={this.props.connectDirection}
					onClose={this.props.onClose}
					siteName={this.props.localSiteName}
				/>
				<div className={styles.MagicSyncViewer_Body}>
					<MagicSyncViewerMenu
						connectDirection={this.props.connectDirection}
						environment={this.state.environment}
						flywheelSiteId={this.state.flywheelSiteId}
						flywheelSiteName={this.state.flywheelSiteName}
						onChangeEnvironment={this._onChangeEnvironment}
						onChangeSite={this._onChangeSite}
					/>
					<div className={styles.MagicSyncViewer_Content}>
						{this.state.flywheelSiteId && this.state.data && (
							<>
								<MagicSyncViewerStatusbar
									connectDirection={this.props.connectDirection}
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
							</>
						)}
						{this.state.flywheelSiteId && this.state.isLoading && (
							<div className={styles.MagicSyncViewer_Content_ContainerMiddle}>
								<LoadingIndicator color="Gray" />
							</div>
						)}
						{!this.state.flywheelSiteId && (
							<div className={styles.MagicSyncViewer_Content_ContainerMiddle}>
								{this.props.connectDirection === 'pull' ? <PullSVG /> : <PushSVG />}
								<Container marginTop="s">Select a destination</Container>
								<div>to {this.props.connectDirection} your site</div>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}

}
