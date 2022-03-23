import React from 'react';
import WP from '../../../svg/wordpress.svg';
import withIconSvg from '../helpers/withIconSvg';

export const WPIcon: React.FC = (props) => {
	return (
		<WP {...props} />
	);
};

export default withIconSvg(WPIcon, true, { tags: ['wp', 'wordpress']});
