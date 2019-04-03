

Playground:

```js
class Example extends React.Component {
	
	constructor (props, context) { 
		super(props, context);
		
		const createRowsCount = 100;
		this._idGenCountArrays = 0;
		this._idGenCountObjects = 0;
	
		this.state = {
			_dataArrays: Array.from(Array(createRowsCount).keys()).map(() => ([++this._idGenCountArrays, 'array row ' + this._idGenCountArrays, this._idGenCountArrays % 2 === 0])),
			_dataObjects: Array.from(Array(createRowsCount).keys()).map(() => ({index: ++this._idGenCountObjects, name: 'object row ' + this._idGenCountObjects, selected: this._idGenCountObjects % 2 === 1})),
			data: null,
			headers: null,
			formDataTypeValue: 'objects',
			formRowHeightSize: 'l',
			formRowHeaderHeightSize: 'auto',
		};
		
		setTimeout (() => {		
			this._onUpdateConfig();
		});
		
		this._onChangeDataTypeValue = this._onChangeDataTypeValue.bind(this);
		this._onChangeRowHeightSize = this._onChangeRowHeightSize.bind(this);
		this._onChangeRowHeaderHeightSize = this._onChangeRowHeaderHeightSize.bind(this);
		this._cellRenderer = this._cellRenderer.bind(this);
	};
	
	_onUpdateConfig () {
		this.setState((state) => ({
			data: state.formDataTypeValue === 'objects'
				?
				this.state._dataObjects.concat([{selected: false, index: 999999999}]) // add incomplete object with keys in a different order
				:
				this.state._dataArrays.concat([[999999999, false]]) // add incomplete object
			,
			headers: state.formDataTypeValue === 'objects'
				?
				[{key: 'index', value: 'Index', flex: '0 0 100px'}, {key: 'name', value: 'Object Name', flex: '1 1 400px'}, {key: 'selected', value: 'Is Selected', flex: '0 0 100px'}]
				:
				['Index', 'Name', 'Selected']
			,
		}));
	}
	
	_onChangeDataTypeValue (value) {
		this.setState(
			() => ({
				formDataTypeValue: value,
			}),
			this._onUpdateConfig,
		);
	};
    
    _onChangeRowHeightSize (event) {
    	const value = event.currentTarget.value;
    	this.setState(() => ({
			formRowHeightSize: value,
		}));
    }
    
    _onChangeRowHeaderHeightSize (event) {
    	const value = event.currentTarget.value;
    	this.setState(() => ({
			formRowHeaderHeightSize: value,
		}));
    }
    
    _cellRenderer (dataArgs) {
    	if ((dataArgs.colKey !== 'selected' && dataArgs.colKey !== 2) || dataArgs.isHeader) {
    		return null;
    	}
    	
    	return (
    		<Checkbox checked={dataArgs.cellData} onChange={dataArgs.changeFn} />
    	);
    }

    render () {
        return (
        	<div className={this.props.className}>
				<div className="styleguidist-example-form">
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
					data={this.state.data}
					headers={this.state.headers}
					rowHeightSize={this.state.formRowHeightSize}
					rowHeaderHeightSize={this.state.formRowHeaderHeightSize}
				/>
			</div>
        );
    };
    
}

<>
	<style dangerouslySetInnerHTML={{__html: `
		.styleguidist-example { 
			display: flex;
			flex-direction: column;
			max-height: 500px;
		}
		.styleguidist-example-form { 
			display: flex;
			flex-direction: column;
		}
		.styleguidist-example-form > * { 
			padding: 2px 0;
		}
	`}} />
	<Example className="styleguidist-example" />
</>
```


