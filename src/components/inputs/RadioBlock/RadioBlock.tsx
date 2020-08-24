import * as React from 'react';
import classnames from 'classnames';
import CheckmarkSVG from '../../../svg/checkmark--big.svg';
import ExclamationSVG from '../../../svg/exclamation.svg';
import * as styles from './RadioBlock.sass';
import { Container } from '../../modules/Container/Container';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';
import { Title, TitlePropSize } from '../../text/Title/Title';
import { FunctionGeneric } from '../../../common/structures/Generics';

interface IProps extends ILocalContainerProps {
	default: string | null;
	direction: 'horiz' | 'vert';
	disabled?: boolean;
	warn?: boolean;
	heightSize?: 'm' | 'l';
	onChange: FunctionGeneric;
	options: {[key: string]: IRadioBlockItemProps};
	readonly: boolean;
}

interface IState {
	options: {[key: string]: IRadioBlockItemProps};
	value: string | null;
}

export default class RadioBlock extends React.Component<IProps, IState> {
	static defaultProps: Partial<IProps> = {
		direction: 'horiz',
		disabled: false,
		heightSize: 'l',
		readonly: false,
	};

	constructor (props: IProps) {
		super(props);

		this.state = {
			options: {},
			value: null || props.default,
		};

		this.onClick = this.onClick.bind(this);
	}

	componentWillReceiveProps (nextProps: IProps) {
		if (nextProps.default !== this.state.value) {
			this.setState({
				value: nextProps.default,
			});
		}
	}

	onClick (value: string | null) {
		this.setState({
			value,
		});

		if (this.props.onChange) {
			this.props.onChange(value);
		}
	}

	render () {
		return (
			// wrap in optional container
			<Container {...this.props.container}>
				<div
					className={classnames(
						styles.RadioBlock,
						this.props.className,
						{
							[styles.RadioBlock__DirectionVert]: this.props.direction === 'vert',
							[styles.RadioBlock__Readonly]: this.props.readonly === true,
						},
					)}
					id={this.props.id}
					style={this.props.style}
				>
					{
						Object.keys(this.props.options).map((optionValue: string, i: number) => (
							<RadioBlockItem
								onClick={this.onClick}
								className={this.props.options[optionValue].className}
								container={this.props.options[optionValue].container}
								disabled={this.props.disabled || this.props.options[optionValue].disabled}
								warn={this.props.warn || this.props.options[optionValue].warn}
								heightSize={this.props.heightSize}
								label={this.props.options[optionValue].label}
								value={optionValue}
								key={i}
								readonly={this.props.readonly || this.props.options[optionValue].readonly}
								svg={this.props.options[optionValue].svg}
								selected={this.state.value === optionValue}
							/>
						))
					}
				</div>
			</Container>
		);
	}
}

interface IRadioBlockItemProps extends ILocalContainerProps {
	disabled?: boolean;
	warn?: boolean;
	heightSize?: 'm' | 'l';
	label?: string;
	onClick?: FunctionGeneric;
	readonly?: boolean;
	selected?: boolean;
	svg?: any;
	value?: string | null;
}

class RadioBlockItem extends React.Component<IRadioBlockItemProps> {
	static defaultProps: Partial<IRadioBlockItemProps> = {
		disabled: false,
		heightSize: 'l',
	};

	constructor (props: IRadioBlockItemProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
	}

	onClick () {
		if (this.props.disabled) {
			return;
		}

		if (this.props.onClick) {
			this.props.onClick(this.props.value);
		}
	}

	onKeyDown (event: any) {
		if (event.key === ' ' || event.key === 'Enter'){
			event.target.click();
		}
	}

	render () {
		const svg = this.props.warn ?
			<ExclamationSVG />
			:
			this.props.svg ?
				this.props.svg
				:
				<CheckmarkSVG />
		;

		return (
			// wrap in optional container
			<Container {...this.props.container}>
				<div
					onClick={this.onClick}
					className={classnames(
						styles.RadioBlock_Option,
						this.props.className,
						{
							[styles.RadioBlock_Option__Disabled]: this.props.disabled,
							[styles.RadioBlock_Option__Warn]: this.props.warn,
							[styles.RadioBlock_Option__HeightSizeMedium]: this.props.heightSize === 'm',
							[styles.RadioBlock_Option__Readonly]: this.props.readonly,
							[styles.RadioBlock_Option__Selected]: this.props.selected,
						},
					)}
				>
					<label
						tabIndex={this.props.selected ? -1 : 0}
						onKeyDown={this.onKeyDown}
						className={styles.RadioBLock_Label}
					>
						<Title size={TitlePropSize.s} className={styles.RadioBLock_Label_Text}>
							{this.props.label}
						</Title>
						<div className={styles.RadioBLock_Arrow}>
							{svg}
						</div>
					</label>
				</div>
			</Container>
		);
	}
}
