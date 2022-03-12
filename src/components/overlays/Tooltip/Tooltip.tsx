import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './Tooltip.scss';
import { usePopper } from 'react-popper';
import {  useEffect, useState, useRef } from 'react';
import { Portal } from '../../../common/helpers/Portal';
import { useDetectTransitionEnd } from '../../../common/helpers/useDetectTransitionEnd';
import { useSwappableTimeout } from '../../../common/helpers/useTimeout';
import { useDetectClickOrHoverWithinTargets } from '../../../common/helpers/useDetectClickOrHoverWithinTargets';
import { Options } from '@popperjs/core/lib/modifiers/arrow';
import { Options as OffsetOptions } from '@popperjs/core/lib/modifiers/offset';
import { FunctionGeneric } from '../../../common/structures/Generics';

export interface TooltipProps extends IReactComponentProps {
	/** the content that should show the tooltip upon the user's mouse entering it **/
	content?: React.ReactElement;
	/** whether to force the tooltip to show and ignore mouse events **/
	forceShow?: boolean;
	/** the number of milliseconds to delay hiding the tooltip after the user's mouse leaves this component **/
	hideDelay?: number;
	/** hide the tooltip arrow */
	hideArrow?: boolean;
	/** Additional popper arrow modifier */
	popperArrowModifier?: Partial<Options>;
	/** Additional popper offset modifier to reposition the popper tooltip [position's direction, perpendicular direction] */
	popperOffsetModifier?: Partial<OffsetOptions>;
	/** className to tweak popper container styles */
	popperContainerClassName?: string,
	/** className to tweak popper visual container styles */
	popperVisualContainerClassName?: string,
	/** the position/placement of the tooltip relative to the content **/
	position?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'auto' | 'auto-start' | 'auto-end';
	/** the number of milliseconds to delay showing the tooltip once the user's mouse enters this component **/
	showDelay?: number;
	//** whether to change default hover tooltip interaction to click/blur */
	useClickInsteadOfHover?: boolean;
	/** whether to hide tooltip from dom */
	hideTooltip?: boolean;
	/** callback run when tooltip shows */
	onShow?: FunctionGeneric;
	/** callback run when tooltip hides */
	onHide?: FunctionGeneric;
}

// whether moving forward to the next stage or reverting back to a previous stage
type ReducerStageDirection = 'prev' | 'stopped' | 'next';

interface ReducerState {
	stage:
	| '0Hidden'
	| '1WaitingToFadeIn'
	| '2FadingInToShow'
	| '3Showing'
	| '4WaitingToFadeOut'
	| '5FadingOutToHide',
	direction: ReducerStageDirection,
}

type ReducerAction =
| { type: 'onDelayComplete' }
| { type: 'onMouseOff' }
| { type: 'onMouseOver' }
| { type: 'onTransitionEnd' }

/**
 * a reducer that handles revelant events changes the tooltip stage accordingly
 * this is setup to be very verbose so it can be easily traversed, if needed, by developers
 * note: events include mouse, timer, transition
 * this reducer also handles going both forward and backwards through various stages
 * @param prevState
 * @param action
 */
function reducer(prevState: ReducerState, action: ReducerAction): ReducerState {
	const newState = {...prevState};
	const { type } = action;

	switch (prevState.stage) {
		case '0Hidden':
			if (type === 'onMouseOver') {
				newState.direction = 'next';
				newState.stage = '1WaitingToFadeIn';
			}
			break;
		case '1WaitingToFadeIn':
			if (type === 'onDelayComplete' || (newState.direction === 'prev' && type === 'onMouseOver')) {
				newState.direction = 'next';
				newState.stage = '2FadingInToShow';
			}
			else if (type === 'onMouseOff') {
				newState.direction = 'stopped';
				newState.stage = '0Hidden';
			}
			else if (prevState.direction === 'prev') {
				newState.direction = 'stopped';
				newState.stage = '0Hidden';
			}
			break;
		case '2FadingInToShow':
			if (type === 'onTransitionEnd') {
				newState.direction = 'next';
				newState.stage = '3Showing';
			}
			else if (type === 'onMouseOff') {
				newState.direction = 'prev';
				newState.stage = '1WaitingToFadeIn';
			}
			break;
		case '3Showing':
			if (type === 'onMouseOff') {
				newState.direction = 'next';
				newState.stage = '4WaitingToFadeOut';
			}
			break;
		case '4WaitingToFadeOut':
			if (type === 'onDelayComplete' || (newState.direction === 'prev' && type === 'onMouseOff')) {
				newState.direction = 'next';
				newState.stage = '5FadingOutToHide';
			}
			else if (prevState.direction === 'prev') {
				newState.stage = '3Showing';
			}
			break;
		case '5FadingOutToHide':
			if (type === 'onTransitionEnd') {
				newState.direction = 'stopped';
				newState.stage = '0Hidden';
			}
			else if (type === 'onMouseOver') {
				newState.direction = 'prev';
				newState.stage = '4WaitingToFadeOut';
			}
			break;
		default:
			throw new Error();
	}

	// do quick and dirty diff check and if nothing has changed then return previous state otherwise return new changed state
	// return newState.direction === prevState.direction || newState.stage === prevState.stage ? prevState : newState;

	return newState;
}

