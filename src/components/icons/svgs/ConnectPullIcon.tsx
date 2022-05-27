import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';
import ConnectPull from '../../../svg/connect-pull.svg';

const ConnectPullIcon: React.FC = (props) => <ConnectPull {...props} />;

export default withIconSvg(ConnectPullIcon, true, {
	tags: ['connect', 'host', 'pull', 'remote'],
});
