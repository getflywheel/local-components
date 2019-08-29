import * as React from 'react';
import ButtonBase, {
	ButtonPropColor,
	ButtonPropForm,
	ButtonPropPadding,
	IButtonCommonProps,
} from '../ButtonBase/ButtonBase';

export enum ButtonPropIntent {
	alert = 'alert',
	default = 'default',
	destructive = 'destructive',
	success = 'success',
}

interface IProps extends IButtonCommonProps {
	intent?: ButtonPropIntent;
}

function setIntentColor (intent: ButtonPropIntent | undefined, defaultColor: ButtonPropColor): ButtonPropColor {
	switch (intent) {
		case ButtonPropIntent.alert:
			return ButtonPropColor.orange;
		case ButtonPropIntent.destructive:
			return ButtonPropColor.red;
		case ButtonPropIntent.success:
			return ButtonPropColor.green;
	}

	return defaultColor;
}

export const Button = (props: IProps) => {
	const {intent, ...otherProps} = props;

	return (
		<ButtonBase
			className="Button"
			color={setIntentColor(intent, ButtonPropColor.gray)}
			form={ButtonPropForm.outline}
			padding={ButtonPropPadding.m}
			{...otherProps}
		/>
	);
};

Button.defaultProps = {
	disabled: ButtonBase.defaultProps.disabled,
	intent: ButtonPropIntent.default,
	tag: ButtonBase.defaultProps.tag,
} as Partial<IProps>;
