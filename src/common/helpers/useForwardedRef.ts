import React from 'react';

const useForwardedRef = <T>(ref: React.ForwardedRef<T>) => {
	const innerRef = React.useRef<T>(null);
	React.useEffect(() => {
		if (!ref) return;
		if (typeof ref === 'function') {
			ref(innerRef.current);
		} else {
			// eslint-disable-next-line no-param-reassign
			ref.current = innerRef.current;
		}
	}, [innerRef]);

	return innerRef;
};

export default useForwardedRef;
