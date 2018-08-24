import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TableList } from '../TableList';
import CloseSmallSVG from '../../svg/close--small.svg';
import AddSVG from '../../svg/add.svg';
import Button from '../Button';
import isEqual from 'lodash.isequal';
import styles from '../TableList/TableList.sass';

export default class TableListRepeater extends Component {
	static propTypes = {
		header: PropTypes.node,
		repeatingContent: PropTypes.func.isRequired,
		labelSingular: PropTypes.string,
		itemTemplate: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
		onSubmit: PropTypes.func,
		onChange: PropTypes.func,
		onBeforeRemove: PropTypes.func,
		submitLabel: PropTypes.string,
		submitDisabled: PropTypes.bool,
		data: PropTypes.array,
	};

	static defaultProps = {
		labelSingular: 'Item',
		submitLabel: 'Submit',
		submitDisabled: false,
	};

	constructor (props) {
		super(props);

		this.state = {
			unsavedData: this.props.data ? [...this.props.data] : [],
			initialData: this.props.data ? [...this.props.data] : [],
			addingItem: false,
		};

		this.addItem = this.addItem.bind(this);
	}

	componentWillReceiveProps (nextProps) {
		if (isEqual(nextProps.data, this.state.initialData)) {
			return;
		}

		this.setState({
			unsavedData: [...nextProps.data],
			initialData: [...nextProps.data],
		});
	}

	onChange (unsavedData) {
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
			} catch (e) {
				this.setState({
					addingItem: false,
				});

				return;
			}
		} else {
			newItem = this.props.itemTemplate;
		}

		const unsavedData = this.state.unsavedData.concat([newItem]);

		this.onChange(unsavedData);

		this.setState({
			unsavedData,
			addingItem: false,
		});
	}

	async removeItem (index) {
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

	updateItemFactory (index) {
		return (item) => {
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
				<button className="__Pill __Green" onClick={() => this.props.onSubmit(this.state.unsavedData)}
					disabled={isEqual(this.props.data, this.state.unsavedData) || this.props.submitDisabled}>{this.props.submitLabel}</button>
			</div>
		);

	}

	render () {
		return (
			<div>
				<TableList form={true} className={styles.TableListRepeater}>
					{this.renderHeader()}

					{this.state.unsavedData.map((item, index) => (
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
						<Button className="__Pill __Green __Medium" onClick={this.addItem} disabled={this.state.addingItem}>
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
