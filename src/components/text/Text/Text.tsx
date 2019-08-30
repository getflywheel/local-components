import * as React from 'react';
import TextBase, {
	ITextBaseProps,
	ITextCommonProps,
	TextBasePropColor,
	TextBasePropFontSize,
	TextBasePropFontWeight,
} from '../_private/TextBase/TextBase';

interface IProps extends ITextCommonProps {
	privateOptions?: ITextBaseProps;
}

export const Text = (props: IProps) => {
	const {privateOptions, ...otherProps} = props;

	return (
		<TextBase
			className="Text"
			color={TextBasePropColor.gray_gray15_text}
			fontSize={TextBasePropFontSize.m}
			fontWeight={TextBasePropFontWeight.light}
			{...privateOptions}
			{...otherProps}
		/>
	);
};

Text.defaultProps = {
	tag: 'span',
} as Partial<IProps>;
