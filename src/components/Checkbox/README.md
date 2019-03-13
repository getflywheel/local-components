Default with change handler

```js
<div>
    <Checkbox onChange={(checked) => console.log('onChange - checked: ', checked)} />
</div>
```

Checked

```js
<div>
    <Checkbox checked={true} />
</div>
```

With a label

```js
<div>
    <Checkbox label="Option" />
</div>
```

Disabled and unchecked

```js
<div>
    <Checkbox disabled={true} label="Option" />
</div>
```


Disabled and checked

```js
<div>
    <Checkbox disabled={true} checked={true} label="Option" />
</div>
```
