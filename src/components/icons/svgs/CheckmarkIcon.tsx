import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

/**
 * Note: need to export interface to avoid error in Icons namespace.
 */
export interface Props {
	size?: 's' | 'l';
}

const renderIconSmall = (props: Props) => (
	<svg height="8" viewBox="0 0 10 8" width="10" {...props}>
		<path
			d="M39,20a1,1,0,0,1-.707-.293l-3-3a1,1,0,1,1,1.414-1.414l2.226,2.226,4.3-5.159a1,1,0,0,1,1.538,1.28l-5,6a1,1,0,0,1-.724.359Z"
			transform="translate(-35 -12)"
			fill="#51bb7b"
		/>
	</svg>
);

const renderIconLarge = (props: Props) => (
	<svg height="11" viewBox="0 0 14.986 11.0563" width="15" {...props}>
		<path d="M5.5 11.056a1.003 1.003 0 0 1-.71-.297L.29 6.203A1 1 0 1 1 1.71 4.796l3.77 3.818L13.256.316a1 1 0 0 1 1.46 1.367L6.23 10.74a1.003 1.003 0 0 1-.717.316z" />
	</svg>
);

const Icon: React.FC<Props> = (props) =>
	((
		{
			l: renderIconLarge(props),
			s: renderIconSmall(props),
		} as { [key in NonNullable<Props['size']>]: JSX.Element }
	)[props.size!] ||
	// @ts-ignore
	!console.log(`Invalid prop option passed to switch statement for this icon with props`, props));

Icon.defaultProps = {
	size: 's',
} as Partial<Props>;

export default withIconSvg<Props>(Icon, true, {
	additionalProps: [
		{
			propName: 'size',
			type: 'select',
			options: ['s', 'l'], // todo: how to automatically get these options???
			default: Icon.defaultProps.size,
		},
	],
	tags: ['checkbox', 'complete', 'done', 'yes'],
});
