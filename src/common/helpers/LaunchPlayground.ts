import { compressToEncodedURIComponent } from 'lz-string';
import { execSync } from 'child_process';

// Launches the playground feature from the JavaScript Testing Library mob as a
// side-effect rather than printing that gnarly URL to the console where you have
// to copy and paste it like an animal. Only tested on macOS. Use and enjoy but
// maybe don't commit any call sites.
//
// Add `import { LaunchPlayground } from 'common/helpers/LaunchPlayground';`
// to the top of your file or test and call like so:
// `LaunchPlayground(window.document.body);`
// element: a chunk of the DOM or a query result from the `screen` object in the
// testing harness.
//
// returns happiness
export const LaunchPlayground = (element: any): void => {
	const unindented = element.innerHTML.replace(/[ \t]*[\n][ \t]*/g, '\n');
	const encoded = compressToEncodedURIComponent(unindented);
	execSync(`open https://testing-playground.com/#markup=${encoded}`);
};

export default LaunchPlayground;
