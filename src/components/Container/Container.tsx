import * as React from 'react';
import classnames from 'classnames';
import * as styles from './Container.scss';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import { ContainerMarginHelper, ContainerMarginType } from './ContainerMarginHelper';

export interface IContainerProps extends IReactComponentProps {
	/** whether to include the container (false) or exclude it (true) */
	disabled?: boolean;
	/** margin values to be set to 'style' prop */
	margin?: ContainerMarginType;
	marginBottom?: ContainerMarginType;
	marginLeft?: ContainerMarginType;
	marginRight?: ContainerMarginType;
	marginTop?: ContainerMarginType;
	/** the element name to used for the container */
	tag?: string;
}

const defaultProps: Partial<IContainerProps> = {

};

export const Container = (props: IContainerProps) => {
	const Tag: any = props.tag || 'div';
	const propsWithoutDefaults: Partial<IContainerProps> = {...props};
	delete propsWithoutDefaults.children;
	delete propsWithoutDefaults.disabled;
	// disable (don't render) unless explicitly set to 'false' or one of the other settings exists
	let disabled = props.disabled === true || Object.keys(propsWithoutDefaults).length === 0;

	return (
		disabled
			?
			<>
				{props.children}
			</>
			:
			<Tag
				className={classnames(
					styles.Container,
					props.className,
				)}
				style={{
					...props.style,
					...ContainerMarginHelper.getContainerMarginStyle(props),
				}}
			>
				{props.children}
			</Tag>
	);
};

Container.defaultProps = defaultProps;
