import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="16"
		width="16"
		viewBox="0 0 16.229 16.228"
		{...props}
	>
		<defs>
			<style>{".a{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:2px;}"}</style>
		</defs>
		<g transform="translate(0.414 0.414)">
			<line className="a" x1="5.6" y1="5.7" transform="translate(8.8 1)"/>
			<line className="a" x1="8.5" y1="8.5" transform="translate(1 5.9)"/>
			<line className="a" y1="3.5" x2="3.5" transform="translate(1.7 10.2)"/>
			<line className="a" x1="7.1" y2="5.7" transform="translate(3.1 2.4)"/>
			<line className="a" x1="5.6" y2="7.1" transform="translate(7.4 5.2)"/>
		</g>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'favorite',
			'pin',
			'save',
		],
	},
);
