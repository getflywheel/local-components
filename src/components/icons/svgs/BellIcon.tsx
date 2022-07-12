import React from 'react';
import Bell from '../../../svg/bell.svg';
import withIconSvg from '../helpers/withIconSvg';

const BellIcon: React.FC = (props) => {
	return <Bell {...props} />;
};

export default withIconSvg(BellIcon, true, { tags: ['bell', 'request', 'notification'] });
