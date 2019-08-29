The `Tooltip` component allows content to display additional information on hover. Tooltips can be set to top, right, bottom, and left positions.

> Note: Tooltips are drawn relative to a component's initial size. As such, any component that transitions to its final, needs to load content first, or has any delay in its rendering of its final size will likely result in being positioned incorrectly. Enable `useJsHover` for these use cases.

Default tooltip with default `top` position.

```js
<div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Tooltip
    	content={<div>This is a tooltip</div>}
    >
        <div>Hover over me</div>
    </Tooltip>
</div>
```

Set `forceHover` to `true`.

```js
<div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Tooltip
    	content={<p><strong>Yo! This is a test.</strong><br />I'm a tooltip.</p>}
    	forceHover={true}
    >
    	<div>I am a button</div>
    </Tooltip>
</div>
```

Position set to `right`.

```js
<div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Tooltip
    	content={<div>This is a tooltip</div>}
    	position="right"
    >
    	<div>Hover over me</div>
    </Tooltip>
</div>
```

Position set to `right` but is repositioned to the left because there's not enough space to the right.

```js
<div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
    <Tooltip
    	content={<div>This is a tooltip</div>}
    	position="right"
    >
    	<div>Hover over me</div>
    </Tooltip>
</div>
```
