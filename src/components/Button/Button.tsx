import * as React from 'react';
import classnames from 'classnames';
import * as styles from './Button.scss';
import { Container } from '../Container';
import ILocalContainerProps from '../../common/structures/ILocalContainerProps';
import Handler from '../../common/structures/Handler';

export enum ButtonPropRecipe {
	none = 'none',
	primary = 'primary',
	secondary = 'secondary',
	text = 'text',
}

export enum ButtonPropSize {
	s = 's',
	m = 'm',
}

export enum ButtonPropColor {
	gray = 'gray',
	green = 'green',
	default = 'default',
	red = 'red',
}

export enum ButtonPropVariant {
	fill = 'fill',
	outline = 'outline',
	text = 'text',
}

interface IProps extends ILocalContainerProps {
	color?: ButtonPropColor | keyof typeof ButtonPropColor;
	disabled?: boolean;
	/** The hierarchical importance of the button within the given context (e.g. only one primary button should exist at any given time). */
	recipe?: ButtonPropRecipe | keyof typeof ButtonPropRecipe; // to allow string literal for enum, the key must match the value and 'keyof typeof' used
	onClick?: Handler;
	/** The size of the button that may result in height, width, and font-size changes. */
	size?: ButtonPropSize | keyof typeof ButtonPropSize;
	/** The html element tag used for the button. */
	tag?: string;
	variant?: ButtonPropVariant | keyof typeof ButtonPropVariant;
	/** The default behavior of the button. */
	type?: 'button' | 'submit' | 'reset';
}

export default class Button extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		color: ButtonPropColor.default,
		disabled: false,
		recipe: ButtonPropRecipe.secondary,
		// don't set `size` default here because of differences between primary and secondary default size
		tag: 'button',
		variant: ButtonPropVariant.fill,
	};

	protected _generateFontSizeClassNameFromProps (fallbackStyleName: string): {[styleName: string]: boolean} {
		let size: string | undefined;

		switch (this.props.size) {
			case 's':
				size = styles.Button__FontSize_Small;
				break;
			case 'm':
				size = styles.Button__FontSize_Medium;
				break;
		}

		return size ? {[size]: true} : {[fallbackStyleName]: true};
	}

	protected _generateScopedClassNamesFromPropsAndRecipes () {
		// list of class names with initial set of defaults that are allowed for all recipes and variants
		const classList: {[styleName: string]: boolean} = {};

		switch (this.props.recipe) {
			case 'primary':
				return {
					[styles.Button__Color_Green]: true,
					[styles.Button__Padding_Large]: true,
					[styles.Button__Variant_Fill]: true,
				};
			case 'secondary':
				return {
					[styles.Button__Color_Gray]: true,
					[styles.Button__Padding_Medium]: true,
					[styles.Button__Variant_Outline]: true,
				};
			case 'text':
				return {
					[styles.Button__Color_Green]: true,
					[styles.Button__Variant_Text]: true,
					...this._generateFontSizeClassNameFromProps(styles.Button__FontSize_Medium), // set default but allow user prop
				};
			case 'none':
				return {
					[styles.Button__Color_Gray]: this.props.color === ButtonPropColor.gray,
					[styles.Button__Color_Green]: this.props.color === ButtonPropColor.green,
					[styles.Button__Color_Red]: this.props.color === ButtonPropColor.default || this.props.color === ButtonPropColor.red,
					[styles.Button__Padding_Medium]: true,
					[styles.Button__Variant_Fill]: this.props.variant === ButtonPropVariant.fill,
					[styles.Button__Variant_Outline]: this.props.variant === ButtonPropVariant.outline,
					[styles.Button__Variant_Text]: this.props.variant === ButtonPropVariant.text,
					...classList,
				};
		}
	}

	render () {
		const Tag: any = this.props.tag;

		return (
			<Container {...this.props.container}>
				<Tag
					className={classnames(
						styles.Button,
						'Button',
						this.props.className,
						this._generateScopedClassNamesFromPropsAndRecipes(),
					)}
					disabled={this.props.disabled}
					onClick={this.props.onClick}
					type={this.props.type}
				>
					{this.props.children}
				</Tag>
			</Container>
		);
	}

}
