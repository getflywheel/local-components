import * as React from 'react';
import IReactComponentProps from '../../../../common/structures/IReactComponentProps';
import { ComponentExampleBase } from '../../../../common/helpers/ComponentExampleBase';
import { Button } from '../Button';

export class ButtonExample extends ComponentExampleBase {

	constructor (props: IReactComponentProps) {
		super(
			props,
			Button,
			'Button',
			[
				{
					defaultValue: 'Secondary Button',
					propName: 'content (children)',
					type: 'html',
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
