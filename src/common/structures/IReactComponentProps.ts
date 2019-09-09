import * as React from 'react';

export default interface IReactComponentProps {

	children?: React.ReactNode;
	className?: string;
	key?: string | number;
	onClick?: any;
	style?: object;
	ref?: any;

}
