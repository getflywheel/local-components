import { useEffect, useState } from 'react';

export const useDetectClickOrHoverWithinTargets = ({
	targetEl, 
	alwaysBlurOnClick, 
	useClickInsteadOfHover
}: { 
	targetEl: HTMLElement | null, 
	alwaysBlurOnClick: boolean, 
	useClickInsteadOfHover: boolean 
}) => {
	const [isClickFocus, setIsClickFocus] = useState(false);
	const [isHover, setIsHover] = useState(false);

	const handleMouseOver = () => setIsHover(true);
	const handleMouseOut = () => setIsHover(false);

	useEffect(() => {
			if (targetEl && !useClickInsteadOfHover) {
				targetEl.addEventListener('mouseover', handleMouseOver);
				targetEl.addEventListener('mouseout', handleMouseOut);

				return () => {
					targetEl.removeEventListener('mouseover', handleMouseOver);
					targetEl.removeEventListener('mouseout', handleMouseOut);
				};
			}

			if (targetEl && useClickInsteadOfHover) {
				const listener = (event: {target: any}) => {
					// if clicking ref's element or descendent elements
					if (!targetEl || targetEl.contains(event.target)) {
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
					console.log("Inside onClick event")
					// just to be safe because of intermittent re-processing code
					document.removeEventListener('click', listener);
					document.removeEventListener('touchend', listener);
					document.addEventListener('click', listener);
					document.addEventListener('touchend', listener);
				}

				targetEl?.addEventListener('click', onClick);

				// if re-processing in between click and click outside
				if (isClickFocus) {
					document.addEventListener('click', listener);
					document.addEventListener('touchend', listener);
				}

				return () => {
					targetEl?.removeEventListener('click', onClick);
					document.removeEventListener('click', listener);
					document.removeEventListener('touchend', listener);
				};
			}
		},
		[targetEl, alwaysBlurOnClick, useClickInsteadOfHover],
	);

	return useClickInsteadOfHover ? isClickFocus : isHover;
}
