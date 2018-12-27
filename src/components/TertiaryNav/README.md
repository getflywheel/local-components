The TertiaryNav component follows a two-column master/detail pattern with a nav menu in the left column and content associated the active menu item displayed in the right column. 
React Router 4 is used for routing and the props used for TertiaryNavItem mirror that API.

Simple example where the TertiaryNav Items in the left column change the content (via the __component__ prop) in the right column.

```js
   const { TertiaryNav, TertiaryNavItem } = require('./TertiaryNav');
   
   const Item1 = () => (<h1>Item 1 Content</h1>);
   const Item2 = () => (<h1>Item 2 Content</h1>);
   const Item3 = () => (<h1>Item 3 Content</h1>);
   
   <TertiaryNav>
       <TertiaryNavItem exact path='/' component={Item1}>Menu Item 1</TertiaryNavItem>
       <TertiaryNavItem path='/item2' component={Item2}>Menu Item 2</TertiaryNavItem>
       <TertiaryNavItem path='/item3' component={Item3}>Menu Item 3</TertiaryNavItem>
   </TertiaryNav>
```

An example showing error state.

```js
const { TertiaryNav, TertiaryNavItem } = require('./TertiaryNav');

const Item1 = () => (<div><h1>Item 1 Content</h1><div className='TertiaryNavChild__Error'>error message example</div></div>);
const Item2 = () => (<h1>Item 2 Content</h1>);
const Item3 = () => (<h1>Item 3 Content</h1>);

<TertiaryNav>
    <TertiaryNavItem variant={'error'} exact path='/' component={Item1}>Menu Item 1</TertiaryNavItem>
    <TertiaryNavItem path='/item2' component={Item2}>Menu Item 2</TertiaryNavItem>
    <TertiaryNavItem path='/item3' component={Item3}>Menu Item 3</TertiaryNavItem>
</TertiaryNav>
```

Advanced pattern combining the TertiaryNav with the Drawer component.

```js
const { TertiaryNav, TertiaryNavItem } = require('./TertiaryNav');
const Drawer = require('../Drawer').default;
const { Fragment } = require('react');

const Item2 = () => (<h1>Item 2 Content</h1>);
const Item3 = () => (<h1>Item 3 Content</h1>);

class Item1 extends React.Component{
    constructor (props) {
        super(props);

        this.state = {
            value: 'change this text',
        };
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange (e) { 
        this.setState({value: e.target.value});
        this.props.onChange(e.target.value);
    }
    	
    render () {
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        );
    }
}

Item1.propTypes = {
  onChange: (...params: any[]) => any;
};

class TertiaryNavExample extends React.Component{
    constructor (props, context) { 
       super(props, context);
    
       this.state = {
          showDrawer: false
       };
       
       this.onChange = this.onChange.bind(this);
       this.onSave = this.onSave.bind(this);
    }
    
    onChange () {
        this.setState({
            showDrawer: true,
        });
    }
    
    onSave () {
        this.setState({
            showDrawer: false,
        });
    }

    render () {
        return (
            <div style={{position: 'relative', display: 'flex', height: '100%'}}>
                <TertiaryNav>
                    <TertiaryNavItem exact path='/' render={(props) => <Item1 {...props} onChange={this.onChange} />}>Item 1</TertiaryNavItem>
                    <TertiaryNavItem path='/item2' component={Item2}>Item 2</TertiaryNavItem>
                    <TertiaryNavItem path='/item3' component={Item3}>Item 3</TertiaryNavItem>
                </TertiaryNav>
                <Drawer show={this.state.showDrawer}>
                    <Button onClick={this.onSave} className="__Pill __Green __Small">Save</Button>
                </Drawer>
            </div>
        );
    }
}

<div style={{height: '200px'}}>
    <TertiaryNavExample />
</div>
```
