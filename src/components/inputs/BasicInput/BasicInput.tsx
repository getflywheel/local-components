import * as React from 'react';
import classnames from 'classnames';
import styles from './BasicInput.scss';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';
import useForwardedRef from '../../../common/helpers/useForwardedRef';

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
	invalid?: boolean;
	invalidMessage?: string;
	autofocus?: boolean;
	disabled?: boolean;
	/** Highlight the text on mount, useful for renaming */
	highlightText?: boolean;
}

const BasicInput = React.forwardRef((props: IBasicInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
	const { className, id, name, style, invalid, invalidMessage, autofocus, disabled, highlightText, ...otherProps } =
		props;

	const input = useForwardedRef(ref);

	React.useEffect(() => {
		if (autofocus) {
			input.current?.focus();
		}

		if (highlightText) {
			input.current?.select();
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
				disabled={disabled}
			/>
			{invalid && invalidMessage && <span>{invalidMessage}</span>}
		</div>
	);
});

export default BasicInput;
