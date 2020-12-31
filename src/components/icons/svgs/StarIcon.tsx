import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="12"
		width="12"
		viewBox="0 0 12 12"
		{...props}
	>
		<path d="M157.243 448.332a1.132 1.132 0 0 0-.326 1l.4 2.348a1.128 1.128 0 0 1-1.642 1.193l-2.11-1.109a1.136 1.136 0 0 0-1.054 0l-2.11 1.109a1.128 1.128 0 0 1-1.642-1.193l.4-2.348a1.135 1.135 0 0 0-.325-1l-1.708-1.663a1.132 1.132 0 0 1 .628-1.931l2.358-.342a1.133 1.133 0 0 0 .852-.619l1.055-2.137a1.132 1.132 0 0 1 2.03 0l1.055 2.137a1.131 1.131 0 0 0 .852.619l2.358.342a1.132 1.132 0 0 1 .628 1.931z" transform="translate(-146.791 -441.008)"/>
	</svg>

);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'favorite',
			'star',
		],
	},
);
