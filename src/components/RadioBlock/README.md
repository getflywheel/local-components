Simple RadioBlock example:

```js
<RadioBlock onChange={() => console.log('onChange')} default={'test1'} options={{
    'test1': {
        label: 'Test 1',
    },
    'test2': {
        label: 'Test 2',
    },
}} />
```

Disable the entire component:

```js
<RadioBlock disabled={true} onChange={() => console.log('onChange')} default={'test1'} options={{
    'test1': {
        label: 'Test 1',
    },
    'test2': {
        label: 'Test 2',
    },
}} />
```

Disable a single option and select the other:

```js
<RadioBlock onChange={() => console.log('onChange')} default={'test2'} options={{
    'test1': {
    	disabled: true,
        label: 'Test 1',
    },
    'test2': {
        label: 'Test 2',
    },
}} />
```

Medium size RadioBlock:

```js
<RadioBlock heightSize="m" onChange={() => console.log('onChange')} default={'test1'} options={{
    'test1': {
        label: 'Test 1',
    },
    'test2': {
        label: 'Test 2',
    },
}} />
```
