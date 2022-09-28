import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

/**
 * Note: need to export interface to avoid error in Icons namespace.
 */
export interface Props {
	size?: 's' | 'm' | 'l';
}

const renderIconSmall = (props: Props) => (
	<svg height="8" viewBox="0 0 8 8" width="8" {...props}>
		<path d="M7.71 6.29L5.41 4l2.3-2.29A1 1 0 0 0 6.29.29L4 2.59 1.71.29A1 1 0 1 0 .29 1.71L2.59 4 .29 6.29a1 1 0 1 0 1.42 1.42L4 5.41l2.29 2.3a1 1 0 0 0 1.42-1.42z" />
	</svg>
);

const renderIconMedium = (props: Props) => (
	<svg width="12" height="12" viewBox="0 0 12 12" {...props}>
		<path d="M11.7 10.1301L7.4 5.901L11.7 1.67194C12.1 1.27854 12.1 0.68845 11.7 0.29505C11.3 -0.09835 10.7 -0.09835 10.3 0.29505L6 4.5241L1.7 0.29505C1.3 -0.09835 0.7 -0.09835 0.3 0.29505C-0.1 0.68845 -0.1 1.27854 0.3 1.67194L4.6 5.901L0.3 10.1301C-0.1 10.5235 -0.1 11.1135 0.3 11.5069C0.5 11.7036 0.8 11.802 1 11.802C1.2 11.802 1.5 11.7036 1.7 11.5069L6 7.2779L10.3 11.5069C10.5 11.7036 10.8 11.802 11 11.802C11.2 11.802 11.5 11.7036 11.7 11.5069C12.1 11.1135 12.1 10.5235 11.7 10.1301Z" />
	</svg>
);

const renderIconLarge = (props: Props) => (
	<svg height="18" viewBox="0 0 17.56 17.56" width="18" {...props}>
		<path d="M8.78 10.19l7.07 7.07a1 1 0 1 0 1.41-1.41l-7.07-7.07 7.07-7.07A1 1 0 1 0 15.85.29L8.78 7.36 1.71.29A1 1 0 1 0 .29 1.71l7.07 7.07-7.07 7.07a1 1 0 0 0 1.41 1.41z" />
	</svg>
);

const Icon: React.FC<Props> = (props) =>
	((
		{
			l: renderIconLarge(props),
			m: renderIconMedium(props),
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
			options: ['s', 'm', 'l'], // todo: how to automatically get these options???
			default: Icon.defaultProps.size,
		},
	],
	tags: ['close', 'dismiss', 'x'],
});
