import * as React from 'react';
import classnames from 'classnames';
import {
	ITextBaseProps,
	ITextCommonProps,
	TextBase,
	TextBasePropColor,
	TextBasePropFontSize,
	TextBasePropFontWeight,
} from '../_private/TextBase/TextBase';

export enum TextPropSize {
	caption = 'caption',
	default = 'default',
}

interface IProps extends ITextCommonProps {
	privateOptions?: ITextBaseProps;
	size?: TextPropSize | keyof typeof TextPropSize;
}

export const Text = (props: IProps) => {
	const {className, privateOptions, size, ...otherProps} = props;

	return (
		<TextBase
			className={classnames(
				'Text',
				className,
			)}
			color={size === TextPropSize.default ? TextBasePropColor.graydark_gray15_text : TextBasePropColor.gray_gray75_title}
			fontSize={TextBasePropFontSize.s}
			fontWeight={TextBasePropFontWeight.normal}
			{...privateOptions}
			{...otherProps}
		/>
	);
};

Text.defaultProps = {
	size: 'default',
	tag: 'span',
} as Partial<IProps>;
