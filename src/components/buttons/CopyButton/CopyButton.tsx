import * as React from 'react';
import classnames from 'classnames';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';
import { Container } from '../../modules/Container/Container';
import { CopyButtonIcon, CopiedStateIconVariants, UncopiedStateIconVariants } from './_private/CopyButtonIcon';
import * as styles from './CopyButton.scss';

/**
 * This lib is only exported as a CommonJS module, so the require syntax must be used
 * unless the EsModuleInterop flag is turned on for this project
 */
const copy = require('clipboard-copy');

const { useState } = React;

export enum CopiedStateBGStyleVariants {
	green = 'green',
	transparent = 'transparent',
	transparentGrayText = 'transparentGrayText',
}

export enum UncopiedStateBGStyleVariants {
	gray = 'gray',
	transparent = 'transparent',
}

export enum PaddingAmount {
	small = 'small',
	medium = 'medium',
}

export interface ICopyButtonProps extends ILocalContainerProps {
	tag?: string;
	/* Timeout for how long to show "copied" state after a click */
	copiedTimeout?: number;
	/* Text to show in uncopied state */
	uncopiedStateText?: string;
	/* Text to show in copied state */
	copiedStateText?: string;
	/* Icon to show in uncopied state */
	uncopiedStateIconVariant?: UncopiedStateIconVariants | keyof typeof UncopiedStateIconVariants | null;
	/* Icon to show in copied state */
	copiedStateIconVariant?: CopiedStateIconVariants | keyof typeof CopiedStateIconVariants | null;
	/* Background styling for uncopied state */
	uncopiedStateBGStyleVariant?: UncopiedStateBGStyleVariants | keyof typeof UncopiedStateBGStyleVariants;
	/* Background styling for copied state */
	copiedStateBGStyleVariant?: CopiedStateBGStyleVariants | keyof typeof CopiedStateBGStyleVariants;
	/* Padding amount to apply */
	padding?: PaddingAmount | keyof typeof PaddingAmount;
	/* Text to copy to the clipboard */
	textToCopy: string;
};

export const CopyButton = (props: ICopyButtonProps) => {
	const {
		className,
		copiedStateBGStyleVariant,
		uncopiedStateBGStyleVariant,
		copiedStateIconVariant,
		copiedStateText,
		copiedTimeout,
		id,
		padding,
		style,
		tag,
		textToCopy,
		uncopiedStateText,
		uncopiedStateIconVariant,
	} = props;

	const Tag: any = tag;

	const [isCopied, setIsCopied] = useState(false);

	const isTransparentUncopiedStateBG = uncopiedStateBGStyleVariant === UncopiedStateBGStyleVariants.transparent;
	const isGrayUncopiedStateBG = uncopiedStateBGStyleVariant === UncopiedStateBGStyleVariants.gray;

	const isGrayCopiedStateText = copiedStateBGStyleVariant === CopiedStateBGStyleVariants.transparentGrayText;
	const isTransparentCopiedStateBG = copiedStateBGStyleVariant === CopiedStateBGStyleVariants.transparent || isGrayCopiedStateText;
	const isGreenCopiedStateBG = copiedStateBGStyleVariant === CopiedStateBGStyleVariants.green;

	const smallPadding = padding === PaddingAmount.small;
	const mediumPadding = padding === PaddingAmount.medium;

	return (
		<Container>
			<Tag
				onClick={() => {
					copy(textToCopy);
					setIsCopied(true);
					setTimeout(() => setIsCopied(false), copiedTimeout);
				}}
				className={classnames(
					styles.CopyButton,
					'CopyButton',
					className,
					{
						[styles.CopyButton__Color_Gray]: !isCopied && isGrayUncopiedStateBG,
						[styles.CopyButton__Color_Gray_Padding_Small]: !isCopied && smallPadding,
						[styles.CopyButton__Color_Gray_Padding_Medium]: !isCopied && mediumPadding,
						[styles.CopyButton__Color_Green]: isCopied && isGreenCopiedStateBG,
						[styles.CopyButton__Color_Green_Padding_Small]: isCopied && isGreenCopiedStateBG && smallPadding,
						[styles.CopyButton__Color_Green_Padding_Medium]: isCopied && isGreenCopiedStateBG && mediumPadding,
						[styles.CopyButton__Color_None]: (isCopied && isTransparentCopiedStateBG) || (!isCopied && isTransparentUncopiedStateBG),
						[styles.CopyButton__Color_None_Padding_Small]: ((isCopied && isTransparentCopiedStateBG) || (!isCopied && isTransparentUncopiedStateBG)) && smallPadding,
						[styles.CopyButton__Color_None_Padding_Medium]: ((isCopied && isTransparentCopiedStateBG) || (!isCopied && isTransparentUncopiedStateBG)) && mediumPadding,
						[styles.CopyButton__Text_Gray]: isCopied && isGrayCopiedStateText,
					}
				)}
				id={id}
				style={style}
			>
				<CopyButtonIcon
					variant={isCopied ? copiedStateIconVariant as CopiedStateIconVariants : uncopiedStateIconVariant as UncopiedStateIconVariants}
					classNames={styles.CopyButtonIcon}
				/>
				<span
					className={classnames(
						styles.CopyButton__Text,
						{
							[styles.CopyButton__Text_Margin]: !!(isCopied ? copiedStateIconVariant : uncopiedStateIconVariant)
						}
					)}
				>
					{isCopied ? copiedStateText : uncopiedStateText}
				</span>
			</Tag>
		</Container>
	)
};

CopyButton.defaultProps = {
	tag: 'button',
	copiedTimeout: 1000,
	uncopiedStateText: 'COPY',
	copiedStateText: 'COPIED',
	uncopiedStateIconVariant: null,
	copiedStateIconVariant: CopiedStateIconVariants.checkmark,
	copiedStateBGStyleVariant: CopiedStateBGStyleVariants.green,
	uncopiedStateBGStyleVariant: UncopiedStateBGStyleVariants.gray,
	padding: PaddingAmount.small,
	/**
	 * Though this prop is optional, it is included here so that any falsy JS values (null & undefined in particular)
	 * are passed into the user's clipboard as an empty string
	 */
	textToCopy: '',
};
