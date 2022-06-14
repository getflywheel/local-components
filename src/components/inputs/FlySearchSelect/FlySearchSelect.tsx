// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import CheckSVG from '../../../svg/checkmark--big.svg';
import DownloadSmallSVG from '../../../svg/download--small.svg';
import ArrowRightSVG from '../../../svg/arrow--right.svg';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import * as styles from './FlySearchSelect.scss';
import { FunctionGeneric } from '../../../common/structures/Generics';
import { CaretIcon } from '../../icons/Icons'

// export interface FlySelectOption {
// 	disabled?: boolean;
// 	download?: boolean;
// 	icon?: React.ReactNode;
// 	label: React.ReactNode;
// 	metadata?: any;
// 	optionGroup?: FlySelectOptionGroup | null;
// 	secondaryText?: React.ReactNode;
// 	value?: string;
// }

// export interface FlySelectOptionGroup {
// 	label: React.ReactNode;
// 	linkText?: string;
// 	linkOnClick?: FunctionGeneric;
// }

// export type FlySelectOptionGroups = {[key: string]: FlySelectOptionGroup};
// export type FlySelectOptions = string[] | FlySelectOptionsFormatted | {[value: string]: string};
// type FlySelectOptionFormatted = FlySelectOption;
// type FlySelectOptionsFormatted = {[value: string]: FlySelectOptionFormatted};

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

// interface IState {
// 	focus: boolean;
// 	focusedIndex: number;
// 	optionsFormatted: FlySelectOptionsFormatted;
// 	open: boolean;
// 	optionsLoaded: boolean | null;
// 	value: any;
// 	willClose: boolean;
// }

export const FlySearchSelect: React.FC<IProps> = ({
	// disabled?: boolean;
	// emptyPlaceholder?: string;
	// footerText?: string;
	// footerOnClick?: FunctionGeneric;
	// loadingOptionsPlaceholder?: string;
	// onChange: FunctionGeneric;
	// options?: FlySelectOptions;
	// optionsLoader?: Promise<IProps['options']> | any;
	// optionGroups?: FlySelectOptionGroups;
	// placeholder?: string;
	// readonly?: boolean;
	// striped?: boolean;
	// value?: string;
}) => {
	// state vars here in useEffect useState
	const [focus, setFocus] = useState(false);
	const [focusedIndex, setFocusedIndex] = useState(0);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');

	useEffect(() => {
		// on component mount logic goes here
	}, [])

	// const renderOption = (optionValue: FlySelectOption['value'], i: number, group: any) => {
	// 	const optionsFormatted = this.state.optionsFormatted;
	// 	const option = optionsFormatted[optionValue as string];
	// 	const disabled = typeof optionsFormatted[optionValue as string] === 'object' ? optionsFormatted[optionValue as string].disabled : false;

	// 	if (option.optionGroup !== group) {
	// 		return null;
	// 	}

	// 	return (
	// 		<div
	// 			id={`${this.props.id}_Option`}
	// 			tabIndex={0}
	// 			key={i}
	// 			data-value={option.value}
	// 			className={classnames(
	// 				'FlySelect_Option',
	// 				{
	// 					'FlySelect_Option__Striped': this.props.striped,
	// 					'__Disabled': disabled,
	// 				},
	// 			)}
	// 			onKeyDown={(e) => this.onOptionKeyDown(e, optionValue)}
	// 			onClick={(e) => this.selectOption(e, optionValue)}
	// 		>
	// 			{this.renderItem(option, true)}
	// 		</div>
	// 	);
	// }

	// const FuzzyReactSelect = ({ options, fuzzyOptions, wait, ...props }) => {
	// 	const [fuse, setFuse] = useState(null);

	// 	// use fuse to search
	// 	const searchOptions = inputValue =>
	// 	  new Promise(resolve => {
	// 		resolve(fuse.search(inputValue).map(c => ({ ...c.item })));
	// 	  });

	// 	// call promiseOptions
	// 	const loadOptions = inputValue => searchOptions(inputValue);

	// 	// debouncer
	// 	const debouncedLoadOptions = debounce(loadOptions, wait);

	// 	useEffect(() => {
	// 	  setFuse(new Fuse(options, fuzzyOptions));
	// 	  return () => setFuse(null);
	// 	}, [options, fuzzyOptions]);

	// 	useEffect(() => {
	// 	  if ((options, fuse)) {
	// 		fuse.setCollection(options);
	// 	  }
	// 	}, [fuse, options]);

	// 	return (
	// 	  <Select
	// 		defaultOptions={options}
	// 		{...props}
	// 		components={{ MenuList }}
	// 		loadOptions={value => debouncedLoadOptions(value)}
	// 	  />
	// 	);
	//   };

	//   FuzzyReactSelect.defaultProps = {
	// 	wait: 300
	//   };

	//   FuzzyReactSelect.propTypes = {
	// 	options: PropTypes.array.isRequired,
	// 	fuzzyOptions: PropTypes.object.isRequired,
	// 	wait: PropTypes.number
	//   };

	return (
		<div>
			<CaretIcon className={styles.FlySelect__Caret}/>
			<span>
				Temp Value
			</span>
		</div>
		// <div
		// 		className={classnames(
		// 			'FlySelect',
		// 			styles.FlySelect,
		// 			this.props.className,
		// 			{
		// 				'FlySelect__Focus': this.state.focus,
		// 				'FlySelect__HasFooter': this.props.footerText,
		// 				'FlySelect__Open': this.state.open,
		// 				[styles.FlySelect__Readonly]: this.props.readonly,
		// 			},
		// 		)}
		// 		data-current-value={this.state.value}
		// 		disabled={this.props.disabled || !Object.keys(optionsFormatted).length}
		// 		id={this.props.id}
		// 		onBlur={this.onBlur}
		// 		onClick={this.onClick}
		// 		onKeyDown={this.onContainerKeyDown}
		// 		ref={this.__containerRef}
		// 		style={this.props.style}
		// 		tabIndex={0}
		// 	>
		// 		<CaretIcon className={styles.FlySelect__Caret}/>
		// 		<span className="CurrentValue">
		// 			{
		// 				value in optionsFormatted
		// 					?
		// 					this.renderItem(optionsFormatted[this.state.value])
		// 					:
		// 					<span className="CurrentValue_Placeholder">
		// 						{this.renderPlaceholder()}
		// 					</span>
		// 			}
		// 		</span>
		// 		<div
		// 			className="FlySelect_Options"
		// 			style={this.calculateOptionsPosition()}
		// 		>
		// 			<div
		// 				tabIndex={0}
		// 				ref={this.__optionsRef}
		// 				className="FlySelect_OptionsContainer"
		// 			>
		// 				{Object.keys(optionsFormatted).map((optionValue, i) => this.renderOption(optionValue, i, null))}
		// 				{this.renderOptionGroups()}
		// 			</div>
		// 			{/* {this.renderFooter()} */}
		// 		</div>
		// 	</div>

		);
};

export default FlySearchSelect;
