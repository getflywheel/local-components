import * as React from 'react';
import classnames from 'classnames';
import {
	ButtonBase,
	ButtonPropColor,
	ButtonPropForm,
	ButtonPropPadding, IButtonBaseProps,
	IButtonCommonProps,
} from '../_private/ButtonBase/ButtonBase';

export enum ButtonPropIntent {
	default = 'default',
	destructive = 'destructive',
}

interface IProps extends IButtonCommonProps {
	intent?: ButtonPropIntent | keyof typeof ButtonPropIntent;
	privateOptions?: IButtonBaseProps;
}

export const Button = (props: IProps) => {
	const {
		className,
		id,
		intent,
		privateOptions,
		...otherProps
	} = props;

	return (
		<ButtonBase
			className={classnames(
				className,
				'Button',
			)}
			color={setIntentColor(props, ButtonPropColor.green)}
			id={id}
			form={setForm(props, ButtonPropForm.outline)}
			padding={ButtonPropPadding.m}
			{...privateOptions}
			{...otherProps}
		/>
	);
};

function setIntentColor (props: IProps, defaultValue: ButtonPropColor): ButtonPropColor {
	switch (props.intent) {
		case ButtonPropIntent.destructive:
			return ButtonPropColor.red;
	}

	return defaultValue;
}

function setForm (props: IProps, defaultValue: ButtonPropForm): ButtonPropForm {
	switch (props.intent) {
		case ButtonPropIntent.destructive:
			return ButtonPropForm.fill;
	}

	return defaultValue;
}

Button.defaultProps = {
	disabled: ButtonBase.defaultProps.disabled,
	intent: ButtonPropIntent.default,
	tag: ButtonBase.defaultProps.tag,
} as Partial<IProps>;
