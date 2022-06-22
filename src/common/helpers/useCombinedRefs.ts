import React from 'react';

const useCombinedRefs = <T>(...args: React.ForwardedRef<T>[]) => {
	const innerRef = React.useRef<T>(null);
	React.useEffect(() => {
		args.forEach((ref) => {
			if (!ref) return;
			if (typeof ref === 'function') {
				ref(innerRef.current);
			} else {
				// eslint-disable-next-line no-param-reassign
				ref.current = innerRef.current;
			}
		});
	}, [innerRef]);

	return innerRef;
};

export default useCombinedRefs;
