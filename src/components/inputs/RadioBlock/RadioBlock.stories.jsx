import React from 'react';
import { action } from '@storybook/addon-actions';
import RadioBlock from './RadioBlock';
// import { Tooltip } from '../../overlays/Tooltip/Tooltip';
import { Text } from '../../text/Text/Text';
import TextButtonExternal from '../../buttons/TextButtonExternal/TextButtonExternal';
import radioBlockOptions from './RadioBlockContentExample';

export default {
	title: 'Inputs/RadioBlock',
	component: RadioBlock,
	// argTypes: {
	// 	onChange: { action: 'changed' },
	// },
	args: {
		default: 'option1',
		direction: 'horiz',
		onChange: action('changed'),
	},
};

const Template = (args) => {
	return <RadioBlock {...args} />;
};

export const Simple = Template.bind({});
Simple.args = {
	options: {
		option1: {
			label: 'The first option',
		},
		option2: {
			label: 'Second option, oooo.',
		},
	},
};

export const WithDescription = Template.bind({});
WithDescription.args = {
	options: {
		option1: {
			label: 'Option 1',
			content: (
				<>
					<Text>This is a description for Option 1</Text>
					<TextButtonExternal
						underline
						inline={false}
						onClick={(event) => {
							event.stopPropagation();
						}}
					>
						Click me!
					</TextButtonExternal>
				</>
			),
		},
		option2: {
			label: 'Option 2',
		},
	},
};

export const VerticalRows = Template.bind({});
VerticalRows.args = {
	default: 'Starship Wingnut',
	options: radioBlockOptions,
	direction: 'vert',
	heightSize: 'none',
};

// # RadioBlock with with just content example

// <Canvas>
// 	<Story name="RadioBlock Content">
// 		<RadioBlock
// 			heightSize="none"
// 			direction="vert"
// 			options={radioBlockOptions}
// 			onChange={(value) => console.log("onChange: ", value)}
// 		/>
// 	</Story>
// </Canvas>

// # Disable the entire component

// <Canvas>
// 	<Story name="Disabled">
// 		<RadioBlock
// 			disabled={true}
// 			onChange={() => console.log("onChange")}
// 			default={"test1"}
// 			options={{
// 				test1: {
// 					label: "Test 1",
// 				},
// 				test2: {
// 					label: "Test 2",
// 				},
// 			}}
// 		/>
// 	</Story>
// </Canvas>

// # Disable a single option and select the other

// <Canvas>
// 	<Story name="Disabled Option">
// 		<RadioBlock
// 			onChange={() => console.log("onChange")}
// 			default={"test2"}
// 			options={{
// 				test1: {
// 					disabled: true,
// 					label: "Test 1",
// 				},
// 				test2: {
// 					label: "Test 2",
// 				},
// 			}}
// 		/>
// 	</Story>
// </Canvas>

// # Warning set on the component

// <Canvas>
// 	<Story name="Warning">
// 		<RadioBlock
// 			warn={true}
// 			onChange={() => console.log("onChange")}
// 			default={"test1"}
// 			options={{
// 				test1: {
// 					label: "Test 1",
// 				},
// 				test2: {
// 					label: "Test 2",
// 					disabled: true,
// 				},
// 			}}
// 		/>
// 	</Story>
// </Canvas>

// # Medium size RadioBlock

// <Canvas>
// 	<Story name="Medium Size">
// 		<RadioBlock
// 			heightSize="m"
// 			onChange={() => console.log("onChange")}
// 			default={"test1"}
// 			options={{
// 				test1: {
// 					label: "Test 1",
// 				},
// 				test2: {
// 					label: "Test 2",
// 				},
// 			}}
// 		/>
// 	</Story>
// </Canvas>

// # Disable the 2nd item and show a tooltip on hover

// <Canvas>
// 	<Story name="Tooltip">
// 		<RadioBlock
// 			heightSize="m"
// 			onChange={() => console.log("onChange")}
// 			default={"test1"}
// 			options={{
// 				test1: {
// 					label: "Test 1",
// 				},
// 				test2: {
// 					label: "Test 2",
// 					disabled: true,
// 					container: {
// 						element: (
// 							<Tooltip
// 								content={
// 									<div>
// 										Hey, this option's disabled.
// 										<br />
// 										<a>Here's why</a>
// 									</div>
// 								}
// 							/>
// 						),
// 					},
// 				},
// 			}}
// 		/>
// 	</Story>
// </Canvas>

// # Vertical layout

// <Canvas>
// 	<Story name="Vertical">
// 		<RadioBlock
// 			direction="vert"
// 			heightSize="m"
// 			default={"test1"}
// 			options={{
// 				test1: {
// 					label: "Test 1",
// 				},
// 				test2: {
// 					label: "Test 2",
// 				},
// 			}}
// 		/>
// 	</Story>
// </Canvas>
