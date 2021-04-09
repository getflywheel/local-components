import { useEffect, useState } from 'react';

export const useDetectHover = (element: HTMLElement | null) => {
	const [isHover, setIsHover] = useState(false);
	const handleMouseOver = () => setIsHover(true);
	const handleMouseOut = () => setIsHover(false);

	useEffect(
		() => {
			if (element) {
				element.addEventListener('mouseover', handleMouseOver);
				element.addEventListener('mouseout', handleMouseOut);

				return () => {
					element.removeEventListener('mouseover', handleMouseOver);
					element.removeEventListener('mouseout', handleMouseOut);
				};
			}
		},
		[element],
	);

	return isHover;
}
