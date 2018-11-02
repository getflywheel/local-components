Input with `placeholder` and `onChange` props.
```js
<InputSearch 
	onChange={() => console.log('onChange')} 
	placeholder="Type here ..."
/>
```

Input with initial `value` set.
```js
<InputSearch 
	onChange={() => console.log('onChange')} 
	placeholder="Type here ..."
	value="John Smith"
/>
```
