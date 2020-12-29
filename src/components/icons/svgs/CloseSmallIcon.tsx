import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="8"
		viewBox="0 0 8 8"
		width="8"
		{...props}
	>
		<path d="M7.71 6.29L5.41 4l2.3-2.29A1 1 0 0 0 6.29.29L4 2.59 1.71.29A1 1 0 1 0 .29 1.71L2.59 4 .29 6.29a1 1 0 1 0 1.42 1.42L4 5.41l2.29 2.3a1 1 0 0 0 1.42-1.42z"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		displayName: 'Close Small',
		tags: [
			'dismiss',
			'x',
		],
	},
);
