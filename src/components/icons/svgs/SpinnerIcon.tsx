import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="22"
		width="18"
		viewBox="-4590 -2755 17.89 22.1"
		{...props}
	>
		<g transform="translate(-4590.055 -2755.1)">
			<path className="a"
				  d="M18.1,54.3l.6-.6a1,1,0,0,0-1.4-1.4l-2,2-.2.3a1,1,0,0,0,0,.8l.2.3,2,2a1,1,0,0,0,1.6-1.1A7,7,0,0,1,19.5,69a1,1,0,0,0,.5,1.9h.5a9,9,0,0,0-2.4-16.5Z"
				  transform="translate(-7 -52)"/>
			<path className="a"
				  d="M16.9,70.6l-.2-.3-2-2a1,1,0,0,0-1.6,1.1A7,7,0,0,1,12.5,57a1,1,0,0,0-1-1.7,9,9,0,0,0,2.4,16.5l-.6.6a1,1,0,1,0,1.4,1.4l2-2,.2-.3A1,1,0,0,0,16.9,70.6Z"
				  transform="translate(-7 -52)"/>
		</g>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'progress',
			'refresh',
			'spinner',
		],
	},
);
