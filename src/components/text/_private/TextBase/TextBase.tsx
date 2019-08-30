import * as React from 'react';
import classnames from 'classnames';
import * as styles from './TextBase.scss';
import ILocalContainerProps from '../../../../common/structures/ILocalContainerProps';
import { Container } from '../../../Container';

export enum TextBasePropColor {
	gray_gray15_text = 'gray_gray15_text',
	gray_gray75_title = 'gray_gray75_title',
	graydark_white_caption = 'graydark_white_caption',
}
export enum TextBasePropFontSize {
	s = 's',
	m = 'm',
	l = 'l',
	xl = 'xl',
}

export enum TextBasePropFontWeight {
	light = 'light',
	normal = 'normal',
	medium = 'medium',
	bold = 'bold',
	heavy = 'heavy',
}

export interface ITextCommonProps extends ILocalContainerProps {
	/** The html element tag used for the component. */
	tag?: string;
}

export interface ITextBaseProps extends ITextCommonProps {
	/** The color applied to the component. */
	color?: TextBasePropColor | keyof typeof TextBasePropColor;
	/** The font-size applied to the component. */
	fontSize?: TextBasePropFontSize | keyof typeof TextBasePropFontSize;
	/** The font-weight applied to the component. */
	fontWeight?: TextBasePropFontWeight | keyof typeof TextBasePropFontWeight;
}

export class TextBase extends React.Component<ITextBaseProps> {

	static defaultProps: Partial<ITextBaseProps> = {
		color: TextBasePropColor.graydark_white_caption,
		fontSize: TextBasePropFontSize.s,
		fontWeight: TextBasePropFontWeight.light,
		tag: 'span',
	};

	render () {
		const {children, color, container, className, fontSize, fontWeight, tag, ...otherProps} = this.props;
		const Tag: any = tag;

		return (
			<Container {...container}>
				<Tag
					className={classnames(
						styles.TextBase,
						'TextBase',
						className,
						{
							[styles.TextBase__Color_Gray_Gray15]: color === TextBasePropColor.gray_gray15_text,
							[styles.TextBase__Color_Gray_Gray75]: color === TextBasePropColor.gray_gray75_title,
							[styles.TextBase__Color_GrayDark_White]: color === TextBasePropColor.graydark_white_caption,
							[styles.TextBase__FontSize_Small]: fontSize === TextBasePropFontSize.s,
							[styles.TextBase__FontSize_Medium]: fontSize === TextBasePropFontSize.m,
							[styles.TextBase__FontSize_Large]: fontSize === TextBasePropFontSize.l,
							[styles.TextBase__FontSize_XLarge]: fontSize === TextBasePropFontSize.xl,
							[styles.TextBase__FontWeight_300Light]: fontWeight === TextBasePropFontWeight.light,
							[styles.TextBase__FontWeight_400Normal]: fontWeight === TextBasePropFontWeight.normal,
							[styles.TextBase__FontWeight_500Medium]: fontWeight === TextBasePropFontWeight.medium,
							[styles.TextBase__FontWeight_700Bold]: fontWeight === TextBasePropFontWeight.bold,
							[styles.TextBase__FontWeight_900Heavy]: fontWeight === TextBasePropFontWeight.heavy,
						},
					)}
					{...otherProps}
				>
					{children}
				</Tag>
			</Container>
		);
	}

}
