import * as React from 'react';
import classnames from 'classnames';
import * as styles from './MagicSyncViewerMenu.scss';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import Header from '../../Header';
import FlySelect from '../../FlySelect';
import RadioBlock from '../../RadioBlock';
import Checkbox from '../../Checkbox';
import Divider from '../../Divider';
import PoweredByMsSVG from '../../../svg/magic-sync-logo';
import { ConnectDirectionType } from '../helpers/magicSyncViewMock';

interface IMagicSyncViewerHeaderProps extends IReactComponentProps {
	connectDirection: ConnectDirectionType;
	environment: 'staging' | 'production' | null;
	flywheelSiteId: string | null;
	flywheelSiteName: string | null;
	onChangeEnvironment: (environment: 'staging' | 'production') => void;
	onChangeSite: (flywheelSiteId: string) => void;
}

export const MagicSyncViewerMenu = (props: IMagicSyncViewerHeaderProps) => (
	<div
		className={classnames(
			styles.MagicSyncViewerMenu,
			props.className,
		)}
		style={props.style}
	>
		<div className={styles.MagicSyncViewerMenu_Main}>
			<Header
				container={{marginBottom: 'm'}}
				fontSize="m"
			>
				<span className={styles.MagicSyncViewerMenu_Direction}>
					{props.connectDirection}
				</span>
				&nbsp;site {props.connectDirection === 'pull' ? 'from' : 'to'}
			</Header>
			<div
				 className={classnames(
					 styles.MagicSyncViewerMenu_FlySelectContainer,
					 "FormRow"
				 )}
			>
				<div className="FormField">
					<FlySelect
						disabled={!!props.flywheelSiteId}
						onChange={props.onChangeSite}
						options={{
							'abc123': {
								label: 'Fuzzy Letter Live',
								icon: (
									<div>😁</div>
								),
							},
						}}
						placeholder="Select a site on Flywheel…"
						readonly={!!props.flywheelSiteId}
						value={props.flywheelSiteId}
					/>
				</div>
			</div>
			<Header
				container={{marginBottom: 'm'}}
				fontSize="s"
			>
				Select environment
			</Header>
			<RadioBlock
				className={styles.MagicSyncViewerMenu_EnvironmentRadios}
				default={props.environment}
				direction="vert"
				disabled={!props.flywheelSiteId}
				heightSize="m"
				onChange={props.onChangeEnvironment}
				options={{
					'staging': {
						label: 'Staging',
					},
					'production': {
						label: 'Production',
					},
				}}
				readonly={!props.flywheelSiteId}
			/>
			<Checkbox
				checked={true}
				disabled={!props.flywheelSiteId}
				label="Include database"
			/>
			<Divider
				className={styles.MagicSyncViewerMenu_BottomDivider}
				marginSize="m"
			/>
			<button
				className="__Green __Pill __Vert_Padding__20"
				disabled={!props.flywheelSiteId}
			>
				Pull From Flywheel
			</button>
		</div>
		<PoweredByMsSVG className={styles.MagicSyncViewerMenu_MagicSyncLogo} />
	</div>
);
