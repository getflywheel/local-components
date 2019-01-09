import * as React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import { TableList } from '../TableList';
import CloseSmallSVG from '../../svg/close--small';
import AddSVG from '../../svg/add';
import Button from '../Button';
import isEqual = require('lodash.isequal');
import * as styles from '../TableList/TableList.sass';
import Handler from '../../common/structures/Handler';

interface IProps extends IReactComponentProps {

	data?: any[];
	header?: React.ReactNode;
	itemTemplate: any;
	labelSingular?: string;
	onBeforeRemove?: Handler;
	onChange?: Handler;
	onSubmit?: Handler;
	repeatingContent: Handler;
	submitDisabled?: boolean;
	submitLabel?: string;

}

interface IState {

	addingItem: boolean;
	initialData: any;
	unsavedData: any;

}

export default class TableListRepeater extends React.Component<IProps, IState> {

	static defaultProps: Partial<IProps> = {
		labelSingular: 'Item',
		submitDisabled: false,
		submitLabel: 'Submit',
	};

	constructor (props: IProps) {
		super(props);

		this.state = {
			addingItem: false,
			initialData: this.props.data ? [...this.props.data] : [],
			unsavedData: this.props.data ? [...this.props.data] : [],
		};

		this.addItem = this.addItem.bind(this);
	}

	componentWillReceiveProps (nextProps: IProps) {
		if (isEqual(nextProps.data, this.state.initialData)) {
			return;
		}

		if (nextProps.data) {
			this.setState({
				initialData: [...nextProps.data],
				unsavedData: [...nextProps.data],
			});
		}
	}

	onChange (unsavedData: any) {
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(unsavedData);
		}
	}

	async addItem () {
		let newItem;

		if (typeof this.props.itemTemplate === 'function') {
			this.setState({
				addingItem: true,
			});

			try {
				newItem = await this.props.itemTemplate();
			}
			catch (e) {
				this.setState({
					addingItem: false,
				});

				return;
			}
		}
		else {
			newItem = this.props.itemTemplate;
		}

		const unsavedData = this.state.unsavedData.concat([newItem]);

		this.onChange(unsavedData);

		this.setState({
			addingItem: false,
			unsavedData,
		});
	}

	async removeItem (index: number) {
		const unsavedData = this.state.unsavedData.slice();

		if (this.props.onBeforeRemove) {
			const shouldDelete = await this.props.onBeforeRemove(unsavedData[index], index);

			if (!shouldDelete) {
				return;
			}
		}

		unsavedData.splice(index, 1);

		this.onChange(unsavedData);

		this.setState({
			unsavedData,
		});
	}

	updateItemFactory (index: number) {
		return (item: any) => {
			const unsavedData = this.state.unsavedData.slice();

			unsavedData[index] = item;

			this.onChange(unsavedData);

			this.setState({
				unsavedData,
			});
		};
	}

	renderHeader () {
		if (!this.props.header) {
			return;
		}

		return (
			<li
				className={classnames(
					styles.TableListRow,
					styles.TableListRowHeader,
				)}
			>
				{this.props.header}
				<strong
					className={classnames(
						styles.TableListRowHeader__SeparatorLeft,
						styles.TableListRowHeader__RemoveHeading,
					)}
				/>
			</li>
		);
	}

	renderSubmit () {

		if (!this.props.onSubmit) {
			return;
		}

		return (
			<div className={styles.TableListRepeaterSubmit}>
				<button
					className="__Pill __Green"
					onClick={() => this.props.onSubmit && this.props.onSubmit(this.state.unsavedData)}
					disabled={isEqual(this.props.data, this.state.unsavedData) || this.props.submitDisabled}
				>
					{this.props.submitLabel}
				</button>
			</div>
		);

	}

	render () {
		return (
			<div>
				<TableList
					form={true}
					className={styles.TableListRepeater}
				>
					{this.renderHeader()}
					{this.state.unsavedData.map((item: any, index: number) => (
						<li className={styles.TableListRow} key={index}>
							{this.props.repeatingContent.call(this, Object.assign({}, item), index, this.updateItemFactory(index))}
							<div
								className={classnames(
									styles.TableList__Remove,
									styles.TableList__SeparatorLeft,
								)}
							>
								<span onClick={() => this.removeItem(index)}>
									<CloseSmallSVG />
								</span>
							</div>
						</li>
					))}
				</TableList>

				<div className={styles.TableListRepeaterAdd}>
					<div className="InnerPaneSidebarHeaderButtons_Add">
						<Button
							className="__Pill __Green __Medium"
							onClick={this.addItem}
							disabled={this.state.addingItem}
						>
							<AddSVG />
							{!this.state.addingItem ? 'Add ' : 'Adding'} {this.props.labelSingular}
						</Button>
					</div>
				</div>

				{this.renderSubmit()}
			</div>
		);
	}

}
