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

<h6>placeholder</h6>

You can also have a placeholder image.
This is most valuable when a cached image is immediately available as a placeholder while a large or external image load as the primary `src`.

```js
<Avatar 
    placeholderSrc="data:image/jpeg;base64,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"
    src={`https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA13014_hires.jpg?${Math.random()}`}
    type="team"
/>
```

<h6>placeholder with src onError</h6>

```js
<Avatar 
    placeholderSrc="data:image/jpeg;base64,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"
    src="//bad-path.png"
    type="team"
/>
```
