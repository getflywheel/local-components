import * as React from 'react';
import classnames from 'classnames';
import styles from './IconButton.scss';
import {
	ButtonBase,
	ButtonPropColor,
	ButtonPropForm,
	IButtonBaseProps,
	IButtonCommonProps,
} from '../_private/ButtonBase/ButtonBase';

export enum IconButtonPropIntent {
	default = 'default',
	destructive = 'destructive',
}

export interface IIconButtonProps extends IButtonCommonProps {
	intent?: IconButtonPropIntent | keyof typeof IconButtonPropIntent;
	icon?: React.ReactNode;
	privateOptions?: IButtonBaseProps;
}

export const IconButton = (props: IIconButtonProps) => {
	const { className, id, intent, privateOptions, style, icon, ...otherProps } = props;

	return (
		<ButtonBase
			className={classnames(className, 'IconButton', styles.IconButton_SVG)}
			color={intent === IconButtonPropIntent.destructive ? ButtonPropColor.red : ButtonPropColor.green}
			form={ButtonPropForm.text}
			id={id}
			padding="none"
			style={style}
			leftIcon={icon}
			{...privateOptions}
			{...otherProps}
		/>
	);
};

IconButton.defaultProps = {
	disabled: ButtonBase.defaultProps.disabled,
	intent: IconButtonPropIntent.default,
	tag: ButtonBase.defaultProps.tag,
} as Partial<IIconButtonProps>;
