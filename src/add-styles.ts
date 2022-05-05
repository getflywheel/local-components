import * as path from 'path';
import * as fs from 'fs';

const isStylesheetLoaded = (href: string) => {
	// eslint-disable-next-line no-restricted-syntax
	for (const stylesheet of document.styleSheets) {
		if (stylesheet.href) {
			const parsedURL = new URL(stylesheet.href);

			try {
				const a = fs.realpathSync(path.resolve(href));
				const b = fs.realpathSync(path.resolve(decodeURI(parsedURL.pathname)));

				if (a === b) {
					return true;
				}
			} catch (e) {
				console.error(e);
			}
		}
	}

	return false;
};

const addStyles = () => {
	/* Do not inject styles on Styleguide */
	if (!process) {
		return;
	}

	const stylesheetPath = path.resolve(__dirname, './scoped.css');

	if (isStylesheetLoaded(stylesheetPath)) {
		return;
	}

	const link = document.createElement('link');

	link.href = stylesheetPath;
	link.type = 'text/css';
	link.rel = 'stylesheet';

	const head = document.getElementsByTagName('head')[0];
	head.insertBefore(link, head.firstChild);
};

export default addStyles;
