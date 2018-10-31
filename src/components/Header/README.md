Headings provide both structure and visual points of reference to help readers scan content. 

Traditionally, these headings are represented by `<h1>` to `<h6>` elements with their corresponding styles tightly coupled.
However, the intent of `<h1>` to `<h6>` elements are to represent the true hierachy of the page, not the styles associated with them.
An `<h3>`, for example, should never be the first header element on a page, in a section, etc.

To support the separation of structure and style, this component attempts to introduce React props to marry structure and style.

<hr />

The simplest example of a header uses the defaults which outputs a `<span>` with medium font size.

```js
<Header>
   Hello World!
</Header>
```

Using the **size** and **tag** props, we can easily create a large `<h1>` header.

```js
<Header tag="h1" size="l">
   Connect to Flywheel
</Header>
```

Example of a multi-color `<h2>` header.

```js
<Header tag="h2">
   Clone <span className="__Color__Green">Custom with Apache</span>
</Header>
```
