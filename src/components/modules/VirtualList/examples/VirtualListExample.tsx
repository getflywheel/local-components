import * as React from 'react';
import * as styles from './VirtualListExample.scss';
import { VirtualList } from '../VirtualList';
import Divider from '../../../layout/Divider/index';
import Checkbox from '../../../inputs/Checkbox/index';
import IReactComponentProps from '../../../../common/structures/IReactComponentProps';

import { IVirtualListHelperCalculations } from '../helpers/VirtualListHelper';
import { Button } from '../../../buttons/Button/Button';

interface IDataItem {
	id: number;
	value: string;
}

interface IVirtualListExampleState {
	calculations: IVirtualListHelperCalculations | null;
	data: IDataItem[];
	formAddNewItemsCount: number | string;
	formIsCustomContainerRenderer: boolean;
	formRemoveItemsCount: number | string;
}

export class VirtualListExample extends React.Component<IReactComponentProps, IVirtualListExampleState> {

	protected _idCount: number;

	constructor (props: IReactComponentProps) {
		super(props);

		const createItemsCount = 1000;
		this._idCount = 0;

		this.state = {
			calculations: null,
			data: Array.from(Array(createItemsCount).keys()).map(() => ({id: ++this._idCount, value: 'virtual item ' + this._idCount})),
			formAddNewItemsCount: 1,
			formIsCustomContainerRenderer: false,
			formRemoveItemsCount: 1,
		};
	};

	protected _containerRenderer = (children: React.ReactNode) => {
		if (!this.state.formIsCustomContainerRenderer) {
			return null;
		}

		return (
			<div className={styles.VirtualListExample_CustomContainer}>
				{children}
			</div>
		);
	};

	protected _wrapperRenderer = (children: React.ReactNode) => {
		return (
			<div className={styles.VirtualListExample_CustomWrapper}>
				{children}
			</div>
		);
	};

	protected _getVirtualPercentage = () => {
		if (!this.state.calculations) {
			return '';
		}

		return Math.ceil(this.state.calculations && this.state.calculations.virtualItemsCount / this.state.data.length * 10000) / 100;
	};

	protected _onCalculate = (calculations: IVirtualListHelperCalculations) => {
		if (calculations !== this.state.calculations) {
			this.setState({
				calculations,
			});
		}
	};

	protected _listItemRenderer = (listItemData: IDataItem) => {
		return (
			<div
				className={styles.VirtualListExample_ListItem}
				key={listItemData.id + listItemData.value}
			>
				{listItemData.value}
			</div>
		);
	};

	protected _onChangeIsCustomContainerRenderer = () => {
		this.setState((state) => ({
			formIsCustomContainerRenderer: !state.formIsCustomContainerRenderer,
		}));
	};

	protected _onChangeformAddNewItemsCount = (event: any) => {
		const value = event.target.value;
		this.setState(() => ({
			formAddNewItemsCount: value ? Number(value) : '',
		}));
	};

	protected _onChangeformRemoveItemsCount = (event: any) => {
		const value = event.target.value;
		this.setState(() => ({
			formRemoveItemsCount: value ? Number(value) : '',
		}));
	};

	protected _onClickRemove = () => {
		const data = [...this.state.data];
		data.splice(0, Number(this.state.formRemoveItemsCount) || 0);

		this.setState(
			() => ({
				data,
			}),
		);
	};

	protected _onClickAdd = () => {
		this.setState(
			() => ({
				// insert new list items at first index
				data: [...this.state.data].concat(Array.from(Array(this.state.formAddNewItemsCount).keys()).map(() => ({id: ++this._idCount, value: 'new virtual item ' + this._idCount}))),
			}),
		);
	};

	render () {
		return (
			<div className={styles.VirtualListExample}>
				<div className={styles.VirtualListExample_Form}>
					<Checkbox checked={this.state.formIsCustomContainerRenderer} label="Use custom container renderer" onChange={this._onChangeIsCustomContainerRenderer} />
					<div style={{display: 'flex', alignItems: 'center'}}>
						<Button onClick={this._onClickRemove}>Remove</Button>
						<input type="number" value={this.state.formRemoveItemsCount} min="1" onChange={this._onChangeformRemoveItemsCount} />
						item{this.state.formRemoveItemsCount !== 1 && 's'} from beginning
					</div>
					<div style={{display: 'flex', alignItems: 'center'}}>
						<Button onClick={this._onClickAdd}>Add</Button>
						<input type="number" value={this.state.formAddNewItemsCount} min="1" onChange={this._onChangeformAddNewItemsCount} />
						item{this.state.formAddNewItemsCount !== 1 && 's'} at end
					</div>
				</div>
				<Divider marginSize="m" />
				<div className={styles.VirtualListExample_CustomMonospace}>
					Virtual items: {this.state.calculations && this.state.calculations.virtualItemsCount.toLocaleString()}
					&nbsp;of {this.state.data.length.toLocaleString()}
					&nbsp;({this._getVirtualPercentage()}%)
				</div>
				<div className={styles.VirtualListExample_CustomMonospace}>
					Visible items: {this.state.calculations && this.state.calculations.viewportItemsCount.toLocaleString()}
					&nbsp;(indices {this.state.calculations && (this.state.calculations.viewportStartIndexInt + 1).toLocaleString()}
					&nbsp;through {this.state.calculations && this.state.calculations.viewportEndIndexInt.toLocaleString()})
				</div>
				<Divider marginSize="m" />
				<VirtualList
					containerRenderer={this._containerRenderer}
					data={this.state.data}
					disableResizeObserver={false}
					disableVirtualization={false}
					itemHeight={20}
					itemRenderer={this._listItemRenderer}
					onCalculate={this._onCalculate}
					striped={true}
					wrapperRenderer={this._wrapperRenderer}
				/>
			</div>
		);
	};

}
