import {
	CloseButtonProps,
	cssTransition,
	toast as toastDefault,
	ToastContentProps,
	ToastOptions as ToastOptionsDefault,
} from 'react-toastify';
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Toast.scss';
import Close from '../../buttons/Close/Close';
import ProgressRing from '../../loaders/ProgressRing/ProgressRing';
import { CheckmarkIcon, ExclamationIcon } from '../../icons/Icons';

const CloseButton = ({ closeToast }: CloseButtonProps) => {
	return <Close position="static" size="m" onClick={closeToast} className={styles.Toast__Close} />;
};

enum ToastType {
	success = 'success',
	error = 'error',
	cta = 'cta',
}

export interface ToastOptions
	extends Pick<ToastOptionsDefault, 'style' | 'className' | 'toastId' | 'autoClose' | 'pauseOnHover'> {
	/**
	 * Content for toast. Can be simple string or valid React node.
	 * E.g. Component or JSX for rendering icons, text buttons, external links, etc.
	 */
	content: React.ReactChild;
	/** Toast type, can be either "success", "error", or "cta" */
	type?: keyof typeof ToastType | ToastType;
}

type ContentProps = Pick<ToastOptions, 'content' | 'autoClose' | 'type' | 'pauseOnHover'> & Partial<ToastContentProps>;

const Content = (props: ContentProps) => {
	const { content, autoClose, type, closeToast, pauseOnHover } = props;
	const [progress, setProgress] = useState(1);
	// This needs to be a ref and not state to prevent stale data in the setInterval callback
	const hovered = useRef(false);
	const contentRef = useRef<HTMLDivElement>(null);

	const setHoveredTrue = () => {
		hovered.current = true;
	};
	const setHoveredFalse = () => {
		hovered.current = false;
	};

	useEffect(() => {
		if (pauseOnHover) {
			const toastElement = contentRef.current?.closest('.Toastify__toast');

			toastElement?.addEventListener('mouseover', setHoveredTrue);
			toastElement?.addEventListener('mouseout', setHoveredFalse);

			return () => {
				toastElement?.removeEventListener('mouseover', setHoveredTrue);
				toastElement?.removeEventListener('mouseout', setHoveredFalse);
			};
		}
	}, [contentRef.current]);

	useEffect(() => {
		if (autoClose) {
			const interval = 100;
			const intervalID = setInterval(() => {
				setProgress((current) => {
					if (pauseOnHover && hovered.current) {
						return current;
					}

					if (current <= 0) {
						closeToast?.();
						clearInterval(intervalID);
						return 0;
					}

					return current - 1 / (autoClose / interval);
				});
			}, interval);
		}
	}, []);

	return (
		<div
			ref={contentRef}
			className={classNames(styles.Toast__content, {
				[styles.Toast__content_Error]: type === ToastType.error,
			})}
		>
			{autoClose && (
				<div className={styles.Toast__ProgressRing_Wrapper}>
					{(type === ToastType.success || type === ToastType.cta) && (
						<CheckmarkIcon className={styles.Toast_ProgressRing_Icon} />
					)}
					{type === ToastType.error && (
						<ExclamationIcon size="m" className={styles.Toast_ProgressRing_Icon} />
					)}
					<ProgressRing className={styles.Toast__ProgressRing} progress={progress} />
				</div>
			)}
			{content}
		</div>
	);
};

const toast = (options: ToastOptions) => {
	const { content, autoClose = 6000, type = 'success', pauseOnHover = false, ...restOptions } = options;

	const toastOptions: ToastOptionsDefault = {
		closeButton: CloseButton,
		hideProgressBar: true,
		className: type === ToastType.cta ? 'Theme__Inverted' : undefined,
		autoClose: false,
		transition: cssTransition({
			enter: styles['Toast__slide-enter'],
			exit: styles['Toast__slide-exit'],
		}),
		pauseOnHover: false,
		...restOptions,
	};

	toastDefault(<Content {...{ content, autoClose, type, pauseOnHover }} />, toastOptions);
};

export default toast;
