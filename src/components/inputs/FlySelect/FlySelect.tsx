import * as React from 'react';
import classnames from 'classnames';
import CheckSVG from '../../../svg/checkmark--big';
import DownloadSmallSVG from '../../../svg/download--small';
import ArrowRightSVG from '../../../svg/arrow--right';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import * as styles from './FlySelect.scss';
import { FunctionGeneric } from '../../../common/structures/Generics';
import ReactDOM = require('react-dom');

export interface FlySelectOption {
	disabled?: boolean;
	download?: boolean;
	icon?: React.ReactNode;
	label: React.ReactNode;
	metadata?: any;
	optionGroup?: FlySelectOptionGroup | null;
	secondaryText?: React.ReactNode;
	value?: string;
}

export interface FlySelectOptionGroup {
	label: React.ReactNode;
	linkText?: string;
	linkOnClick?: FunctionGeneric;
}

export type FlySelectOptionGroups = {[key: string]: FlySelectOptionGroup};
export type FlySelectOptions = string[] | FlySelectOptionsFormatted | {[value: string]: string};
type FlySelectOptionFormatted = FlySelectOption;
type FlySelectOptionsFormatted = {[value: string]: FlySelectOptionFormatted};

interface IProps extends IReactComponentProps {
	disabled?: boolean;
	emptyPlaceholder?: string;
	footerText?: string;
	footerOnClick?: FunctionGeneric;
	loadingOptionsPlaceholder?: string;
	onChange: FunctionGeneric;
	options?: FlySelectOptions;
	optionsLoader?: Promise<IProps['options']> | any;
	optionGroups?: FlySelectOptionGroups;
	placeholder?: string;
	readonly?: boolean;
	striped?: boolean;
	value?: string;
}

interface IState {
	focus: boolean;
	focusedIndex: number;
	optionsFormatted: FlySelectOptionsFormatted;
	open: boolean;
	optionsLoaded: boolean | null;
	value: any;
	willClose: boolean;
}

export default class FlySelect extends React.Component<IProps, IState> {

	private readonly __containerRef: React.RefObject<any>;
	private readonly __optionsRef: React.RefObject<any>;

	constructor (props: IProps) {
		super(props);

		this.state = {
			focus: false,
			focusedIndex: 0,
			open: false,
			optionsFormatted: this.props.options ? this.formatOptions(this.props.options) : {},
			optionsLoaded: this.props.optionsLoader ? false : null,
			value: this.props.value,
			willClose: false,
		};

		this.onClick = this.onClick.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.selectOption = this.selectOption.bind(this);
		this.renderOption = this.renderOption.bind(this);
		this.calculateOptionsPosition = this.calculateOptionsPosition.bind(this);
		this.onContainerKeyDown = this.onContainerKeyDown.bind(this);
		this.onOptionKeyDown = this.onOptionKeyDown.bind(this);
		this.onClickOutside = this.onClickOutside.bind(this);

		this.__containerRef = React.createRef();
		this.__optionsRef = React.createRef();
	}

	componentDidMount () {
		if (typeof this.props.optionsLoader === 'function') {
			this.props.optionsLoader().then((options: IProps['options']) => this.setState({
				optionsFormatted: this.formatOptions(options),
				optionsLoaded: true,
			}));
		}
		document.addEventListener('click', this.onClickOutside, true);
	}

	componentDidUpdate (previousProps: IProps) {
		if (previousProps.value !== this.props.value) {
			this.setState({
				value: this.props.value,
			});
		}

		if (previousProps.options !== this.props.options) {
			this.setState({
				optionsFormatted: this.formatOptions(this.props.options),
			});
		}
	}

	componentWillUnmount () {
		document.removeEventListener('click', this.onClickOutside, true);
	}

