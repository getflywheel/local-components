import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="32"
		viewBox="0 0 32 32"
		width="32"
		{...props}
	>
		<path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm4.73 13.67l-5.49 6.06a1 1 0 0 1-.72.33 1 1 0 0 1-.71-.3l-2.5-2.56a1 1 0 1 1 1.43-1.4l1.76 1.8 4.77-5.27a1 1 0 1 1 1.48 1.34z"/>
	</svg>

);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'checkbox',
			'circle',
			'complete',
			'done',
			'round',
			'yes',
		],
	},
);
