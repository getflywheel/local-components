import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import Button, { ButtonPropEmphasis, ButtonPropIntent, ButtonPropSize } from '../Button';
import { ComponentExampleBase } from '../../../common/helpers/ComponentExampleBase';

export class ButtonExample extends ComponentExampleBase {

	constructor (props: IReactComponentProps) {
		super(
			props,
			Button,
			'Button',
			[
				{
					defaultValue: 'Start',
					propName: 'label',
					type: 'html',
				},
				{
					options: ButtonPropEmphasis,
					propName: 'emphasis',
					type: 'enum',
				},
				{
					options: ButtonPropIntent,
					propName: 'intent',
					type: 'enum',
				},
				{
					options: ButtonPropSize,
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
