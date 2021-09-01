import React from 'react';
import Offline from '../../../svg/offline.svg';
import withIconSvg from '../helpers/withIconSvg';

export const OfflineIcon: React.FC = ({...props}) => {
	return (
		<Offline {...props} />
	);
};

export default withIconSvg(OfflineIcon, false, { tags: ['offline']});
