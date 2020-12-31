import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="10"
		width="8"
		viewBox="0 0 8.001 10"
		{...props}
	>
		<path d="M19,10a1,1,0,0,1-.554-.168l-6-4a1,1,0,0,1,0-1.664l6-4a1,1,0,1,1,1.11,1.664L14.8,5l4.752,3.168A1,1,0,0,1,19,10Z" transform="translate(-12)" fill="#51bb7b"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'arrow',
			'caret',
			'chevron',
			'file',
			'left',
			'less',
			'lt',
		],
	},
);
