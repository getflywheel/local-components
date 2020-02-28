import * as React from "react";
import IReactComponentProps from "../../../common/structures/IReactComponentProps";
import classnames from "classnames";
import { TableList } from "../TableList/TableList";
import isEqual = require("lodash.isequal");
import * as styles from "../TableList/TableList.sass";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import { FunctionGeneric } from "../../../common/structures/Generics";

interface IProps extends IReactComponentProps {
	data?: any[];
	header?: React.ReactNode;
	onSubmit?: FunctionGeneric;
	repeatingContent: FunctionGeneric;
	submitLabel?: string;
}

interface IState {
	addingItem: boolean;
	initialData: any;
	unsavedData: any;
}

export default class TableListMultiDisplay extends React.Component<
	IProps,
	IState
> {
	static defaultProps: Partial<IProps> = {
		submitLabel: "Submit"
	};

	constructor(props: IProps) {
		super(props);

		this.state = {
			addingItem: false,
			initialData: this.props.data ? [...this.props.data] : [],
			unsavedData: this.props.data ? [...this.props.data] : []
		};

		this.addItem = this.addItem.bind(this);
	}

	componentWillReceiveProps(nextProps: IProps) {
		if (isEqual(nextProps.data, this.state.initialData)) {
			return;
		}

		if (nextProps.data) {
			this.setState({
				initialData: [...nextProps.data],
				unsavedData: [...nextProps.data]
			});
		}
	}

	async addItem() {
		let newItem = {};

		const unsavedData = this.state.unsavedData.concat([newItem]);

		this.setState({
			addingItem: false,
			unsavedData
		});
	}

	async removeItem(index: number) {
		const unsavedData = this.state.unsavedData.slice();

		unsavedData.splice(index, 1);

		this.setState({
			unsavedData
		});
	}

	updateItemFactory(index: number) {
		return (item: any) => {
			const unsavedData = this.state.unsavedData.slice();

			unsavedData[index] = item;

			this.setState({
				unsavedData
			});
		};
	}

	renderHeader() {
		if (!this.props.header) {
			return;
		}

		return (
			<li
				className={classnames(
					styles.TableListRow,
					styles.TableListRowHeader
				)}
			>
				{this.props.header}
			</li>
		);
	}

	renderSubmit() {
		if (!this.props.onSubmit) {
			return;
		}

		return (
			<div className={styles.TableListRepeaterSubmit}>
				<PrimaryButton
					onClick={() =>
						this.props.onSubmit &&
						this.props.onSubmit(this.state.unsavedData)
					}
				>
					{this.props.submitLabel}
				</PrimaryButton>
			</div>
		);
	}

	render() {
		return (
			<div>
				<TableList form={true} className={styles.TableListMultiDisplay}>
					{this.renderHeader()}
					{this.state.unsavedData.map((item: any, index: number) => (
						<li className={styles.TableListRow} key={index}>
							{this.props.repeatingContent.call(
								this,
								Object.assign({}, item),
								index,
								this.updateItemFactory(index)
							)}
						</li>
					))}
				</TableList>

				<div className={styles.TableListMultiDisplayBottomFloater}>
					{this.renderSubmit()}
				</div>
			</div>
		);
	}
}
