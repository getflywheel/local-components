Basic:

```js
<FlyDropdown position="bottom" items={[
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
    <Button emphasis="text" color="gray">Open Dropdown</Button>
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
    <Button emphasis="text" color="gray">Open Dropdown (but up)</Button>
</FlyDropdown>
```
