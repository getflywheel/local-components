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
						disabled={true}
						onChange={() => console.log('onChange')}
						options={{
							'a': {
								label: 'Site 1',
								icon: (
									<div>😁</div>
								),
							},
							'c': {
								label: 'Site 2',
								icon: (
									<div>😁</div>
								),
							},
						}}
						placeholder="Select a site on Flywheel…"
						readonly={true}
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
				direction="vert"
				disabled={true}
				heightSize="m"
				options={{
					'staging': {
						label: 'Staging',
					},
					'production': {
						label: 'Production',
					},
				}}
				readonly={true}
			/>
			<Checkbox
				checked={true}
				disabled={true}
				label="Include database"
			/>
			<Divider
				className={styles.MagicSyncViewerMenu_BottomDivider}
				marginSize="m"
			/>
			<button
				className="__Green __Pill __Vert_Padding__20"
				disabled={true}
			>
				Pull From Flywheel
			</button>
		</div>
		<PoweredByMsSVG />
	</div>
);
