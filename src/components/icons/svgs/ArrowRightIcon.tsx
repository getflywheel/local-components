import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

/**
 * Note: need to export to avoid error in Icons namespace.
 */
export interface SvgProps {
	className?: string,
}

const ArrowRightIcon: React.FC<SvgProps> = (props) => (
	<svg
		className={props.className}
		height="14"
		viewBox="0 0 5.936 13.999"
		width="6"
		{...props}
	>
		<path d="M1 14a1 1 0 01-.837-1.547L3.74 6.97.165 1.55a1 1 0 011.67-1.1L5.77 6.415a1 1 0 01.003 1.097l-3.935 6.033a.998.998 0 01-.838.453z"/>
	</svg>
);

export default withIconSvg(
	ArrowRightIcon,
	true,
	{
		tags: [
			'caret',
			'chevron',
		],
	},
);
