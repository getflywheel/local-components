import * as React from 'react';
import classnames from 'classnames';
import {
	ButtonBase,
	ButtonPropColor,
	ButtonPropForm,
	ButtonPropPadding, IButtonBaseProps,
	IButtonCommonProps,
} from '../ButtonBase/ButtonBase';

export enum ButtonPropIntent {
	alert = 'alert',
	default = 'default',
	destructive = 'destructive',
	success = 'success',
}

interface IProps extends IButtonCommonProps {
	intent?: ButtonPropIntent | keyof typeof ButtonPropIntent;
	privateOptions?: IButtonBaseProps;
}

export const Button = (props: IProps) => {
	const {className, intent, privateOptions, ...otherProps} = props;

	return (
		<ButtonBase
			className={classnames(
				className,
				'Button',
			)}
			color={setIntentColor(props, ButtonPropColor.gray)}
			form={setForm(props, ButtonPropForm.outline)}
			padding={ButtonPropPadding.m}
			{...privateOptions}
			{...otherProps}
		/>
	);
};

function setIntentColor (props: IProps, defaultValue: ButtonPropColor): ButtonPropColor {
	switch (props.intent) {
		case ButtonPropIntent.alert:
			return ButtonPropColor.orange;
		case ButtonPropIntent.destructive:
			return ButtonPropColor.red;
		case ButtonPropIntent.success:
			return ButtonPropColor.green;
	}

	return defaultValue;
}

function setForm (props: IProps, defaultValue: ButtonPropForm): ButtonPropForm {
	switch (props.intent) {
		case ButtonPropIntent.alert:
		case ButtonPropIntent.destructive:
		case ButtonPropIntent.success:
			return ButtonPropForm.fill;
	}

	return defaultValue;
}

Button.defaultProps = {
	disabled: ButtonBase.defaultProps.disabled,
	intent: ButtonPropIntent.default,
	tag: ButtonBase.defaultProps.tag,
} as Partial<IProps>;
