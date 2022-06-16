import * as React from 'react';
import classnames from 'classnames';
import styles from './BasicInput.scss';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';

export interface IBasicInputProps extends ILocalContainerProps {
	name?: string;
	onChange?: any;
	value?: string;
	minlength?: number;
	maxlength?: number;
	list?: string;
	pattern?: string;
	placeholder?: string;
	readonly?: boolean;
	size?: number;
	spellcheck?: boolean;
	onKeyUp?: any;
	invalid?: boolean;
	invalidMessage?: string;
	autofocus?: boolean;
}

const useForwardedRef = (ref: React.ForwardedRef<HTMLInputElement>) => {
	const innerRef = React.useRef<HTMLInputElement>(null);
	React.useEffect(() => {
		if (!ref) return;
		if (typeof ref === 'function') {
			ref(innerRef.current);
		} else {
			// eslint-disable-next-line no-param-reassign
			ref.current = innerRef.current;
		}
	});

	return innerRef;
};

const BasicInput = React.forwardRef((props: IBasicInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
	const { className, id, name, style, invalid, invalidMessage, autofocus, ...otherProps } = props;

	const input = useForwardedRef(ref);

	React.useEffect(() => {
		if (autofocus) {
			input.current?.focus();
		}
	}, []);

	return (
		<div className={classnames('BasicInput', styles.BasicInput, className)} id={id} style={style}>
			<input
				name={name}
				type="text"
				className={classnames({ [`${styles.__Invalid} __Invalid`]: invalid })}
				ref={input}
				{...otherProps}
			/>
			{invalid && invalidMessage && <span>{invalidMessage}</span>}
		</div>
	);
});

export default BasicInput;
