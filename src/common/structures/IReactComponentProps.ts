import * as React from 'react';
import Handler from './Handler';

export default interface IReactComponentProps {

	children?: React.ReactNode;
	className?: string;
	key?: string | number;
	onClick?: Handler;
	style?: object;
	ref?: any;

}
