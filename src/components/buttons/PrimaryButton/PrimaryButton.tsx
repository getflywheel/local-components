import * as React from 'react';
import ButtonBase, {
	ButtonPropColor,
	ButtonPropForm,
	ButtonPropPadding, IButtonBaseProps,
	IButtonCommonProps,
} from '../ButtonBase/ButtonBase';

export enum PrimaryButtonPropIntent {
	default = 'default',
	destructive = 'destructive',
}

interface IProps extends IButtonCommonProps {
	intent?: PrimaryButtonPropIntent | keyof typeof PrimaryButtonPropIntent;
	privateOptions?: IButtonBaseProps;
}

export const PrimaryButton = (props: IProps) => {
	const {intent, privateOptions, ...otherProps} = props;

	return (
		<ButtonBase
			className="PrimaryButton"
			color={intent === PrimaryButtonPropIntent.destructive ? ButtonPropColor.red : ButtonPropColor.green}
			form={ButtonPropForm.fill}
			padding={ButtonPropPadding.l}
			{...privateOptions}
			{...otherProps}
		/>
	);
};

PrimaryButton.defaultProps = {
	disabled: ButtonBase.defaultProps.disabled,
	intent: PrimaryButtonPropIntent.default,
	tag: ButtonBase.defaultProps.tag,
} as Partial<IProps>;
