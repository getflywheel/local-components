Basic:

```js
<FlyTooltip content={<p><strong>Yo! This is a test.</strong><br />I'm a tooltip.</p>}>
    <Button>Hover over me</Button><br />
</FlyTooltip>
```

With exclamation icon and auto width:

```js
<FlyTooltip 
	position="bottom" 
	width="auto"
	exclamation={true} 
	content={<p><strong>Yo! This is a test.</strong><br />I'm a tooltip.</p>}
	>
    <Button>Hover over me</Button><br />
</FlyTooltip>
```

Position center horizontal position with max-content width:

```js
<FlyTooltip 
	position="center" 
	width="max-content"
	content={<p><strong>Yo! This is a test.</strong><br />I'm a tooltip.</p>}
	>
    <Button>Hover over me</Button><br />
</FlyTooltip>
```

Position right:

```js
<FlyTooltip 
	position="right" 
	content={<p><strong>Yo! This is a test.</strong><br />I'm a tooltip.</p>}
	>
    <Button>Hover over me</Button><br />
</FlyTooltip>
```
