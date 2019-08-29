import * as React from 'react';
import ButtonBase, {
	ButtonPropColor,
	ButtonPropForm,
	ButtonPropPadding,
	IButtonCommonProps,
} from '../ButtonBase/ButtonBase';

export enum PrimaryButtonPropIntent {
	default = 'default',
	destructive = 'destructive',
}

interface IProps extends IButtonCommonProps {
	intent?: PrimaryButtonPropIntent;
}

export const PrimaryButton = (props: IProps) => {
	const {intent, ...otherProps} = props;

	return (
		<ButtonBase
			className="PrimaryButton"
			color={props.intent === PrimaryButtonPropIntent.destructive ? ButtonPropColor.red : ButtonPropColor.green}
			form={ButtonPropForm.fill}
			padding={ButtonPropPadding.l}
			{...otherProps}
		/>
	);
};

PrimaryButton.defaultProps = {
	disabled: ButtonBase.defaultProps.disabled,
	intent: PrimaryButtonPropIntent.default,
	tag: ButtonBase.defaultProps.tag,
} as Partial<IProps>;
