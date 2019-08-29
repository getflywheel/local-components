```js
const { EmptyArea } = require('../EmptyArea');
const { InnerPaneSidebarHeader, InnerPaneSidebarContent } = require('./index');

<InnerPaneSidebar>
    <InnerPaneSidebarHeader title="Test" />

    <InnerPaneSidebarContent>
        <EmptyArea border={false}>
            <h3>Test 123</h3>
        </EmptyArea>
    </InnerPaneSidebarContent>
</InnerPaneSidebar>
```
