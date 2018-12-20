import React, { Component } from 'react';
import classnames from 'classnames';
import CheckmarkSVG from '../../svg/checkmark--big.svg';
import PropTypes from 'prop-types';
import styles from './RadioBlock.sass';

class RadioBlock extends Component {

	static propTypes = {
		disabled: PropTypes.bool,
		options: PropTypes.object,
		default: PropTypes.any,
		onChange: PropTypes.func,
	};

	static defaultProps = {
		disabled: false,
		bullets: true,
		headerFontSize: 's',
		headerTag: 'div',
		headerWeight: '500',
		listItemWrapElement: true,
		tag: 'ul',
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
							disabled={this.props.disabled || this.props.options[optionValue].disabled}
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

	static propTypes = {
		disabled: PropTypes.bool,
		label: PropTypes.string,
		value: PropTypes.any,
		selected: PropTypes.bool,
		onClick: PropTypes.func,
		svg: PropTypes.element,
	};

	static defaultProps = {
		disabled: false,
	};

	constructor (props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick () {
		if (this.props.disabled) {
			return;
		}

		this.props.onClick(this.props.value);
	}

	render () {
		const svg = this.props.svg ? this.props.svg : <CheckmarkSVG />;

		return (
			<div
				onClick={this.onClick}
				className={classnames(
					styles.RadioBlock_Option,
					this.props.className,
					{
						[styles.RadioBlock_Option__Disabled]: this.props.disabled,
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
