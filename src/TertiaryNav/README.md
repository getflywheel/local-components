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

Advanced pattern combining the TertiaryNav with the Drawer component

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
