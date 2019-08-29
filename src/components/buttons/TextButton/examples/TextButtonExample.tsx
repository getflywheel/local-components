import * as React from 'react';
import IReactComponentProps from '../../../../common/structures/IReactComponentProps';
import { ComponentExampleBase } from '../../../../common/helpers/ComponentExampleBase';
import { TextButton, TextButtonPropIntent, TextButtonPropSize } from '../TextButton';

export class TextButtonExample extends ComponentExampleBase {

	constructor (props: IReactComponentProps) {
		super(
			props,
			TextButton,
			'TextButton',
			[
				{
					defaultValue: 'Text Button',
					propName: 'content (children)',
					type: 'html',
				},
				{
					options: TextButtonPropIntent,
					propName: 'intent',
					type: 'enum',
				},
				{
					options: TextButtonPropSize,
					propName: 'size',
					type: 'enum',
				},
				{
					propName: 'tag',
					type: 'string',
				},
				{
					propName: 'disabled',
					type: 'boolean',
				},
			],
		);
	}

}
