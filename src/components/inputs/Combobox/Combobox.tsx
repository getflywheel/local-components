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

/** Unformatted option for use in the { [value: string]: ComboboxOption } type for the "options" prop */
export interface ComboboxOption {
	/** Whether the option is disabled */
	disabled?: boolean;
	/** Whether to show the download icon next to an option */
	download?: boolean;
	/** The icon to show next to the left of the option label - if a string, it will be the src attribute of an <img> tag */
	icon?: React.ReactNode;
	/** The text to show for the option */
	label: string;
	/** Optional metadata - NOTE this is unused and exists for backwards compatability */
	metadata?: any;
	/**
	 * The option group the option belongs to.
	 *
	 * Must match an object key or optionGroup.name field of an option group passed in the "optionGroups" prop
	 */
	optionGroup?: string;
	/** Optional secondary text to be displayed to the right of the option labl */
	secondaryText?: React.ReactNode;
}

/**
 * Formatted option that the component will adapt all options in the "options" prop to.
 *
 * Essentially this just guarantees a "value" property on every option used internally, and it's necessary because
 * the "options" prop is quite flexible and allows several different formats.
 */
export interface ComboboxOptionFormatted extends ComboboxOption {
	/** A string representing the value of the option */
	value: string;
}

/** An array of formatted options, this is the interface used by state.options interally */
export type ComboboxOptionsFormatted = ComboboxOptionFormatted[];

/**
 * The type used by the "options" prop, ComboboxOptions allows users to pass options in a variety of formats.
 *
 * When the key of an object is [value: string], that means the key will be converted into that option's "value" property (see ComboboxOptionFormatted).
 */
export type ComboboxOptions =
	| ComboboxOptionFormatted[]
	| string[]
	| { [value: string]: ComboboxOption }
	| { [value: string]: string };

/** An asynchronous function that loads options, an alternative to passing options via the "options" prop. */
export type ComboboxOptionsLoader = () => Promise<ComboboxOptions>;

/** A group to separate Combobox options */
export interface ComboboxOptionGroup {
	/** The label used to display the option group item */
	label: string;
	/** An optional link to display in the option group item */
	linkText?: string;
	/** A callback function to fire when clicking an option group link */
	linkOnClick?: FunctionGeneric;
}

/** A group to separate Combobox options */
export interface ComboboxOptionGroupFormatted extends ComboboxOptionGroup {
	/** The name of the option group - this should match the "optionGroup" field of an option */
	name: string;
}

/**
 * The type used by "optionGroups" to pass in option groups.
 *
 * If using the object format, a key must match the "optionGroup" property of a ComboboxOption to be used by that option.
 */
export type ComboboxOptionGroups =
	| { [optionGroup: string]: ComboboxOptionGroup }
	| ComboboxOptionGroupFormatted[]
	| string[];

/** The type used internally when referencing optionGroups - the "optionGroups" prop will get formatted to this type */
export type ComboboxOptionGroupsFormatted = ComboboxOptionGroupFormatted[];

export interface IComboboxProps extends ILocalContainerProps {
	/** Whether the entire combobox is disabled */
	disabled?: boolean;
	/** Placeholder value for when no options exist */
	emptyPlaceholder?: string;
	/** Placeholder for when options are being loaded by optionsLoader */
	loadingOptionsPlaceholder?: string;
	/** Callback function called when the selected value changes. Combine with "value" prop to make this a controlled component */
	onChange: (value: IComboboxProps['value']) => void;
	/** Options for Combobox. Will be internally passed through a formatter before being used */
	options?: ComboboxOptions;
	/** Height for the options in the dropdown. 's' = 37px, 'l' = 57px */
	optionHeight?: 's' | 'l';
	/** Height for the text input. 's' = 37px, 'l' = 57px */
	inputHeight?: 's' | 'l';
	/** Optional async function that returns ComboboxOptions, useful for displaying a loading state while not blocking renders */
	optionsLoader?: ComboboxOptionsLoader;
	/** OptionGroups used to separate Options. Key must match the "optionGroup" field of an option to be used. Groups will be displayed in the order they are passed */
	optionGroups?: ComboboxOptionGroups;
	/** Placeholder for when options exist but none are selected */
	placeholder?: string;
	/** Whether the options should be formatted to have striped backgrounds */
	striped?: boolean;
	/** The selected value. Combine with "onChange" prop to make this a controlled component */
	value?: string;
	/** Required ID field used to make unique keys for rendered lists */
	id: string;
	/** Message to display in the option shown when no results are found with a given filter */
	noResultsMessage?: string;
	/** Whether combobox is in invalid state - adds red border */
	invalid?: boolean;
	/** Message shown below text input when combobox is invalid */
	invalidMessage?: string;
}

