import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

/**
 * Note: need to export interface to avoid error in Icons namespace.
 */
export interface Props {
	size?: 's' | 'l',
}

const renderIconSmall = (props: Props) => (
	<svg
		height="8"
		viewBox="0 0 8 8"
		width="8"
		{...props}
	>
		<path d="M7.71 6.29L5.41 4l2.3-2.29A1 1 0 0 0 6.29.29L4 2.59 1.71.29A1 1 0 1 0 .29 1.71L2.59 4 .29 6.29a1 1 0 1 0 1.42 1.42L4 5.41l2.29 2.3a1 1 0 0 0 1.42-1.42z"/>
	</svg>
);

const renderIconLarge = (props: Props) => (
	<svg
		height="18"
		viewBox="0 0 17.56 17.56"
		width="18"
		{...props}
	>
		<path d="M8.78 10.19l7.07 7.07a1 1 0 1 0 1.41-1.41l-7.07-7.07 7.07-7.07A1 1 0 1 0 15.85.29L8.78 7.36 1.71.29A1 1 0 1 0 .29 1.71l7.07 7.07-7.07 7.07a1 1 0 0 0 1.41 1.41z"/>
	</svg>
);

const Icon: React.FC<Props> = (props) => (
	({
		'l': renderIconLarge(props),
		's': renderIconSmall(props),
	} as {[key in NonNullable<Props['size']>]: JSX.Element})[props.size!]
	// @ts-ignore
	|| (!console.log(`Invalid prop option passed to switch statement for this icon with props`, props)
	)
);

Icon.defaultProps = {
	size: 's',
} as Partial<Props>;

export default withIconSvg<Props>(
	Icon,
	true,
	{
		additionalProps: [
			{
				propName: 'size',
				type: 'select',
				options: ['s', 'l'], // todo - crum: how to automatically get these options???
				default: Icon.defaultProps.size,
			},
		],
		tags: [
			'dismiss',
			'x',
		],
	},
);
