import React from 'react';
import { toast as toastDefault, ToastContainer as ToastContainerDefault, ToastContainerProps } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

const injectToastStyles = () => {
	injectStyle();
	let toastStyleSheet: CSSStyleSheet | undefined;
	// eslint-disable-next-line no-restricted-syntax
	for (const sheet of document.styleSheets) {
		try {
			if (sheet.cssRules?.[0].cssText.includes(':root') && sheet.cssRules[1]?.cssText.includes('.Toastify')) {
				toastStyleSheet = sheet;
				break;
			}
		} catch {
			// eslint-disable-next-line no-continue
			continue;
		}
	}

	const node = toastStyleSheet?.ownerNode;
	node?.remove();
	document.head.insertBefore(node as Node, document.head.firstChild);
};

injectToastStyles();

const ToastContainer = (props: ToastContainerProps) => {
	const defaultProps: ToastContainerProps = {
		limit: 3,
		pauseOnHover: false,
		closeOnClick: false,
		pauseOnFocusLoss: false,
		position: toastDefault.POSITION.BOTTOM_RIGHT,
		newestOnTop: true,
		draggable: false,
	};
	return <ToastContainerDefault {...{ ...defaultProps, ...props }} />;
};

export default ToastContainer;
