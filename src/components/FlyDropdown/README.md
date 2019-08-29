Basic:

```js
<FlyDropdown position="bottom">
    <TextButton privateOptions={{color: 'gray'}}>Open Dropdown</TextButton>
</FlyDropdown>
```

No Caret (Top Open):

```js
<FlyDropdown position="top" caret={false} items={[
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
]}>
    <TextButton privateOptions={{color: 'gray'}}>Open Dropdown (but up)</TextButton>
</FlyDropdown>
```
