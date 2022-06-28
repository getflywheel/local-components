import React from 'react';
import Combobox, { ComboboxOptions } from './Combobox';

const optionsLoader = () =>
	new Promise<ComboboxOptions>((resolve) => {
		console.log('LOADING OPTIONS!');
		setTimeout(() => {
			resolve({
				vi6tamon66: {
					label: 'EduardoTest',
					optionGroup: 'connected',
					disabled: true,
					secondaryText: 'EduardoTest',
				},
				f9tl99u20j: {
					label: 'gameovertest',
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v2.svg',
					optionGroup: undefined,
					disabled: false,
				},
				xvvkshuge5: {
					label: 'Hot Thoughts',
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v3.svg',
					optionGroup: undefined,
					disabled: false,
				},
				eb4048qhg3: {
					label: "Let's Learn Local",
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v2.svg',
					optionGroup: undefined,
					disabled: false,
				},
				xljat07he5: {
					label: 'Local by WPE',
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v1.svg',
					optionGroup: undefined,
					disabled: false,
				},
				'9tk3oojmil': {
					label: 'Product Roadmaps',
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v1.svg',
					optionGroup: undefined,
					disabled: false,
				},
				'47b1364yva': {
					label: 'Spacemind 5000',
					icon: 'https:flywheel-app-production.s3.amazonaws.com/uploads/site/657948/1643221998-57-0001-1961/expanded_brain_large.jpeg',
					optionGroup: undefined,
					disabled: false,
				},
				'8eht8gi4t8': {
					label: 'Star Map',
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v2.svg',
					optionGroup: undefined,
					disabled: false,
				},
				vwddlo8lal: {
					label: 'Starship Wingnut',
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v2.svg',
					optionGroup: undefined,
					disabled: false,
				},
			});
		}, 2000);
	});

export const ComboboxConnectExample = () => (
	<Combobox
		id="Connect"
		loadingOptionsPlaceholder="Loading sites..."
		optionHeight="l"
		optionGroups={{
			connected: {
				label: 'Connected sites',
			},
		}}
		optionsLoader={optionsLoader}
		onChange={() => console.log('onChange')}
		placeholder="Select Something!"
		striped
	/>
);
