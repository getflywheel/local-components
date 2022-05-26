import React from 'react';
import Arrow from '../../../svg/arrow--left.svg';
import withIconSvg from '../helpers/withIconSvg';

export const ArrowLeftIcon: React.FC = (props) => {
	return <Arrow {...props} />;
};

export default withIconSvg(ArrowLeftIcon, true, { tags: ['arrow', 'left', 'back', 'arrowleft'] });
