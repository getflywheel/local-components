import * as React from 'react';
import * as styles from './MagicSyncViewerExample.scss';
import classnames from 'classnames';
import { MagicSyncViewer } from '../MagicSyncViewer';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import ThreeDotsSVG from '../../../svg/three-dots';
import FlyDropdown from '../../FlyDropdown';
import PushSVG from '../../../svg/connect-push';
import PullSVG from '../../../svg/connect-pull';
import Header from '../../Header';
import { IVirtualListProps } from '../../VirtualList/VirtualList';
import { ConnectDirectionType } from '../helpers/magicSyncViewMock';

interface IMagicSyncViewerExampleState {
	connectDirection: ConnectDirectionType | null;
	flywheelSiteId: string | null;
	flywheelSiteName: string | null;
	isDisconnected: boolean;
	isOpen: boolean;
	localSiteName: string;
}

export class MagicSyncViewerExample extends React.Component<IReactComponentProps, IMagicSyncViewerExampleState> {

	constructor (props: IVirtualListProps) {
		super(props);

		this.state = {
			connectDirection: null,
			flywheelSiteId: 'abc123',
			flywheelSiteName: 'Fuzzy Letter Live',
			isDisconnected: false,
			isOpen: false,
			localSiteName: 'Fuzzy Letter Eye Care',
		};
	}

	protected _disconnect = () => {
		this.setState(() => ({
			isDisconnected: true,
			flywheelSiteId: null,
			flywheelSiteName: null,
		}));
	};

	protected _onClickPush = () => {
		this.setState(() => ({
			connectDirection: 'push',
			isOpen: true,
		}));
	};

	protected _onClickPull = () => {
		this.setState(() => ({
			connectDirection: 'pull',
			isOpen: true,
		}));
	};

	protected _onClose = () => {
		this.setState(() => ({
			isOpen: false,
		}));
	};

	render () {
		return (
			<>
				<div className={classnames('SiteInfo', styles.MagicSyncViewerExample)}>
					<div className="SiteInfo_Top">
						<Header fontSize="xl">
							{this.state.localSiteName}
						</Header>
					</div>
					<div className={styles.MagicSyncViewerExample_SiteInnerPane}>
						{Array.from(Array(14).keys()).map((data: any, index: number) =>
							<div
								className={classnames(styles.MagicSyncViewerExample_SiteInfo_SkeletonText, index % 6 === 5 ? styles.MagicSyncViewerExample_SiteInfo_SkeletonText__Blank : '')}
								key={index}
							/>
						)}
					</div>
					<div
						className={classnames(
							'SiteInfo_Bottom',
							styles.MagicSyncViewerExample_SiteInfo,
						)}
					>
						<div className={styles.MagicSyncViewerExample_SiteInfo_Cont1}>
							{this.state.isDisconnected === false && (
								<>
									<span>Connected to: </span>
									<span className={styles.MagicSyncViewerExample_SiteInfo_SiteName}>{this.state.flywheelSiteName}</span>
									<FlyDropdown
										className="FlywheelConnectDropdown"
										position="top"
										caret={false}
										items={[
											{
												label: 'Disconnect Site',
												onClick: this._disconnect,
												color: 'red',
											},
										]}
									>
										<ThreeDotsSVG />
									</FlyDropdown>
								</>
							)}
						</div>
						<div className={styles.MagicSyncViewerExample_SiteInfo_Cont2}>
							<span onClick={this._onClickPush}>
								<PushSVG />
							</span>
							<span onClick={this._onClickPull}>
								<PullSVG />
							</span>
						</div>
					</div>
				</div>
				<MagicSyncViewer
					connectDirection={this.state.connectDirection!}
					flywheelSiteId={this.state.flywheelSiteId}
					flywheelSiteName={this.state.flywheelSiteName}
					localSiteName={this.state.localSiteName}
					onClose={this._onClose}
					style={{
						visibility: this.state.isOpen ? 'visible' : 'hidden',
					}}
				/>
			</>
		);
	}

}
