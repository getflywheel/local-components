import * as React from 'react';

export default interface IReactComponentProps<T = HTMLElement> {
	onKeyUp?: React.HTMLProps<T>['onKeyUp'];
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
	'aria-checked'?: React.HTMLProps<T>['aria-checked'];
	'aria-label'?: React.HTMLProps<T>['aria-label'];
	'aria-expanded'?: React.HTMLProps<T>['aria-expanded'];
	'aria-controls'?: React.HTMLProps<T>['aria-controls'];
	onContextMenu?: React.HTMLProps<T>['onContextMenu'];
	onDoubleClick?: React.HTMLProps<T>['onDoubleClick'];
	onMouseEnter?: React.HTMLProps<T>['onMouseEnter'];
	onMouseLeave?: React.HTMLProps<T>['onMouseLeave'];
}
