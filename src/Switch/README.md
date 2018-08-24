Basic:
```js
<Switch onChange={() => console.log('onChange')}/>
```

Inline:
```js
<Switch label="Label" flat={true} tiny={true} onChange={() => console.log('onChange')}/>
```

Inline (No Value):
```js
<Switch label="Label" flat={true} tiny={true} noValue={true} onChange={() => console.log('onChange')}/>
```