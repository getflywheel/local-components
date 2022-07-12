import React from 'react';
import SiteShell from '../../../svg/site-shell.svg';
import withIconSvg from '../helpers/withIconSvg';

const SiteShellIcon: React.FC = (props) => {
	return <SiteShell {...props} />;
};

export default withIconSvg(SiteShellIcon, true, { tags: ['site shell', 'shell', 'terminal', 'open'] });
