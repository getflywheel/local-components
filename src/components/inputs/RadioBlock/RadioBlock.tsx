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
	borderOnHover?: boolean;
	centerContent?: boolean;
}

const RadioBlockItem: React.FC<IRadioBlockItemProps> = (props: IRadioBlockItemProps) => {
	const {
		svg: svgProp,
		value,
		selected,
		disabled,
		onClick,
		warn,
		centerContent,
		heightSize,
		borderOnHover,
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
			event.preventDefault();
			event.target.click();
		}
	};

	const svg = warn ? <ExclamationSVG /> : svgProp || <CheckmarkSVG />;

	return (
		// wrap in optional container
		<Container
			{...container}
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
				[styles.RadioBlock_Option__BorderOnHover]: borderOnHover,
			})}
			{...otherProps}
		>
			<div
				className={classnames(styles.RadioBlock_Wrapper, {
					[styles.RadioBlock_Option_Wrapper_Center]: centerContent,
				})}
			>
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
		</Container>
	);
};

RadioBlockItem.defaultProps = {
	disabled: false,
	heightSize: 'l',
	borderOnHover: true,
	centerContent: true,
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
	borderOnHover?: boolean;
	centerContent?: boolean;
}

const RadioBlock: React.FC<IProps> = (props: IProps) => {
	const {
		default: defaultValue,
		direction,
		disabled,
		warn,
		heightSize,
		onChange,
		centerContent,
		options,
		readonly,
		borderOnHover,
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
						disabled={disabled ?? options[optionValue].disabled}
						warn={warn ?? options[optionValue].warn}
						heightSize={heightSize || options[optionValue].heightSize}
						label={options[optionValue].label}
						value={optionValue}
						key={optionValue}
						readonly={readonly ?? options[optionValue].readonly}
						svg={options[optionValue].svg}
						selected={value === optionValue}
						content={options[optionValue].content}
						style={options[optionValue].style}
						borderOnHover={borderOnHover ?? options[optionValue].borderOnHover}
						centerContent={centerContent ?? options[optionValue].centerContent}
					/>
				))}
			</div>
		</Container>
	);
};

export default RadioBlock;
