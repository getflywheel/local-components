import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

export interface Props {
	size?: 's' | 'l';
}

const Icon: React.FC<Props> = (props) => {
	const { size, ...restProps } = props;

	switch (size) {
		case 'l':
			return (
				<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...restProps}>
					<path
						fillRule="evenodd"
						d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM13 13C13 12.4477 13.4477 12 14 12H16C16.5523 12 17 12.4477 17 13V23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23V14H14C13.4477 14 13 13.5523 13 13ZM15.5 10C16.3284 10 17 9.32843 17 8.5C17 7.67157 16.3284 7 15.5 7C14.6716 7 14 7.67157 14 8.5C14 9.32843 14.6716 10 15.5 10Z"
					/>
				</svg>
			);
		case 's':
		default:
			return (
				<svg viewBox="0 0 18 18" width="18" height="18" xmlns="http://www.w3.org/2000/svg" {...restProps}>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13403 2 2 5.13401 2 9C2 12.866 5.13403 16 9 16ZM9 18C13.9705 18 18 13.9706 18 9C18 4.02943 13.9705 0 9 0C4.02954 0 0 4.02943 0 9C0 13.9706 4.02954 18 9 18ZM7.875 8C7.32275 8 6.875 8.44772 6.875 9C6.875 9.55228 7.32275 10 7.875 10H8V12.9375C8 13.4898 8.44775 13.9375 9 13.9375C9.55225 13.9375 10 13.4898 10 12.9375V9C10 8.44772 9.55225 8 9 8H7.875ZM9 6.75C9.62134 6.75 10.125 6.24632 10.125 5.625C10.125 5.00368 9.62134 4.5 9 4.5C8.37866 4.5 7.875 5.00368 7.875 5.625C7.875 6.24632 8.37866 6.75 9 6.75Z"
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
			options: ['s', 'l'], // todo: how to automatically get these options???
			default: Icon.defaultProps.size,
		},
	],
	tags: ['circle', 'hint', 'info', 'information', 'round'],
});
