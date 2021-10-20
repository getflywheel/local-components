import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import React, { useState, useEffect, useRef } from 'react';
import styles from './ScrollShadow.scss';

interface IResizeObserver {
    disconnect(): void;
    observe(target: Element): void;
    unobserve(target: Element): void;
}

export const ScrollShadow = (props: IReactComponentProps) => {
	const scrollableContent = useRef(document.createElement('div'));
	const [showScrollShadow, setShowScrollShadow] = useState(false);

	const canScroll = (el: Element) => el.scrollHeight > el.clientHeight;

	const handleScroll = (e: any) => {
		const hideShadow = !canScroll(e.target)
			|| ((e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight);
		setShowScrollShadow(!hideShadow);
	};

	useEffect(() => {
		const el = scrollableContent.current;

		setShowScrollShadow(canScroll(el));

		el.addEventListener('scroll', handleScroll);
		const resizeObserver: IResizeObserver = new ResizeObserver((events) => {
			for (const event of events) {
				handleScroll(event);
			}
		});
		resizeObserver.observe(el);

		return () => {
			el.removeEventListener('scroll', handleScroll);
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<>
			<div className={styles.ScrollableContent} ref={scrollableContent}>
				{props.children}
			</div>
			<div 
				className={classnames(styles.ScrollShadow__Container, props.className)}
				id={props.id}
				style={props.style}
			>
				<div
					className={classnames(props.className, styles.ScrollShadow, {
						[styles.ScrollShadow__Show]: showScrollShadow,
					})}
				/>
			</div>

		</>

	);
};
