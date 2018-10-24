Cards contain content and actions about a single subject.

The `Card` component is divided into two distinct sections: **header** and **content** (both props).
The header section often consists of graphics and consists of _no_ padding or margin.
The context section consists of details and/or actions and _does_ include margin by default.
<hr>

The simplest example of `Card` uses no props and instead passes a children element into the **content** section. 
It is notably void of styles (with the exception of margin) and allows for ultimate customization.
```js
<Card>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc quam, bibendum quis augue porttitor, scelerisque pretium lorem. Ut quis ex bibendum justo feugiat euismod.
</Card>
```

A more advanced example of `Card` features both the **header** and **content** areas to provide a more visually complete outcome.
```js

<Card
	header={<img src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png" style={{width: "100%", objectFit: 'cover'}} />}
	content={
		<div>
			<p style={{marginTop: "0"}}><strong>Looking fly!</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc quam, bibendum quis augue porttitor, scelerisque pretium lorem. Ut quis ex bibendum justo feugiat euismod.</p>
		</div>
	}
>
	<p>Card children also are included in the <strong>content</strong> section.</p>
	<button className="__Pill __Green __Medium">Click here!</button>
</Card>
```

Whether you want to target specific elements within the card component or simply apply a utility class, the **headerClassName** and **contentClassName** props have you covered.
Also notice that both **content** and **header** can accept, not only, elements but also strings, number, or array of these types.
```js
<Card
	contentClassName="__Color__Green"
	content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc quam, bibendum quis augue porttitor, scelerisque pretium lorem. Ut quis ex bibendum justo feugiat euismod."
/>
```

Want a header that consists of an icon and background color? The `Card` component has your back. 
Want to give your icon a max height so it doesn't run all 'Stay Puft Marshmallow Man' over your work...you know `Card` has your back for that, too!

```js
<Card
	headerBackgroundColor="#51bb7b"
	headerIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
	headerIconMaxHeight="50px"
/>
```
