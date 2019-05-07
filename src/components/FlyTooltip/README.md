Basic:

```js
<FlyTooltip content={<p><strong>Yo! This is a test.</strong><br />I'm a tooltip.</p>}>
    <button className="__Pill __Green __Medium">Hover over me</button><br />
</FlyTooltip>
```

With exclamation icon:

```js
<FlyTooltip 
	position="bottom" 
	exclamation={true} 
	content={<p><strong>Yo! This is a test.</strong><br />I'm a tooltip.</p>}
	>
    <button className="__Pill __Green __Medium">Hover over me</button><br />
</FlyTooltip>
```

Position right:

```js
<FlyTooltip 
	position="right" 
	content={<p><strong>Yo! This is a test.</strong><br />I'm a tooltip.</p>}
	>
    <button className="__Pill __Green __Medium">Hover over me</button><br />
</FlyTooltip>
```

Force center position:

```js
<FlyTooltip 
	position="center" 
	content={<p><strong>Yo! This is a test.</strong><br />I'm a tooltip.</p>}
	>
    <button className="__Pill __Green __Medium">Hover over me</button><br />
</FlyTooltip>
```
