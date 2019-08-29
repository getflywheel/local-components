import * as React from 'react';
import ButtonBase, {
	ButtonPropColor,
	ButtonPropFontSize,
	ButtonPropForm,
	IButtonCommonProps,
} from '../ButtonBase/ButtonBase';

export enum TextButtonPropIntent {
	default = 'default',
	destructive = 'destructive',
}

export enum TextButtonPropSize {
	default = 'default',
	tiny = 'tiny',
}

interface IProps extends IButtonCommonProps {
	intent?: TextButtonPropIntent;
	size?: TextButtonPropSize;
}

export const TextButton = (props: IProps) => {
	const {intent, size, ...otherProps} = props;

	return (
		<ButtonBase
			className="TextButton"
			color={intent === TextButtonPropIntent.destructive ? ButtonPropColor.red : ButtonPropColor.green}
			fontSize={size === TextButtonPropSize.tiny ? ButtonPropFontSize.xs : ButtonPropFontSize.m}
			form={ButtonPropForm.text}
			{...otherProps}
		/>
	);
};

TextButton.defaultProps = {
	disabled: ButtonBase.defaultProps.disabled,
	intent: TextButtonPropIntent.default,
	size: TextButtonPropSize.default,
	tag: ButtonBase.defaultProps.tag,
} as Partial<IProps>;
