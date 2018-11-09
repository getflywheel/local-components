import path from 'path';
import fs from 'fs';
import urlParse from 'url-parse';

const isStylesheetLoaded = (href) => {

	for ( const stylesheet of document.styleSheets ) {
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
	link.async = true;

	document.getElementsByTagName( 'head' )[0].appendChild( link );

}
