Basic truncation example with its default options.
```js
<Truncate>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Truncate>
```

A customized truncation example utilizing the **lines** and **ellipsis** props to limit the number of lines to `2` and show a '`Read more`' button if truncated.
```js
const onClick = () => {
	alert('Read more clicked');
};

<Truncate lines={2} ellipsis={<span> ... <a onClick={onClick}>Read more</a></span>}>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</Truncate>
```
