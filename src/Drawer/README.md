```js
const { Drawer } = require('./Drawer');

class Example extends React.Component{
    constructor (props, context) { 
       super(props, context);
    
       this.state = {
          showDrawer: false
       };
    };

    render () {
        return (
            <div>
                <Button onClick={() => this.setState({showDrawer: !this.state.showDrawer})} className="Continue --Pill --Green">{this.state.showDrawer ? 'Hide Drawer' : 'Show Drawer'}</Button>
                    <Drawer show={this.state.showDrawer}>
                <Button onClick={() => console.log('onClick')} className="--Pill --Green --Small">Save</Button>
                </Drawer>
            </div>
        );
    };
}

<div style={{height: '200px'}}>
    <Example />
</div>
```
