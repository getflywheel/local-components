import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

interface PropType {
	size: string;
}

const Icon: React.FC<PropType> = (props) => {
	const { size = 'small' } = props;

	switch (size) {
		case 'large':
			return (
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="#9F9C9C"
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM13 13C13 12.4477 13.4477 12 14 12H16C16.5523 12 17 12.4477 17 13V23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23V14H14C13.4477 14 13 13.5523 13 13ZM15.5 10C16.3284 10 17 9.32843 17 8.5C17 7.67157 16.3284 7 15.5 7C14.6716 7 14 7.67157 14 8.5C14 9.32843 14.6716 10 15.5 10Z"
					/>
				</svg>
			);
		case 'small':
		default:
			return (
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="#9F9C9C"
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15ZM9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17ZM8 8C7.44772 8 7 8.44772 7 9C7 9.55229 7.44772 10 8 10V12.5C8 13.0523 8.44772 13.5 9 13.5C9.55229 13.5 10 13.0523 10 12.5V9C10 8.44772 9.55228 8 9 8H8ZM9 7C9.55229 7 10 6.55228 10 6C10 5.44772 9.55229 5 9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7Z"
					/>
				</svg>
			);
	}
};

export default withIconSvg(Icon, true, {
	tags: ['circle', 'hint', 'info', 'information', 'round'],
});
