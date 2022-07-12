import React from 'react';
import Bug from '../../../svg/bug.svg';
import withIconSvg from '../helpers/withIconSvg';

const BugIcon: React.FC = (props) => {
	return <Bug {...props} />;
};

export default withIconSvg(BugIcon, true, { tags: ['bug'] });
