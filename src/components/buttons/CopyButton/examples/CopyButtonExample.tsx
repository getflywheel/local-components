
import { ComponentExampleBase } from '../../../../common/helpers/ComponentExampleBase';
import { CopyButton, ICopyButtonProps, CopiedStateBGStyleVariants, UncopiedStateBGStyleVariants, PaddingAmount } from '../CopyButton';
import { CopiedStateIconVariants, UncopiedStateIconVariants } from '../_private/CopyButtonIcon';

export class CopyButtonExample extends ComponentExampleBase {

	constructor (props: ICopyButtonProps) {
		super(
			props,
			CopyButton,
			'CopyButton',
			[
				{
					defaultValue: 'Copy Button',
					propName: 'content (children)',
					type: 'html',
				},
				{
					propName: 'tag',
					type: 'string',
				},
				{
					propName: 'copiedTimeout',
					type: 'string',
				},
				{
					propName: 'uncopiedStateText',
					type: 'string',
				},
				{
					propName: 'copiedStateText',
					type: 'string',
				},
				{
					propName: 'uncopiedStateIconVariant',
					type: 'enum',
					options: { none: '', ...UncopiedStateIconVariants as object },
				},
				{
					propName: 'copiedStateIconVariant',
					type: 'enum',
					options: { none: '', ...CopiedStateIconVariants as object },
				},
				{
					propName: 'copiedStateBGStyleVariant',
					type: 'enum',
					options: { none: '', ...CopiedStateBGStyleVariants as object },
				},
				{
					propName: 'uncopiedStateBGStyleVariant',
					type: 'enum',
					options: { none: '', ...UncopiedStateBGStyleVariants as object },
				},
				{
					propName: 'padding',
					type: 'enum',
					options: { none: '', ...PaddingAmount as object }
				},
				{
					propName: 'textToCopy',
					type: 'string',
				},
			],
		);
	}

}
