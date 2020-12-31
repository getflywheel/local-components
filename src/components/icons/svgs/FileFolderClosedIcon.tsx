import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="12"
		width="16"
		viewBox="0 0 15.8 12"
		{...props}
	>
		<g transform="translate(-419 -192)">
			<path d="M14,30.979H2a1,1,0,0,1-1-.9l-1-10a1,1,0,0,1,1-1.1H6a1,1,0,0,1,.895.553l.723,1.447H14.8a1,1,0,0,1,.995,1.1l-.8,8A1,1,0,0,1,14,30.979Zm-11.1-2H13.1l.6-6H7a1,1,0,0,1-.895-.552l-.723-1.448H2.105Z" transform="translate(419 173.021)" fill="#9f9c9c"/>
			<path d="M2.9,28.979H13.1l.6-6H7a1,1,0,0,1-.895-.552l-.723-1.448H2.105Z" transform="translate(419 173.021)" fill="#e7e7e7"/>
		</g>
	</svg>
);

export default withIconSvg(
	Icon,
	false,
	{
		tags: [
			'closed',
			'directory',
			'file',
			'folder',
		],
	},
);
