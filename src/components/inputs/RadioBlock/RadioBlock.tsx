import * as React from 'react';
import classnames from 'classnames';
import CheckmarkSVG from '../../../svg/checkmark--big.svg';
import ExclamationSVG from '../../../svg/exclamation.svg';
import * as styles from './RadioBlock.sass';
import { Container } from '../../modules/Container/Container';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';
import { Title, TitlePropSize } from '../../text/Title/Title';
import { FunctionGeneric } from '../../../common/structures/Generics';

interface IRadioBlockItemProps extends ILocalContainerProps {
	disabled?: boolean;
	warn?: boolean;
	heightSize?: 'm' | 'l' | 'none';
	label?: string;
	onClick?: FunctionGeneric;
	readonly?: boolean;
	selected?: boolean;
	svg?: any;
	value?: string | null;
	content?: React.ReactNode;
}

const RadioBlockItem: React.FC<IRadioBlockItemProps> = (props: IRadioBlockItemProps) => {
	const {
		svg: svgProp,
		value,
		selected,
		disabled,
		onClick,
		warn,
		heightSize,
		label,
		content,
		readonly,
		container,
		className,
		...otherProps
	} = props;

	const handleClick = () => {
		if (disabled) {
			return;
		}

		if (onClick) {
			onClick(value);
		}
	};

	const onKeyDown = (event: any) => {
		if (event.key === ' ' || event.key === 'Enter') {
			event.target.click();
		}
	};

	const svg = warn ? <ExclamationSVG /> : svgProp || <CheckmarkSVG />;

	return (
		// wrap in optional container
		<Container {...container}>
			<div
				role="checkbox"
				aria-checked={selected}
				tabIndex={selected ? -1 : 0}
				onClick={handleClick}
				onKeyDown={onKeyDown}
				className={classnames(styles.RadioBlock_Option, className, {
					[styles.RadioBlock_Option__Disabled]: disabled,
					[styles.RadioBlock_Option__Warn]: warn,
					[styles.RadioBlock_Option__HeightSizeNone]: heightSize === 'none',
					[styles.RadioBlock_Option__HeightSizeMedium]: heightSize === 'm',
					[styles.RadioBlock_Option__Readonly]: readonly,
					[styles.RadioBlock_Option__Selected]: selected,
				})}
				{...otherProps}
			>
				<div className={styles.RadioBlock_Wrapper}>
					{label && (
						<Title size={TitlePropSize.s} className={styles.RadioBlock_Label_Text}>
							{label}
						</Title>
					)}
					{content && (
						<div style={{ marginTop: label && '10px' }} className={styles.RadioBlock_Content}>
							{content}
						</div>
					)}
					<div className={styles.RadioBlock_Arrow}>{svg}</div>
				</div>
			</div>
		</Container>
	);
};

RadioBlockItem.defaultProps = {
	disabled: false,
	heightSize: 'l',
};
interface IProps extends ILocalContainerProps {
	default?: string | null;
	direction?: 'horiz' | 'vert';
	disabled?: boolean;
	warn?: boolean;
	heightSize?: 'm' | 'l' | 'none';
	onChange?: FunctionGeneric;
	options: { [key: string]: IRadioBlockItemProps };
	readonly?: boolean;
}

const RadioBlock: React.FC<IProps> = (props: IProps) => {
	const {
		default: defaultValue,
		direction,
		disabled,
		warn,
		heightSize,
		onChange,
		options,
		readonly,
		container,
		className,
		id,
		style,
		...otherProps
	} = props;

	const [value, setValue] = React.useState(null || defaultValue);

	React.useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);

	const onClick = (selection: string | null) => {
		setValue(selection);

		if (onChange) {
			onChange(selection);
		}
	};

	return (
		// wrap in optional container
		<Container {...container}>
			<div
				className={classnames(styles.RadioBlock, className, {
					[styles.RadioBlock__DirectionVert]: direction === 'vert',
					[styles.RadioBlock__Readonly]: readonly,
				})}
				id={id}
				style={style}
				{...otherProps}
			>
				{Object.keys(options).map((optionValue: string) => (
					<RadioBlockItem
						onClick={onClick}
						className={options[optionValue].className}
						container={options[optionValue].container}
						disabled={disabled || options[optionValue].disabled}
						warn={warn || options[optionValue].warn}
						heightSize={heightSize || options[optionValue].heightSize}
						label={options[optionValue].label}
						value={optionValue}
						key={options[optionValue].label}
						readonly={readonly || options[optionValue].readonly}
						svg={options[optionValue].svg}
						selected={value === optionValue}
						content={options[optionValue].content}
						style={options[optionValue].style}
					/>
				))}
			</div>
		</Container>
	);
};

RadioBlock.defaultProps = {
	disabled: false,
};

export default RadioBlock;
