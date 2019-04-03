import * as React from 'react';
import classnames from 'classnames';
import * as styles from './MagicSyncViewerStactionbar.scss';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import FlySelect from '../../FlySelect';
import { ConnectDirectionType } from '../helpers/magicSyncViewMock';

interface IMagicSyncViewerHeaderProps extends IReactComponentProps {
	connectDirection: ConnectDirectionType;
}

export const MagicSyncViewerStactionbar = (props: IMagicSyncViewerHeaderProps) => (
	<div
		className={classnames(
			styles.MagicSyncViewerStactionbar,
			props.className,
		)}
		style={props.style}
	>
		<div className={styles.MagicSyncViewerStactionbar_ModeContainer}>
			<span className={styles.MagicSyncViewerStactionbar_Direction}>
				{props.connectDirection}ing
			</span>
			<FlySelect
				className={styles.MagicSyncViewerStactionbar_FlySelect}
				onChange={() => console.log('onChange')}
				options={{
					'newer': 'newer files only',
					'different': 'all different files',
				}}
				value="newer"
			/>
		</div>
		<div>
			<span className={styles.MagicSyncViewerStactionbar_FilesCount}>
				24 files
			</span>
			<span className={styles.MagicSyncViewerStactionbar_FilesDivider} />
			<span className={styles.MagicSyncViewerStactionbar_FilesSize}>
				5.7mb
			</span>
		</div>
	</div>
);
