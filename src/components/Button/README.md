### Button

Buttons have a set of props that allow developers to easily establish intent and meaning to their actions.

It's important to understand the purposes and how to use the following props:
- emphasis: By default a button has a `secondary` emphasis. This can be changed this to `primary` but there should never be more than 1 primary button at any given time.
- intent: This prop can be used to indicate to a user that a button may be destructive (e.g. `danger`). By default, there is no set intent value.

```js
const { ButtonExample } = require('./examples/ButtonExample');

<ButtonExample />
```
