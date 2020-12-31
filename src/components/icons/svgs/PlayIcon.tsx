import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="14"
		width="14"
		viewBox="0 0 14 14"
		{...props}
	>
		<path d="M1.58 14A1.58 1.58 0 0 1 0 12.42V1.58A1.58 1.58 0 0 1 2.28.17l10.85 5.42a1.58 1.58 0 0 1 0 2.82L2.28 13.83a1.58 1.58 0 0 1-.7.17z"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'arrow',
			'play',
			'start',
			'triangle',
		],
	},
);
