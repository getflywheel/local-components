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
declare module 'mock-require';
