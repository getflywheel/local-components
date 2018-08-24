A `Card` component is designed to contain content and actions about a single subject.

The anatomy of a `Card` component can be broken down into two distinct sections: header and content.
The header section often consists of graphics and consists of _no_ padding or margin.
The content section consists of details and/or actions and _does_ include margin by default.
The footer section is a horizontal flex container fixed at the bottom of the card that often consist of call to actions, icons, and other indicators.

Both the header and content sections can be set in a number of different ways. 
The examples below show these different approaches and how they can be used for a variety of outcomes.

<hr>

The most basic use of `Card` simply declares a child element which, by default, will place the child in the content section. 
This implementation is notably void of styles with the exception of the base `Card` style and built-in content margin, but allows for the ultimate in customization.

```js
<Card>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc quam, bibendum quis augue porttitor, scelerisque pretium lorem. Ut quis ex bibendum justo feugiat euismod.
</Card>
```

There are times when a `Card` calls for a section consisting of no padding or margin.
This is where the header sections comes into play.

To use the header, the `Card` component follows React's concept of [containment](https://reactjs.org/docs/composition-vs-inheritance.html#containment).
Simply put, containment is the idea of using a component's props to slot elements into designated areas.

The example below shows how to use the **header**, **content**, and **footer** props to set those sections.
```js

<Card
	header={
		<img src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png" style={{width: "100%"}} />
	}
	content={
		<div>
			<span style={{marginTop: "0"}}><strong>Looking fly!</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc quam, bibendum quis augue porttitor, scelerisque pretium lorem. Ut quis ex bibendum justo feugiat euismod.</span>
		</div>
	}
	footer={
		<button className="__Pill __Green __Medium">Click here!</button>
	}
/>
```

While using the **header** and **content** props and directly inserting whatever you want is extremely powerful, the `Card` component also includes several built-in layouts.

Want a header consisting of a icon centered on a background color of your choosing? 
The `Card` component has your back. 
Want to give your icon a max height so it doesn't run all over work like the Stay Puft Marshmallow Man?
You know the `Card` component has your back for that, too!

```js
<Card
	headerBackgroundColor="#51bb7b"
	headerIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
	headerIconMaxHeight="50px"
/>
```

The content section also features several layout options including **contentTitle**, **contentSub**, and **contentBody**.
```js
<Card
	contentTitle="Admin System"
	contentSub="by Developer"
	contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc quam, bibendum quis augue porttitor, scelerisque pretium lorem. Ut quis ex bibendum justo feugiat euismod."
/>
```

The final section is set via the **footer** prop and has a horizontal flex layout.
```js
const { Fragment } = require('react');

<Card
	footer={(
		<Fragment>
			<div style={{display: "flex", alignItems: "center"}}>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SimpleGray_Heart.svg/128px-SimpleGray_Heart.svg.png" width="20px" height="20px" />
				<span style={{marginLeft: "5px"}}>10 likes</span>
			</div>
			<div style={{marginLeft: "auto"}}>
				<button className="__GrayOutline">Share</button>
			</div>
		</Fragment>
	)}
/>
```

Putting all the pieces together, a complete example looks like the following.
```js
const { Fragment } = require('react');

<Card
	headerBackgroundColor="#51bb7b"
	headerIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
	headerIconMaxHeight="50px"
	contentTitle="Admin System"
	contentSub="by Developer"
	contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc quam, bibendum quis augue porttitor, scelerisque pretium lorem. Ut quis ex bibendum justo feugiat euismod."
	footer={(
		<Fragment>
			<div style={{display: "flex", alignItems: "center"}}>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SimpleGray_Heart.svg/128px-SimpleGray_Heart.svg.png" width="20px" height="20px" />
				<span style={{marginLeft: "5px"}}>10 likes</span>
			</div>
			<div style={{marginLeft: "auto"}}>
				<button className="__GrayOutline">Share</button>
			</div>
		</Fragment>
	)}
/>
```

There are a number of advanced features with `Card` as well.
As seen in the example below, truncation is built-in and works for a number of sections and layout specific elements. 
And even within the truncation feature, there's a number of customizable settings like the number of lines and what to render for the ellipsis.
```js
const { Fragment } = require('react');
const onClick = () => {
	alert('Read more clicked');
};

<Card
	contentTitle="This is a really long title that can easily get cut off or wrap to the next line"
	contentTitleTruncate={true}
	contentSub="by Super-Duper-Long-User-Name-That-Just-Everyones-Life-Miserable"
	contentSubTruncate={true}
	contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc quam, bibendum quis augue porttitor, scelerisque pretium lorem. Ut quis ex bibendum justo feugiat euismod."
	contentDescriptionTruncate={true}
	contentDescriptionTruncateLines={2}
	contentDescriptionTruncateEllipsis={<span>... <a onClick={onClick}>Read more</a></span>}
	footer={(
		<Fragment>
			<div style={{display: "flex", alignItems: "center"}}>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SimpleGray_Heart.svg/128px-SimpleGray_Heart.svg.png" width="20px" height="20px" />
				<span style={{marginLeft: "5px"}}>10 likes</span>
			</div>
			<div style={{marginLeft: "auto"}}>
				<button className="__GrayOutline">Share</button>
			</div>
		</Fragment>
	)}
/>
```

The `Card` component also allows you to add `className` to the header and content sections through the following props:
* **headerClassName**
* **headerIconClassName**
* **headerIconContainerClassName**
* **contentClassName**
* **contentTitleClassName**
* **contentSubClassName**
* **contentDescriptionClassName**
* **footerClassName**

Also note that, in addition to elements, sections can also accept strings, number, or array of these types.
```js
<Card
	contentClassName="__Color__Green"
	content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc quam, bibendum quis augue porttitor, scelerisque pretium lorem. Ut quis ex bibendum justo feugiat euismod."
/>
```