	formatOptions (options: any): FlySelectOptionsFormatted {
		const formattedOptions: {[key: string]: any} = {};
		const formatOption = (option: FlySelectOptionFormatted, value: any = null) => {
			if (typeof option === 'object') {
				if (typeof option.value === 'undefined' && value !== null) {
					option.value = value;
				}

				if (typeof option.optionGroup === 'undefined') {
					option.optionGroup = null;
				}

				formattedOptions[option.value as string] = option;
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
			return undefined;
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

	onContainerKeyDown (event: any) {
		let open = this.state.open;
		let focusedIndex = this.state.focusedIndex;
		switch (event.key) {
			case ' ':
				open = true;
				break;
			case 'Enter':
				open = true;
				break;
			case 'ArrowUp':
				open = true;
				if (focusedIndex > 0) {
					focusedIndex--;
				}
				break;
			case 'ArrowDown':
				open = true;
				if (focusedIndex < Object.keys(this.state.optionsFormatted).length - 1){
					focusedIndex++;
				}
				break;
			case 'Tab':
				open = false;
				focusedIndex = 0;
				break;
		}

		this.setState({
			focusedIndex,
			open,
		}, () => {
			if (this.state.open){
				this.__optionsRef.current.children[this.state.focusedIndex] &&
				this.__optionsRef.current.children[this.state.focusedIndex].focus();
			}
		});
	}

	onOptionKeyDown = (e: any, value: any) => {
		if (e.key === 'Enter' || e.key === ' '){
			this.selectOption(e, value);
		}
		this.__containerRef.current.focus();
	}

	onClickOutside (event: any) {
		try {
			const domNode = ReactDOM.findDOMNode(this.__containerRef.current);

			if (!domNode || !domNode.contains(event.target)) {
				this.setState({
					focus: false,
					open: false,
				});
			}
		}
		catch (error) {}
	}

	renderPlaceholder () {
		if (this.state.optionsLoaded === false) {
			return this.props.loadingOptionsPlaceholder;
		}

		if (Object.keys(this.state.optionsFormatted).length) {
			return this.props.placeholder;
		}

		return this.props.emptyPlaceholder;
	}

	renderItem (option: FlySelectOptionFormatted, showCheck: boolean = false) {
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
				output.push(React.cloneElement(option.icon as React.ReactElement, { key: 'icon', className: 'FlySelect__ItemIcon' }));
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

	renderItemRight (option: FlySelectOptionFormatted, showCheck: boolean) {
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

	renderOption (optionValue: FlySelectOption['value'], i: number, group: any) {
		const optionsFormatted = this.state.optionsFormatted;
		const option = optionsFormatted[optionValue as string];
		const disabled = typeof optionsFormatted[optionValue as string] === 'object' ? optionsFormatted[optionValue as string].disabled : false;

		if (option.optionGroup !== group) {
			return null;
		}

		return (
			<div
				tabIndex={0}
				key={i}
				data-value={option.value}
				className={classnames(
					'FlySelect_Option',
					{
						'FlySelect_Option__Striped': this.props.striped,
						'__Disabled': disabled,
					},
				)}
				onKeyDown={(e) => this.onOptionKeyDown(e, optionValue)}
				onClick={(e) => this.selectOption(e, optionValue)}
			>
				{this.renderItem(option, true)}
			</div>
		);
	}

	renderOptionGroups () {
		if (!this.props.optionGroups) {
			return null;
		}

		const output: any[] = [];
		const optionsFormatted = this.state.optionsFormatted;

		Object.keys(this.props.optionGroups).forEach((optionGroupID) => {
			const optionGroup = this.props.optionGroups && this.props.optionGroups[optionGroupID];
			const optionNodes = Object.keys(optionsFormatted)
				.map((optionValue: any, i: number) => this.renderOption(optionValue, i, optionGroupID))
				.filter((n) => n)
			;

			if (!optionNodes.length || !optionGroup) {
				return;
			}

			output.push(
				<>
					<div
						tabIndex={0}
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
					</div>
					<span key={`${optionGroupID}-empty`} /> {/* note: this is here to ensure that the expected alternating row color order is maintained */}
				</>,
			);

			output.push(optionNodes);
		});

		return output;
	}

	render () {
		const optionsFormatted = this.state.optionsFormatted;
		const Tag: any = 'div';
		return (
			<Tag
				className={classnames(
					'FlySelect',
					styles.FlySelect,
					this.props.className,
					{
						'FlySelect__Focus': this.state.focus,
						'FlySelect__HasFooter': this.props.footerText,
						'FlySelect__Open': this.state.open,
						[styles.FlySelect__Readonly]: this.props.readonly,
					},
				)}
				onKeyDown={this.onContainerKeyDown}
				style={this.props.style}
				data-current-value={this.state.value}
				tabIndex={0}
				onClick={this.onClick}
				onBlur={this.onBlur}
				ref={this.__containerRef}
				disabled={this.props.disabled || !Object.keys(optionsFormatted).length}
			>
				<span className="CurrentValue">
					{
						this.state.value in optionsFormatted
							?
							this.renderItem(optionsFormatted[this.state.value])
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
					<div
						tabIndex={0}
						ref={this.__optionsRef}
						className="FlySelect_OptionsContainer"
					>
						{Object.keys(optionsFormatted).map((optionValue, i) => this.renderOption(optionValue, i, null))}
						{this.renderOptionGroups()}
					</div>
					{this.renderFooter()}
				</div>
			</Tag>
		);
	}
}
