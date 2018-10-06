import React, { Component } from 'react';
import classnames from 'classnames';
import CheckSVG from '../../svg/checkmark--big.svg';
import DownloadSmallSVG from '../../svg/download--small.svg';
import ArrowRightSVG from '../../svg/arrow--right.svg';
import PropTypes from 'prop-types';

export default class FlySelect extends Component {
	PropTypes = {
		options: PropTypes.object,
		optionGroups: PropTypes.object,
		value: PropTypes.any,
		onChange: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
		emptyPlaceholder: PropTypes.string,
		disabled: PropTypes.bool,
		footerText: PropTypes.string,
		footerOnClick: PropTypes.func,
	};

	constructor (props) {
		super(props);

		this.state = {
			value: this.props.value,
			options: this.props.options ? this.formatOptions(this.props.options) : {},
			open: false,
			focus: false,
			willClose: false,
			optionsLoaded: this.props.optionsLoader ? false : null,
		};

		this.onClick = this.onClick.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.selectOption = this.selectOption.bind(this);
		this.renderOption = this.renderOption.bind(this);
		this.calculateOptionsPosition = this.calculateOptionsPosition.bind(this);
		this.containerRef = React.createRef();
	}

	componentDidMount () {
		if (typeof this.props.optionsLoader === 'function') {
			this.props.optionsLoader().then((options) => this.setState({
				options: this.formatOptions(options),
				optionsLoaded: true,
			}));
		}
	}

	componentDidUpdate (previousProps) {
		if (previousProps.value !== this.props.value) {
			this.setState({
				value: this.props.value,
			});
		}

		if (previousProps.options !== this.props.options) {
			this.setState({
				options: this.formatOptions(this.props.options),
			});
		}
	}

	formatOptions (options) {

		const formattedOptions = {};
		const formatOption = (option, value = null) => {
			if (typeof option === 'object') {
				if (typeof option.value === 'undefined' && value !== null) {
					option.value = value;
				}

				if (typeof option.optionGroup === 'undefined') {
					option.optionGroup = null;
				}

				formattedOptions[option.value] = option;
				return;
			}

			formattedOptions[value !== null ? value : option] = {
				label: option,
				value: value !== null ? value : option,
				optionGroup: null,
			};
		};

		if (Array.isArray(options)) {
			options.forEach((option) => formatOption(option));
		} else {
			Object.keys(options).forEach((optionValue) => formatOption(options[optionValue], optionValue));
		}

		return formattedOptions;

	}

	onClick () {
		this.setState({
			open: true,
			focus: true,
		});
	}

	onBlur () {
		this.setState({
			open: false,
			focus: false,
		});
	}

	selectOption (e, value) {
		this.setState({
			open: false,
			value: value,
		});

		this.props.onChange.call(this, value);

		e.stopPropagation();
	}

	calculateOptionsPosition () {
		if (!this.state.open) {
			return;
		}

		const optionsBounding = this.containerRef.current.getBoundingClientRect();
		const maxBottomBounding = window.innerHeight - 40;

		return {
			maxHeight: maxBottomBounding - optionsBounding.top,
			top: optionsBounding.top,
			left: optionsBounding.left,
			minWidth: optionsBounding.right - optionsBounding.left,
		};
	}

	renderPlaceholder () {
		if (this.state.optionsLoaded === false) {
			return this.props.loadingOptionsPlaceholder;
		}

		if (Object.keys(this.state.options).length) {
			return this.props.placeholder;
		}

		return this.props.emptyPlaceholder;
	}

	renderItem (option, showCheck = false) {
		const output = [];

		if (option.download === true) {
			output.push(<DownloadSmallSVG key="download-svg" className="DownloadSmall"/>);
		}

		if (option.icon) {
			if (typeof option.icon === 'string') {
				output.push(<img src={option.icon} key="icon"/>);
			} else {
				output.push(React.cloneElement(option.icon, { key: 'icon', className: 'FlySelect__ItemIcon' }));
			}
		}

		output.push(<span key="label" className="FlySelect_Option_Label">{option.label}</span>);
		output.push(this.renderItemRight(option, showCheck));

		return output;
	}

	renderItemRight (option, showCheck) {
		return <span className="FlySelect__Right" key="right">
			{'secondaryText' in option && option.secondaryText &&
			<span className="FlySelect__SecondaryText" key="secondary-text">{option.secondaryText}</span>}

			{showCheck && option.value === this.state.value &&
			<CheckSVG key="checked" className="FlySelect__Check"/>}
		</span>;
	}

	renderFooter () {
		if (!this.props.footerText) {
			return '';
		}

		return <div className="FlySelect__Footer">
			<a className="FlySelect__FooterLink" onClick={this.props.footerOnClick}>
				{this.props.footerText}

				<ArrowRightSVG/>
			</a>
		</div>;
	}

	renderOption (optionValue, i, group) {
		const options = this.state.options;
		const option = options[optionValue];
		const disabled = typeof options[optionValue] === 'object' ? options[optionValue].disabled : false;

		if (option.optionGroup !== group) {
			return;
		}

		return <div key={i} data-value={option.value}
			className={classnames('FlySelect_Option', {
				'--Disabled': disabled,
				'--Checked': option.value === this.state.value,
			})}
			onClick={(e) => this.selectOption(e, optionValue)}>
			{this.renderItem(option, true)}
		</div>;
	}

	renderOptionGroups () {
		if (!this.props.optionGroups) {
			return;
		}

		const output = [];
		const options = this.state.options;

		Object.keys(this.props.optionGroups).forEach((optionGroupID) => {
			const optionGroup = this.props.optionGroups[optionGroupID];
			const optionNodes = Object.keys(options)
				.map((optionValue, i) => this.renderOption(optionValue, i, optionGroupID))
				.filter((n) => n);

			if (!optionNodes.length) {
				return;
			}

			output.push(<div key={optionGroupID} className="FlySelect_OptionGroup">
				<span>{optionGroup.label}</span>
				{optionGroup.linkText ? <a onClick={optionGroup.linkOnClick}>
					{optionGroup.linkText}
					<ArrowRightSVG/>
				</a> : null}
			</div>);

			output.push(optionNodes);
		});

		return output;
	}

	render () {
		const options = this.state.options;

		return (
			<div
				className={classnames(
					'FlySelect', {
                        'FlySelect__Open': this.state.open,
                        'FlySelect__Focus': this.state.focus,
                        'FlySelect__HasFooter': this.props.footerText,
                    }
				)}
				style={this.props.style}
				data-current-value={this.state.value}
				tabIndex="0" onClick={this.onClick} onBlur={this.onBlur} ref={this.containerRef}
				disabled={this.props.disabled || !Object.keys(options).length}
			>
				<span className="CurrentValue">
					{this.state.value in options ?
						this.renderItem(options[this.state.value])
						:
						<span className="CurrentValue_Placeholder">
							{this.renderPlaceholder()}
						</span>
					}
				</span>

				<div className="FlySelect_Options" style={this.calculateOptionsPosition()}>
					<div className="FlySelect_OptionsContainer">
						{Object.keys(options).map((optionValue, i) => this.renderOption(optionValue, i, null))}

						{this.renderOptionGroups()}
					</div>
					{this.renderFooter()}
				</div>
			</div>
		);
	}
}
