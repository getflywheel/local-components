import React from 'react';
import Yield from '../../../svg/yield.svg';
import withIconSvg from '../helpers/withIconSvg';

const YieldIcon: React.FC = (props) => {
	return <Yield {...props} />;
};

export default withIconSvg(YieldIcon, true, { tags: ['yield', 'caution', 'warning', 'error', 'outage'] });
