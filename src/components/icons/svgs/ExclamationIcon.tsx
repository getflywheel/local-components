import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="8"
		width="2"
		viewBox="-672.8 -2887 1.6 8.2"
		{...props}
	>
		<path d="M9.8,12.3v.4a.472.472,0,0,1-.5.5H8.8a.472.472,0,0,1-.5-.5v-.4a.472.472,0,0,1,.5-.5h.5A.472.472,0,0,1,9.8,12.3Zm0-6.9-.1,5.1a.472.472,0,0,1-.5.5H8.8a.56.56,0,0,1-.5-.6l-.1-5c0-.3.2-.4.5-.4h.6C9.6,5,9.8,5,9.8,5.4Z" transform="translate(-681 -2892)"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'bang',
			'exclamation',
			'punctuation',
			'warn',
			'warning',
		],
	},
);
