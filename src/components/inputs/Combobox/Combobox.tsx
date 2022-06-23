import * as React from 'react';
import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import Fuse from 'fuse.js';
import CheckSVG from '../../../svg/checkmark--big.svg';
import DownloadSmallSVG from '../../../svg/download--small.svg';
import ArrowRightSVG from '../../../svg/arrow--right.svg';
import styles from './Combobox.scss';
import { FunctionGeneric } from '../../../common/structures/Generics';
import { CaretIcon, CloseSmallIcon, SearchIcon } from '../../icons/Icons';
import BasicInput from '../BasicInput/BasicInput';
import { IconButton } from '../../buttons/IconButton/IconButton';
import { Container } from '../../modules/Container/Container';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';

export interface ComboboxOption {
	disabled?: boolean;
	download?: boolean;
	icon?: React.ReactNode;
	label: string;
	metadata?: any;
	optionGroup?: string;
	secondaryText?: React.ReactNode;
}

// Guarantees the key of each state.options option will equal option.value
export interface ComboboxOptionFormatted extends ComboboxOption {
	value: string;
}

// Guarantees structure of state.options - we should refactor this to an array of objects instead of an object of objects maybe
export type ComboboxOptionsFormatted = ComboboxOptionFormatted[];
export type ComboboxOptions =
	| ComboboxOptionFormatted[]
	| string[]
	| { [value: string]: ComboboxOption }
	| { [value: string]: string };
export type ComboboxOptionsLoader = () => Promise<ComboboxOptions>;

export interface ComboboxOptionGroup {
	label: string;
	linkText?: string;
	linkOnClick?: FunctionGeneric;
}
export type ComboboxOptionGroups = { [key: string]: ComboboxOptionGroup };

export interface IComboboxProps extends ILocalContainerProps {
	disabled?: boolean;
	emptyPlaceholder?: string;
	loadingOptionsPlaceholder?: string;
	onChange: FunctionGeneric;
	options?: ComboboxOptions;
	optionHeight?: 's' | 'l';
	inputHeight?: 's' | 'l';
	optionsLoader?: ComboboxOptionsLoader;
	optionGroups?: ComboboxOptionGroups;
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
	options: ComboboxOptionsFormatted;
	open: boolean;
	optionsLoaded: boolean;
	value: IComboboxProps['value'];
	filter: string;
	shouldFilter: boolean;
}

