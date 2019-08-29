import * as React from 'react';
import IReactComponentProps from '../../../../common/structures/IReactComponentProps';
import { ComponentExampleBase } from '../../../../common/helpers/ComponentExampleBase';
import ButtonBase, { ButtonPropColor, ButtonPropFontSize, ButtonPropForm, ButtonPropPadding } from '../ButtonBase';

export class ButtonBaseExample extends ComponentExampleBase {

	constructor (props: IReactComponentProps) {
		super(
			props,
			ButtonBase,
			'ButtonBase',
			[
				{
					defaultValue: 'ButtonBase',
					propName: 'children (text)',
					type: 'html',
				},
				{
					options: ButtonPropColor,
					propName: 'color',
					type: 'enum',
				},
				{
					options: ButtonPropForm,
					propName: 'form',
					type: 'enum',
				},
				{
					options: ButtonPropFontSize,
					propName: 'fontSize',
					type: 'enum',
				},
				{
					options: ButtonPropPadding,
					propName: 'padding',
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
