import React from 'react';
import Close from '../../../svg/close--small--v2.svg';
import withIconSvg from '../helpers/withIconSvg';

export const CloseSmallIcon: React.FC = ({...props}) => {
	return (
		<Close {...props} />
	);
};

export default withIconSvg(CloseSmallIcon, true, { tags: ['close', 'small', 'exit', 'dismiss']});
