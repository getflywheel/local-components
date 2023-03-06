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

			const handleHideTooltipHover = (event: WindowEventMap['hideTooltip']) => {
				if (event.detail.id === id) {
					setIsHover(false);
				}
			};

			const handleShowTooltipHover = (event: WindowEventMap['showTooltip']) => {
				if (event.detail.id === id) {
					setIsHover(true);
				}
			};

			if (id) {
				window.addEventListener('hideTooltip', handleHideTooltipHover);
				window.addEventListener('showTooltip', handleShowTooltipHover);
			}

			return () => {
				targetEl.removeEventListener('mouseover', handleMouseOver);
				targetEl.removeEventListener('mouseout', handleMouseOut);
				window.removeEventListener('hideTooltip', handleHideTooltipHover);
				window.removeEventListener('showTooltip', handleShowTooltipHover);
			};
		}

		if (targetEl && useClickInsteadOfHover) {
			const listener = (event: { target: any }) => {
				// if clicking ref's descendent elements or specifically ignored element
				if (targetEl.contains(event.target) || ignoreClickOn?.contains(event.target)) {
					return;
				}

				window.removeEventListener('click', listener);
				window.removeEventListener('touchend', listener);
				setIsClickFocus(false);
			};

			const onClick = () => {
				// depending on whether to detect every click as cancelling something (e.g. tooltip)
				// this should either toogle or set to true
				setIsClickFocus((prev) => (alwaysBlurOnClick ? !prev : true));

				// just to be safe because of intermittent re-processing code
				window.removeEventListener('click', listener);
				window.removeEventListener('touchend', listener);
				window.addEventListener('click', listener);
				window.addEventListener('touchend', listener);
			};

			targetEl?.addEventListener('click', onClick);

			// if re-processing in between click and click outside
			if (isClickFocus) {
				window.addEventListener('click', listener);
				window.addEventListener('touchend', listener);
			}

			const handleHideTooltipClick = (event: WindowEventMap['hideTooltip']) => {
				if (event.detail.id === id) {
					window.removeEventListener('click', listener);
					window.removeEventListener('touchend', listener);
					setIsClickFocus(false);
				}
			};

			const handleShowTooltipClick = (event: WindowEventMap['showTooltip']) => {
				if (event.detail.id === id) {
					setIsClickFocus(true);

					// just to be safe because of intermittent re-processing code
					window.removeEventListener('click', listener);
					window.removeEventListener('touchend', listener);
					window.addEventListener('click', listener);
					window.addEventListener('touchend', listener);
				}
			};

			if (id) {
				window.addEventListener('hideTooltip', handleHideTooltipClick);
				window.addEventListener('showTooltip', handleShowTooltipClick);
			}

			return () => {
				targetEl?.removeEventListener('click', onClick);
				window.removeEventListener('click', listener);
				window.removeEventListener('touchend', listener);
				window.removeEventListener('hideTooltip', handleHideTooltipClick);
				window.removeEventListener('showTooltip', handleShowTooltipClick);
			};
		}
	}, [targetEl, alwaysBlurOnClick, useClickInsteadOfHover, ignoreClickOn]);

	return useClickInsteadOfHover ? isClickFocus : isHover;
};
