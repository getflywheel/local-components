import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

/**
 * Note: need to export to avoid error in Icons namespace.
 */
export interface ISvgProps {
	className?: string,
}

const Icon: React.FC<ISvgProps> = (props) => (
	<svg
		className={props.className}
		height="6"
		viewBox="0 0 14 5.94"
		width="14"
		{...props}
	>
		<path d="M14 1a1 1 0 00-1.55-.84L7 3.74 1.55.17a1 1 0 10-1.1 1.67l6 3.94a1 1 0 001.1 0l6-3.93A1 1 0 0014 1z"/>
	</svg>
);

export default withIconSvg(
	Icon,
	true,
	{
		displayName: 'Caret',
		tags: [
			'arrow',
			'chevron',
			'down',
		],
	},
);
