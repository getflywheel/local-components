import React, { useState } from 'react';
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
	onChange: FunctionGeneric;
	svgCheckedIcon: React.FC<ISvgProps>;
	svgUncheckedIcon: React.FC<ISvgProps>;
}

export const IconCheckbox: React.FC<IProps> = ({
	checked,
	disabled,
	onChange,
	svgCheckedIcon,
	svgUncheckedIcon,
	...props
}) => {
	const [ isChecked, updateCheckedState ] = useState(checked === undefined ? false : checked);

	const handleChange = () => {
		const checkedUpdate: boolean = !isChecked;

		updateCheckedState(checkedUpdate);
		onChange?.(checkedUpdate);
	};

	const CheckedSVG = svgCheckedIcon;
	const UncheckedSVG = svgUncheckedIcon;

	return (
		<div
			className={classnames(
				styles.IconCheckbox,
				{
					[styles.IconCheckbox__Checked]: isChecked === true,
					[styles.IconCheckbox__Disabled]: disabled,
				},
				props.className,
			)}
			id={props.id}
			style={props.style}
		>
			<input
				type="checkbox"
				className={styles.IconCheckbox_InputHidden}
				checked={isChecked === true}
				disabled={disabled}
				onChange={handleChange}
			/>
			{isChecked && <CheckedSVG className={styles.IconCheckbox_Icon} />}
			{!isChecked && <UncheckedSVG className={styles.IconCheckbox_Icon} />}
		</div>
	);
};

export default IconCheckbox;
