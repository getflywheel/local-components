import { useEffect, useRef, useState } from 'react';

export const useDetectTransitionEnd = (element: HTMLElement | null, transitionEndPropName: string) => {
	const [ isTransitionEnd, setIsTransitionEnd ] = useState(false);
	const onTransitionEnd = (e: TransitionEvent) => e.propertyName === transitionEndPropName && setIsTransitionEnd(true);
	const onTransitionStart = (e: TransitionEvent) => e.propertyName === transitionEndPropName && setIsTransitionEnd(false);

	useEffect(
		() => {
			if (element) {
				element.addEventListener('transitionend', onTransitionEnd);
				element.addEventListener('transitionstart', onTransitionStart);

				return () => {
					element.removeEventListener('transitionend', onTransitionEnd);
					element.removeEventListener('transitionstart', onTransitionStart);
				};
			}
		},
		[ element ],
	);

	return { isTransitionEnd };
}
