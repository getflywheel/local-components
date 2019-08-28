import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import Button, { ButtonPropRecipe, ButtonPropSize, ButtonPropColor, ButtonPropVariant } from '../Button';
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
					options: ButtonPropRecipe,
					propName: 'recipe',
					type: 'enum',
				},
				{
					defaultValue: 'm', // manually set this here because of differences between primary and secondary default size
					options: ButtonPropSize,
					propName: 'size',
					type: 'enum',
				},
				{
					options: ButtonPropColor,
					propName: 'color',
					type: 'enum',
				},
				{
					options: ButtonPropVariant,
					propName: 'variant',
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
