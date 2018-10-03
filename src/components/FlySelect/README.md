Basic (Options = Array):
```js
<FlySelect options={['Test 1', 'Test 2']} onChange={() => console.log('onChange')} value="Test 1" />
```

Basic (Options = Object):
```js
<FlySelect options={{
    'a': 'Example A',
    'b': 'Example B',
}} onChange={() => console.log('onChange')} value="b" />
```

Has Secondary Text:
```js
<div>
    <FlySelect style={{width: '350px'}} options={{
        'a': {
            label: 'Example A',
            secondaryText: 'This is a test',
        },
        'b': 'Example B',
    }} onChange={() => console.log('onChange')} value="b" />
</div>
```

Placeholder:
```js
<FlySelect options={[
    'Example C',
    'Example D',
]} onChange={() => console.log('onChange')} placeholder="Select Something!" />
```

Constrained Width:
```js
<div style={{width: '150px'}}>
    <FlySelect options={[
        'Example C Testing 123',
        'Example D Testing 123',
    ]} onChange={() => console.log('onChange')} placeholder="Select Something!" />
</div>
```