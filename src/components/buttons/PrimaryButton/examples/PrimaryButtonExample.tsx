import * as React from 'react';
import IReactComponentProps from '../../../../common/structures/IReactComponentProps';
import { ComponentExampleBase } from '../../../../common/helpers/ComponentExampleBase';
import { PrimaryButton, PrimaryButtonPropIntent } from '../PrimaryButton';

export class PrimaryButtonExample extends ComponentExampleBase {

	constructor (props: IReactComponentProps) {
		super(
			props,
			PrimaryButton,
			'PrimaryButton',
			[
				{
					defaultValue: 'Primary Button',
					propName: 'children (text)',
					type: 'html',
				},
				{
					options: PrimaryButtonPropIntent,
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
