import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';
import CircleOutline from '../../../svg/circle-outline.svg';

const CircleOutlineIcon: React.FC = (props) => <CircleOutline {...props} />;

export default withIconSvg(CircleOutlineIcon, true, {
	tags: ['circle', 'outline', 'round', 'bullet', 'unselected', 'empty', 'unfilled'],
});
