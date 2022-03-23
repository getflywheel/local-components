import React from 'react';
import Refresh from '../../../svg/refresh.svg';
import withIconSvg from '../helpers/withIconSvg';

export const RefreshIcon: React.FC = (props) => {
	return (
		<Refresh {...props} />
	);
};

export default withIconSvg(RefreshIcon, true, { tags: ['refresh']});
