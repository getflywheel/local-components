Basic unordered (default )list.
```js
<List>
	<a>All</a>
	<a>Featured</a>
	<a>New</a>
	<a>Popular</a>
	<a>made by Flywheel</a>
</List>
```

Ordered list.
```js
<List tag="ol">
	<a>All</a>
	<a>Featured</a>
	<a>New</a>
	<a>Popular</a>
	<a>made by Flywheel</a>
</List>
```

List with header, divider, and no bullets.
```js
<List
	bullets={false}
	headerText="Explore"
>
	<a>All</a>
	<a>Featured</a>
	<a>New</a>
	<a>Popular</a>
	<a>made by Flywheel</a>
</List>
```
