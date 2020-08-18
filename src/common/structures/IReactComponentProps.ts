import * as React from 'react';

export default interface IReactComponentProps {
	children?: React.ReactNode;
	className?: string;
	key?: string | number;
	id?: string;
	innerRef?: (element: HTMLElement) => void | string;
	onClick?: any;
	style?: object;
	ref?: any;
}