interface IState {
	/** Index of the currently focused item in filteredOptions */
	focusedIndex: number;
	/** Array of possibly unsorted options - to get sorted, filtered options, use filteredOptions() */
	options: ComboboxOptionsFormatted;
	/** The filtered options object */
	filteredOptions: ComboboxOptionsFormatted;
	/** Whether combobox is open */
	open: boolean;
	/** Whether the options have been loaded */
	optionsLoaded: boolean;
	/** The formatted option groups derived from the "optionGroups" prop */
	optionGroups: ComboboxOptionGroupsFormatted;
	/** String representing currently selected value */
	value: IComboboxProps['value'];
	/**
	 * The filter used to search through results using Fuse.js.
	 *
	 * This is also the text input value, i.e. the filter will always be the displayed text.
	 */
	filter: string;
	/** Whether the filter should be applied - allows us to open the combobox without intial filtering */
	shouldFilter: boolean;
}

/**
 * A combobox component for searching through a list of options in a dropdown.
 *
 * This component borrows heavily from FlySelect, with code adapted for a
 * functional component.
 */
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

	// FORMATTERS:

	/** A function to format a ComboboxOption into a ComboboxOptionFormatted */
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

	/** Adapter function to convert all possible passed types of ComboboxOptions into ComboboxOptionsFormatted */
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

	/** Adapter function to convert possible passed types of ComboboxOptionGroups into ComboboxOptionGroupsFormatted */
	const formatOptionGroups = (optGroups: ComboboxOptionGroups | undefined) => {
		const formattedOptionGroups: ComboboxOptionGroupsFormatted = [];

		if (Array.isArray(optGroups)) {
			optGroups.forEach((optionGroup: string | ComboboxOptionGroupFormatted) => {
				if (typeof optionGroup === 'string') {
					formattedOptionGroups.push({ name: optionGroup, label: optionGroup });
				} else {
					formattedOptionGroups.push(optionGroup);
				}
			});
		} else if (optGroups) {
			Object.keys(optGroups).forEach((optionGroupName) => {
				formattedOptionGroups.push({ ...optGroups[optionGroupName], name: optionGroupName });
			});
		}

		return formattedOptionGroups;
	};

	// SETTING INITIAL STATE:

	const containerRef = useRef<HTMLDivElement>(null);
	const optionsRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const [state, unsafeSetState] = useState<IState>({
		focusedIndex: -1,
		open: false,
		options: formatOptions(options),
		filteredOptions: [],
		optionsLoaded: !optionsLoader,
		optionGroups: formatOptionGroups(optionGroups),
		value,
		filter: '',
		shouldFilter: false,
	});

	/**
	 * Helper function for setting the state object so that we can avoid having to
	 * remember to spread ...prevState every time, since we have one single state
	 * object and not several state variables.
	 *
	 * @param newState Either an object with new state to set or a callback function
	 * that will be passed previous state
	 *
	 * @param callback A callback function that will be passed previous state that will be called before the new state is set.
	 * Defaults to undefined
	 */
	const setState = (
		newState: Partial<IState> | ((prevstate: IState) => Partial<IState>),
		callback: ((prevstate: IState) => void) | undefined = undefined
	) => {
		unsafeSetState((prevState) => {
			callback?.(prevState);

			return {
				...prevState,
				...(typeof newState === 'function' ? newState(prevState) : newState),
			};
		});
	};

	// SORT AND FILTER:

	/**
	 * Function to sort the options to match the order in which they are rendered by the various render functions
	 *
	 * This order is: ungrouped options followed by grouped options in the order the options and groups were passed as props.
	 */
	const sortOptions = (opts: ComboboxOptionsFormatted) => {
		const optionGroupNames = state.optionGroups.map((group) => group.name);

		const hasOptionGroup = (option: ComboboxOptionFormatted) => {
			return option.optionGroup && optionGroupNames.includes(option.optionGroup);
		};

		return opts.sort((a, b) => {
			if (hasOptionGroup(a) && !hasOptionGroup(b)) {
				return 1;
			}
			if (!hasOptionGroup(a) && hasOptionGroup(b)) {
				return -1;
			}
			if (!hasOptionGroup(a) && !hasOptionGroup(b)) {
				return 0;
			}

			return Math.sign(optionGroupNames.indexOf(a.optionGroup!) - optionGroupNames.indexOf(b.optionGroup!));
		});
	};

	/**
	 * Function to get the filtered options. If no filter or shouldn't filter, it returns the sorted options.
	 *
	 * Note this will be run initially after state is set due to a useEffect watching state.options and state.filter
	 */
	const getFilteredOptions = (): ComboboxOptionsFormatted => {
		let result = state.options;

		if (state.shouldFilter && state.filter) {
			const fuse = new Fuse(result, {
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

	// USE EFFECTS:

	// Potentially load options on mount
	useEffect(() => {
		if (optionsLoader) {
			optionsLoader().then((opts: ComboboxOptions) =>
				setState({
					options: formatOptions(opts),
					optionsLoaded: true,
				})
			);
		}
	}, []);

	// Watch for changes in the "value" prop, allowing this to be a controlled component
	useEffect(() => {
		setState({ value });
	}, [value]);

	// Watch for changes in the stored value in state to keep the filter up to date
	useEffect(() => {
		setState((prevState) => ({
			filter: prevState.value ? prevState.options.find((opt) => opt.value === prevState.value)!.label : '',
		}));
	}, [state.value, state.options]);

	// When the combobox closes, set the filter equal to the selected option's label and
	// reset shouldFilter (allows us to open combobox and show all options initially)
	useEffect(() => {
		if (!state.open) {
			setState((prevState) => ({
				shouldFilter: false,
				filter: prevState.value ? prevState.options.find((opt) => opt.value === prevState.value)!.label : '',
			}));
		}
	}, [state.open]);

	// Re-filter options whenever the filter or options changes
	useEffect(() => {
		setState({
			filteredOptions: getFilteredOptions(),
		});
	}, [state.filter, state.options]);

	// EVENT HANDLERS:

	/** Click handler for opening the combobox and focusing the text input */
	const onClick = () => {
		setState({ open: true });
		inputRef.current?.focus();
	};

	/**
	 * Blur handler for text intput.
	 *
	 * When the text input loses focus, close it, but only if the related target getting focus is outside of the combobox container.
	 */
	const onBlur = (event: React.FocusEvent<HTMLElement>) => {
		if (!containerRef.current?.contains(event.relatedTarget as HTMLElement)) {
			setState({ open: false });
		}
	};

	/** Focus handler for the text input that resets the focusedIndex */
	const onFocus = () => {
		setState({ focusedIndex: -1 });
	};

	/** Function to select an option, either by keyboard or by clicking */
	const selectOption = (e: React.MouseEvent | React.KeyboardEvent, val: IComboboxProps['value']) => {
		e.persist();
		setState({ open: false, value: val! }, () => {
			onChange(val!);
			e.stopPropagation();
		});
	};

	/** Function passed to onChange of text input, used to update the filter, open combobox, and set focusedIndex */
	const handleTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.persist();

		setState((prevState) => ({
			filter: event.target.value,
			shouldFilter: true,
			open: true,
			focusedIndex: prevState.open ? prevState.focusedIndex : -1,
		}));
	};

	/** Helper function to determine the next array index going forward or backward, including wrapping */
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

	/** Function to get the index of the next or previous focusable option, taking into account disabled options */
	const getAvailableFocusedIndex = (next: boolean = true) => {
		const { focusedIndex, filteredOptions } = state;
		const len = filteredOptions.length;

		let i = getNextIndex(focusedIndex, len, next);
		let option = filteredOptions[i];

		while (option && i !== focusedIndex && option.disabled) {
			i = len === 1 && option.disabled ? focusedIndex : getNextIndex(i, len, next);
			option = filteredOptions[i];
		}

		return i;
	};

	/** Handler for keydown events on the container, allowing for accessible keyboard navigation */
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
					const option = state.filteredOptions[focusedIndex];
					if (state.options.includes(option)) {
						selectOption(event, state.filteredOptions[focusedIndex].value);
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
		setState({ open, focusedIndex });
	};

	// RENDER FUNCTIONS, most if not all taken from FlySelect:

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

	const renderOption = (
		option: ComboboxOptionFormatted,
		optionGroup?: ComboboxOptionGroupFormatted
	): React.ReactNode => {
		if (option.optionGroup !== optionGroup?.name) {
			return null;
		}

		const isFocused = state.filteredOptions.indexOf(option) === state.focusedIndex;

		return (
			<div
				role="option"
				aria-selected={state.value === option.value}
				tabIndex={-1}
				key={`${id}-${option.value}`}
				data-value={option.value}
				className={classnames(styles.Combobox_Option, {
					[styles.Combobox_Option__Striped]: striped,
					[styles.Combobox_Option__Focus]: isFocused && !option.disabled,
					__Disabled: option.disabled,
				})}
				onKeyDown={() => {}}
				onClick={(e) => selectOption(e, option.value)}
				onMouseEnter={() => setState({ focusedIndex: state.filteredOptions.indexOf(option) })}
			>
				{renderItem(option, true)}
			</div>
		);
	};

	const renderOptionGroups = (opts: ComboboxOptionsFormatted) => {
		if (!state.optionGroups) {
			return null;
		}

		const output: React.ReactNode[] = [];

		state.optionGroups.forEach((optionGroup) => {
			const optionNodes = opts.map((option) => renderOption(option, optionGroup)).filter((n) => n);

			if (!optionNodes.length) {
				return;
			}

			output.push(
				<>
					{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
					<div tabIndex={0} key={`${id}-${optionGroup.name}`} className={styles.Combobox_OptionGroup}>
						<span>{optionGroup.label}</span>
						{optionGroup.linkText ? (
							// eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
							<a onClick={optionGroup.linkOnClick}>
								{optionGroup.linkText}
								<ArrowRightSVG />
							</a>
						) : null}
					</div>
					<span key={`${id}-${optionGroup.name}-empty`} />{' '}
					{/* note: this is here to ensure that the expected alternating row color order is maintained */}
				</>
			);

			output.push(optionNodes);
		});

		return output;
	};

	// HELPERS:

	const clearFilter = () => {
		setState({ filter: '' });
		inputRef.current?.focus();
	};

	const preventFocus = (event: React.MouseEvent) => {
		event.persist();
		event.preventDefault();
	};

	/** Helper function necessary because the height of BasicInput can change based on the invalid message or inputHeight prop */
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
					{state.filteredOptions.map((option) => renderOption(option))}
					{renderOptionGroups(state.filteredOptions)}
				</div>
			</div>
		</Container>
	);
};

export default Combobox;
