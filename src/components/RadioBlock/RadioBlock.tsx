import React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import CheckmarkSVG from '../../svg/checkmark--big.svg';
import styles from './RadioBlock.sass';

interface IProps extends IReactComponentProps {

	default: string | null;
	onChange: (...params: any[]) => any;
	options: {[key: string]: IRadioBlockItemProps};

}

interface IState {

	default: string | null;
	options: {[key: string]: IRadioBlockItemProps};
	value: string | null;

}

class RadioBlock extends React.Component<IProps, IState> {

	constructor (props: IProps) {
		super(props);

		this.state = {
			default: null,
			options: {},
			value: null || props.default,
		};

		this.onClick = this.onClick.bind(this);
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
			<div className={styles.RadioBlock}>
				{
					Object.keys(this.props.options).map((optionValue: string, i: number) => (
						<RadioBlockItem
							onClick={this.onClick}
							className={this.props.options[optionValue].className}
							label={this.props.options[optionValue].label}
							value={optionValue}
							key={i}
							svg={this.props.options[optionValue].svg}
							selected={this.state.value === optionValue}
						/>
					))
				}
			</div>
		);
	}

}

interface IRadioBlockItemProps extends IReactComponentProps {

	label: string;
	onClick: (...params: any[]) => any;
	selected: boolean;
	svg: any;
	value: string | null;

}

class RadioBlockItem extends React.Component<IRadioBlockItemProps> {

	constructor (props: IRadioBlockItemProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick () {
		this.props.onClick(this.props.value);
	}

	render () {
		const svg = this.props.svg ? this.props.svg : <svg>{CheckmarkSVG}</svg>;

		return (
			<div
				onClick={this.onClick}
				className={classnames(
					styles.RadioBlock_Option,
					this.props.className,
					{
						[styles.RadioBlock_Option__Selected]: this.props.selected,
					},
				)}
			>
				<label className={styles.RadioBLock_Label}>
					<h4>{this.props.label}</h4>
					<div className={styles.RadioBLock_Arrow}>
						{svg}
					</div>
				</label>
			</div>
		);
	}

}

export default RadioBlock;
