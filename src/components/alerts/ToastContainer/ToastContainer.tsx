import React from 'react';
import { toast as toastDefault, ToastContainer as ToastContainerDefault, ToastContainerProps } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

const injectToastStyles = () => {
	injectStyle();
	// eslint-disable-next-line no-restricted-syntax
	for (const sheet of document.styleSheets) {
		try {
			const rules = sheet.cssRules;
			const node = sheet.ownerNode;

			if (rules?.[0].cssText.includes(':root') && rules[1]?.cssText.includes('.Toastify')) {
				node?.remove();
				document.head.insertBefore(node as Node, document.head.firstChild);
				break;
			}
		} catch {
			// eslint-disable-next-line no-continue
			continue;
		}
	}
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
