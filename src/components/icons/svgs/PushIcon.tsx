import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="18"
		width="24"
		viewBox="0 0 24 18"
		{...props}
	>
		<path d="M15.55 10.17a1 1 0 1 1-1.11 1.66l-1.45-1V17a1 1 0 0 1-2 0v-6.13l-1.45 1a1 1 0 0 1-1.11-1.66l3-2 .11-.05h.1a1 1 0 0 1 .69 0h.1l.11.05zM17 2a6.37 6.37 0 0 0-.67 0A8 8 0 0 0 3.18 6.35 5 5 0 0 0 5 16a1 1 0 0 0 0-2 3 3 0 0 1-.7-5.91 1 1 0 0 0 .76-.85 6 6 0 0 1 10.22-3.45 1 1 0 0 0 .88.28 5 5 0 0 1 2.51 9.64 1 1 0 1 0 .67 1.89A7 7 0 0 0 17 2z"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'push',
		],
	},
);
