import React, { Component } from 'react';
import classnames from 'classnames';
import CheckmarkSVG from '../../svg/checkmark--big.svg';
import PropTypes from 'prop-types';
import styles from './RadioBlock.sass';
import Header from '../Header/Header';
import FlyTooltip from '../FlyTooltip/FlyTooltip';

class RadioBlock extends Component {

	static propTypes = {
		className: PropTypes.string,
		disabled: PropTypes.bool,
		heightSize: PropTypes.oneOf(['m', 'l']),
		options: PropTypes.object,
		default: PropTypes.any,
		onChange: PropTypes.func,
	};

	static defaultProps = {
		disabled: false,
		heightSize: 'l',
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
			<div className={classnames(
				styles.RadioBlock,
				this.props.className,
			)}>
				{
					Object.keys(this.props.options).map((optionValue, i) =>
						<RadioBlockItem
							onClick={this.onClick}
							className={this.props.options[optionValue].className}
							disabled={this.props.disabled || this.props.options[optionValue].disabled}
							heightSize={this.props.heightSize}
							label={this.props.options[optionValue].label}
							value={optionValue}
							key={i}
							svg={this.props.options[optionValue].svg}
							selected={this.state.value === optionValue}
							tooltipContent={this.props.options[optionValue].tooltipContent}
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
		heightSize: PropTypes.oneOf(['m', 'l']),
		label: PropTypes.string,
		value: PropTypes.any,
		selected: PropTypes.bool,
		onClick: PropTypes.func,
		svg: PropTypes.element,
		tooltipContent: PropTypes.node,
	};

	static defaultProps = {
		disabled: false,
		heightSize: 'l',
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

	renderOptionalTooltipAndContent (content) {
		if(this.props.tooltipContent) {
			return (
				<FlyTooltip
					content={this.props.tooltipContent}
					position="top"
					hoverIntent={true}
					className={styles.RadioBlock_Option_TooltipWrapper}
					widthIsFluid={true}
				>
					{content}
				</FlyTooltip>
			)
		}

		return content;
	}

	render () {
		const svg = this.props.svg ? this.props.svg : <CheckmarkSVG />;

		return this.renderOptionalTooltipAndContent((
			<div
				onClick={this.onClick}
				className={classnames(
					styles.RadioBlock_Option,
					this.props.className,
					{
						[styles.RadioBlock_Option__Disabled]: this.props.disabled,
						[styles.RadioBlock_Option__HeightSizeMedium]: this.props.heightSize === 'm',
						[styles.RadioBlock_Option__Selected]: this.props.selected,
					}
				)}
			>
				<label className={styles.RadioBLock_Label}>
					<Header
						fontSize={this.props.heightSize === 'l' ? 's' : 'xs'}
						fontWeight="500"
					>
						{this.props.label}
					</Header>
					<div className={styles.RadioBLock_Arrow}>
						{svg}
					</div>
				</label>
			</div>
		));
	}

}

export default RadioBlock;
