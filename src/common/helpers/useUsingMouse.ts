import { useEffect, useState } from 'react';

const useUsingMouse = () => {
	const [usingMouse, setUsingMouse] = useState(true);
	const startUsingMouse = () => setUsingMouse(true);
	const stopUsingMouse = () => setUsingMouse(false);

	const handleKeyDown = (e: KeyboardEvent) => {
		if (['ArrowDown', 'ArrowUp', 'Tab', 'Escape'].includes(e.key)) {
			stopUsingMouse();
		}
	};

	useEffect(() => {
		window.addEventListener('mousedown', startUsingMouse);
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('mousedown', startUsingMouse);
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return { usingMouse, startUsingMouse, stopUsingMouse };
};

export default useUsingMouse;
