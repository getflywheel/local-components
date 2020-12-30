import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="2"
		viewBox="0 0 8 2"
		width="8"
		{...props}
	>
		<path d="M19,8H13a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" transform="translate(-12 -6)" fill="#51bb7b"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'checkbox',
		],
	},
);
