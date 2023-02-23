import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import styles from './IconCheckbox.scss';

interface ISvgProps {
	className?: string;
}

interface IProps extends IReactComponentProps {
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	Icon: React.FC<ISvgProps>;
	disabled?: boolean;
	name?: string;
	/** Whether to override svg icon path colors * */
	useIconColorsOnChecked?: boolean;
	useIconColorsOnCheckedHover?: boolean;
	useIconColorsOnUnchecked?: boolean;
	useIconColorsOnUncheckedHover?: boolean;
}

export const IconCheckbox: React.FC<IProps> = ({
	checked,
	disabled,
	Icon,
	name,
	onChange,
	className,
	id,
	style,
	useIconColorsOnChecked,
	useIconColorsOnCheckedHover,
	useIconColorsOnUnchecked,
	useIconColorsOnUncheckedHover,
	...restProps
}) => {
	const [isChecked, setIsChecked] = useState(checked);
	// state to track temporarily disabling hover to make the checked/unchecked effect play nicer with hover
	const [disableHoverStyles, setDisableHoverStyles] = useState(checked);

	// to allow updates to the state via prop changes, an effect much be used
	useEffect(() => {
		setIsChecked(checked);
	}, [checked]);

	const handleChange = () => {
		setDisableHoverStyles(true);
		setIsChecked((prev) => {
			onChange?.(!prev);
			return !prev;
		});
	};

	const onMouseLeave = () => {
		if (disableHoverStyles) {
			setDisableHoverStyles(false);
		}
	};

	return (
		<div
			className={classnames(
				styles.IconCheckbox,
				{
					[styles.IconCheckbox__Checked]: isChecked,
					[styles.IconCheckbox__Disabled]: disabled,
					[styles.IconCheckbox__DisableHoverStyles]: disableHoverStyles,
					[styles.IconCheckbox__UseIconColorsOnChecked]: useIconColorsOnChecked,
					[styles.IconCheckbox__UseIconColorsOnCheckedHover]: useIconColorsOnCheckedHover,
					[styles.IconCheckbox__UseIconColorsOnUnchecked]: useIconColorsOnUnchecked,
					[styles.IconCheckbox__UseIconColorsOnUncheckedHover]: useIconColorsOnUncheckedHover,
				},
				className
			)}
			onMouseLeave={onMouseLeave}
			style={style}
			{...restProps}
		>
			<input
				id={id}
				type="checkbox"
				className={styles.IconCheckbox_InputHidden}
				checked={isChecked}
				disabled={disabled}
				name={name}
				onChange={handleChange}
			/>
			<Icon className={styles.IconCheckbox_Icon} />
		</div>
	);
};

export default IconCheckbox;
