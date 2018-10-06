import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableList } from '../TableList';
import CloseSmallSVG from '../../svg/close--small.svg';
import AddSVG from '../../svg/add.svg';
import Button from '../Button';
import isEqual from 'lodash/isEqual';

export default class TableListRepeater extends Component {
	static propTypes = {
		header: PropTypes.node,
		repeatingContent: PropTypes.func.isRequired,
		labelSingular: PropTypes.string,
		itemTemplate: PropTypes.object.isRequired,
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
			data: this.props.data ? [...this.props.data] : [],
		};

		this.addItem = this.addItem.bind(this);
	}

	componentWillReceiveProps (nextProps) {
		if (!nextProps.data) {
			return;
		}

		this.setState({
			data: [...nextProps.data],
		});
	}

	onChange (data) {
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(data);
		}
	}

	addItem () {
		const data = this.state.data.concat([this.props.itemTemplate]);

		this.onChange(data);

		this.setState({
			data,
		});
	}

	async removeItem (index) {
		const data = this.state.data.slice();

		if (this.props.onBeforeRemove) {
			const shouldDelete = await this.props.onBeforeRemove(data[index], index);

			if (!shouldDelete) {
				return;
			}
		}

		data.splice(index, 1);

		this.onChange(data);

		this.setState({
			data,
		});
	}

	updateItemFactory (index) {
		return (item) => {
			const data = this.state.data.slice();

			data[index] = item;

			this.onChange(data);

			this.setState({
				data,
			});
		};
	}

	renderHeader () {
		if (!this.props.header) {
			return;
		}

		return (
			<li className="TableListRow TableListRowHeader">
				{this.props.header}
				<strong className="--SeparatorLeft RemoveHeading"/>
			</li>
		);
	}

	renderSubmit () {

		if (!this.props.onSubmit) {
			return;
		}

		return (
			<div className="TableListRepeaterSubmit">
				<button className="__Pill __Green" onClick={() => this.props.onSubmit(this.state.data)}
					disabled={isEqual(this.props.data, this.state.data)}>{this.props.submitLabel}</button>
			</div>
		);

	}

	render () {
		return (
			<div className="TableListRepeaterContainer">
				<TableList form={true} className="TableListRepeater">
					{this.renderHeader()}

					{this.state.data.map((item, index) => (
						<li className="TableListRow" key={index}>
							{this.props.repeatingContent.call(this, Object.assign({}, item), index, this.updateItemFactory(index))}

							<div className="Remove --SeparatorLeft">
								<span onClick={() => this.removeItem(index)}>
									<CloseSmallSVG />
								</span>
							</div>
						</li>
					))}
				</TableList>

				<div className="TableListRepeaterAdd">
					<div className="Add">
						<Button className="__Pill __Green __Medium" onClick={this.addItem}>
							<AddSVG />
							Add {this.props.labelSingular}
						</Button>
					</div>
				</div>

				{this.renderSubmit()}
			</div>
		);
	}
}
