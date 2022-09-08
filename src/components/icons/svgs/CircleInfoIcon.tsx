import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';

const Icon: React.FC = (props) => {
	return (
		<svg width="18" height="18" viewBox="0 0 18 18" fill="#9F9C9C" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				fillRule="evenodd"
				d="M9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15ZM9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17ZM8 8C7.44772 8 7 8.44772 7 9C7 9.55229 7.44772 10 8 10V12.5C8 13.0523 8.44772 13.5 9 13.5C9.55229 13.5 10 13.0523 10 12.5V9C10 8.44772 9.55228 8 9 8H8ZM9 7C9.55229 7 10 6.55228 10 6C10 5.44772 9.55229 5 9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7Z"
			/>
		</svg>
	);
};

export default withIconSvg(Icon, true, {
	tags: ['circle', 'hint', 'info', 'information', 'round'],
});
