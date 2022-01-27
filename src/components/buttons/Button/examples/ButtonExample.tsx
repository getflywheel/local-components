import * as React from 'react';
import IReactComponentProps from '../../../../common/structures/IReactComponentProps';
import { ComponentExampleBase } from '../../../../common/helpers/ComponentExampleBase';
import { Button, ButtonPropIntent } from '../Button';

export class ButtonExample extends ComponentExampleBase {

	constructor (props: IReactComponentProps) {
		super(
			props,
			Button,
			'Button',
			[
				{
					defaultValue: 'Secondary button',
					propName: 'content (children)',
					type: 'html',
				},
				{
					options: ButtonPropIntent,
					propName: 'intent',
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
