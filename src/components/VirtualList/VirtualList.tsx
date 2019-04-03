import * as React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import ResizeObserver, { DOMRect } from 'react-resize-observer';
import { VirtualListHelper, IVirtualListHelperCalculations } from './VirtualListHelper';
import classnames from 'classnames';
import * as styles from './VirtualList.scss';
import { ReactElement } from 'react';

export interface IVirtualListProps extends IReactComponentProps {
	/* container render function used to generate the faked height of all items as if they were drawn in their entirety
	 * note: children must be renderered manaually
	 * note: customRendererStyles should only be set if the ReactNode returned by the renderer is a React.Fragment
	 */
	containerRenderer? (children: React.ReactNode, customRendererStyles: {minHeight: number}): ReactElement<any> | null;
	/** list data passed to the list item renderer */
	data: any[];
	/** whether to disable the resize listener used to adjust calculated height (if true, it's highly recommended to set 'wrapperSizePx') */
	disableResizeObserver?: boolean;
	/** whether to disable virtualized renderersFactory and draw all list items or not (if true) */
	disableVirtualization?: boolean;
	/** the height of an individual list item (must be predictble, exact, and consistent) */
	itemHeight: number;
	/**
	 * item render function
	 * note: the element returned by this factory function *must* be able to have its 'style' attribute set
	 */
	itemRenderer (listItemData: any, listItemIndex: number, customRendererStyles: {transform: string}, extraData: any): React.ReactNode;
	/** this is any extra data that needs to be passed to 'itemRenderer' */
	itemRendererExtraData?: any;
	/** callback function for when list items are calculated but not necessarily rendered */
	onCalculate? (calculations: IVirtualListHelperCalculations): void;
	/** callback function for when list items are rendered */
	onRender? (calculations: IVirtualListHelperCalculations): void;
	/** the height (in pixels) for both before and after overscan areas */
	overscan?: number | 'auto';
	/** Whether to show alternating row stripes. */
	striped?: boolean;
	/** manually set wrapper size in pixels (note: this will be overridden if disableResizeObserver is 'false', but should be used if 'disableResizeObserver' is set to 'true') */
	wrapperSizePx?: number;
	/** wrapper render function used to generate the scrolling element */
	wrapperRenderer? (children: React.ReactNode): ReactElement<any>;
}

export interface IVirtualListState {
	containerSizePx: number;
	itemsRenderedList: ReturnType<IVirtualListProps['itemRenderer']>[];
}

export class VirtualList extends React.Component<IVirtualListProps, IVirtualListState> {

	static defaultProps: Partial<IVirtualListProps> = {
		disableResizeObserver: false,
		disableVirtualization: false,
		overscan: 'auto',
	};

	protected _calcs!: IVirtualListHelperCalculations;
	protected _helper = new VirtualListHelper();
	protected _scrollTop: number = 0;
	protected _wrapperRef = React.createRef<HTMLDivElement>();
	protected _wrapperSizePx: number;

	constructor (props: IVirtualListProps) {
		super(props);

		this._wrapperSizePx = props.wrapperSizePx || 2000;

		this.state = {
			containerSizePx: 0,
			itemsRenderedList: [],
		};
	}

	componentDidMount (): void {
		if (this._wrapperRef.current) {
			this._wrapperRef.current.addEventListener('scroll', this._onScroll, {
				passive: true,
			});
		}
		else {
			new Error('Error - VirtualList: the wrapper ref is undefined.');
		}

		this._onDidMountOrUpdate();
	}

	componentWillUnmount () {
		if (this._wrapperRef.current) {
			this._wrapperRef.current.removeEventListener('scroll', this._onScroll);
		}
	}

	componentDidUpdate (prevProps: IVirtualListProps, prevState: IVirtualListState) {
		this._onDidMountOrUpdate();
	}

	componentWillReceiveProps (nextProps: IVirtualListProps) {
		if (nextProps.data !== this.props.data
			|| nextProps.itemHeight !== this.props.itemHeight
			|| nextProps.itemRenderer !== this.props.itemRenderer
			|| nextProps.overscan !== this.props.overscan
		) {
			this._calculateItemsAndRenderIfChanged(nextProps, true);
		}
	}

