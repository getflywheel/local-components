import { ReactNode } from 'react';

export default interface IReactComponentProps {

	children?: ReactNode;
	className?: string;
	key?: string | number;
	onClick?: (...params: any[]) => any;
	style?: object;
	ref?: any;

}
