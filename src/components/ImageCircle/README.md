Default image with circular mask. 
The contained image uses 'object-fit: cover' to ensure that the entire circle area has pixel data within it regardless of the aspect ratio of the original source.

```js
<ImageCircle src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"/>
```

Small circle.

```js
<ImageCircle 
	size="s"
	src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"
/>
```

Image with rounded square shape.

```js
<ImageCircle 
	size="s"
	square={true}
	src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"
/>
```
