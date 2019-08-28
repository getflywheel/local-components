
```js
const ReactDOM = require('react-dom');
const classnames = require('classnames');

class FlywheelModalExample extends React.Component{
    constructor (props, context) { 
       super(props, context);
       
       if(!document.getElementById('popup-container')) {
		   const container = document.createElement('div');
		   container.id = 'popup-container'; // match id expected in the component
		   document.body.appendChild(container);
	   }
    
       this.onClick = this.onClick.bind(this);
    }
    
    onClick () {
    	function confirm (args) {
        	return new Promise((resolve) => {
        		const onSubmit = (checked) => {
        			FlyModal.onRequestClose();
        			resolve(checked);
        		};
        		
        		ReactDOM.render(<FlyModal 
        			contentLabel={args.title.toString()}
        			hasIcon={true}
				>
        			<h3>Does your lorem ipsum text long for something a little meatier?</h3>
        			<p>Bacon ipsum dolor amet kevin meatloaf chicken pork shoulder alcatra filet mignon kielbasa tri-tip beef ribs.</p>
        		</FlyModal>, document.getElementById('popup-container'));
        	});
        }
        
        confirm({
			title: <span>Are you sure you want to update WordPress for <span className="__Color__Green">Cool Ass Site</span>?</span>,
			//buttonText: `Update to WordPress 9999`,
		}).then(() => {});
    }

    render () {
        return (
			<Button onClick={this.onClick} recipe="primary">Show Modal</Button>
        );
    }
}

<div>
    <FlywheelModalExample />
</div>
```
