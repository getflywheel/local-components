The Drawer component, which is hidden by default, contains content that can be programmatically shown or hidden as needed.
This content slides up and down from below the container its used within.

```js
const Drawer = require('./Drawer').default;

class DrawerExample extends React.Component{
    constructor (props, context) { 
       super(props, context);
    
       this.state = {
          showDrawer: false
       };
    };

    render () {
        return (
            <div>
                <Button onClick={() => this.setState({showDrawer: !this.state.showDrawer})}>{this.state.showDrawer ? 'Hide Drawer' : 'Show Drawer'}</Button>
                    <Drawer show={this.state.showDrawer}>
                <PrimaryButton onClick={() => console.log('onClick')}>Save</PrimaryButton>
                </Drawer>
            </div>
        );
    };
}

<div style={{height: '200px'}}>
    <DrawerExample />
</div>
```
