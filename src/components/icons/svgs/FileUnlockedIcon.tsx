import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="12"
		width="10"
		viewBox="0 0 10 12"
		{...props}
	>
		<path d="M384.479-309h-4v-1a1,1,0,0,1,1-1,1,1,0,0,0,1-1,1,1,0,0,0-1-1,3,3,0,0,0-3,3v1a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2v-4A2,2,0,0,0,384.479-309Zm0,5.75a.25.25,0,0,1-.25.25h-5.5a.25.25,0,0,1-.25-.25v-3.5a.25.25,0,0,1,.25-.25h5.5a.25.25,0,0,1,.25.25Z" transform="translate(-376.479 313)" fill="#9f9c9c"/>
	</svg>

);

export default withIconSvg(
	Icon,
	false,
	{
		tags: [
			'file',
			'unlocked',
		],
	},
);
