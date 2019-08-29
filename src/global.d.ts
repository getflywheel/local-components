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
declare module 'react-truncate-markup/lib';
declare module 'svgo';
declare module 'mock-require';

type FunctionGeneric = (...params: any[]) => any;
