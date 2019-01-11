import * as React from 'react';
import classnames from 'classnames';
import CheckSVG from '../../svg/checkmark--big';
import DownloadSmallSVG from '../../svg/download--small';
import ArrowRightSVG from '../../svg/arrow--right';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import Handler from '../../common/structures/Handler';

interface IProps extends IReactComponentProps {

	disabled?: boolean;
	emptyPlaceholder?: string;
	footerText?: string;
	footerOnClick?: Handler;
	loadingOptionsPlaceholder?: any;
	onChange: Handler;
	options?: any;
	optionsLoader?: any;
	optionGroups?: any;
	placeholder?: string;
	value?: any;

}

interface IState {

	focus: boolean;
	options: any;
	open: boolean;
	optionsLoaded: boolean | null;
	value: any;
	willClose: boolean;

}

export default class FlySelect extends React.Component<IProps, IState> {

	private readonly __containerRef: React.RefObject<any>;

	constructor (props: IProps) {
		super(props);

		this.state = {
			focus: false,
			open: false,
			options: this.props.options ? this.formatOptions(this.props.options) : {},
			optionsLoaded: this.props.optionsLoader ? false : null,
			value: this.props.value,
			willClose: false,
		};

		this.onClick = this.onClick.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.selectOption = this.selectOption.bind(this);
		this.renderOption = this.renderOption.bind(this);
		this.calculateOptionsPosition = this.calculateOptionsPosition.bind(this);
		this.__containerRef = React.createRef();
	}

	componentDidMount () {
		if (typeof this.props.optionsLoader === 'function') {
			this.props.optionsLoader().then((options: any) => this.setState({
				options: this.formatOptions(options),
				optionsLoaded: true,
			}));
		}
	}

	componentDidUpdate (previousProps: IProps) {
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

	formatOptions (options: any) {
		const formattedOptions: {[key: string]: any} = {};
		const formatOption = (option: any, value: any = null) => {
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
				optionGroup: null,
				value: value !== null ? value : option,
			};
		};

		if (Array.isArray(options)) {
			options.forEach((option) => formatOption(option));
		}
		else {
			Object.keys(options).forEach((optionValue) => formatOption(options[optionValue], optionValue));
		}

		return formattedOptions;
	}

	onClick () {
		this.setState({
			focus: true,
			open: true,
		});
	}

	onBlur () {
		this.setState({
			focus: false,
			open: false,
		});
	}

	selectOption (e: any, value: any) {
		this.setState({
			open: false,
			value,
		});

		this.props.onChange.call(this, value);

		e.stopPropagation();
	}

	calculateOptionsPosition () {
		if (!this.state.open) {
			return;
		}

		const optionsBounding = this.__containerRef.current.getBoundingClientRect();
		const maxBottomBounding = window.innerHeight - 40;

		return {
			left: optionsBounding.left,
			maxHeight: maxBottomBounding - optionsBounding.top,
			minWidth: optionsBounding.right - optionsBounding.left,
			top: optionsBounding.top,
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

	renderItem (option: any, showCheck: boolean = false) {
		const output = [];

		if (option.download === true) {
			output.push(
				<DownloadSmallSVG
					key="download-svg"
					className="DownloadSmall"
				/>,
			);
		}

		if (option.icon) {
			if (typeof option.icon === 'string') {
				output.push(
					<img
						src={option.icon}
						key="icon"
					/>,
				);
			}
			else {
				output.push(React.cloneElement(option.icon, { key: 'icon', className: 'FlySelect__ItemIcon' }));
			}
		}

		output.push(
			<span
				key="label"
				className="FlySelect_Option_Label"
			>
				{option.label}
			</span>,
		);
		output.push(this.renderItemRight(option, showCheck));

		return output;
	}

	renderItemRight (option: any, showCheck: boolean) {
		return (
			<span
				className="FlySelect__Right"
				key="right"
			>
				{
					'secondaryText' in option && option.secondaryText
					&&
					<span
						className="FlySelect__SecondaryText"
						key="secondary-text"
					>
						{option.secondaryText}
					</span>
				}
				{
					showCheck && option.value === this.state.value
					&&
					<CheckSVG
						key="checked"
						className="FlySelect__Check"
					/>
				}
			</span>
		);
	}

	renderFooter () {
		if (!this.props.footerText) {
			return '';
		}

		return (
			<div className="FlySelect__Footer">
				<a
					className="FlySelect__FooterLink"
					onClick={this.props.footerOnClick}
				>
					{this.props.footerText}
					<ArrowRightSVG />
				</a>
			</div>
		);
	}

	renderOption (optionValue: any, i: number, group: any) {
		const options = this.state.options;
		const option = options[optionValue];
		const disabled = typeof options[optionValue] === 'object' ? options[optionValue].disabled : false;

		if (option.optionGroup !== group) {
			return;
		}

		return (
			<div
				key={i}
				data-value={option.value}
				className={classnames(
					'FlySelect_Option',
					{
						'__Disabled': disabled,
					},
				)}
				onClick={(e) => this.selectOption(e, optionValue)}
			>
				{this.renderItem(option, true)}
			</div>
		);
	}

	renderOptionGroups () {
		if (!this.props.optionGroups) {
			return;
		}

		const output: any[] = [];
		const options = this.state.options;

		Object.keys(this.props.optionGroups).forEach((optionGroupID) => {
			const optionGroup = this.props.optionGroups[optionGroupID];
			const optionNodes = Object.keys(options)
				.map((optionValue: any, i: number) => this.renderOption(optionValue, i, optionGroupID))
				.filter((n) => n)
			;

			if (!optionNodes.length) {
				return;
			}

			output.push(
				<div
					key={optionGroupID}
					className="FlySelect_OptionGroup"
				>
					<span>{optionGroup.label}</span>
					{
						optionGroup.linkText
							?
							<a onClick={optionGroup.linkOnClick}>
								{optionGroup.linkText}
								<ArrowRightSVG/>
							</a>
							:
							null
					}
				</div>,
			);

			output.push(optionNodes);
		});

		return output;
	}

	render () {
		const options = this.state.options;
		const Tag: any = 'div';

		return (
			<Tag
				className={classnames(
					'FlySelect',
					this.props.className,
					{
						'FlySelect__Focus': this.state.focus,
						'FlySelect__HasFooter': this.props.footerText,
						'FlySelect__Open': this.state.open,
					},
				)}
				style={this.props.style}
				data-current-value={this.state.value}
				tabIndex={0}
				onClick={this.onClick}
				onBlur={this.onBlur}
				ref={this.__containerRef}
				disabled={this.props.disabled || !Object.keys(options).length}
			>
				<span className="CurrentValue">
					{
						this.state.value in options
							?
							this.renderItem(options[this.state.value])
							:
							<span className="CurrentValue_Placeholder">
								{this.renderPlaceholder()}
							</span>
					}
				</span>

				<div
					className="FlySelect_Options"
					style={this.calculateOptionsPosition()}
				>
					<div className="FlySelect_OptionsContainer">
						{Object.keys(options).map((optionValue, i) => this.renderOption(optionValue, i, null))}
						{this.renderOptionGroups()}
					</div>
					{this.renderFooter()}
				</div>
			</Tag>
		);
	}
}
