import * as React from 'react';
import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import Fuse from 'fuse.js';
import CheckSVG from '../../../svg/checkmark--big.svg';
import DownloadSmallSVG from '../../../svg/download--small.svg';
import ArrowRightSVG from '../../../svg/arrow--right.svg';
import styles from './FlySearchSelectV2.scss';
import { FunctionGeneric } from '../../../common/structures/Generics';
import { CaretIcon, CloseSmallIcon, SearchIcon } from '../../icons/Icons';
import BasicInput from '../BasicInput/BasicInput';
import { IconButton } from '../../buttons/IconButton/IconButton';
import { Container } from '../../modules/Container/Container';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';

export interface FlySearchSelectOption {
	disabled?: boolean;
	download?: boolean;
	icon?: React.ReactNode;
	label: string;
	metadata?: any;
	optionGroup?: string;
	secondaryText?: React.ReactNode;
}

// Guarantees the key of each state.options option will equal option.value
export interface FlySearchSelectOptionFormatted extends FlySearchSelectOption {
	value: string;
}

// Guarantees structure of state.options - we should refactor this to an array of objects instead of an object of objects maybe
export type FlySearchSelectOptionsFormatted = { [value: string]: FlySearchSelectOptionFormatted };
export type FlySearchSelectOptions =
	| FlySearchSelectOptionFormatted[]
	| string[]
	| { [value: string]: FlySearchSelectOption }
	| { [value: string]: string };
export type FlySearchSelectOptionsLoader = () => Promise<FlySearchSelectOptions>;

export interface FlySearchSelectOptionGroup {
	label: string;
	linkText?: string;
	linkOnClick?: FunctionGeneric;
}
export type FlySearchSelectOptionGroups = { [key: string]: FlySearchSelectOptionGroup };

export interface IFlySearchSelectProps extends ILocalContainerProps {
	disabled?: boolean;
	emptyPlaceholder?: string;
	loadingOptionsPlaceholder?: string;
	onChange: FunctionGeneric;
	options?: FlySearchSelectOptions;
	optionHeight?: 's' | 'l';
	inputHeight?: 's' | 'l';
	optionsLoader?: FlySearchSelectOptionsLoader;
	optionGroups?: FlySearchSelectOptionGroups;
	placeholder?: string;
	striped?: boolean;
	value?: string;
	id: string;
	noResultsMessage?: string;
	invalid?: boolean;
	invalidMessage?: string;
}

interface IState {
	focusedIndex: number;
	options: FlySearchSelectOptionsFormatted;
	open: boolean;
	optionsLoaded: boolean;
	value: IFlySearchSelectProps['value'];
	filter: string;
	shouldFilter: boolean;
}

