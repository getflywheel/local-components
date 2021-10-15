import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './Switch.scss';
import { FunctionGeneric } from '../../../common/structures/Generics';

interface IProps extends IReactComponentProps {
	checked?: boolean;
	disabled?: boolean;
	flat?: boolean;
	label?: string;
	name?: string;
	noValue?: boolean;
	onChange?: FunctionGeneric;
	tiny?: boolean;
}

interface IState {
	checked: boolean;
}

const Switch = (props: IProps) => {
	const {
		disabled,
		flat,
		label,
		name,
		noValue,
		onChange,
		tiny,
		className,
		id,
		style
	} = props;

	const [checked, setChecked] = React.useState(props.checked)

	React.useEffect(() => setChecked(props.checked), [props.checked])

	const handleChange = () => {
		setChecked(!checked);
		if (onChange) {
			onChange(name, !checked);
		}
	}

	return (
		<div
			className={classnames(styles.Switch, className,
				{
					[styles.Switch__Tiny]: tiny,
					[styles.Switch__Flat]: flat,
				},
			)}
			id={id}
			style={style}
		>
			{label && <label>{label}</label>}
			<button
				name={name}
				type="button"
				aria-pressed={checked}
				onClick={handleChange}
				data-no-value={noValue}
				disabled={disabled || noValue}
			/>
		</div>
	);

}

Switch.defaultProps = {
	checked: false,
};

export default Switch;
