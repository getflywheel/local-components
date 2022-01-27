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
	none = 'none',
}

export enum ButtonSvgStyle {
	fill = 'fill',
	stroke = 'stroke',
	none = 'none',
}

export enum ButtonPropFontSize {
	xs = 'xs',
	s = 's',
	m = 'm',
	l = 'l',
	xl = 'xl',
	xxl = 'xxl',
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
	underlineOnHover = 'underlineOnHover',
}

/** Props common to all button forms */
export interface IButtonCommonProps extends ILocalContainerProps {
	/** Whether the button is disabled. */
	disabled?: boolean;
	/** The form name attribute */
	name?: string;
	/** The click handler. */
	onClick?: FunctionGeneric;
	/** The html element tag used for the button. */
	tag?: string;
	/** Props specific to the tag prop tag defined and applied to this component. */
	tagProps?: {[prop: string]: any};
	/** The default behavior of the button. */
	type?: 'button' | 'submit' | 'reset';
	/** SVG Icon to be placed left of text */
	leftIcon?: any; // has to be any since optional
	/** SVG Icon to be placed right of text */
	rightIcon?: any; // has to be any since optional
	/** Whether the svg is stroke only, fill only, or whether to not modify either */
	svgStyle?: ButtonSvgStyle;
	/** Display inline-flex vs flex */
	inline?: boolean;
}

/** 
 * Props specific to a button form, surfaced via privateOptions. 
 * A button form should be built by specifying these props, and instances
 * of that form should sitll be able to modify them via privateOptions.
 */
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
}

/**
 * Base button component, other buttons built on this
 * Note child text will reflect true case by default
 */
const ButtonBase = (props: IButtonBaseProps) => {
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
		name,
		onClick,
		padding,
		fontWeight,
		style,
		textTransform,
		textDecoration,
		tag,
		tagProps,
		inline,
		leftIcon,
		rightIcon,
		svgStyle,
		...otherProps
	} = props;

	const Tag: any = tag;
	const LeftIcon = leftIcon;
	const RightIcon = rightIcon;

	const [ isActive, setIsActive ] = React.useState(false);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			setIsActive(true);
		}
	}

	const handleKeyUp = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			setIsActive(false);
		}
	}

	return (
		<Container {...container}>
			<Tag
				className={classnames(
					styles.ButtonBase,
					'ButtonBase',
					className,
					{
						[styles._active]: isActive,
						[styles.ButtonBase__Color_Gray]: color === ButtonPropColor.default || ButtonPropColor.gray,
						[styles.ButtonBase__Color_Green]: color === ButtonPropColor.green,
						[styles.ButtonBase__Color_Orange]: color === ButtonPropColor.orange,
						[styles.ButtonBase__Color_Red]: color === ButtonPropColor.red,
						[styles.ButtonBase__FontSize_XSmall]: fontSize === ButtonPropFontSize.xs,
						[styles.ButtonBase__FontSize_Small]: fontSize === ButtonPropFontSize.s,
						[styles.ButtonBase__FontSize_Medium]: fontSize === ButtonPropFontSize.m,
						[styles.ButtonBase__FontSize_Large]: fontSize === ButtonPropFontSize.l,
						[styles.ButtonBase__FontSize_XLarge]: fontSize === ButtonPropFontSize.xl,
						[styles.ButtonBase__FontSize_XXLarge]: fontSize === ButtonPropFontSize.xxl,
						[styles.ButtonBase__Form_Fill]: form === ButtonPropForm.fill,
						[styles.ButtonBase__Form_Outline]: form === ButtonPropForm.outline,
						[styles.ButtonBase__Form_Reversed]: form === ButtonPropForm.reversed,
						[styles.ButtonBase__Form_Text]: form === ButtonPropForm.text,
						[styles.ButtonBase__LetterSpacing_Normal]: fontWeight === ButtonPropFontWeight.medium,
						[styles.ButtonBase__LetterSpacing_Tracked]: (fontWeight === ButtonPropFontWeight.heavy) || (textTransform === ButtonPropTextTransform.upper),
						[styles.ButtonBase__LetterSpacing_Extra]: ((fontWeight === ButtonPropFontWeight.heavy) && (textTransform === ButtonPropTextTransform.upper)),
						[styles.ButtonBase__Padding_None]: padding === ButtonPropPadding.none,
						[styles.ButtonBase__Padding_Small]: padding === ButtonPropPadding.s,
						[styles.ButtonBase__Padding_Medium]: padding === ButtonPropPadding.m,
						[styles.ButtonBase__Padding_Large]: padding === ButtonPropPadding.l,
						[styles.ButtonBase__FontWeight_Heavy]: fontWeight === ButtonPropFontWeight.heavy,
						[styles.ButtonBase__FontWeight_Medium]: fontWeight === ButtonPropFontWeight.medium,
						[styles.ButtonBase__TextTransform_Upper]: textTransform === ButtonPropTextTransform.upper,
						[styles.ButtonBase__TextTransform_None]: textTransform === ButtonPropTextTransform.none,
						[styles.ButtonBase__TextDecoration_None]: textDecoration === ButtonPropTextDecoration.none,
						[styles.ButtonBase__TextDecoration_Underline]: textDecoration === ButtonPropTextDecoration.underline,
						[styles.ButtonBase__TextDecoration_Underline_Hover]: (textDecoration === ButtonPropTextDecoration.underlineOnHover)
							||  (textDecoration === ButtonPropTextDecoration.underline),
						[styles.ButtonBase__Display_Inline]: inline,
						[styles.ButtonBase__SVG_Stroke]: svgStyle === ButtonSvgStyle.stroke,
						[styles.ButtonBase__SVG_Fill]: svgStyle === ButtonSvgStyle.fill,
					},
				)}
				disabled={disabled}
				id={id}
				name={name}
				onMouseDown={(e: React.MouseEvent) => e.preventDefault()}
				onKeyDown={handleKeyDown}
				onKeyUp={handleKeyUp}
				onClick={onClick}
				ref={innerRef}
				style={style}
				{...otherProps}
				{...tagProps}
			>
				{leftIcon && (
					<LeftIcon className={styles.ButtonBase_SVG_Left}/>
				)}
				{children}
				{rightIcon && (
					<RightIcon className={styles.ButtonBase_SVG_Right}/>
				)}
			</Tag>
		</Container>
	);
}

ButtonBase.defaultProps = {
	color: ButtonPropColor.default,
	disabled: false,
	fontSize: ButtonPropFontSize.m,
	form: ButtonPropForm.fill,
	padding: ButtonPropPadding.m,
	tag: 'button',
	fontWeight: ButtonPropFontWeight.heavy,
	textTransform: ButtonPropTextTransform.none,
	textDecoration: ButtonPropTextDecoration.none,
	svgStyle: ButtonSvgStyle.fill,
};

export { ButtonBase };