	protected _calculateItemsAndRenderIfChanged (props: IVirtualListProps, forceReRender: boolean) {
		const prevCalcs = this._calcs;
		const calculations = this._helper.calculateItems(props.data ? props.data.length : 0, props.itemHeight, this._wrapperSizePx, this._scrollTop, props.overscan, props.disableVirtualization);

		// if virtual height has changed and is dangerously high
		if (calculations.containerSizePx > 10000000 && this._calcs && calculations.containerSizePx !== this._calcs.containerSizePx) {
			console.warn(`The virtual height of ${calculations.containerSizePx.toLocaleString()}px is dangerously high and may result in scrolling and/or rendering issues.`)
		}

		this._calcs = calculations;

		if (!props.data || !props.data.length) {
			this.setState(() => ({
				containerSizePx: 0,
				itemsRenderedList: [], // clear out all list items
			}));
		}
		else if (forceReRender
			|| !prevCalcs
			|| calculations.virtualStartIndexInt !== prevCalcs.virtualStartIndexInt
			|| calculations.virtualEndIndexInt !== prevCalcs.virtualEndIndexInt
			|| calculations.containerSizePx !== prevCalcs.containerSizePx
			|| calculations.viewportItemsCount !== prevCalcs.viewportItemsCount
		) {
			const data = this._helper.generateAndGetRenderedItems(props.data, props.itemRenderer, calculations, props.itemRendererExtraData, !!props.striped);

			this.setState(() => ({
				containerSizePx: calculations.containerSizePx,
				itemsRenderedList: data,
			}));
		}

		if (this.props.onCalculate) {
			this.props.onCalculate(this._calcs);
		}
	}

	protected _onDidMountOrUpdate () {
		if (this.props.onRender) {
			this.props.onRender(this._calcs);
		}
	}

	protected _onScroll = (event: UIEvent) => {
		if (this._wrapperRef.current && event.target === this._wrapperRef.current) {
			this._scrollTop = this._wrapperRef.current.scrollTop;
			this._calculateItemsAndRenderIfChanged(this.props, false);
		}
	};

	protected _onResize = (rect: DOMRect) => {
		if (rect.height !== this._wrapperSizePx) {
			// get clientHeight from ref if it's available (may not immediately be) otherwise get resize height (which is effectively its offsetHeight)
			this._wrapperSizePx = this._wrapperRef.current ? this._wrapperRef.current.clientHeight : rect.height;

			this._calculateItemsAndRenderIfChanged(this.props, false);
		}
	};

	protected _renderContainer () {
		const containerStyle = {minHeight: this.state.containerSizePx};
		const containerRenderer: ReactElement<any> | undefined | null = this.props.containerRenderer && this.props.containerRenderer(this.state.itemsRenderedList, containerStyle);
		const containerClassName: string = classnames(
			styles.VirtualList,
			{
				[styles.VirtualList__Striped]: this.props.striped,
			}
		);

		return (
			<>
				{!this.props.disableResizeObserver && <ResizeObserver onResize={this._onResize} />}
				{containerRenderer
					?
					React.cloneElement(
						containerRenderer as React.ReactElement<any>,
						{
							...containerRenderer.props,
							className: classnames(containerRenderer.props.className || '', containerClassName),
							style: {...containerStyle, ...(containerRenderer.props.style || {})},
						},
					)
					:
					(
						<div
							className={containerClassName}
							style={containerStyle}
						>
							{this.state.itemsRenderedList}
						</div>
					)
				}
			</>
		);
	}

	protected _renderWrapper () {
		const wrapperChildren: React.ReactNode = this._renderContainer();
		const wrapperRenderer: ReactElement<any> | undefined = this.props.wrapperRenderer && this.props.wrapperRenderer(wrapperChildren);
		const wrapperClassName: string = classnames(
			styles.VirtualList_Wrapper,
			this.props.className,
		);

		return (wrapperRenderer
				?
				React.cloneElement(
					wrapperRenderer as React.ReactElement<any>,
					{
						...wrapperRenderer.props,
						ref: this._wrapperRef,
						className: classnames(wrapperRenderer.props.className || '', wrapperClassName),
					},
				)
				:
				(
					<div
						ref={this._wrapperRef}
						className={wrapperClassName}
					>
						{wrapperChildren}
					</div>
				)
		);
	}

	render () {
		return (
			this._renderWrapper()
		);
	}

}
