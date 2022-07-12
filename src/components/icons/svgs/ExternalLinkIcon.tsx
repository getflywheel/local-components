import React from 'react';
import ExternalLink from '../../../svg/external-link.svg';
import withIconSvg from '../helpers/withIconSvg';

const ExternalLinkIcon: React.FC = (props) => {
	return <ExternalLink {...props} />;
};

export default withIconSvg(ExternalLinkIcon, true, { tags: ['external', 'browser', 'open', 'link'] });
