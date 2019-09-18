import * as React from 'react';

export default interface IReactComponentProps {
	children?: React.ReactNode;
	className?: string;
	key?: string | number;
	innerRef?: (element: HTMLElement) => void | string;
	onClick?: any;
	style?: object;
	ref?: any;
}
