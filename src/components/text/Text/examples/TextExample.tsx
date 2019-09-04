import * as React from 'react';
import IReactComponentProps from '../../../../common/structures/IReactComponentProps';
import { ComponentExampleBase } from '../../../../common/helpers/ComponentExampleBase';
import { Text, TextPropSize } from '../Text';

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
					options: TextPropSize,
					propName: 'size',
					type: 'enum',
				},
				{
					propName: 'tag',
					type: 'string',
				},
			],
		);
	}

}
