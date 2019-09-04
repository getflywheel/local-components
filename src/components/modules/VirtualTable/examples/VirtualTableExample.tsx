import * as React from 'react';
import * as styles from './VirtualTableExample.scss';
import IReactComponentProps from '../../../../common/structures/IReactComponentProps';
import Checkbox from '../../../inputs/Checkbox/index';
import FlySelect from '../../../inputs/FlySelect/index';
import Divider from '../../../layout/Divider/index';
import { IVirtualTableCellRendererDataArgs, VirtualTable } from '../VirtualTable';

interface IDataObject {
	index: number;
	name: string;
	selected: boolean;
}

type FormDataTypeValueType = 'objects' | 'arrays';
type FormRowHeightSizeType = 's' | 'm' | 'l';
type FormRowHeaderHeightSizeType = 'auto' | 's' | 'm' | 'l';

interface IVirtualTableExampleState {
	data: IVirtualTableExampleState['dataArrays'] | IVirtualTableExampleState['dataObjects'] | null;
	dataArrays: any[][];
	dataObjects: IDataObject[];
	formDataTypeValue: FormDataTypeValueType;
	formRowHeightSize: FormRowHeightSizeType;
	formRowHeaderHeightSize: FormRowHeaderHeightSizeType;
	headers: any[] | null;
}

export class VirtualTableExample extends React.Component<IReactComponentProps, IVirtualTableExampleState> {

	protected _idGenCountArrays: number;
	protected _idGenCountObjects: number;

	constructor (props: IReactComponentProps) {
		super(props);

		const createRowsCount: number = 100;
		this._idGenCountArrays = 0;
		this._idGenCountObjects = 0;

		this.state = {
			data: null,
			dataArrays: Array.from(Array(createRowsCount).keys()).map(() => ([++this._idGenCountArrays, 'array row ' + this._idGenCountArrays, this._idGenCountArrays % 2 === 0])),
			dataObjects: Array.from(Array(createRowsCount).keys()).map(() => ({index: ++this._idGenCountObjects, name: 'object row ' + this._idGenCountObjects, selected: this._idGenCountObjects % 2 === 1})),
			formDataTypeValue: 'objects',
			formRowHeightSize: 'l',
			formRowHeaderHeightSize: 'auto',
			headers: null,
		};

		setTimeout (() => {
			this._onUpdateConfig();
		});
	};

	protected _onUpdateConfig () {
		this.setState((state) => ({
			data: state.formDataTypeValue === 'objects'
				?
				this.state.dataObjects.concat([{selected: false, index: 999999999} as any]) // add incomplete object with keys in a different order
				:
				this.state.dataArrays.concat([[999999999, false]]) // add incomplete object
			,
			headers: state.formDataTypeValue === 'objects'
				?
				[{key: 'index', value: 'Index', flex: '0 0 100px'}, {key: 'name', value: 'Object Name', flex: '1 1 400px'}, {key: 'selected', value: 'Is Selected', flex: '0 0 100px'}]
				:
				['Index', 'Name', 'Selected']
			,
		}));
	}

	protected _onChangeDataTypeValue = (value: FormDataTypeValueType) => {
		this.setState(
			() => ({
				formDataTypeValue: value,
			}),
			this._onUpdateConfig,
		);
	};

	protected _onChangeRowHeightSize = (event: any) => {
		const value = event.currentTarget.value;

		this.setState(() => ({
			formRowHeightSize: value,
		}));
	};

	protected _onChangeRowHeaderHeightSize = (event: any) => {
		const value = event.currentTarget.value;

		this.setState(() => ({
			formRowHeaderHeightSize: value,
		}));
	};

	protected _cellRenderer = (dataArgs: IVirtualTableCellRendererDataArgs) => {
		if ((dataArgs.colKey !== 'selected' && dataArgs.colKey !== 2) || dataArgs.isHeader) {
			return null;
		}

		return (
			<Checkbox checked={dataArgs.cellData} onChange={dataArgs.changeFn} />
		);
	};

	render () {
		return (
			<div className={styles.VirtualTableExample}>
				<div className={styles.VirtualTableExample_Form}>
					<div>Data source type: <FlySelect options={{'objects': 'array of objects', 'arrays': 'array of arrays'}} onChange={this._onChangeDataTypeValue} value="objects" /></div>
					<div>
						Row height:
						<input id="formRowHeightSize-s" value="s" checked={this.state.formRowHeightSize === 's'} name="formRowHeightSize" onChange={this._onChangeRowHeightSize} type="radio" />
						<label htmlFor="formRowHeightSize-s">Small</label>
						<input id="formRowHeightSize-m" value="m" checked={this.state.formRowHeightSize === 'm'} name="formRowHeightSize" onChange={this._onChangeRowHeightSize} type="radio" />
						<label htmlFor="formRowHeightSize-m">Medium</label>
						<input id="formRowHeightSize-l" value="l" checked={this.state.formRowHeightSize === 'l'} name="formRowHeightSize" onChange={this._onChangeRowHeightSize} type="radio" />
						<label htmlFor="formRowHeightSize-l">Large (default)</label>
					</div>
					<div>
						Row header height:
						<input id="formRowHeaderHeightSize-auto" value="auto" checked={this.state.formRowHeaderHeightSize === 'auto'} name="formRowHeaderHeightSize" onChange={this._onChangeRowHeaderHeightSize} type="radio" />
						<label htmlFor="formRowHeaderHeightSize-auto">Auto (default)</label>
						<input id="formRowHeaderHeightSize-s" value="s" checked={this.state.formRowHeaderHeightSize === 's'} name="formRowHeaderHeightSize" onChange={this._onChangeRowHeaderHeightSize} type="radio" />
						<label htmlFor="formRowHeaderHeightSize-s">Small</label>
						<input id="formRowHeaderHeightSize-m" value="m" checked={this.state.formRowHeaderHeightSize === 'm'} name="formRowHeaderHeightSize" onChange={this._onChangeRowHeaderHeightSize} type="radio" />
						<label htmlFor="formRowHeaderHeightSize-m">Medium</label>
						<input id="formRowHeaderHeightSize-l" value="l" checked={this.state.formRowHeaderHeightSize === 'l'} name="formRowHeaderHeightSize" onChange={this._onChangeRowHeaderHeightSize} type="radio" />
						<label htmlFor="formRowHeaderHeightSize-l">Large (default)</label>
					</div>
				</div>
				<Divider marginSize="m" />
				<Divider marginSize="m" />
				<VirtualTable
					cellRenderer={this._cellRenderer}
					data={this.state.data as any}
					headers={this.state.headers as any}
					rowHeightSize={this.state.formRowHeightSize}
					rowHeaderHeightSize={this.state.formRowHeaderHeightSize}
				/>
			</div>
		);
	};

}
