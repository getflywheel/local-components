import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

export interface Props {
	size?: 's' | 'm';
}

const Icon: React.FC<Props> = (props) => {
	const { size, ...restProps } = props;

	switch (size) {
		case 'm':
			return (
				<svg
					width="3"
					height="14"
					viewBox="0 0 3 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					{...restProps}
				>
					<path d="M0.199997 8.94983L0 0.786787C0 0.196688 0.300003 0 0.800003 0H1.7C2.2 0 2.5 0.295038 2.5 0.786787L2.3 8.94983C2.3 9.44158 2 9.73663 1.5 9.73663H1C0.5 9.73663 0.199997 9.44158 0.199997 8.94983ZM0.0999985 12.1954C0.0999985 11.7036 0.400002 11.4086 0.900002 11.4086H1.7C2.2 11.4086 2.5 11.7036 2.5 12.1954V12.8838C2.5 13.4739 2.2 13.6706 1.7 13.6706H0.900002C0.400002 13.6706 0.0999985 13.3756 0.0999985 12.8838V12.1954Z" />
				</svg>
			);
		case 's':
		default:
			return (
				<svg height="8" width="2" viewBox="-672.8 -2887 1.6 8.2" {...restProps}>
					<path
						d="M9.8,12.3v.4a.472.472,0,0,1-.5.5H8.8a.472.472,0,0,1-.5-.5v-.4a.472.472,0,0,1,.5-.5h.5A.472.472,0,0,1,9.8,12.3Zm0-6.9-.1,5.1a.472.472,0,0,1-.5.5H8.8a.56.56,0,0,1-.5-.6l-.1-5c0-.3.2-.4.5-.4h.6C9.6,5,9.8,5,9.8,5.4Z"
						transform="translate(-681 -2892)"
					/>
				</svg>
			);
	}
};

Icon.defaultProps = {
	size: 's',
};

export default withIconSvg<Props>(Icon, true, {
	additionalProps: [
		{
			propName: 'size',
			type: 'select',
			options: ['s', 'm'], // todo: how to automatically get these options???
			default: Icon.defaultProps.size,
		},
	],
	tags: ['bang', 'exclamation', 'punctuation', 'warn', 'warning', 'error'],
});
