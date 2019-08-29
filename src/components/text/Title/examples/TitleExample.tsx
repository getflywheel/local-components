import * as React from 'react';
import IReactComponentProps from '../../../../common/structures/IReactComponentProps';
import { ComponentExampleBase } from '../../../../common/helpers/ComponentExampleBase';
import { Title, TitlePropSize } from '../Title';

export class TitleExample extends ComponentExampleBase {

	constructor (props: IReactComponentProps) {
		super(
			props,
			Title,
			'Title',
			[
				{
					defaultValue: 'This is a Title',
					propName: 'content (children)',
					type: 'html',
				},
				{
					options: TitlePropSize,
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
