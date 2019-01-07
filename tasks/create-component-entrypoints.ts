/// <reference path="../src/global.d.ts" />
import 'ignore-styles';

import * as globby from 'globby';
import * as path from 'path';
import * as mock from 'mock-require';
import * as fs from 'fs';

mock('electron', {
	remote: {
		dialog: () => {},
		require: () => ({ default: () => {} })
	}
});

async function getComponentFiles() {
	return await globby(['src/**/*.tsx', '!src/**/*test.tsx']);
}

async function getExportedComponents() {
	const componentFiles = await getComponentFiles();
	const exportedComponents: { [s: string]: string[]; } = {};

	for (const componentFile of componentFiles) {
		const tmpRequire = require(path.resolve(componentFile)) as any;
		exportedComponents[componentFile] = Object.keys(tmpRequire);
	}

	return exportedComponents;
}

async function generateEntrypoints() {
	const exportedComponents = await getExportedComponents();

	for (const [componentPath, componentExports] of Object.entries(exportedComponents)) {
		const componentName = path.basename(componentPath, '.tsx');

		let content = `const mainEntrypoint = require('./index');`;
		let addedInitialObject = false;

		for (const componentExport of componentExports) {
			if (componentExport === 'default') {
				content += `\nmodule.exports = mainEntrypoint['${componentName}'];`;
				addedInitialObject = true;

				continue;
			}

			if (!addedInitialObject) {
				content += `\n\nmodule.exports = {};`;
				addedInitialObject = true;
			}


			content += `\nmodule.exports['${componentExport}'] = mainEntrypoint['${componentExport}'];`;
		}

		const entrypointPath = path.resolve(__dirname, '../dist', componentName + '.js');

		try {
			fs.writeFileSync(entrypointPath, content);

			console.info('Wrote', entrypointPath);
		}
		catch (e) {
			console.error('Ran into error', e);

			process.exit(1);
		}

	}

	process.exit(0);
}

(async () => {
	await generateEntrypoints();
})();
