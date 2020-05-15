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
	uncopiedStateIconVariant?: UncopiedStateIconVariants | null;
	/* Icon to show in copied state */
	copiedStateIconVariant?: UncopiedStateIconVariants | null
	/* Background styling for copied state */
	copiedStateBGStyleVariant?: CopiedStateBGStyleVariants;
	/* Text to copy to the clipboard */
	textToCopy: string;
};

export const CopyButton = (props: ICopyButtonProps) => {
	const {
		tag,
		className,
		copiedTimeout,
		uncopiedStateText,
		copiedStateText,
		uncopiedStateIconVariant,
		copiedStateIconVariant,
		textToCopy,
		copiedStateBGStyleVariant,
	} = props;

	const Tag: any = tag;

	const [isCopied, setIsCopied] = useState(false);

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
						[styles.CopyButton__Color_Gray]: !isCopied,
						[styles.CopyButton__Color_Green]: isCopied && copiedStateBGStyleVariant === CopiedStateBGStyleVariants.green,
						[styles.CopyButton__Color_None]: isCopied && copiedStateBGStyleVariant === CopiedStateBGStyleVariants.transparent,
					}
				)}
			>
				<CopyButtonIcon
					variant={isCopied ? copiedStateIconVariant : uncopiedStateIconVariant}
					classNames={styles.CopyButtonIcon}
				/>
				<span
					className={classnames(
						styles.CopyButtonText,
						{
							[styles.CopyButtonText__Margin]: !!(isCopied ? copiedStateIconVariant : uncopiedStateIconVariant)
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
	uncopiedStateIconVariant: UncopiedStateIconVariants.link,
	copiedStateIconVariant: CopiedStateIconVariants.checkmark,
	copiedStateBGStyleVariant: CopiedStateBGStyleVariants.green,
	/**
	 * Though this prop is optional, it is included here so that any falsy JS values (null & undefined in particular)
	 * are passed into the user's clipboard as an empty string
	 */
	textToCopy: '',
};
