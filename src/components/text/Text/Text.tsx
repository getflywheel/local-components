import * as React from 'react';
import TextBase, { ITextCommonProps, TextBasePropFontSize, TextBasePropFontWeight } from '../TextBase/TextBase';

interface IProps extends ITextCommonProps {}

export const Text = (props: IProps) => {
	const {...otherProps} = props;

	return (
		<TextBase
			className="Text"
			fontSize={TextBasePropFontSize.m}
			fontWeight={TextBasePropFontWeight.light}
			{...otherProps}
		/>
	);
};

Text.defaultProps = {
	tag: 'span',
} as Partial<IProps>;
