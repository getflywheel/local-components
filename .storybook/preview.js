import '../src/global.sass';
import React from 'react';
import { MemoryRouter } from 'react-router';

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
	const { theme } = context.globals;

	return (
		<MemoryRouter>
			{theme === 'light' || theme === 'dark'
				? (
					{/* examples that depend on an outer absolute position need this to appear correctly within the story */}
					<div
						className={theme === 'light' ? 'Theme__Light' : 'Theme__Dark'}
						style={{position: 'relative'}}
					>
						<Story {...context} />
					</div>
				)
				: (
					<div
						style={{
							display: 'flex',
							height: '100%',
							['flexDirection']: theme === 'stacked' ? 'column' : 'row',
						}}
					>
						<div
							className="Theme__Light"
							style={{
								background: '#FFFFFF',
								flex: '0 0 50%',
								padding: '10px',
								position: 'relative',
							}}
						>
							<h1
								style={{
									marginBottom: '10px',
									textDecoration: 'underline',
								}}
							>
								Light Mode
							</h1>
							<Story {...context} />
						</div>
						<div
							className="Theme__Dark"
							style={{
								background: '#262727',
								flex: '0 0 50%',
								padding: '10px',
								position: 'relative',
							}}
						>
							<h1
								style={{
									color: '#FFFFFF',
									marginBottom: '10px',
									textDecoration: 'underline',
								}}
							>
								Dark Mode
							</h1>
							<Story {...context} />
						</div>
					</div>
				)
			}
		</MemoryRouter>
	)
}

export const decorators = [withMemoryRouter];
