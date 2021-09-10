import { useEffect, useState } from 'react';

export const useDetectClickWithinTargets = ({popperEl, hoverEl, alwaysBlurOnClick, useClickInsteadOfHover}: { popperEl: HTMLElement | null, hoverEl: HTMLElement | null, alwaysBlurOnClick: boolean, useClickInsteadOfHover: boolean }) => {
	const [isClickFocus, setIsClickFocus] = useState(false);
	const [isHover, setIsHover] = useState(false);

	const handleMouseOver = () => setIsHover(true);
	const handleMouseOut = () => setIsHover(false);

	useEffect(
		() => {
			if (hoverEl && !useClickInsteadOfHover) {
				hoverEl.addEventListener('mouseover', handleMouseOver);
				hoverEl.addEventListener('mouseout', handleMouseOut);

				return () => {
					hoverEl.removeEventListener('mouseover', handleMouseOver);
					hoverEl.removeEventListener('mouseout', handleMouseOut);
				};
			}

			if (popperEl && useClickInsteadOfHover) {
				const listener = (event: {target: any}) => {
					// if clicking ref's element or descendent elements
					if (!popperEl || popperEl.contains(event.target)) {
						return;
					}

					document.removeEventListener('click', listener);
					document.removeEventListener('touchend', listener);

					setIsClickFocus(false);
				};

				const onClick = () => {
					// depending on whether to detect every click as cancelling something (e.g. tooltip)
					// this should either toogle or set to true
					setIsClickFocus((is) => alwaysBlurOnClick ? !is : true);

					// just to be safe because of intermittent re-processing code
					document.removeEventListener('click', listener);
					document.removeEventListener('touchend', listener);
					document.addEventListener('click', listener);
					document.addEventListener('touchend', listener);
				}

				popperEl?.addEventListener('click', onClick);

				// if re-processing in between click and click outside
				if (isClickFocus) {
					document.addEventListener('click', listener);
					document.addEventListener('touchend', listener);
				}

				return () => {
					popperEl?.removeEventListener('click', onClick);
					document.removeEventListener('click', listener);
					document.removeEventListener('touchend', listener);
				};
			}
		},
		[hoverEl, popperEl, alwaysBlurOnClick, useClickInsteadOfHover],
	);

	return useClickInsteadOfHover ? isClickFocus : isHover;
}
