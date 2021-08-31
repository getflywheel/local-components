import React from 'react';
import Offline from '../../../svg/offline.svg';
import * as styles from './OfflineBanner.scss';
import { default as IReactComponentProps } from '../../../common/structures/IReactComponentProps';

export interface IOfflineBannerProps extends IReactComponentProps {
	offline: boolean;
}

export const OfflineBanner: React.FC<IOfflineBannerProps> = (props) => {
	if (!props.offline) {
		return null;
	}

	return (
		<div id={props.id} style={props.style} className={styles.OfflineBanner_container}>
			<Offline />
			<div className={styles.OfflineBanner_text}>No internet connection.</div>
		</div>
	);
};

export default OfflineBanner;
