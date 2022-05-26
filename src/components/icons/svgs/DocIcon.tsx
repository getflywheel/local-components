import React from 'react';
import Doc from '../../../svg/doc.svg';
import withIconSvg from '../helpers/withIconSvg';

export const DocIcon: React.FC = (props) => {
	return <Doc {...props} />;
};

export default withIconSvg(DocIcon, false, { tags: ['doc', 'article'] }, true);