const Combobox = (props: IComboboxProps) => {
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
		option: ComboboxOption,
		optionValue: ComboboxOptionFormatted['value']
	): ComboboxOptionFormatted => {
		return {
			value: optionValue,
			optionGroup: option.optionGroup === null ? undefined : option.optionGroup,
			...option,
		};
	};

	const formatOptions = (opts: ComboboxOptions) => {
		const formattedOptions: ComboboxOptionsFormatted = [];

		if (Array.isArray(opts)) {
			opts.forEach((option: string | ComboboxOptionFormatted) => {
				if (typeof option === 'string') {
					formattedOptions.push(formatOption({ label: option }, option));
				} else {
					formattedOptions.push(formatOption(option, option.value));
				}
			});
		} else {
			Object.keys(opts).forEach((optionValue) => {
				const option = opts[optionValue];
				formattedOptions.push(
					formatOption(typeof option === 'string' ? { label: option } : option, optionValue)
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
			optionsLoader().then((opts: ComboboxOptions) =>
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
			filter: prevState.value ? prevState.options.find((opt) => opt.value === prevState.value)!.label : '',
		}));
	}, [state.value, state.options]);

	useEffect(() => {
		if (!state.open) {
			setState((prevState) => ({
				...prevState,
				shouldFilter: false,
				filter: prevState.value ? prevState.options.find((opt) => opt.value === prevState.value)!.label : '',
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

	const selectOption = (e: React.MouseEvent | React.KeyboardEvent, val: IComboboxProps['value']) => {
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

	const sortOptions = (opts: ComboboxOptionsFormatted) => {
		return opts.sort((a, b) => {
			if (a.optionGroup && !b.optionGroup) {
				return 1;
			}
			if (!a.optionGroup && b.optionGroup) {
				return -1;
			}
			if (!a.optionGroup && !b.optionGroup) {
				return 0;
			}
			return a.optionGroup!.localeCompare(b.optionGroup!);
		});
	};

	const getFilteredOptions = (): ComboboxOptionsFormatted => {
		let result = state.options;

		if (state.shouldFilter && state.filter) {
			const fuse = new Fuse(state.options, {
				keys: ['label'],
				threshold: 0.5,
			});

			result = fuse.search(state.filter).map((option) => option.item);

			if (!result.length) {
				return [
					{
						label: noResultsMessage,
						value: noResultsMessage,
						disabled: true,
					},
				];
			}
		}

		return sortOptions(result);
	};

	const getNextIndex = (index: number, arrayLength: number, next: boolean = true) => {
		let i = index;
		const limit = arrayLength - 1;

		if (limit === 0) {
			i = 0;
		} else if (i === limit) {
			i = next ? 0 : i - 1;
		} else if (i === -1 || i === 0) {
			i = next ? i + 1 : limit;
		} else if (i < limit) {
			i = next ? i + 1 : i - 1;
		} else if (i > limit) {
			i = next ? 0 : limit;
		}
		return i;
	};

	const getAvailableFocusedIndex = (next: boolean = true) => {
		const { focusedIndex } = state;
		const filteredOptions = getFilteredOptions();
		const len = filteredOptions.length;

		let i = getNextIndex(focusedIndex, len, next);
		let option = filteredOptions[i];

		while (option && i !== focusedIndex && option.disabled) {
			i = len === 1 && option.disabled ? focusedIndex : getNextIndex(i, len, next);
			option = filteredOptions[i];
		}

		return i;
	};

	const onContainerKeyDown = (event: React.KeyboardEvent) => {
		let { open, focusedIndex } = state;

		switch (event.key) {
			case ' ':
				if (!open) {
					open = true;
				} else {
					return;
				}
				break;
			case 'Enter':
				if (!open) {
					open = true;
				} else {
					const option = getFilteredOptions()[focusedIndex];
					if (state.options.includes(option)) {
						selectOption(event, getFilteredOptions()[focusedIndex].value);
						inputRef.current?.blur();
					}
					return;
				}
				break;
			case 'ArrowUp':
				event.preventDefault();
				open = true;
				focusedIndex = getAvailableFocusedIndex(false);
				break;
			case 'ArrowDown':
				event.preventDefault();
				open = true;
				focusedIndex = getAvailableFocusedIndex();
				break;
			case 'Tab':
				event.stopPropagation();
				open = false;
				break;
			default:
				return;
		}
		setState((prevState) => ({ ...prevState, open, focusedIndex }));
	};

	const renderPlaceholder = () => {
		if (!state.optionsLoaded) {
			return loadingOptionsPlaceholder;
		}

		if (state.options.length) {
			return placeholder;
		}

		return emptyPlaceholder;
	};

	const renderItemRight = (option: ComboboxOptionFormatted, showCheck: boolean) => {
		return (
			<span className={styles.Combobox__Right} key={`${option.value}-right`}>
				{option.secondaryText && (
					<span className={styles.Combobox__SecondaryText} key={`${option.value}-secondary-text`}>
						{option.secondaryText}
					</span>
				)}
				{showCheck && option.value === state.value && (
					<CheckSVG key={`${option.value}-checked`} className={styles.Combobox__Check} />
				)}
			</span>
		);
	};

	const renderItem = (option: ComboboxOptionFormatted, showCheck: boolean = false) => {
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
						className: styles.Combobox__ItemIcon,
					})
				);
			}
		}

		output.push(
			<span key={`${option.value}-label`} className={styles.Combobox_Option_Label}>
				{option.label}
			</span>
		);

		output.push(renderItemRight(option, showCheck));

		return output;
	};

	const renderOption = (option: ComboboxOptionFormatted, group?: string): React.ReactNode => {
		if (option.optionGroup !== group) {
			return null;
		}

		const filteredOptions = getFilteredOptions();

		const isFocused = filteredOptions.indexOf(option) === state.focusedIndex;

		return (
			<div
				role="option"
				aria-selected={state.value === option.value}
				tabIndex={-1}
				key={option.value}
				data-value={option.value}
				className={classnames(styles.Combobox_Option, {
					[styles.Combobox_Option__Striped]: striped,
					[styles.Combobox_Option__Focus]: isFocused && !option.disabled,
					__Disabled: option.disabled,
				})}
				onKeyDown={() => {}}
				onClick={(e) => selectOption(e, option.value)}
				onMouseEnter={() =>
					setState((prevState) => ({
						...prevState,
						focusedIndex: filteredOptions.indexOf(option),
					}))
				}
			>
				{renderItem(option, true)}
			</div>
		);
	};

	const renderOptionGroups = (opts: ComboboxOptionsFormatted) => {
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
					<div tabIndex={0} key={optionGroupID} className={styles.Combobox_OptionGroup}>
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
			className={classnames(styles.Combobox, className, {
				[styles.Combobox__Open]: state.open,
				[styles.Combobox__Disabled]: disabled || !state.options.length,
				[styles.Combobox__InputHeightLarge]: inputHeight === 'l',
				[styles.Combobox__OptionHeightLarge]: optionHeight === 'l',
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
				className={styles.Combobox__BasicInput}
				placeholder={renderPlaceholder()}
				onChange={handleTyping}
				value={state.filter}
				{...{ invalid, invalidMessage, onClick, onBlur, onFocus, disabled }}
				// rightIcon={state.open ? CloseIcon : CaretIcon}
			/>
			<SearchIcon
				aria-hidden
				className={styles.Combobox__SearchIcon}
				height={22}
				width={22}
				style={getIconTop(22)}
			/>
			{state.open ? (
				state.filter && (
					<IconButton
						icon={CloseSmallIcon}
						style={getIconTop(13)}
						className={styles.Combobox__CloseIcon}
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
					className={styles.Combobox__CaretIcon}
					style={getIconTop(5.95)}
					onClick={onClick}
				/>
			)}
			<div
				className={styles.Combobox_Options}
				id={`${id}-Options`}
				style={{
					maxHeight:
						containerRef.current && state.open
							? window.innerHeight - 50 - containerRef.current.getBoundingClientRect().top
							: undefined,
				}}
			>
				<div ref={optionsRef} className={styles.Combobox_OptionsContainer}>
					{getFilteredOptions().map((option) => renderOption(option))}
					{renderOptionGroups(getFilteredOptions())}
				</div>
			</div>
		</Container>
	);
};

export default Combobox;
