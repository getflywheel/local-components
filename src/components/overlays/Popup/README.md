On click, a simple span element is displayed in the default bottom popup position.

```js
import { Button } from '../../buttons/Button/Button';

<Popup 
	position="bottom"
	triggerContent={<Button>Click to open span below</Button>}
>
    <span>Hello, I should be below this ^ button.</span>
</Popup>
```

On click, an div element is displayed in the right popup position.

```js
<Popup 
	position="right"
	triggerContent={<div>Open content to the right</div>}
>
    <div>Right!</div>
</Popup>
```

On click, an image is displayed in the top popup position.

```js
import { Button } from '../../buttons/Button/Button';

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
	triggerContent={<div>Open and offset</div>}
>
    <div>Simple.</div>
</Popup>
```
