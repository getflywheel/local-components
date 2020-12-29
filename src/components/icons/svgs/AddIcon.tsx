import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="24"
		viewBox="0 0 24 24"
		width="24"
		{...props}
	>
		<path d="M13 13h10a1 1 0 100-2H13V1a1 1 0 00-2 0v10H1a1 1 0 100 2h10v10a1 1 0 102 0z"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		displayName: 'Add',
		tags: [
			'create',
			'new',
			'plus',
		],
	},
);