const reducerInitialState: ReducerState = {
	stage: '0Hidden',
	direction: 'stopped',
} as ReducerState;

/**
 * A combination of timeouts, mouse events, and transitionend listeners that determine and return the current tooltip state.
 * @param transitionElement
 * @param isHoverTarget
 * @param isHoverPopper
 * @param hideDelay
 * @param showDelay
 * @param transitionEndPropName The specific css transition prop that indicates the end of fade out
 * used to eliminate events firing for each transition property being used
 */
const useTooltipStage = (
	isTransitionEnd: boolean,
	isHoverTarget: boolean,
	isHoverPopper: boolean,
	hideDelay: number | undefined,
	showDelay: number | undefined,
) => {
	// manage the complex, bi-directional stages of the tooltip state
	const [ state, dispatchState ] = React.useReducer(reducer, reducerInitialState);
	// use a single timer that when swapped out automatically cancels the active timeout if any exist
	const { swapTimeout, clearTimeoutRef } = useSwappableTimeout();

	const callback1 = React.useRef(() => {
		dispatchState({ type: 'onDelayComplete' });
	});

	const callback4 = React.useRef((isHoverParam: boolean) => {
		// because of potential race conditions, double check that this isn't true
		if (isHoverParam) {
			return;
		}

		dispatchState({ type: 'onDelayComplete' });
	});

	// process and handle timers for show and hide delays
	useEffect(() => {
		switch(state.stage) {
			case '1WaitingToFadeIn':
				if (state.direction === 'next') {
					swapTimeout(
						() => callback1.current(),
						showDelay ?? 1000,
					);
				}
				else {
					// stop timeout since we're interupting and don't want it to finish
					clearTimeoutRef();
				}
				break;
			case '4WaitingToFadeOut':
				if (state.direction === 'next') {
					swapTimeout(
						() => callback4.current(isHoverTarget || isHoverPopper),
						hideDelay ?? 500,
					);
				}
				else {
					// stop timeout since we're interupting and don't want it to finish
					clearTimeoutRef();
				}
				break;
		}
	}, [ state.stage, isHoverTarget, isHoverPopper ]);

	// process and handle transition ends
	useEffect(() => {
		isTransitionEnd && dispatchState({ type: 'onTransitionEnd' });
	}, [ isTransitionEnd ]);

	// process and handle mouse events
	useEffect(() => {
		dispatchState({ type: isHoverTarget || isHoverPopper ? 'onMouseOver' : 'onMouseOff' });
	}, [ isHoverTarget, isHoverPopper ]);

	// make it easier on anything that consumes this by turning each stage into a bool
	return {
		isStage0Hidden: state.stage === '0Hidden',
		isStage1WaitingToFadeIn: state.stage === '1WaitingToFadeIn',
		isStage2FadingInToShow: state.stage === '2FadingInToShow',
		isStage3Showing: state.stage === '3Showing',
		isStage4WaitingToFadeOut: state.stage === '4WaitingToFadeOut',
		isStage5FadingOutToHide: state.stage === '5FadingOutToHide',
		isVisible: state.stage !== '0Hidden' && state.stage !== '1WaitingToFadeIn',
	}
}

const useTooltip = ({
	hideDelay,
	placement,
	popperArrowModifier,
	popperOffsetModifier,
	showDelay,
	transitionEndPropName,
	useClickInsteadOfHover,
}: {
	hideDelay?: number,
	placement?: TooltipProps['position'],
	popperArrowModifier?: TooltipProps['popperArrowModifier'],
	popperOffsetModifier?: TooltipProps['popperOffsetModifier'],
	showDelay?: number,
	transitionEndPropName: string,
	useClickInsteadOfHover: boolean,
}) => {
	const [ triggerElement, setReferenceElement ] = useState<HTMLElement | null>(null);
	const [ popperElement, setPopperElement ] = useState<HTMLElement | null>(null);
	const [ transitionElement, setTransitionElement ] = useState<HTMLElement | null>(null);
	const isHoverTarget = useDetectClickOrHoverWithinTargets({targetEl: triggerElement, alwaysBlurOnClick: true, useClickInsteadOfHover, ignoreClickOn: popperElement})
	const isHoverPopper= useDetectClickOrHoverWithinTargets({targetEl: popperElement, alwaysBlurOnClick: false, useClickInsteadOfHover}) // pass nulls to bypass otherwise this will conflict with other click detects (above)

	const isTransitionEnd = useDetectTransitionEnd(transitionElement, transitionEndPropName);
	const stages = useTooltipStage(isTransitionEnd, isHoverTarget, isHoverPopper, hideDelay, showDelay);
	const [ arrowElement, setArrowElement ] = useState<HTMLElement | null>(null); // the ref for the arrow must be a callback ref
	const { styles, attributes } = usePopper(triggerElement, popperElement, {
		placement: placement,
		modifiers: [
			{
				name: 'arrow',
				options: {
					element: popperArrowModifier?.element ?? arrowElement,
					padding: popperArrowModifier?.padding ?? 0,
				}
			},
			{
				name: 'offset',
				options: {
					offset: popperOffsetModifier?.offset || [0, 10],
				}
			}
		]
	});

	return {
		arrowRef: setArrowElement,
		attributes,
		popperRef: setPopperElement,
		stages,
		styles,
		targetRef: setReferenceElement,
		transitionRef: setTransitionElement,
	};
}

