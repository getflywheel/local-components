import * as React from 'react';
import classnames from 'classnames';
import * as styles from './ButtonBase.scss';
import ILocalContainerProps from '../../../../common/structures/ILocalContainerProps';
import { Container } from '../../../modules/Container/Container';
import { FunctionGeneric } from '../../../../common/structures/Generics';

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

export enum ButtonPropFontWeight {
	heavy = 'heavy',
	medium = 'medium',
}

export enum ButtonPropForm {
	fill = 'fill',
	outline = 'outline',
	reversed = 'reversed',
	text = 'text',
}

enum ButtonPropTextTransform {
	none = 'none',
	upper = 'upper',
}

enum ButtonPropTextDecoration {
	none = 'none',
	underline = 'underline',
}

enum ButtonLetterSpacing {
	normal = 'normal',
	tracked = 'tracked',
}

export interface IButtonCommonProps extends ILocalContainerProps {
	/** Whether the button is disabled. */
	disabled?: boolean;
	/** The click handler. */
	onClick?: FunctionGeneric;
	/** The html element tag used for the button. */
	tag?: string;
	/** Props specific to the tag prop tag defined and applied to this component. */
	tagProps?: {[prop: string]: any};
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
	/** The font-weight applied to the button */
	fontWeight?: ButtonPropFontWeight | keyof typeof ButtonPropFontWeight;
	/** The casing applied to the button */
	textTransform?: ButtonPropTextTransform | keyof typeof ButtonPropTextTransform;
	/** The text decoration applied to the button */
	textDecoration?: ButtonPropTextDecoration | keyof typeof ButtonPropTextDecoration;
	/** The letter spacing applied to the button */
	letterSpacing?: ButtonLetterSpacing | keyof typeof ButtonLetterSpacing;
}

export class ButtonBase extends React.Component<IButtonBaseProps> {
	static defaultProps: Partial<IButtonBaseProps> = {
		color: ButtonPropColor.default,
		disabled: false,
		fontSize: ButtonPropFontSize.m,
		form: ButtonPropForm.fill,
		padding: ButtonPropPadding.m,
		tag: 'button',
		fontWeight: ButtonPropFontWeight.heavy,
		textTransform: ButtonPropTextTransform.upper,
		textDecoration: ButtonPropTextDecoration.none,
		letterSpacing: ButtonLetterSpacing.tracked,
	};

	render () {
		const {
			children,
			color,
			container,
			className,
			disabled,
			fontSize,
			form,
			id,
			innerRef,
			letterSpacing,
			onClick,
			padding,
			fontWeight,
			style,
			textTransform,
			textDecoration,
			tag,
			tagProps,
			...otherProps
		} = this.props;

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
							[styles.ButtonBase__Form_Reversed]: form === ButtonPropForm.reversed,
							[styles.ButtonBase__Form_Text]: form === ButtonPropForm.text,
							[styles.ButtonBase__LetterSpacing_Normal]: letterSpacing === ButtonLetterSpacing.normal,
							[styles.ButtonBase__LetterSpacing_Tracked]: letterSpacing === ButtonLetterSpacing.tracked,
							[styles.ButtonBase__Padding_Small]: padding === ButtonPropPadding.s,
							[styles.ButtonBase__Padding_Medium]: padding === ButtonPropPadding.m,
							[styles.ButtonBase__Padding_Large]: padding === ButtonPropPadding.l,
							[styles.ButtonBase__FontWeight_Heavy]: fontWeight === ButtonPropFontWeight.heavy,
							[styles.ButtonBase__FontWeight_Medium]: fontWeight === ButtonPropFontWeight.medium,
							[styles.ButtonBase__TextTransform_Upper]: textTransform === ButtonPropTextTransform.upper,
							[styles.ButtonBase__TextTransform_None]: textTransform === ButtonPropTextTransform.none,
							[styles.ButtonBase__TextDecoration_None]: textDecoration === ButtonPropTextDecoration.none,
							[styles.ButtonBase__TextDecoration_Underline]: textDecoration === ButtonPropTextDecoration.underline,
						},
					)}
					disabled={disabled}
					id={id}
					onClick={onClick}
					ref={innerRef}
					style={style}
					{...otherProps}
					{...tagProps}
				>
					{children}
				</Tag>
			</Container>
		);
	}
}
