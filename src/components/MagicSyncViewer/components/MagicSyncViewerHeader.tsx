import * as React from 'react';
import classnames from 'classnames';
import * as styles from './MagicSyncViewerHeader.scss';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import Close from '../../Close';
import PushSVG from '../../../svg/connect-push';
import PullSVG from '../../../svg/connect-pull';
import { ConnectDirectionType } from '../helpers/magicSyncViewMock';

interface IMagicSyncViewerHeaderProps extends IReactComponentProps {
	connectDirection: ConnectDirectionType;
	siteName: string;
}

export const MagicSyncViewerHeader = (props: IMagicSyncViewerHeaderProps) => (
	<div
		className={classnames(
			styles.MagicSyncViewerHeader,
			props.className,
		)}
		style={props.style}
	>
		<div className={styles.MagicSyncViewerHeader_Details}>
			<span className={styles.MagicSyncViewerHeader_Icon}>
				{props.connectDirection === 'pull'
					?
					<PullSVG />
					:
					<PushSVG />
				}
			</span>
			<span className={styles.MagicSyncViewerHeader_Direction}>
				{props.connectDirection}
			</span>
			&nbsp;
			<span className={styles.MagicSyncViewerHeader_Site}>
				{props.siteName}
			</span>
			&nbsp;
			<span>
				{props.connectDirection === 'pull' ? 'from' : 'to'} Flywheel
			</span>
		</div>
		<Close
			className={styles.MagicSyncViewerHeader_Close}
			onClick={() => console.log('onClick')}
			position="static"
		/>
	</div>
);
