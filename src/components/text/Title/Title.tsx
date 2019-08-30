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

export enum TitlePropSize {
	caption = 'caption',
	s = 's',
	m = 'm',
	l = 'l',
	xl = 'xl',
}

interface IProps extends ITextCommonProps {
	privateOptions?: ITextBaseProps;
	size?: TitlePropSize | keyof typeof TitlePropSize;
}

export const Title = (props: IProps) => {
	const {className, privateOptions, size, ...otherProps} = props;

	return (
		<TextBase
			className={classnames(
				'Title',
				className,
			)}
			color={setColorProp(props, TextBasePropColor.graydark_white_caption)}
			fontSize={setSizeProp(props, TextBasePropFontSize.m)}
			fontWeight={TextBasePropFontWeight.bold}
			{...privateOptions}
			{...otherProps}
		/>
	);
};

Title.defaultProps = {
	size: TitlePropSize.m,
	tag: 'div',
} as Partial<IProps>;

function setSizeProp (props: IProps, defaultValue: TextBasePropFontSize): TextBasePropFontSize {
	switch (props.size) {
		case TitlePropSize.s:
		case TitlePropSize.caption:
			return TextBasePropFontSize.s;
		case TitlePropSize.m:
			return TextBasePropFontSize.m;
		case TitlePropSize.l:
			return TextBasePropFontSize.l;
		case TitlePropSize.xl:
			return TextBasePropFontSize.xl;
	}

	return defaultValue;
}

function setColorProp (props: IProps, defaultColor: TextBasePropColor): TextBasePropColor {
	switch (props.size) {
		case TitlePropSize.caption:
			return TextBasePropColor.gray_gray75_title;
	}

	return defaultColor;
}
