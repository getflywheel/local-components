/// <reference path="../src/custom.d.ts" />
import globby = require('globby');
import SVGO = require('svgo');
import path from 'path';
import fs from 'fs';


const svgo = new SVGO({
	plugins: [
		{
			inlineStyles: {},
		},
	]
});

async function getSvgs () {
	return await globby(['src/**/*.svg']);
}

async function generateSvgStubs () {
	const svgs = await getSvgs();

	for (const svgPath of svgs) {
		const svgDirname = path.dirname(svgPath);
		const svgBasename = path.basename(svgPath);
		const tsSvgPath = path.resolve(process.cwd(), svgDirname, svgBasename + '.tsx');

		try {
			const svgContents = await svgo.optimize(fs.readFileSync(svgPath).toString());
			const tsSvgContents = `import React from 'react'; 
				const fn = () => (
					${svgContents.data.replace(/class=/g, 'className=')}
				);
				export default fn;
				`
			;

			fs.writeFileSync(tsSvgPath, tsSvgContents);

			console.info('Wrote', tsSvgPath);
		}
		catch (e) {
			console.error('Ran into error', e);

			process.exit(1);
		}
	}
}

(async () => {
	await generateSvgStubs();
})();
