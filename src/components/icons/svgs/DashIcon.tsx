import React from 'react';
import Dash from '../../../svg/dash.svg';
import withIconSvg from '../helpers/withIconSvg';

const DashIcon: React.FC = (props) => {
	return <Dash {...props} />;
};

export default withIconSvg(DashIcon, true, { tags: ['dash', 'line', 'open', 'caretopen'] });
