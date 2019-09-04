import * as React from 'react';
import classnames from 'classnames';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import { ContainerMarginHelper, ContainerMarginLookupType } from './ContainerMarginHelper';

export interface IContainerProps extends IReactComponentProps {
	/** Whether to include the container (false) or exclude it (true) */
	disabled?: boolean;
	/** The container element or tag (if string) to be used as the container. */
	element?: React.ReactElement | string;
	/** Margin values to be set to 'style' prop */
	margin?: ContainerMarginLookupType;
	marginBottom?: ContainerMarginLookupType;
	marginLeft?: ContainerMarginLookupType;
	marginRight?: ContainerMarginLookupType;
	marginTop?: ContainerMarginLookupType;
}

const defaultProps: Partial<IContainerProps> = {

};

export const Container = (props: IContainerProps) => {
	const Tag: any = props.element || 'div';
	const element: React.ReactElement = props.element as React.ReactElement;
	const propsWithoutDefaults: Partial<IContainerProps> = {...props};
	delete propsWithoutDefaults.children;
	delete propsWithoutDefaults.disabled;
	const doRenderOnlyChildren: boolean = props.disabled === true || Object.keys(propsWithoutDefaults).length === 0;
	const doRenderContainerWithTagName: boolean = typeof props.element === 'string' || props.element === undefined;

	return (
		doRenderOnlyChildren
			?
			<>
				{props.children}
			</>
			:
				doRenderContainerWithTagName
				?
				<Tag
					className={classnames(
						props.className,
					)}
					style={{
						...props.style,
						...ContainerMarginHelper.getContainerMarginStyle(props),
					}}
				>
					{props.children}
				</Tag>
				:
				React.cloneElement(
					element,
					{
						children: Array(props.children || []).concat(element.props.children || []),
						className: classnames(props.className, element.props.className),
						style: {
							...props.style,
							...element.props.style,
							...ContainerMarginHelper.getContainerMarginStyle(props),
						},
					},
				)
	);
};

Container.defaultProps = defaultProps;
