import React from 'react';
import { toast as toastDefault, ToastContainer as ToastContainerDefault, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
