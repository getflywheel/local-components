import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="12"
		width="10"
		viewBox="0 0 10 12"
		{...props}
	>
		<path d="M397.479-309h0v-1a3,3,0,0,0-3-3,3,3,0,0,0-3,3v1a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2v-4A2,2,0,0,0,397.479-309Zm-3-2a1,1,0,0,1,1,1v1h-2v-1A1,1,0,0,1,394.479-311Z" transform="translate(-389.479 313)" fill="#262727"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'file',
			'lock',
		],
	},
);
