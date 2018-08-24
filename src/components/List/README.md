Basic unordered (default) list. When the list items are not 'li' elements, they are automatically wrapped in 'li' tags.
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

List with header (large), divider, and no bullets.
```js
<List
	bullets={false}
	headerHasDivider={true}
	headerText="Explore"
	headerFontSize="l"
>
	<a>All</a>
	<a>Featured</a>
	<a>New</a>
	<a>Popular</a>
	<a>made by Flywheel</a>
</List>
```

List with non-li elements and the element wrap feature disabled. 
Notice that the items' display type is no longer 'list-item' but rather defaults to that of the passed in children.
```js
<List
	listItemWrapElement={false}
>
	<a>non-li item 1</a>
	<a> • non-li item 2</a>
	<a> • non-li item 3</a>
</List>
```

List directly using 'li' elements (therefore not wrapped in additional 'li' tags) and specific styling for the list item text.
```js
<List
	bullets={false}
	headerHasDivider={true}
	headerText="Explore"
	listItemFontSize="xl"
	listItemFontWeight="300"
>
	<li>All</li>
	<li>Featured</li>
	<li>New</li>
	<li>Popular</li>
	<li>made by Flywheel</li>
</List>
```
