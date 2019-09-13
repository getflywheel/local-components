import * as React from 'react';
import classnames from 'classnames';
import * as styles from './ButtonBase.scss';
import ILocalContainerProps from '../../../../common/structures/ILocalContainerProps';
import { Container } from '../../../modules/Container/Container';

export enum ButtonPropColor {
	default = 'default',
	gray = 'gray',
	green = 'green',
	orange = 'orange',
	red = 'red',
}

export enum ButtonPropPadding {
	s = 's',
	m = 'm',
	l = 'l',
}

export enum ButtonPropFontSize {
	xs = 'xs',
	s = 's',
	m = 'm',
}

export enum ButtonPropForm {
	fill = 'fill',
	outline = 'outline',
	text = 'text',
}

export interface IButtonCommonProps extends ILocalContainerProps {
	/** Whether the button is disabled. */
	disabled?: boolean;
	/** The click handler. */
	onClick?: FunctionGeneric;
	/** The html element tag used for the button. */
	tag?: string;
	/** The default behavior of the button. */
	type?: 'button' | 'submit' | 'reset';
}

export interface IButtonBaseProps extends IButtonCommonProps {
	/** The main color applied to the button. */
	color?: ButtonPropColor | keyof typeof ButtonPropColor;
	/** The styles applied to the button that forms how colors are applied to styles like background, border, color, etc. */
	form?: ButtonPropForm | keyof typeof ButtonPropForm;
	/** The fontSize of padding applied to the button. */
	padding?: ButtonPropPadding | keyof typeof ButtonPropPadding;
	/** The font-fontSize applied to the button. */
	fontSize?: ButtonPropFontSize | keyof typeof ButtonPropFontSize;
}

export class ButtonBase extends React.Component<IButtonBaseProps> {

	static defaultProps: Partial<IButtonBaseProps> = {
		color: ButtonPropColor.default,
		disabled: false,
		fontSize: ButtonPropFontSize.m,
		form: ButtonPropForm.fill,
		padding: ButtonPropPadding.m,
		tag: 'button',
	};

	render () {
		const {children, color, container, className, disabled, fontSize, form, onClick, padding, tag, ...otherProps} = this.props;
		const Tag: any = tag;

		return (
			<Container {...container}>
				<Tag
					className={classnames(
						styles.ButtonBase,
						'ButtonBase',
						className,
						{
							[styles.ButtonBase__Color_Gray]: color === ButtonPropColor.default || ButtonPropColor.gray,
							[styles.ButtonBase__Color_Green]: color === ButtonPropColor.green,
							[styles.ButtonBase__Color_Orange]: color === ButtonPropColor.orange,
							[styles.ButtonBase__Color_Red]: color === ButtonPropColor.red,
							[styles.ButtonBase__FontSize_XSmall]: fontSize === ButtonPropFontSize.xs,
							[styles.ButtonBase__FontSize_Small]: fontSize === ButtonPropFontSize.s,
							[styles.ButtonBase__FontSize_Medium]: fontSize === ButtonPropFontSize.m,
							[styles.ButtonBase__Form_Fill]: form === ButtonPropForm.fill,
							[styles.ButtonBase__Form_Outline]: form === ButtonPropForm.outline,
							[styles.ButtonBase__Form_Text]: form === ButtonPropForm.text,
							[styles.ButtonBase__Padding_Small]: padding === ButtonPropPadding.s,
							[styles.ButtonBase__Padding_Medium]: padding === ButtonPropPadding.m,
							[styles.ButtonBase__Padding_Large]: padding === ButtonPropPadding.l,
						},
					)}
					disabled={disabled}
					onClick={onClick}
					{...otherProps}
				>
					{children}
				</Tag>
			</Container>
		);
	}

}
