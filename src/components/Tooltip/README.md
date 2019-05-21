Default tooltip with `auto` position.

```js
<div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Tooltip
    	content={<button className="__Pill __Green __Medium">Hover over me</button>}
    >
    	This is a tooltip
    </Tooltip>
</div>
```

Position set to `right`.

```js
<div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Tooltip
    	content={<button className="__Pill __Green __Medium">Hover over me</button>}
    	position="right"
    >
    	This is a tooltip
    </Tooltip>
</div>
```

Set `forceHover` to true

```js
<div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Tooltip
    	content={<button className="__Pill __Green __Medium">Hover over me</button>}
    	forceHover={true}
    >
    	This is a tooltip
    </Tooltip>
</div>
```
