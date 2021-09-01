import React from 'react';
import * as styles from './OfflineBanner.scss';
import { default as IReactComponentProps } from '../../../common/structures/IReactComponentProps';
import OfflineIcon from '../../icons/svgs/OfflineIcon';

export interface IOfflineBannerProps extends IReactComponentProps {
	offline: boolean;
}

export const OfflineBanner: React.FC<IOfflineBannerProps> = (props) => {
	if (!props.offline) {
		return null;
	}

	return (
		<div id={props.id} style={props.style} className={styles.OfflineBanner_container}>
			<OfflineIcon />
			<div className={styles.OfflineBanner_text}>No internet connection.</div>
		</div>
	);
};

export default OfflineBanner;
