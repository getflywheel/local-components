import { useEffect, useState } from 'react';

export const useDetectClickOrHoverWithinTargets = ({
	targetEl,
	alwaysBlurOnClick,
	useClickInsteadOfHover,
	ignoreClickOn,
	id,
}: {
	targetEl: HTMLElement | null;
	alwaysBlurOnClick: boolean;
	useClickInsteadOfHover: boolean;
	ignoreClickOn?: HTMLElement | null;
	id?: string;
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
			const listener = (event: { target: any }) => {
				// if clicking ref's descendent elements
				if (targetEl.contains(event.target)) {
					return;
				}

				if (!ignoreClickOn || !ignoreClickOn.contains(event.target)) {
					document.removeEventListener('click', listener);
					document.removeEventListener('touchend', listener);
					setIsClickFocus(false);
				}
			};

			const onClick = () => {
				// depending on whether to detect every click as cancelling something (e.g. tooltip)
				// this should either toogle or set to true
				setIsClickFocus((prev) => (alwaysBlurOnClick ? !prev : true));

				// just to be safe because of intermittent re-processing code
				document.removeEventListener('click', listener);
				document.removeEventListener('touchend', listener);
				document.addEventListener('click', listener);
				document.addEventListener('touchend', listener);
			};

			targetEl?.addEventListener('click', onClick);

			// if re-processing in between click and click outside
			if (isClickFocus) {
				document.addEventListener('click', listener);
				document.addEventListener('touchend', listener);
			}

			const handleHideTooltip = (event: DocumentEventMap['hideTooltip']) => {
				if (event.detail.id === id) {
					document.removeEventListener('click', listener);
					document.removeEventListener('touchend', listener);
					setIsClickFocus(false);
				}
			};

			if (id) {
				document.addEventListener('hideTooltip', handleHideTooltip);
			}

			return () => {
				targetEl?.removeEventListener('click', onClick);
				document.removeEventListener('click', listener);
				document.removeEventListener('touchend', listener);
				document.removeEventListener('hideTooltip', handleHideTooltip);
			};
		}
	}, [targetEl, alwaysBlurOnClick, useClickInsteadOfHover, ignoreClickOn]);

	return useClickInsteadOfHover ? isClickFocus : isHover;
};
