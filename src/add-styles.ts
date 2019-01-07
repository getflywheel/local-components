import * as path from 'path';
import * as fs from 'fs';
import * as urlParse from 'url-parse';

const isStylesheetLoaded = (href: string) => {

	for ( const stylesheet of document.styleSheets ) {
		if (!stylesheet.href) {
			continue;
		}

		const parsedURL = urlParse(stylesheet.href);

		try {
			const a = fs.realpathSync(path.resolve(href));
			const b = fs.realpathSync(path.resolve(parsedURL.pathname));

			if (a === b) {
				return true;
			}
		} catch (e) {
			console.error(e);
		}
	}

	return false;

};

export default function () {

	/* Do not inject styles on Styleguide */
	if (!process) {
		return;
	}

	const stylesheetPath = path.resolve(__dirname, './scoped.css');

	if (isStylesheetLoaded(stylesheetPath)) {
		return;
	}

	const link = document.createElement( 'link' );

	link.href = stylesheetPath;
	link.type = 'text/css';
	link.rel = 'stylesheet';

	document.getElementsByTagName( 'head' )[0].appendChild( link );

}
