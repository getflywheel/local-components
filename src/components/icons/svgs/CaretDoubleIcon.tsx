import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

/**
 * Note: need to export to avoid error in Icons namespace.
 * todo - crum: look into this
 */
export interface ISvgProps {
	className?: string,
}

const Icon: React.FC<ISvgProps> = (props) => (
	<svg
		className={props.className}
		height="14"
		viewBox="0 0 11.9 14"
		width="12"
		{...props}
	>
		<path d="M5.77 6.42a1 1 0 010 1.1l-3.94 6a1 1 0 11-1.67-1.07L3.74 7 .17 1.55A1 1 0 011.84.45zm6 0L7.8.45a1 1 0 00-1.67 1.1L9.71 7l-3.58 5.45a1 1 0 101.67 1.09l3.93-6a1 1 0 00.01-1.12z"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		tags: [
			'arrow',
			'chevron',
			'right',
		],
	},
);
