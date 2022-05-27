import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';
import ConnectPush from '../../../svg/connect-push.svg';

const ConnectPushIcon: React.FC = (props) => <ConnectPush {...props} />;

export default withIconSvg(ConnectPushIcon, true, {
	tags: ['connect', 'host', 'push', 'remote'],
});
