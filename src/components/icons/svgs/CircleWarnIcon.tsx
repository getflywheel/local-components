import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="18"
		width="18"
		viewBox="-8207 -2329 18 18"
		{...props}
	>
		<path d="M9,0a9,9,0,1,0,9,9A8.963,8.963,0,0,0,9,0ZM9,16a7,7,0,1,1,7-7A6.957,6.957,0,0,1,9,16Zm.8-3.7v.4a.472.472,0,0,1-.5.5H8.8a.472.472,0,0,1-.5-.5v-.4a.472.472,0,0,1,.5-.5h.5A.472.472,0,0,1,9.8,12.3Zm0-6.9-.1,5.1a.472.472,0,0,1-.5.5H8.8a.56.56,0,0,1-.5-.6l-.1-5c0-.3.2-.4.5-.4h.6C9.6,5,9.8,5,9.8,5.4Z" transform="translate(-8207 -2329)"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'bang',
			'circle',
			'exclamation',
			'punctuation',
			'round',
			'warn',
			'warning',
		],
	},
);
