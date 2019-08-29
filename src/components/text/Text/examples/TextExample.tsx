import * as React from 'react';
import IReactComponentProps from '../../../../common/structures/IReactComponentProps';
import { ComponentExampleBase } from '../../../../common/helpers/ComponentExampleBase';

export class TextExample extends ComponentExampleBase {

	constructor (props: IReactComponentProps) {
		super(
			props,
			Text,
			'Text',
			[
				{
					defaultValue: 'This is text.',
					propName: 'content (children)',
					type: 'html',
				},
				{
					propName: 'tag',
					type: 'string',
				},
			],
		);
	}

}
