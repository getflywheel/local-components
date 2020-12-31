import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="16"
		width="16"
		viewBox="-7983 -2098 16 16"
		{...props}
	>
		<g transform="translate(-8578 -2344)">
			<path className="cls-1"
				  d="M8 2a6 6 0 1 1-6 6 6.018 6.018 0 0 1 6-6m0-2a8 8 0 1 0 8 8 8.024 8.024 0 0 0-8-8z"
				  transform="translate(595 246)"/>
			<path className="cls-1"
				  d="M8.2 4.2h-.4a.713.713 0 0 0-.7.8v.1a.632.632 0 0 0 .7.7h.4a.713.713 0 0 0 .8-.7v-.2a.849.849 0 0 0-.8-.7z"
				  transform="translate(595 246)"/>
			<path className="cls-1"
				  d="M8.2 7h-.4a.684.684 0 0 0-.7.7v3.4a.713.713 0 0 0 .7.8h.4c.5 0 .7-.3.7-.8V7.7a.684.684 0 0 0-.7-.7z"
				  transform="translate(595 246)"/>
		</g>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'circle',
			'hint',
			'info',
			'information',
			'round',
		],
	},
);
