import React from 'react';
import { ConnectPushIcon } from '../../icons/Icons';
import Combobox, { ComboboxOptions } from './Combobox';

const optionsLoader = () =>
	new Promise<ComboboxOptions>((resolve) => {
		console.log('LOADING OPTIONS!');
		setTimeout(() => {
			resolve({
				vi6tamon66: {
					label: 'Remote EduardoTest Really Really Really Long Name',
					optionGroup: 'connected',
					disabled: true,
					secondaryText: 'Local Site Name Kinda Long',
					icon: <ConnectPushIcon />,
				},
				vi75amon66: {
					label: 'Remote',
					optionGroup: 'connected',
					disabled: true,
					secondaryText: 'Local',
					icon: <ConnectPushIcon />,
				},
				f9tl99u20j: {
					label: 'gameovertest',
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v2.svg',
					optionGroup: null,
					disabled: false,
				},
				xvvkshuge5: {
					label: 'Hot Thoughts',
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v3.svg',
					optionGroup: null,
					disabled: false,
				},
				eb4048qhg3: {
					label: "Let's Learn Local",
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v2.svg',
					optionGroup: null,
					disabled: false,
				},
				xljat07he5: {
					label: 'Local by WPE',
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v1.svg',
					optionGroup: null,
					disabled: false,
				},
				'9tk3oojmil': {
					label: 'Product Roadmaps',
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v1.svg',
					optionGroup: null,
					disabled: false,
				},
				'47b1364yva': {
					label: 'Spacemind 5000',
					icon: 'https:flywheel-app-production.s3.amazonaws.com/uploads/site/657948/1643221998-57-0001-1961/expanded_brain_large.jpeg',
					optionGroup: null,
					disabled: false,
				},
				'8eht8gi4t8': {
					label: 'Really Really Long Site Name Really Really Long Site Name Really Really Long Site Name',
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v2.svg',
					optionGroup: null,
					disabled: false,
					// secondaryText: 'EduardoTest Really Really Really Long Name',
				},
				vwddlo8lal: {
					label: 'Starship Wingnut',
					icon: 'https://app.getflywheel.com/assets/images/app/avatars/site-v2.svg',
					optionGroup: null,
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
