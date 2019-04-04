import * as React from 'react';
import classnames from 'classnames';
import * as styles from './MagicSyncViewerStatusbar.scss';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import FlySelect from '../../FlySelect';
import { ConnectDirectionType } from '../helpers/magicSyncViewMock';

interface IMagicSyncViewerHeaderProps extends IReactComponentProps {
	connectDirection: ConnectDirectionType;
}

export const MagicSyncViewerStatusbar = (props: IMagicSyncViewerHeaderProps) => (
	<div
		className={classnames(
			styles.MagicSyncViewerStatusbar,
			props.className,
		)}
		style={props.style}
	>
		<div className={styles.MagicSyncViewerStatusbar_ModeContainer}>
			<span className={styles.MagicSyncViewerStatusbar_Direction}>
				{props.connectDirection}ing
			</span>
			<FlySelect
				className={styles.MagicSyncViewerStatusbar_FlySelect}
				onChange={() => console.log('onChange')}
				options={{
					'newer': 'newer files only',
					'different': 'all different files',
				}}
				value="newer"
			/>
		</div>
		<div>
			<span className={styles.MagicSyncViewerStatusbar_FilesCount}>
				24 files
			</span>
			<span className={styles.MagicSyncViewerStatusbar_FilesDivider} />
			<span className={styles.MagicSyncViewerStatusbar_FilesSize}>
				5.7mb
			</span>
		</div>
	</div>
);
