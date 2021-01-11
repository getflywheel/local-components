import { useEffect, useState, useCallback, useRef } from 'react';

const defaultOptions = {
	cancelOnUnmount: true,
};

/**
 * An async-utility hook that accepts a callback function and a delay time (in milliseconds), then delays the
 * execution of the given function by the defined time.
 */
export const useTimeout = (
	fn?: React.EffectCallback,
	milliseconds?: number,
	options?: typeof defaultOptions,
): [boolean, () => void] => {
	const opts = { ...defaultOptions, ...(options || defaultOptions) };
	const timeout = useRef<NodeJS.Timeout>();
	const callbackRef = useRef(fn);
	const [isCleared, setIsCleared] = useState(false);
	const isComplete = useRef(false);

	// the clear method
	const clear = useCallback(() => {
		if (timeout.current) {
			clearTimeout(timeout.current);
			setIsCleared(true);
		}
	}, []);

	// the clear method
	const swapTimeout = useCallback((ms) => {
		isComplete.current = false;
		timeout.current = setTimeout(() => {
			isComplete.current = true;
			callbackRef.current?.();
		}, ms) as any;
	}, []);

	// if the provided function changes, change its reference
	useEffect(() => {
		if (typeof fn === 'function') {
			callbackRef.current = fn;
			if (isComplete.current) {
				swapTimeout(milliseconds);
			}
		}
	}, [fn]);

	// when the milliseconds change, reset the timeout
	useEffect(() => {
		if (typeof milliseconds === 'number' && callbackRef.current) {
			swapTimeout(milliseconds);
		}
		return clear;
	}, [milliseconds]);

	// when component unmount clear the timeout
	useEffect(() => () => {
		if (opts.cancelOnUnmount) {
			clear();
		}
	}, []);

	return [isCleared, clear];
};

/**
 * This uses a single timeout that auto-cancels any previous timeout when swapped out and auto-cancels on unmount.
 * @param fn The timeout callback function.
 * @param milliseconds The timeout delay.
 * @param options
 */
export const useSwappableTimeout = (
	fn?: React.EffectCallback,
	milliseconds?: number,
	options?: typeof defaultOptions
) => {
	const [args, setArgs] = useState<
		[React.EffectCallback | undefined, number | undefined, typeof defaultOptions | undefined]
	>([fn, milliseconds, options]);
	const [fnArg, msArg, optionsArg] = args;
	const [isCleared, clearTimeoutRef] = useTimeout(
		fnArg ?? fn,
		msArg ?? milliseconds,
		optionsArg ?? options,
	);

	const swapTimeout = (...args: any[]) => {
		setArgs(args as any);
	};

	return {
		clearTimeoutRef,
		isCleared,
		swapTimeout,
	};
};
