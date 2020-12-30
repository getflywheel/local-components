import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="8"
		viewBox="0 0 8 8"
		width="8"
		{...props}
	>
		<circle cx="4" cy="4" r="4"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'round',
		],
	},
);
