import { useEffect, useState } from 'react';

export const useDetectClickWithinTargets = (el1: HTMLElement | null, el2?: HTMLElement | null, alwaysBlurOnClick?: boolean) => {
	const [isClickFocus, setIsClickFocus] = useState(false);

	useEffect(
		() => {
			const listener = (event: {target: any}) => {
				// if clicking ref's element or descendent elements
				if (!el1 || el1.contains(event.target) || el2?.contains(event.target)) {
					return;
				}

				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);

				setIsClickFocus(false);
			};

			const onClick = () => {
				// depending on whether to detect every click as cancelling something (e.g. tooltip)
				// this should either toogle or set to true
				setIsClickFocus((is) => alwaysBlurOnClick ? !is : true);

				// just to be safe because of intermittent re-processing code
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
				document.addEventListener('mousedown', listener);
				document.addEventListener('touchstart', listener);
			}

			el1?.addEventListener('click', onClick);

			// if re-processing in between click and click outside
			if (isClickFocus) {
				document.addEventListener('mousedown', listener);
				document.addEventListener('touchstart', listener);
			}

			return () => {
				el1?.removeEventListener('click', onClick);
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
			};
		},
		[el1, el2, alwaysBlurOnClick],
	);

	return isClickFocus;
}
