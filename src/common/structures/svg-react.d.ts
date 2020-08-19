declare module '*.svg' {
	import * as React from 'react';

	const SVG: React.FC<{ className?: string }>;

	export default SVG;
}
