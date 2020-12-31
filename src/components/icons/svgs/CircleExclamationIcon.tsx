import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="58"
		width="58"
		viewBox="10853 10732 58 58"
		{...props}
	>
		<g transform="translate(10282 10549)">
			<g transform="translate(571 183)">
				<path d="M29,2A27,27,0,1,1,2,29,27.015,27.015,0,0,1,29,2m0-2A29,29,0,1,0,58,29,29.021,29.021,0,0,0,29,0Z"/>
			</g>
			<g transform="translate(571 183)">
				<path d="M27.1,34.3l-.2-18.7a1.238,1.238,0,0,1,1.3-1.4h1.4A1.265,1.265,0,0,1,31,15.6l-.2,18.7a1.265,1.265,0,0,1-1.4,1.4h-.9A1.265,1.265,0,0,1,27.1,34.3Zm-.2,6.8a1.265,1.265,0,0,1,1.4-1.4h1.4a1.265,1.265,0,0,1,1.4,1.4v1.3a1.265,1.265,0,0,1-1.4,1.4H28.3a1.265,1.265,0,0,1-1.4-1.4Z"/>
			</g>
		</g>
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
