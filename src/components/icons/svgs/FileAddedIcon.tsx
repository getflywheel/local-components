import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="10"
		width="10"
		viewBox="0 0 10 10"
		{...props}
	>
		<path d="M439.507-123.617h-3v-3a1,1,0,0,0-1-1,1,1,0,0,0-1,1v3h-3a1,1,0,0,0-1,1,1,1,0,0,0,1,1h3v3a1,1,0,0,0,1,1,1,1,0,0,0,1-1v-3h3a1,1,0,0,0,1-1A1,1,0,0,0,439.507-123.617Z" transform="translate(-430.507 127.617)" fill="#51bb7b"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'add',
			'added',
			'created',
			'file',
			'new',
		],
	},
);
