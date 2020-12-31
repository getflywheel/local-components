import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="4"
		width="20"
		viewBox="212 4608 20 4"
		{...props}
	>
		<g transform="translate(-908 4465)">
			<g transform="translate(1417 -877) rotate(90)">
				<circle cx="2" cy="2" r="2" transform="translate(1020 277)"/>
				<circle cx="2" cy="2" r="2" transform="translate(1020 285)"/>
				<circle cx="2" cy="2" r="2" transform="translate(1020 293)"/>
			</g>
		</g>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'dots',
			'ellipsis',
			'more',
			'three',
			'truncate',
		],
	},
);
