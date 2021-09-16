import * as React from "react";
import classnames from "classnames";
import { CopyButton } from "../../buttons/CopyButton/CopyButton";
import IReactComponentProps from "../../../common/structures/IReactComponentProps";
import { FunctionGeneric } from "../../../common/structures/Generics";
import * as styles from "./CopyInput.scss";

export interface ICopyInputProps extends IReactComponentProps {
	/* A function that will receive the new value on change - could be used to determine validity of input */
	onChange?: FunctionGeneric;
	/* Initial value for text input */
	value?: string;
	/* Placeholder text for text input */
	placeholder?: string;
	/* Whether value is invalid - shows the invalid state of text input if true */
	invalid?: boolean;
	/* Whether input is disabled */
	disabled?: boolean;
	/* Label to be shown above text input */
	label?: string;
	/* Message to be shown underneath an enabled input e.g. length requirement, example input, etc. */
	message?: string;
	/* Only show message when invalid is true - useful for only displaying error/validity CTAs */
	onlyShowMessageWhenInvalid?: boolean;
}

export const CopyInput = (props: ICopyInputProps) => {
	const {
		placeholder,
		value,
		onChange,
		invalid,
		disabled,
		label,
		message,
		onlyShowMessageWhenInvalid,
	} = props;

	const [textToCopy, setTextToCopy] = React.useState(value);
	React.useEffect(() => {
		setTextToCopy(value);
	}, [value]);

	const showMessage =
		!disabled &&
		(onlyShowMessageWhenInvalid ? invalid && message : !!message);
	const isInvalid = invalid && !disabled;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue: string = event.target.value;
		setTextToCopy(newValue);
		onChange?.(newValue);
	};

	return (
		<div
			className={classnames(styles.CopyInput__Container, props.className)}
			id={props.id}
			style={props.style}
		>
			{label && (
				<label
					htmlFor={styles.CopyInput__Input}
					className={classnames(styles.CopyInput__Label)}
				>
					{label}
				</label>
			)}
			<div
				className={classnames(styles.CopyInput, {
					[styles.__Disabled]: disabled,
				})}
			>
				<input
					className={classnames(styles.CopyInput__Input, {
						[styles.__Invalid]: isInvalid,
					})}
					id={styles.CopyInput__Input}
					onChange={handleChange}
					placeholder={placeholder}
					type="text"
					value={textToCopy}
					disabled={disabled}
				/>
				<span className={classnames(styles.CopyInput__CopyButton)}>
					<CopyButton
						copiedStateIconVariant="checkmarkStroke"
						copiedStateBGStyleVariant="transparentGrayText"
						uncopiedStateBGStyleVariant="transparent"
						uncopiedStateIconVariant="copy"
						tag="span"
						copiedTimeout={1000}
						textToCopy={textToCopy}
						uncopiedStateText=""
						copiedStateText=""
					/>
				</span>
			</div>
			{showMessage && (
				<span
					className={classnames(styles.CopyInput__Message, {
						[styles.__Invalid]: isInvalid,
					})}
				>
					{message}
				</span>
			)}
		</div>
	);
};

CopyInput.defaultProps = {
	value: "",
	placeholder: "",
	invalid: false,
	disabled: false,
	onlyShowMessageWhenInvalid: false,
};
