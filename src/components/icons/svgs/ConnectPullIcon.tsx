import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';
import ConnectPush from '../../../svg/connect-pull.svg';

const ConnectPushIcon: React.FC = (props) => <ConnectPush {...props} />;

export default withIconSvg(
	ConnectPushIcon,
	false,
	{
		tags: ['connect', 'host', 'push', 'remote'],
	},
	true
);