export const Tooltip = (props: TooltipProps) => {
	const {
		children,
		className,
		id,
		forceShow,
		popperContainerClassName,
		popperVisualContainerClassName,
		style,
		useClickInsteadOfHover,
		hideTooltip,
		onHide,
		onShow,
		hideArrow,
	} = props;

	const {
		arrowRef,
		attributes,
		popperRef,
		styles: popperStyles,
		stages,
		targetRef,
		transitionRef,
	} = useTooltip({
		hideDelay: props.hideDelay,
		placement: props.position,
		popperArrowModifier: props.popperArrowModifier,
		popperOffsetModifier: props.popperOffsetModifier,
		showDelay: props.showDelay,
		transitionEndPropName: 'transform',
		useClickInsteadOfHover: !!useClickInsteadOfHover,
	});

	const isShowing = (forceShow || !stages.isStage0Hidden) && !hideTooltip;
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
		} else {
			if (isShowing) {
				onShow?.();
			} else {
				onHide?.();
			}
		}
	}, [isShowing])

	return (
		<>
			<div
				className={classnames(
					styles.Tooltip_Target_Container,
					'Tooltip_Target_Container',
					className,
					{
						[styles.Popper__Showing]: isShowing,
						'Popper__Showing': isShowing, // this also needs to be globally accessible so other component styles can reference it
					},
				)}
				id={id}
				ref={targetRef}
				style={style}
			>
				{children}
			</div>
			{/*
			  * render if forced or not in the hidden tooltip stage
			  * note: this needs to render on hover when waiting for initial show delay even those it's not visible
			*/}
			{isShowing && (
				<Portal>
					{/* this is the dedicated popper container that applies the 3rd party library position styles without conflicting with our custom transition styles */}
					<div
						className={classnames(
							styles.Tooltip_Popper_PositionContainer,
							'Tooltip_Popper_PositionContainer',
							popperContainerClassName,
							{
								[styles.Popper__Showing]: isShowing,
								'Popper__Showing': isShowing, // this also needs to be globally accessible so other component styles can reference it
							},
						)}
						ref={popperRef}
						style={popperStyles.popper}
					>
						<div
							className={classnames(
								styles.Tooltip_Popper_VisualContainer,
								'Tooltip_Popper_VisualContainer',
								popperVisualContainerClassName,
								{
									[styles.Tooltip_Popper_VisualContainer__IsShowing]: stages.isVisible || forceShow,
									[styles.Tooltip_Popper_VisualContainer__IsTransitionLeaving]: stages.isStage5FadingOutToHide,
								},
							)}
							ref={transitionRef}
							{...attributes.popper}
						>
							<div
								className={classnames(
									styles.Tooltip_Popper_Inner,
									'Tooltip_Popper_Inner_Container',
								)}
							>
								<div
									className={classnames(
										styles.Tooltip_Popper_Content,
										'Tooltip_Popper_Content',
									)}
								>
									{props.content}
								</div>
							</div>
							{!hideArrow && (
								<div
									className={classnames(
										styles.Tooltip_Popper_Arrow_Container,
										'Tooltip_Popper_Arrow_Container',
									)}
									ref={arrowRef}
									style={popperStyles.arrow}
									{...attributes.popper}
								>
									<div
										className={classnames(
											styles.Tooltip_Popper_Arrow,
											'Tooltip_Popper_Arrow',
										)}
										{...attributes.popper}
									/>
								</div>
							)}
						</div>
					</div>
				</Portal>
			)}
		</>
	);
}

Tooltip.defaultProps = {
	hideDelay: 500,
	forceShow: false,
	offsetPopper: [0, 10],
	position: 'top',
	showDelay: 1000,
	useClickInsteadOfHover: false,
} as Partial<TooltipProps>;
