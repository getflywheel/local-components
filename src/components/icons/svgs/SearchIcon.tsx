import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="18"
		width="18"
		viewBox="0 0 17.725 17.8"
		{...props}
	>
		<path d="M17.5,16.1l-4.9-4.9a6.9,6.9,0,0,0-.7-9.1A6.662,6.662,0,0,0,7,0,6.662,6.662,0,0,0,2.1,2.1a7.063,7.063,0,0,0,0,9.9A6.966,6.966,0,0,0,7,14a7.294,7.294,0,0,0,4.2-1.4l4.9,4.9a.967.967,0,0,0,1.4,0A.967.967,0,0,0,17.5,16.1Zm-14-5.6a5.134,5.134,0,0,1,0-7.1A5,5,0,0,1,7,2a4.691,4.691,0,0,1,3.5,1.5A5.289,5.289,0,0,1,12,7a4.691,4.691,0,0,1-1.5,3.5A5.289,5.289,0,0,1,7,12,4.691,4.691,0,0,1,3.5,10.5Z" transform="translate(-0.075)"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'find',
			'search',
		],
	},
);
