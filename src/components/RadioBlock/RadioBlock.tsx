import React from 'react';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';
import classnames from 'classnames';
import CheckmarkSVG from '../../svg/checkmark--big.svg';
import styles from './RadioBlock.sass';

interface PropsI extends LocalComponentPropsI {

	options: {[key: string]: RadioBlockItemPropsI},
	default: string | null;
	onChange: (...params: any[]) => any;

}

interface StateI {

	value: string | null;
	default: string | null;
	options: {[key: string]: RadioBlockItemPropsI};

}

class RadioBlock extends React.Component<PropsI, StateI> {

	constructor (props: PropsI) {
		super(props);

		this.state = {
			value: null || props.default,
			default: null,
			options: {},
		};

		this.onClick = this.onClick.bind(this);
	}

	onClick (value: string | null) {
		this.setState({
			value: value,
		});

		if (this.props.onChange) {
			this.props.onChange(value);
		}
	}

	render () {
		return (
			<div className={styles.RadioBlock}>
				{
					Object.keys(this.props.options).map((optionValue: string, i: number) =>
						<RadioBlockItem
							onClick={this.onClick}
							className={this.props.options[optionValue].className}
							label={this.props.options[optionValue].label}
							value={optionValue}
							key={i}
							svg={this.props.options[optionValue].svg}
							selected={this.state.value === optionValue}
						/>
					)
				}
			</div>
		);
	}

}

interface RadioBlockItemPropsI extends LocalComponentPropsI {

	label: string;
	value: string | null;
	selected: boolean;
	onClick: (...params: any[]) => any;
	svg: any;

}

class RadioBlockItem extends React.Component<RadioBlockItemPropsI> {

	constructor (props: RadioBlockItemPropsI) {
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
					}
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
