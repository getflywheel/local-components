import React from 'react';

export default interface IReactComponentProps {

	children?: React.ReactNode;
	className?: string;
	key?: string | number;
	onClick?: (...params: any[]) => any;
	style?: object;
	ref?: any;

}
