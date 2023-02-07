import React from 'react';
import Drag from '../../../svg/drag.svg';
import withIconSvg from '../helpers/withIconSvg';

const DragIcon: React.FC = (props) => {
	return <Drag {...props} />;
};

export default withIconSvg(DragIcon, true, { tags: ['drag', 'move', 'draggable'] });
