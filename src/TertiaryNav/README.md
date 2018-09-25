Simple example where the TertiaryNav Items in the left column change the content (via the __component__ prop) in the right column.

```js
const { TertiaryNav } = require('./TertiaryNav');
const { TertiaryNavItem } = require('./TertiaryNav');

const Item1 = () => (<h1>Item 1 Content</h1>);
const Item2 = () => (<h1>Item 2 Content</h1>);
const Item3 = () => (<h1>Item 3 Content</h1>);

<TertiaryNav>
    <TertiaryNavItem exact path='/' component={Item1}>Item 1 Nav</TertiaryNavItem>
    <TertiaryNavItem path='/item2' component={Item2}>Item 2 Nav</TertiaryNavItem>
    <TertiaryNavItem path='/item3' component={Item3}>Item 3 Nav</TertiaryNavItem>
</TertiaryNav>
```

Advanced pattern combining the TertiaryNav with the Drawer component.

```js
const { TertiaryNav } = require('./TertiaryNav');
const { TertiaryNavItem } = require('./TertiaryNav');
const { Drawer } = require('../Drawer').default;
const { Fragment } = require('react');
const { PropTypes } = require('prop-types');

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
  onChange: PropTypes.func,
};

class Example extends React.Component{
    constructor (props, context) { 
       super(props, context);
    
       this.state = {
          showDrawer: false
       };
       
       this.onChange = this.onChange.bind(this);
    }
    
    onChange () {
        this.setState({
            showDrawer: true
        });
    }

    render () {
        return (
            <Fragment>
                <TertiaryNav>
                    <TertiaryNavItem exact path='/' render={(props) => <Item1 {...props} onChange={this.onChange} />}>Item 1 Nav</TertiaryNavItem>
                    <TertiaryNavItem path='/item2' component={Item2}>Item 2 Nav</TertiaryNavItem>
                    <TertiaryNavItem path='/item3' component={Item3}>Item 3 Nav</TertiaryNavItem>
                </TertiaryNav>
                <Drawer show={this.state.showDrawer}>
                    <Button onClick={() => console.log('onClick')} className="--Pill --Green --Small">Save</Button>
                </Drawer>
            </Fragment>
        );
    }
}

<div style={{height: '200px'}}>
    <Example />
</div>
```
