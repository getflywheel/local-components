import { ReactNode, useEffect, useState } from 'react';
import classnames from 'classnames';

declare let __non_webpack_require__: any;
let ReactDOM: any;

try {
	ReactDOM = __non_webpack_require__('react-dom');
}
catch (e) {
	ReactDOM = require('react-dom');
}

export const Portal = ({
	children,
	className,
	tag = 'div',
}: {
	children: ReactNode | ReactNode[],
	className?: string,
	tag?: string,
}) => {
	const [container] = useState(() => {
		const el = document.createElement(tag);
		el.classList.add(classnames('portalContainer', className));
		return el;
	});

	useEffect(() => {
		document.body.appendChild(container);

		return () => {
			document.body.removeChild(container);
		}
	}, []);

	return ReactDOM.createPortal(children, container);
}
