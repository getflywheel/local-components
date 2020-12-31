import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="14"
		width="24"
		viewBox="-5010 525 24.079 14"
		{...props}
	>
		<path fill="#c7c4c4" d="M23.8,6.3C23.5,6.1,18.4,0,12,0S.4,6.1.2,6.4A1.048,1.048,0,0,0,.1,7.6C.3,7.8,4.5,14,12,14c7.4,0,11.7-6.2,11.9-6.5A1.063,1.063,0,0,0,23.8,6.3ZM12,12C6.9,12,3.5,8.5,2.3,7.1,3.7,5.6,7.6,2,12,2s8.3,3.6,9.7,5C20.5,8.5,17.1,12,12,12Zm0-9a4,4,0,1,0,4,4A4.012,4.012,0,0,0,12,3Zm0,6a2,2,0,1,1,2-2A2.006,2.006,0,0,1,12,9Z" transform="translate(-5009.961 525)"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'eye',
			'visible',
		],
	},
);
