import { ReactNode } from 'react';
import Handler from './Handler';

export default interface IReactComponentProps {

	children?: ReactNode;
	className?: string;
	key?: string | number;
	onClick?: Handler;
	style?: object;
	ref?: any;

}
