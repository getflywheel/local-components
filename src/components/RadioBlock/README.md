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

Warning set on the component:

```js
<RadioBlock warn={true} onChange={() => console.log('onChange')} default={'test1'} options={{
    'test1': {
        label: 'Test 1',
    },
    'test2': {
        label: 'Test 2',
    	disabled: true,
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

Tooltip for the second, disabled option:

```js
<RadioBlock heightSize="m" onChange={() => console.log('onChange')} default={'test1'} options={{
    'test1': {
        label: 'Test 1',
    },
    'test2': {
    	disabled: true,
        label: 'Test 2',
        tooltipContent: <p>Hey, this is why this is disabled. It all started when you clicked...</p>,
    },
}} />
```

Vertical layout:

```js
<RadioBlock direction="vert" heightSize="m" default={'test1'} options={{
    'test1': {
        label: 'Test 1',
    },
    'test2': {
    	disabled: true,
        label: 'Test 2',
        tooltipContent: <p>Hey, this is why this is disabled. It all started when you clicked...</p>,
    },
}} />
```
