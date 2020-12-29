import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="18"
		viewBox="0 0 17.56 17.56"
		width="18"
		{...props}
	>
		<path d="M8.78 10.19l7.07 7.07a1 1 0 1 0 1.41-1.41l-7.07-7.07 7.07-7.07A1 1 0 1 0 15.85.29L8.78 7.36 1.71.29A1 1 0 1 0 .29 1.71l7.07 7.07-7.07 7.07a1 1 0 0 0 1.41 1.41z"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		displayName: 'Close Large',
		tags: [
			'dismiss',
			'x',
		],
	},
);
