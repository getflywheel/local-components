import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => (
	<svg
		height="8"
		width="8"
		viewBox="0 0 8 8"
		{...props}
	>
		<path d="M439.214-51.325l-2.293-2.292,2.292-2.293a1,1,0,0,0,0-1.414,1,1,0,0,0-1.414,0l-2.292,2.293-2.293-2.292a1,1,0,0,0-1.414,0,1,1,0,0,0,0,1.414l2.293,2.292L431.8-51.324a1,1,0,0,0,0,1.414,1,1,0,0,0,.707.293,1,1,0,0,0,.707-.293l2.292-2.293,2.293,2.292a1,1,0,0,0,.707.293,1,1,0,0,0,.707-.293A1,1,0,0,0,439.214-51.325Z" transform="translate(-431.507 57.617)" fill="#ef4e65"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'deleted',
			'file',
			'remove',
			'removed',
			'x',
		],
	},
);
