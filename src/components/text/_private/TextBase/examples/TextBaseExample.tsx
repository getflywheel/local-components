import * as React from 'react';
import IReactComponentProps from '../../../../../common/structures/IReactComponentProps';
import { ComponentExampleBase } from '../../../../../common/helpers/ComponentExampleBase';
import TextBase, { TextBasePropColor, TextBasePropFontSize, TextBasePropFontWeight } from '../TextBase';

export class TextBaseExample extends ComponentExampleBase {

	constructor (props: IReactComponentProps) {
		super(
			props,
			TextBase,
			'TextBase',
			[
				{
					defaultValue: 'TextBase',
					propName: 'content (children)',
					type: 'html',
				},
				{
					options: TextBasePropColor,
					propName: 'color',
					type: 'enum',
				},
				{
					options: TextBasePropFontSize,
					propName: 'fontSize',
					type: 'enum',
				},
				{
					options: TextBasePropFontWeight,
					propName: 'fontWeight',
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
