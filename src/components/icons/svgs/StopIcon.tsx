import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="14"
		width="14"
		viewBox="0 0 14 14"
		{...props}
	>
		<rect width="14" height="14" rx="2.01" ry="2.01"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'rectangle',
			'square',
			'stop',
		],
	},
);
