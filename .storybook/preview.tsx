import '../src/global.sass';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'split',
		toolbar: {
			icon: 'circlehollow',
			// array of plain string values or MenuItem shape (see below)
			'items': [
				{
					'value': 'light', // The string value of the menu that gets set in the globals
					'icon': 'circlehollow',
					'left': '⚪️',
					'title': 'Light', // The main text of the title
				},
				{
					'value': 'dark',
					'icon': 'circle',
					'left': '⚫️',
					'title': 'Dark',
				},
				{
					'value': 'split',
					'icon': 'sidebar',
					'left': '🔲',
					'title': 'Split Light / Dark',
				},
				{
					'value': 'stacked',
					'icon': 'bottombar',
					'left': '🔳',
					'title': 'Stacked Light / Dark',
				},
			],
		},
	},
};

/**
 * Some of our stories depend on react-router in which case we need a basic React Router
 * booted up.
 *
 * @param {*} Story
 * @param {*} context
 */
const withMemoryRouter = (Story, context) => {
	const themeArr = [
		{
			themeMode: 'Theme__Light',
			bgColor: '#FFFFFF',
			textColor: '#262727',
			header: 'Light Mode',
		},
		{
			themeMode: 'Theme__Dark',
			bgColor: '#303031',
			textColor: '#FFFFFF',
			header: 'Dark Mode',
		},
	]

	return (
		<MemoryRouter>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				{
					// loop over modes to render depending on whether split, stacked, light, or dark
					themeArr.filter(Boolean).map((themeData) => (
						<div
							key={themeData.themeMode}
							className={themeData.themeMode}
							style={{
								background: themeData.bgColor,
								color: themeData.textColor,
								display: 'flex',
								flexDirection: 'column',
								flex: '0 0 50%',
								minHeight: 'initial', // silly flexbox fix
							}}
						>
							<h1
								style={{
									color: themeData.textColor,
									margin: '10px',
								}}
							>
								{ themeData.header }
							</h1>
							{/* examples that depend on an outer absolute position need this to appear correctly within the story */}
							<div style={{position: 'relative', flexGrow: 1, overflow: 'auto', padding: '10px'}}>
								<Story {...context} />
							</div>
						</div>
					))
				}

			</div>
		</MemoryRouter>
	)
}

export const decorators = [withMemoryRouter];

