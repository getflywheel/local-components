Basic:

```js
const src = `
# Kitchen Sink Example

## Headings
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Emphasis

**This is bold text**.
__This is bold text__.

*This is italic text*.
_This is italic text_.

~~Strikethrough~~


## Links
  
[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

Choose whether to use Local in Light, Dark, or Auto Mode (macOS High Sierra and later).

## Lists
  
### Unordered
  
+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
- Marker character change forces new list start:
  * Ac tristique libero volutpat at
  + Facilisis in pretium nisl aliquet
  - Nulla volutpat aliquam velit
+ Very easy!

### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
1. A fourth item 
1. La la la fifth item


## Tables
  
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |  


## Blockquotes
  
> This is a simple blockquote.
>> ...but you can also nest blockquotes by using additional greater-than signs right next to each other
> > > ...or with spaces between arrows


## Inline Code

\`Entrypoint main = index.js main.41d8f0baf5f18a9ff590.hot-update.js\`

Indented code

  // Some comments
  line 1 of code
  line 2 of code
  line 3 of code


## Block Code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) { d
return bar++;
};

console.log(foo(5));
\`\`\`
  
  
## Horizontal Rules
___
---
***

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
`;

<Markdown src={src} />
```

Stripes:
