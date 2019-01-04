declare module "*.svg" {
	const content: any;
	export default content;
}

declare module '*.sass' {
	const content: {[className: string]: string};
	export = content;
}

declare module '*.scss' {
	const content: {[className: string]: string};
	export = content;
}

declare module 'react-lowlight';
declare module 'highlight.js/lib/languages/*';

declare module 'svgo';
