import React from 'react';
import Clock from '../../../svg/clock.svg';
import withIconSvg from '../helpers/withIconSvg';

export const ClockIcon: React.FC = ({...props}) => {
	return (
		<Clock {...props} />
	);
};

export default withIconSvg(ClockIcon, true, { tags: ['clock', 'time', 'since']});
