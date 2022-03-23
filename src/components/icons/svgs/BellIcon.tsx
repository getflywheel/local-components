import React from 'react';
import Bell from '../../../svg/bell.svg';
import withIconSvg from '../helpers/withIconSvg';

export const BellIcon: React.FC = (props) => {
	return (
		<Bell {...props} />
	);
};

export default withIconSvg(BellIcon, false, { tags: ['bell', 'request', 'notification']});
