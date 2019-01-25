Avatars provide a visual representation of a user or team through an image, initials, or both (with initials as a fallback).

<h3>User type</h3>

A user is visually represented by a circle shape. 
It can be an image, initials, or both.

<h6>Image</h6>

```js
<Avatar
    src="https://getflywheel.com/wp-content/uploads/2015/02/flyheadshots-4-copy.jpg"
    type="user"
/>
```

<h6>Initials</h6>

```js
<Avatar
    initials="ms"
    type="user"
/>
```

<h6>Image with initials Fallback</h6>

If both an image `src` and the `initials` props are set, they will work together with the image appearing once loaded and the initials appearing prior to load on upon an error.

*Note: These two elements should never appear at the same time.*

```js
<Avatar
    src="https://getflywheel.com/wp-content/uploads/2015/02/flyheadshots-4-copy.jpg"
    initials="ms"
    type="user"
/>
```

<h3>Team type</h3>

A team is visually represented by a rounded square shape. 
It can be an image, initials, or both.

<h6>Image</h6>

```js
<Avatar 
    src="https://avatars2.githubusercontent.com/u/2371558?s=400&v=4"
    type="team"
/>
```

<h3>Background colors</h3>

Avatars with initials have a background color.
By default, the background is set to Flywheel's primary brand color (blue).

In addition, the following colors are available:

<h6>Green</h6>

```js
<Avatar
	color="green"
    initials="GR"
    type="user"
/>
```

<h6>Yellow</h6>

```js
<Avatar
	color="yellow"
    initials="YE"
    type="user"
/>
```

<h6>Orange</h6>

```js
<Avatar
	color="orange"
    initials="OR"
    type="user"
/>
```

<h6>Red</h6>

```js
<Avatar
	color="red"
    initials="RE"
    type="user"
/>
```

<h6>Pink</h6>

```js
<Avatar
	color="pink"
    initials="PI"
    type="user"
/>
```

<h6>Purple</h6>

```js
<Avatar
	color="purple"
    initials="PU"
    type="user"
/>
```

<h3>Sizes</h3>

There are two built-in sizes for avatars. The default is medium and there's also a small version.

<h6>Small</h6>

```js
<Avatar
    initials="AZ"
    size="s"
    type="user"
/>
```

<h6>Medium</h6>

```js
<Avatar
    initials="AZ"
    size="m"
    type="user"
/>
```

<h3>More on images</h3>

When using an image without initials, any load error will result in a blank area.

<h6>onError</h6>

```js
<Avatar 
    src="//bad-path.png"
    type="team"
/>
```
