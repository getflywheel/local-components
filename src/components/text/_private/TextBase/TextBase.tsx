import * as React from 'react';
import classnames from 'classnames';
import styles from './TextBase.scss';
import ILocalContainerProps from '../../../../common/structures/ILocalContainerProps';
import { Container } from '../../../modules/Container/Container';

export enum TextBasePropColor {
	gray_gray25_title = 'gray_gray25_title',
	gray25_text = 'gray25_text',
	graydark_gray15_text = 'graydark_gray15_text',
	graydark_white_caption = 'graydark_white_caption',
}
export enum TextBasePropFontSize {
	s = 's',
	m = 'm',
	l = 'l',
	xl = 'xl',
}

export enum TextBasePropFontWeight {
	normal = 'normal',
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
		fontWeight: TextBasePropFontWeight.normal,
		tag: 'span',
	};

	render () {
		const {
			children,
			color,
			container,
			className,
			fontSize,
			fontWeight,
			id,
			style,
			tag,
			...otherProps
		} = this.props;
		const Tag: any = tag;

		return (
			<Container {...container}>
				<Tag
					className={classnames(
						styles.TextBase,
						'TextBase',
						className,
						{
							[styles.TextBase__Color_Gray_Gray25]: color === TextBasePropColor.gray_gray25_title,
							[styles.TextBase__Color_GrayDark_Gray15]: color === TextBasePropColor.graydark_gray15_text,
							[styles.TextBase__Color_Gray25]: color === TextBasePropColor.gray25_text,
							[styles.TextBase__Color_GrayDark_White]: color === TextBasePropColor.graydark_white_caption,
							[styles.TextBase__FontSize_Small]: fontSize === TextBasePropFontSize.s,
							[styles.TextBase__FontSize_Medium]: fontSize === TextBasePropFontSize.m,
							[styles.TextBase__FontSize_Large]: fontSize === TextBasePropFontSize.l,
							[styles.TextBase__FontSize_XLarge]: fontSize === TextBasePropFontSize.xl,
							[styles.TextBase__FontWeight_300]: fontWeight === TextBasePropFontWeight.normal,
							[styles.TextBase__FontWeight_500]: fontWeight === TextBasePropFontWeight.bold,
							[styles.TextBase__FontWeight_700]: fontWeight === TextBasePropFontWeight.heavy,
						},
					)}
					id={this.props.id}
					style={this.props.style}
					{...otherProps}
				>
					{children}
				</Tag>
			</Container>
		);
	}
}
