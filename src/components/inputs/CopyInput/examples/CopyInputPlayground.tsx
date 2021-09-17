
import { ComponentExampleBase } from '../../../../common/helpers/ComponentExampleBase';
import { CopyInput, ICopyInputProps } from '../CopyInput';


export class CopyInputPlayground extends ComponentExampleBase {

	constructor (props: ICopyInputProps) {
		super(
			props,
			CopyInput,
			'CopyInput',
			[
				{
					propName: 'placeholder',
					type: 'string',
				},
				{
					propName: 'value',
					type: 'string',
				},
				{
					propName: 'label',
					type: 'string',
				},
				{
					propName: 'message',
					type: 'string',
				},
				{
					propName: 'onlyShowMessageWhenInvalid',
					type: 'boolean',
				},
				{
					propName: 'invalid',
					type: 'boolean',
				},
                {
					propName: 'readonly',
					type: 'boolean',
				},
			],
		);
	}

}
