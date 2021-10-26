import React from 'react';
import Bug from '../../../svg/bug.svg';
import withIconSvg from '../helpers/withIconSvg';

export const BugIcon: React.FC = ({...props}) => {
	return (
		<Bug {...props} />
	);
};

export default withIconSvg(BugIcon, false, { tags: ['bug']});
