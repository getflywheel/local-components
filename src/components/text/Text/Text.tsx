import * as React from 'react';
import classnames from 'classnames';
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
	const {className, privateOptions, ...otherProps} = props;

	return (
		<TextBase
			className={classnames(
				'Text',
				className,
			)}
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
