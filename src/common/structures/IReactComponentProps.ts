import * as React from 'react';

export default interface IReactComponentProps<T = HTMLElement> {
	onKeyDown?: React.HTMLProps<T>['onKeyDown'];
	children?: React.DOMAttributes<T>['children'];
	className?: string;
	key?: string | number;
	id?: string;
	innerRef?: (element: HTMLElement) => void | string;
	onClick?: React.HTMLProps<T>['onClick'];
	onMouseDown?: React.HTMLProps<T>['onMouseDown'];
	onMouseUp?: React.HTMLProps<T>['onMouseUp'];
	onBlur?: React.HTMLProps<T>['onBlur'];
	onFocus?: React.HTMLProps<T>['onFocus'];
	style?: object;
	ref?: any;
	role?: string;
	tabIndex?: number;
	'aria-checked'?: boolean;
	onContextMenu?: React.HTMLProps<T>['onContextMenu'];
	onDoubleClick?: React.HTMLProps<T>['onDoubleClick'];
	onMouseEnter?: React.HTMLProps<T>['onMouseEnter'];
	onMouseLeave?: React.HTMLProps<T>['onMouseLeave'];
}
