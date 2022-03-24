import React from 'react';
import { TextButton, ITextButtonProps } from '../TextButton/TextButton';
import { IButtonBaseProps } from '../_private/ButtonBase/ButtonBase';

interface TextButtonExternalProps extends ITextButtonProps {
	href?: string;
	// trackKey?: TrackIdElementKeyType;
	/** Undefined deafults to underlineOnHover, to stop all underlines, set explicitly to false */
	underline?: boolean;
	heavy?: boolean;
	padding?: IButtonBaseProps['padding'];
}

const TextButtonExternal = (props: TextButtonExternalProps) => {
	const {
		children,
		href,
		onClick,
		privateOptions,
		underline,
		heavy = false,
		padding = 'none',
		...otherProps
	} = props;

	return (
		<TextButton
			inline
			tag="a"
			tagProps={{ href }}
			privateOptions={{
				// eslint-disable-next-line no-nested-ternary
				textDecoration: underline ? 'underline'
					: underline === false ? 'none' : 'underlineOnHover',
				fontWeight: heavy ? 'heavy' : 'medium',
				padding,
				...privateOptions,
			}}
			onClick={onClick}
			{...otherProps}
		>
			{children}
		</TextButton>
	);
};

export default TextButtonExternal;
