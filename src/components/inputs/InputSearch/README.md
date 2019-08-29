Input with `placeholder` and `onChange` props.
```js
<InputSearch 
	onChange={(event) => console.log('onChange: ', event)} 
	placeholder="Type here ..."
/>
```

Input with initial `value` set.
```js
<InputSearch 
	onChange={(event) => console.log('onChange: ', event)} 
	placeholder="Type here ..."
	value="John Smith"
/>
```
