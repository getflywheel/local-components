import * as React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import CheckmarkSVG from '../../svg/checkmark--big';
import * as styles from './RadioBlock.sass';
import Header from '../Header/Header';
import FlyTooltip from '../FlyTooltip/FlyTooltip';
import Handler from '../../common/structures/Handler';

interface IProps extends IReactComponentProps {

	default: string | null;
	disabled?: boolean;
	heightSize?: 'm' | 'l';
	onChange: Handler;
	options: {[key: string]: IRadioBlockItemProps};

}

interface IState {

	default: string | null;
	options: {[key: string]: IRadioBlockItemProps};
	value: string | null;

}

class RadioBlock extends React.Component<IProps, IState> {

	static defaultProps: Partial<IProps> = {
		disabled: false,
		heightSize: 'l',
	};

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
			<div
				className={classnames(
					styles.RadioBlock,
					this.props.className,
				)}
			>
				{
					Object.keys(this.props.options).map((optionValue: string, i: number) => (
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
					))
				}
			</div>
		);
	}

}

interface IRadioBlockItemProps extends IReactComponentProps {

	disabled: boolean;
	heightSize: 'm' | 'l';
	label: string;
	onClick: Handler;
	selected: boolean;
	svg: any;
	tooltipContent: React.ReactNode;
	value: string | null;

}

class RadioBlockItem extends React.Component<IRadioBlockItemProps> {

	static defaultProps: Partial<IRadioBlockItemProps> = {
		disabled: false,
		heightSize: 'l',
	};

	constructor (props: IRadioBlockItemProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick () {
		if (this.props.disabled) {
			return;
		}

		this.props.onClick(this.props.value);
	}

	renderOptionalTooltipAndContent (content: React.ReactNode) {
		if (this.props.tooltipContent) {
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
			);
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
					},
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
