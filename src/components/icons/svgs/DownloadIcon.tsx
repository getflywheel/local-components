import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="14"
		width="10"
		viewBox="-3539 -387 10 14"
		{...props}
	>
		<path fill="#fff" d="M.1,6.6a1.062,1.062,0,0,1,1.3-.5L4,7.4V1A.945.945,0,0,1,5,0,.945.945,0,0,1,6,1V7.4L8.6,6.1a1.053,1.053,0,0,1,1.3.4,1.094,1.094,0,0,1-.4,1.3l-4,2h0A.551.551,0,0,1,5,10c-.2,0-.3,0-.4-.1h0l-4-2A1.062,1.062,0,0,1,.1,6.6ZM9,12H1a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Z" transform="translate(-3539 -387)"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'arrow',
			'down',
			'download',
			'save',
		],
	},
);
