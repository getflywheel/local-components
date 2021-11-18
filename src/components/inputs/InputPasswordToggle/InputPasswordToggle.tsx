import React, {useState, useEffect} from 'react';
import classnames from 'classnames';
import * as styles from './InputPasswordToggle.scss'
import EyeSVG from '../../../svg/eye.svg';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';
import Checkbox from '../Checkbox/Checkbox';

interface IProps extends ILocalContainerProps {
	name?: string;
	onChange?: any;
	value?: string;
	invalid?: boolean;
	invalidMessage?: string;
	type?: 'password' | 'text';
	checkbox?: boolean;
}

const InputPasswordToggle = (props: IProps) => {
	const { 
		className,
		style,
		id,
		name,
		invalid,
		invalidMessage,
		type = 'password',
		checkbox,
		value,
		onChange,
		...otherProps 
	} = props;

	const [inputType, setInputType] = useState(type)

	const toggleType = () => {
		setInputType((prev) => prev === 'password' ? 'text' : 'password')
	}

	const onKeyDown = (e: any) => {
		if (e.key === 'Enter'){
			toggleType();
		}
	}

	useEffect(() => {
		setInputType(type)
	}, [type])

	return (
		<div
			className={classnames(
				styles.PasswordToggle,
				styles[`PasswordToggle__${inputType}`],
				className,
			)}
			style={style}
			id={id}
			{...otherProps}
		>
			<input
				value={value}
				name={name}
				type={inputType}
				className={classnames(styles.PasswordToggleInput, {
					[`${styles.__Invalid} __Invalid`]: invalid,
					[styles.__Checkbox]: checkbox,
				})}
				onChange={onChange}
			/>
			{checkbox ? (
				<div className={classnames(styles.InputPasswordToggle__Checkbox)}>
					<Checkbox
						label="Show Password"
						checked={inputType === 'text'}
						onChange={toggleType}
						onKeyDown={onKeyDown}
					/>
				</div>
			) : (
				<span
					tabIndex={0}
					className={classnames(styles.Eye, 'Eye')}
					onClick={toggleType}
					onKeyDown={onKeyDown}
				>
					<EyeSVG />
				</span>
			)}

			{(invalid && invalidMessage) && (
				<span className={styles.InputPasswordToggle__InvalidMessage}>{invalidMessage}</span>
			)}
		</div>
	);
}

export default InputPasswordToggle;
