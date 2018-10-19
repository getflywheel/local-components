import React, { Component } from 'react';
import classnames from 'classnames';
import CheckmarkSVG from '../../svg/checkmark--big.svg';
import PropTypes from 'prop-types';
import styles from './RadioBlock.sass';

class RadioBlock extends Component {
	PropTypes = {
		options: PropTypes.object,
		default: PropTypes.any,
		onChange: PropTypes.func,
	};

	constructor (props) {
		super(props);

		this.state = {
			value: null || props.default,
			default: null,
			options: {},
		};

		this.onClick = this.onClick.bind(this);
	}

	onClick (value) {
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
					Object.keys(this.props.options).map((optionValue, i) =>
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

class RadioBlockItem extends Component {
	PropTypes = {
		label: PropTypes.string,
		value: PropTypes.any,
		selected: PropTypes.bool,
		onClick: PropTypes.func,
		svg: PropTypes.element,
	};

	constructor (props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick () {
		this.props.onClick(this.props.value);
	}

	render () {
		const svg = this.props.svg ? this.props.svg : <CheckmarkSVG />;

		return (
			<div
				onClick={this.onClick}
				className={classnames(
					styles.RadioBlock_Option,
					this.props.className, {
						[styles.RadioBlock_Option__Selected]: this.props.selected
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
