Render large lists by using virtualization to draw only the visible and overscan items.

Configurations:

```js
class Example extends React.Component {
	
    constructor (props, context) { 
		super(props, context);
		
		const createItemsCount = 1000;
		this._idCount = 0;
		
		this.state = {
			calculations: null,
			formAddNewItemsCount: 1,
			formIsCustomContainerRenderer: false,
			formRemoveItemsCount: 1,
			data: Array.from(Array(createItemsCount).keys()).map(() => ({id: ++this._idCount, value: 'virtual item ' + this._idCount})),
		};
		
		this._onCalculate = this._onCalculate.bind(this);
		this._listItemRenderer = this._listItemRenderer.bind(this);
		this._onChangeformAddNewItemsCount = this._onChangeformAddNewItemsCount.bind(this);
		this._onChangeformRemoveItemsCount = this._onChangeformRemoveItemsCount.bind(this);
		this._onClickAdd = this._onClickAdd.bind(this);
		this._onClickRemove = this._onClickRemove.bind(this);
		this._onChangeIsCustomContainerRenderer = this._onChangeIsCustomContainerRenderer.bind(this);
    };
    
    _onCalculate (calculations) {
    	if (calculations !== this.state.calculations) {
			this.setState({
				calculations,
			});
    	}
    }
    
    _listItemRenderer (listItemData, listItemIndex) {
    	return (
			<div 
				className={'listitem'}
				key={listItemData.id + listItemData.value}
			>
				{listItemData.value}
			</div>
    	);
    }
    
    _containerRenderer (children) {
    	return (
    		<div className="custom-container">
    			{children}
    		</div>
    	);
    }
    
    _wrapperRenderer (children) {
    	return (
    		<div className="custom-wrapper">
    			{children}
    		</div>
    	);
    }
    
    _onChangeIsCustomContainerRenderer () {
    	this.setState((state) => ({
			formIsCustomContainerRenderer: !state.formIsCustomContainerRenderer,
		}));
    }
    
    _onChangeformAddNewItemsCount (event) {
    	const value = event.target.value;
    	this.setState((state) => ({
			formAddNewItemsCount: value ? Number(value) : '',
		}));
    }
    
    _onChangeformRemoveItemsCount (event) {
		const value = event.target.value;
		this.setState((state) => ({
			formRemoveItemsCount: value ? Number(value) : '',
		}));
	}
	
	_onClickRemove () {
		const data = [...this.state.data];
		data.splice(0, this.state.formRemoveItemsCount);
		
		this.setState(
			() => ({
				data,
			}),
		);
	}
    
    _onClickAdd () {
		this.setState(
			() => ({
				// insert new list items at first index
				data: [...this.state.data].concat(Array.from(Array(this.state.formAddNewItemsCount).keys()).map(() => ({id: ++this._idCount, value: 'new virtual item ' + this._idCount}))),
			}),
		);
    }

    render () {
        return (
        	<div className={this.props.className}>
        		<div className="styleguidist-example-form">
					<Checkbox checked={this.state.formIsCustomContainerRenderer} label="Use custom container renderer" onChange={this._onChangeIsCustomContainerRenderer} />
					<div style={{display: 'flex', alignItems: 'center'}}>
						<Button onClick={this._onClickRemove} className=" __GrayOutline __Small">Remove</Button>
						<input type="number" value={this.state.formRemoveItemsCount} min="1" onChange={this._onChangeformRemoveItemsCount} />
						item{this.state.formRemoveItemsCount !== 1 && 's'} from beginning
					</div>
					<div style={{display: 'flex', alignItems: 'center'}}>
						<Button onClick={this._onClickAdd} className=" __GrayOutline __Small">Add</Button>
						<input type="number" value={this.state.formAddNewItemsCount} min="1" onChange={this._onChangeformAddNewItemsCount} />
						item{this.state.formAddNewItemsCount !== 1 && 's'} at end
					</div>
				</div>
				<Divider marginSize="m" />	
        		<div className="custom-monospace">Virtual items: {this.state.calculations && this.state.calculations.virtualItemsCount.toLocaleString()} of {this.state.data.length.toLocaleString()} ({Math.round(this.state.calculations && this.state.calculations.virtualItemsCount / this.state.data.length * 1000) / 10}%)</div>
        		<div className="custom-monospace">Visible items: {this.state.calculations && this.state.calculations.viewportItemsCount.toLocaleString()} (indices {this.state.calculations && (this.state.calculations.viewportStartIndexInt + 1).toLocaleString()} through {this.state.calculations && this.state.calculations.viewportEndIndexInt.toLocaleString()})</div>
        		<Divider marginSize="m" />
        		<VirtualList
        			containerRenderer={this.state.formIsCustomContainerRenderer && this._containerRenderer}
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

<>
	<style dangerouslySetInnerHTML={{__html: `
		.styleguidist-example { 
			display: flex;
			flex-direction: column;
			max-height: 405px;
		}
		.styleguidist-example-form { 
			display: flex;
			flex-direction: column;
		}
		.custom-wrapper {
			border: 1px solid #e7e7e7;
		}
		.custom-container {
			color: #51bb7b;
		}
		.custom-monospace {
			font-family: monospace;
		}
		.listitem {
			height: 20px;
		}
		.listitem-enter {
			height: 0;
			opacity: 0;
			transition: all 500ms ease;
		}
		.listitem-enter-active {
			height: 20px;
			opacity: 1;
		}
		.listitem-enter-done {
			height: 20px;
		}
		.listitem-exit {
			height: 20px;
		}
		.listitem-exit-active {
			height: 0;
			opacity: 0;
		}
	`}} />
	<Example className="styleguidist-example" />
</>
```
