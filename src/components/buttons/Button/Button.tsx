import * as React from 'react';
import {
	ButtonBase,
	ButtonPropColor,
	ButtonPropForm,
	ButtonPropPadding, IButtonBaseProps,
	IButtonCommonProps,
} from '../ButtonBase/ButtonBase';
import classnames from 'classnames';

interface IProps extends IButtonCommonProps {
	privateOptions?: IButtonBaseProps;
}

export const Button = (props: IProps) => {
	const {className, privateOptions, ...otherProps} = props;

	return (
		<ButtonBase
			className={classnames(
				className,
				'Button',
			)}
			color={ButtonPropColor.gray}
			form={ButtonPropForm.outline}
			padding={ButtonPropPadding.m}
			{...privateOptions}
			{...otherProps}
		/>
	);
};

Button.defaultProps = {
	disabled: ButtonBase.defaultProps.disabled,
	tag: ButtonBase.defaultProps.tag,
} as Partial<IProps>;
