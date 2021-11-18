import React, {useState, useEffect} from 'react';
import classnames from 'classnames';
import * as styles from './InputPasswordToggle.scss'
import EyeSVG from '../../../svg/eye.svg';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';

interface IProps extends ILocalContainerProps {
	name?: string;
	onChange?: any;
	value?: string;
	invalid?: boolean;
	invalidMessage?: string;
	type?: IState['inputType'];
}

interface IState {
	inputType: 'password' | 'text';
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
				name={name}
				type={inputType}
				className={classnames(styles.PasswordToggleInput, {[styles.__Invalid]: invalid})}
			/>
			<span
				tabIndex={0}
				className={classnames(styles.Eye, 'Eye')}
				onClick={toggleType}
				onKeyDown={onKeyDown}
			>
				<EyeSVG />
			</span>
			{(invalid && invalidMessage) && (
				<span className={styles.InputPasswordToggle__InvalidMessage}>{invalidMessage}</span>
			)}
		</div>
	);
}

export default InputPasswordToggle;
