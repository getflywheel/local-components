The `ClippedContent` component clips its content to a specified shape.
It uses `clip-path` to achieve this result.

#### Shapes

Content can be clipped to any of the predefined shapes through the `shape` prop.

##### Rounded rectangle

```js
<div style={{width: "50px", height: "50px"}}>
    <ClippedContent>
        <div style={{width: "100%", height: "100%", background: "#50c6db", display: "flex", alignItems: "center", justifyContent: "center"}}>
            ABC
        </div>
    </ClippedContent>
</div>
```

##### Circle

*Note: The circle shape is best used with square size dimensions.*

```js
<div style={{width: "50px", height: "50px"}}>
    <ClippedContent shape="circle">
        <div style={{width: "100%", height: "100%", background: "#50c6db", display: "flex", alignItems: "center", justifyContent: "center"}}>
            ABC
        </div>
    </ClippedContent>
</div>
```

#### Managing size

It's important to understand the options and responsibilities of both the `ClippedContent` and its content (aka children) to get the desired outcome.

By default, the `ClippedContent` component is set to clip its content and uses 100% of its parent's width and height.
The content you pass to it, however, is completely up to you as this component adds no additional styles to it.

#### The content

The following examples will use the same content with varying styles, `ClippedContent` options (e.g. props), and parent div sizes to achieve different results.
The content is simply 3 letters and a background color.
Here's what it looks like:

```js
<div style={{background: "#50c6db"}}>
    ABC
</div>
```

#### The ClippedContent component

Now let's wrap the content in the `ClippedContent` component.
Notice the rounded corners.

```js
<ClippedContent>
    <div style={{background: "#50c6db"}}>
        ABC
    </div>
</ClippedContent>
```

#### Controlling size

In the examples above, both the component and content fill the available width.
Often times, however, we'll want to control both width and height.
There's 3 different ways to do this.

*Note: In the following examples, the `ClippedContent` has a gray background to show its width and height relative to its content.*

##### 1) Parent size

Set the parent's width and height and the component will expand to fill the available space.

```js
<div style={{width: "50px", height: "50px"}}>
    <ClippedContent style={{background: "gray"}}>
        <div style={{background: "#50c6db"}}>
            ABC
        </div>
    </ClippedContent>
</div>
```

##### 2) Component size

If we don't want to rely on the available space provided by the parent, we can explicitly set the component's `width` and `height` through props.

```js
<div>
    <ClippedContent width="50px" height="50px" style={{background: "gray"}}>
        <div style={{background: "#50c6db"}}>
            ABC
        </div>
    </ClippedContent>
</div>
```

##### 3) Content size

You can also let the content dictate sizing, but the outcome might not be what you'd initially expect.

```js
<div>
    <ClippedContent style={{background: "gray"}}>
        <div style={{width: "50px", height: "50px", background: "#50c6db"}}>
            ABC
        </div>
    </ClippedContent>
</div>
```

What's happening here?

The component, by default, has its width and height set to 100% to fill available space and it's at these dimensions that the clipping takes place.
The content, however, is setting its own size.
This means the left side is clipped to the expected rounded rectangle shape but the right side isn't.

*Note: If using the `circle` shape, the content is completely clipped out of the above example and may result in nothing appearing.*

How can we adjust this so the content is clipped as desired?

##### 3.5) Content size with fit-content

The `ClippedContent` component's width and height props can also take a value of `fit-content`.
This option resizes the component to match that of its content.

```js
<div>
    <ClippedContent width="fit-content" height="fit-content" style={{background: "gray"}}>
        <div style={{width: "50px", height: "50px", background: "#50c6db"}}>
            ABC
        </div>
    </ClippedContent>
</div>
```

#### Managing position

In addition to clipping and sizing, the `ClippedContent` component uses a flex layout allowing for some easy, out-of-the-box alignments.

*Note: If the component and content have the same width and height, there is no available space to change positioning and the following will have no effect.

##### Align

Using the `alignX` and `alignY` props, content can be centered.

```js
<div style={{width: "50px", height: "50px"}}>
    <ClippedContent alignX="center" alignY="center" style={{background: "gray"}}>
        <div style={{background: "#50c6db"}}>
            ABC
        </div>
    </ClippedContent>
</div>
```

Using the above example with a circle shape and tall content helps give a better idea of how alignment works.

```js
<div style={{width: "50px", height: "50px"}}>
    <ClippedContent shape="circle" alignX="center" alignY="center" style={{background: "gray"}}>
        <div style={{background: "#50c6db"}}>
            ABC<br />DEF<br />GHI<br />JKL
        </div>
    </ClippedContent>
</div>
```

And now with wider content.

```js
<div style={{width: "50px", height: "50px"}}>
    <ClippedContent shape="circle" alignX="center" alignY="center" style={{background: "gray"}}>
        <div style={{background: "#50c6db"}}>
            ABCDEFGHIJKL
        </div>
    </ClippedContent>
</div>
```

All of this is well and good, but if you have a background color you need to fill the clipped area, using the align props will not work.
Instead, you'll need to manually set the content's sizing and positioning to achieve the desired result.

```js
<div style={{width: "50px", height: "50px"}}>
    <ClippedContent shape="circle">
        <div style={{width: "100%", height: "100%", background: "#50c6db", display: "flex", alignItems: "center", textAlign: "center"}}>
            ABC DEF GHI JKL
        </div>
    </ClippedContent>
</div>
```
