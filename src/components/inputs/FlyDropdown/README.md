Basic:

```js
import { TextButton } from '../../buttons/TextButton/TextButton';

<FlyDropdown 
    position="bottom"
    items={[
        {
            label: 'Option 1',
            onClick: () => console.log('onClick'),
        },
        {
            label: 'Option 2',
            onClick: () => console.log('onClick'),
        },
    ]}
>
    <TextButton privateOptions={{color: 'gray'}}>Open Dropdown</TextButton>
</FlyDropdown>
```

No Caret (Top Open):

```js
import { TextButton } from '../../buttons/TextButton/TextButton';

<FlyDropdown 
    position="top" 
    caret={false} 
    items={[
        {
            label: 'Option 1',
            onClick: () => console.log('onClick'),
        },
        {
            label: 'Option 2',
            onClick: () => console.log('onClick'),
        },
        {
            label: 'Option 3 (Red)',
            onClick: () => console.log('onClick'),
            color: 'red',
        },
    ]}
>
    <TextButton privateOptions={{color: 'gray'}}>Open Dropdown (but up)</TextButton>
</FlyDropdown>
```
