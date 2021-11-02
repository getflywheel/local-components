import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import React, { useState, useEffect, useCallback } from 'react';
import styles from './ScrollShadow.scss';
import { FunctionGeneric } from '../../../common/structures/Generics';

interface IProps extends IReactComponentProps {
	// Callback for accessing the scrollable content div ref from a parent - element will be passed on change
	refCallback?: FunctionGeneric;
	shadowClassName?: string;
}

export const ScrollShadow = (props: IProps) => {
	const [scrollableContent, setScrollableContent] = useState<HTMLDivElement | null>(null);
	const [showScrollShadow, setShowScrollShadow] = useState(false);

	const canScroll = (el: Element) => el.scrollHeight > el.clientHeight;

	const handleScroll = (e: any) => {
		const hideShadow = !canScroll(e.target)
			|| ((e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight);
		setShowScrollShadow(!hideShadow);
	};

	useEffect(() => {
		if (!scrollableContent) return;

		setShowScrollShadow(canScroll(scrollableContent));

		scrollableContent.addEventListener('scroll', handleScroll, { passive: true });

		const resizeObserver = new ResizeObserver((events) => {
			for (const event of events) {
				handleScroll(event);
			}
		});

		resizeObserver.observe(scrollableContent);

		return () => {
			scrollableContent.removeEventListener('scroll', handleScroll);
			resizeObserver.disconnect();
		};
	}, [scrollableContent]);

	const setScrollableContentRef = useCallback((element: HTMLDivElement | null) => {
		setScrollableContent(element);
		if (props.refCallback) props.refCallback(element);
	}, [props.refCallback]);

	return (
		<>
			<div 
				className={classnames(styles.ScrollableContent, props.className)} 
				id={props.id}
				style={props.style}
				ref={setScrollableContentRef}
			>
				{props.children}
			</div>
			<div className={classnames(styles.ScrollShadow__Container, props.shadowClassName)}>
				<div
					className={classnames(styles.ScrollShadow, {
						[styles.ScrollShadow__Show]: showScrollShadow,
					})}
				/>
			</div>

		</>

	);
};
