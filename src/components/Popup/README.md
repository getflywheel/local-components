On click, a simple span element is displayed in the default bottom popup position.

```js
<Popup 
	position="bottom"
	triggerContent={<Button>Click to open span below</Button>}
>
    <span>Hello, I should be below this ^ button.</span>
</Popup>
```

On click, an h2 element is displayed in the right popup position.

```js
<Popup 
	position="right"
	triggerContent={<h2>Open h1 to the right</h2>}
>
    <h1>Right!</h1>
</Popup>
```

On click, an image is displayed in the top popup position.

```js
<Popup 
	position="top"
	triggerContent={<Button>Show image above</Button>}
>
    <img src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png" style={{width: "100%"}} />
</Popup>
```

Offset the x and y position of the popup bubble.

```js
<Popup 
	offsetX="20px"
	offsetY="20px"
	position="right"
	triggerContent={<h2>Open and offset</h2>}
>
    <h1>Simple.</h1>
</Popup>
```
