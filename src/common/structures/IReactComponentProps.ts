import * as React from 'react';

export default interface IReactComponentProps {
	onKeyDown?: any;
	children?: React.ReactNode;
	className?: string;
	key?: string | number;
	id?: string;
	innerRef?: (element: HTMLElement) => void | string;
	onClick?: any;
	onMouseDown?: any;
	onBlur?: any;
	onFocus?: any;
	style?: object;
	ref?: any;
	role?: string;
	tabIndex?: number;
}