const FlySearchSelectV2 = (props: IFlySearchSelectProps) => {
	const {
		container,
		className,
		style,
		disabled,
		emptyPlaceholder,
		loadingOptionsPlaceholder,
		onChange,
		options = {},
		optionHeight = 's',
		inputHeight = 'l',
		optionsLoader,
		optionGroups,
		placeholder,
		striped,
		value,
		id,
		invalid,
		invalidMessage,
		noResultsMessage = 'None found. Try a new search term.',
	} = props;

	const formatOption = (
		option: FlySearchSelectOption,
		optionValue: FlySearchSelectOptionFormatted['value']
	): FlySearchSelectOptionFormatted => {
		return {
			value: optionValue,
			optionGroup: option.optionGroup === null ? undefined : option.optionGroup,
			...option,
		};
	};

	const formatOptions = (opts: FlySearchSelectOptions) => {
		const formattedOptions: FlySearchSelectOptionsFormatted = {};

		if (Array.isArray(opts)) {
			opts.forEach((option: string | FlySearchSelectOptionFormatted) => {
				if (typeof option === 'string') {
					formattedOptions[option] = formatOption({ label: option }, option);
				} else {
					formattedOptions[option.value] = formatOption(option, option.value);
				}
			});
		} else {
			Object.keys(opts).forEach((optionValue) => {
				const option = opts[optionValue];
				formattedOptions[optionValue] = formatOption(
					typeof option === 'string' ? { label: option } : option,
					optionValue
				);
			});
		}

		return formattedOptions;
	};

	const [state, setState] = useState<IState>({
		focusedIndex: -1,
		open: false,
		options: formatOptions(options),
		optionsLoaded: !optionsLoader,
		value,
		filter: '',
		shouldFilter: false,
	});

	const containerRef = useRef<HTMLDivElement>(null);
	const optionsRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	// load options on mount
	useEffect(() => {
		if (optionsLoader) {
			optionsLoader().then((opts: FlySearchSelectOptions) =>
				setState((prevState) => ({
					...prevState,
					options: formatOptions(opts),
					optionsLoaded: true,
				}))
			);
		}
	}, []);

	useEffect(() => {
		setState((prevState) => ({
			...prevState,
			value,
			options: formatOptions(options),
		}));
	}, [value, options]);

	useEffect(() => {
		setState((prevState) => ({
			...prevState,
			filter: prevState.value ? prevState.options[prevState.value].label : '',
		}));
	}, [state.value, state.options]);

	useEffect(() => {
		if (!state.open) {
			setState((prevState) => ({
				...prevState,
				shouldFilter: false,
				filter: prevState.value ? prevState.options[prevState.value].label : '',
			}));
		}
	}, [state.open]);

	const onClick = () => {
		setState((prevState) => ({
			...prevState,
			open: true,
		}));
		inputRef.current?.focus();
	};

	const onBlur = (event: React.FocusEvent<HTMLElement>) => {
		if (!containerRef.current?.contains(event.relatedTarget as HTMLElement)) {
			setState((prevState) => ({
				...prevState,
				open: false,
			}));
		}
	};

	const onFocus = () => {
		setState((prevState) => ({
			...prevState,
			focusedIndex: -1,
		}));
	};

	const selectOption = (e: React.MouseEvent | React.KeyboardEvent, val: IFlySearchSelectProps['value']) => {
		e.persist();
		setState((prevState) => {
			onChange(val!);
			e.stopPropagation();

			return {
				...prevState,
				open: false,
				value: val!,
			};
		});
	};

	const handleTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.persist();

		setState((prevState) => ({
			...prevState,
			filter: event.target.value,
			shouldFilter: true,
			open: true,
			focusedIndex: prevState.open ? prevState.focusedIndex : -1,
		}));
	};

	const getFilteredOptions = (): FlySearchSelectOptionsFormatted => {
		if (!state.shouldFilter || !state.filter) {
			return state.options;
		}
		const optionsList = Object.keys(state.options).map((key) => state.options[key]);
		const fuse = new Fuse(optionsList, {
			keys: ['label'],
			threshold: 0.5,
		});

		const result = fuse.search(state.filter).map((option) => option.item.value);

		if (!result.length) {
			return {
				[noResultsMessage]: {
					label: noResultsMessage,
					value: noResultsMessage,
					disabled: true,
				},
			};
		}

		const filteredOptions = Object.keys(state.options).reduce((acc, key) => {
			if (result.includes(key)) {
				acc[key] = state.options[key];
			}

			return acc;
		}, {} as FlySearchSelectOptionsFormatted);

		return filteredOptions;
	};

	const onContainerKeyDown = (event: React.KeyboardEvent) => {
		let { open, focusedIndex } = state;
		console.log(focusedIndex);

		// TODO handle case where focus index is zero, focus the input

		// eslint-disable-next-line default-case
		switch (event.key) {
			case ' ':
				if (!open) {
					open = true;
				} else {
					return;
				}
				break;
			case 'Enter':
				// event.stopPropagation();
				open = true;
				break;
			case 'ArrowUp':
				// event.stopPropagation();
				event.preventDefault();
				open = true;
				if (focusedIndex > 0) {
					focusedIndex -= 1;
				}
				break;
			case 'ArrowDown':
				// event.stopPropagation();
				event.preventDefault();
				open = true;
				if (focusedIndex < Object.keys(getFilteredOptions()).length - 1) {
					focusedIndex += 1;
				}
				break;
			case 'Tab':
				event.stopPropagation();
				open = false;
				break;
			default:
				return;
		}

		setState((prevState) => {
			if (open && optionsRef.current?.children[focusedIndex]) {
				(optionsRef.current.children[focusedIndex] as HTMLElement).focus();
			}
			return { ...prevState, open, focusedIndex };
		});
	};

	const onOptionKeyDown = (e: React.KeyboardEvent, val: IFlySearchSelectProps['value']) => {
		e.persist();
		if (e.key === 'Enter') {
			// TODO consider removing space case here ?
			e.stopPropagation();
			selectOption(e, val!);
		}
	};

	const renderPlaceholder = () => {
		if (!state.optionsLoaded) {
			return loadingOptionsPlaceholder;
		}

		if (Object.keys(state.options).length) {
			return placeholder;
		}

		return emptyPlaceholder;
	};

	const renderItemRight = (option: FlySearchSelectOptionFormatted, showCheck: boolean) => {
		return (
			<span className={styles.FlySelect__Right} key={`${option.value}-right`}>
				{option.secondaryText && (
					<span className={styles.FlySelect__SecondaryText} key={`${option.value}-secondary-text`}>
						{option.secondaryText}
					</span>
				)}
				{showCheck && option.value === state.value && (
					<CheckSVG key={`${option.value}-checked`} className={styles.FlySelect__Check} />
				)}
			</span>
		);
	};

	const renderItem = (option: FlySearchSelectOptionFormatted, showCheck: boolean = false) => {
		const output = [];

		if (option.download === true) {
			output.push(<DownloadSmallSVG key={`${option.value}-download-svg`} className={styles.DownloadSmall} />);
		}

		if (option.icon) {
			if (typeof option.icon === 'string') {
				// eslint-disable-next-line jsx-a11y/alt-text
				output.push(<img src={option.icon} key={`${option.value}-icon`} />);
			} else {
				output.push(
					React.cloneElement(option.icon as React.ReactElement, {
						key: `${option.value}-icon`,
						className: styles.FlySelect__ItemIcon,
					})
				);
			}
		}

		output.push(
			<span key={`${option.value}-label`} className={styles.FlySelect_Option_Label}>
				{option.label}
			</span>
		);

		output.push(renderItemRight(option, showCheck));

		return output;
	};

	const renderOption = (option: FlySearchSelectOptionFormatted, group?: string): React.ReactNode => {
		if (option.optionGroup !== group) {
			return null;
		}

		return (
			<div
				role="option"
				aria-selected={state.value === option.value}
				tabIndex={0}
				key={option.value}
				data-value={option.value}
				className={classnames(styles.FlySelect_Option, {
					[styles.FlySelect_Option__Striped]: striped,
					__Disabled: option.disabled,
				})}
				onKeyDown={(e) => onOptionKeyDown(e, option.value)}
				onClick={(e) => selectOption(e, option.value)}
			>
				{renderItem(option, true)}
			</div>
		);
	};

	const renderOptionGroups = (opts: FlySearchSelectOptionsFormatted) => {
		if (!optionGroups) {
			return null;
		}

		const output: React.ReactNode[] = [];

		Object.entries(optionGroups).forEach(([optionGroupID, optionGroup]) => {
			const optionNodes = Object.values(opts)
				.map((option) => renderOption(option, optionGroupID))
				.filter((n) => n);

			if (!optionNodes.length || !optionGroup) {
				return;
			}

			output.push(
				<>
					{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
					<div tabIndex={0} key={optionGroupID} className={styles.FlySelect_OptionGroup}>
						<span>{optionGroup.label}</span>
						{optionGroup.linkText ? (
							// eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
							<a onClick={optionGroup.linkOnClick}>
								{optionGroup.linkText}
								<ArrowRightSVG />
							</a>
						) : null}
					</div>
					<span key={`${optionGroupID}-empty`} />{' '}
					{/* note: this is here to ensure that the expected alternating row color order is maintained */}
				</>
			);

			output.push(optionNodes);
		});

		return output;
	};

	const clearFilter = () => {
		setState((prevState) => ({
			...prevState,
			filter: '',
		}));
		inputRef.current?.focus();
	};

	const preventFocus = (event: React.MouseEvent) => {
		event.persist();
		event.preventDefault();
	};

	const getIconTop = (iconHeight: number) => ({
		top: inputRef.current ? `${(inputRef.current.clientHeight - iconHeight) / 2}px` : '0',
	});

	return (
		<Container
			className={classnames(styles.FlySelect, className, {
				[styles.FlySelect__Open]: state.open,
				[styles.FlySelect__Disabled]: disabled || !Object.keys(state.options).length,
				[styles.FlySelect__InputHeightLarge]: inputHeight === 'l',
				[styles.FlySelect__OptionHeightLarge]: optionHeight === 'l',
			})}
			id={id}
			ref={containerRef}
			style={style}
			onKeyDown={onContainerKeyDown}
			{...container}
		>
			<BasicInput
				ref={inputRef}
				role="combobox"
				aria-expanded={state.open}
				aria-controls={`${id}-Options`}
				className={styles.FlySelect__BasicInput}
				placeholder={renderPlaceholder()}
				onChange={handleTyping}
				value={state.filter}
				{...{ invalid, invalidMessage, onClick, onBlur, onFocus, disabled }}
				// rightIcon={state.open ? CloseIcon : CaretIcon}
			/>
			<SearchIcon
				aria-hidden
				className={styles.FlySelect__SearchIcon}
				height={22}
				width={22}
				style={getIconTop(22)}
			/>
			{state.open ? (
				state.filter && (
					<IconButton
						icon={CloseSmallIcon}
						style={getIconTop(13)}
						className={styles.FlySelect__CloseIcon}
						tabIndex={-1}
						onMouseDown={preventFocus}
						onClick={clearFilter}
					/>
				)
			) : (
				<IconButton
					icon={CaretIcon}
					onMouseDown={preventFocus}
					tabIndex={-1}
					className={styles.FlySelect__CaretIcon}
					style={getIconTop(5.95)}
					onClick={onClick}
				/>
			)}
			<div
				className={styles.FlySelect_Options}
				id={`${id}-Options`}
				style={{
					maxHeight:
						containerRef.current && state.open
							? window.innerHeight - 50 - containerRef.current.getBoundingClientRect().top
							: undefined,
				}}
			>
				<div ref={optionsRef} className={styles.FlySelect_OptionsContainer}>
					{Object.values(getFilteredOptions()).map((option) => renderOption(option))}
					{renderOptionGroups(getFilteredOptions())}
				</div>
			</div>
		</Container>
	);
};

export default FlySearchSelectV2;
