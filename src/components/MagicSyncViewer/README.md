Magic Sync Viewer

```js
class Example extends React.Component {
	
	constructor (props, context) { 
		super(props, context);
		
		const createRowsCount = 100;
		this._idGenCountArrays = 0;
		this._idGenCountObjects = 0;
	
		this.state = {
			
		};
	};

    render () {
        return (
        	<div className={this.props.className}>
				<MagicSyncViewer 
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
			height: 620px;
		}
	`}} />
	<Example className="styleguidist-example" magicSyncWrapperClassName="magicSyncWrapperClassName" />
</>
```


