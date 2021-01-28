import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import * as styles from './IconCheckbox.scss';
import { FunctionGeneric } from '../../../common/structures/Generics';

interface ISvgProps {
	className?: string;
}

interface IProps extends IReactComponentProps {
	checked?: boolean;
	disabled?: boolean;
	Icon: React.FC<ISvgProps>;
	name?: string;
	onChange: FunctionGeneric;
	/** Whether to override svg icon path colors **/
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
	useIconColorsOnChecked,
	useIconColorsOnCheckedHover,
	useIconColorsOnUnchecked,
	useIconColorsOnUncheckedHover,
	...props
}) => {
	const isCheckedProp = checked === undefined ? false : checked;
	const [ isChecked, updateCheckedState ] = useState(isCheckedProp);
	// state to track temporarily disabling hover to make the checked/unchecked effect play nicer with hover
	const [ disableHoverStyles, setDisableHoverStyles ] = useState(isCheckedProp);

	// to allow updates to the state via prop changes, an effect much be used
	useEffect(() => { updateCheckedState(isCheckedProp)}, [checked] );

	const handleChange = () => {
		const checkedUpdate: boolean = !isChecked;

		setDisableHoverStyles(true);
		updateCheckedState(checkedUpdate);
		onChange?.(checkedUpdate);
	};

	const onMouseLeave = () => {
		if (disableHoverStyles) {
			setDisableHoverStyles(false);
		}
	}

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
				props.className,
			)}
			onMouseLeave={onMouseLeave}
			style={props.style}
		>
			<input
				id={props.id}
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
