# Icons

Icon system meant to standardize implementation and make them more discoverable.

## 🎯 Objectives

1. a unified Icon system with a single approach
1. explicit width and height so icons don't resize and flicker when the app or a particular view is shown
1. the option to neutralize svg colors out of the box for consistency and predictability
1. ability to override icon colors with a single `className` selector without using `!important` or nested selectors
1. allow each icon to define their own metadata for ease of discovery and implementation
1. dual export system that allows for importing via single namespace or individual component references
1. icons should allow additional, unknown props to be passed through and applied

## 🏗 Adding a new svg icon

1. create a new icon component within `./src/components/icons/svgs/`
1. copy the new svg markup to the rendered component
    1. add `{...props}` to svg props to allow for maximum flexibility of common props without explicitly setting them
    1. the props 'xmlns' and 'data-name' can optionally be removed
1. explicitly set `width` and `height` props of svg to match rounded viewport size
1. provide meta details to make this icon more discoverable within storybook example in 1 of 2 ways:
    1. wrap component in `withIconSvg` hoc
    1. add prototype property `meta` with details
1. export component and add to `Icons.tsx` namespace and export
    1. note: this will automatically include icons in the searchable storybook example via reflection

## ⁉️ Q&A

### Why does the svg size flicker at an absurdly large size before scaling down to a reasonable size?

Chances are, the exported svg xml does not include an explicit `width` and `height` attribute
but a developer can add this after the fact.

### Why use <svg>? Why not <img>?

The problem with both <img> and background-images is that you don’t get to control the innards of the svg.

### Why does `Icons.tsx` export both a namespace and object of objects?

This setup allows icons to be imported and implemented in a dual export approach similar to React:

```
// individually import and use each svg
import { AddIcon, ArrowRightIcon } from "./Icons";
<AddIcon />
<ArrowRightIcon />

// import just the namespace and reference any number of svgs
import { Icons } from "./Icons";
<Icons.Add />
<Icons.ArrowRight />
```

## 📝 Todo Improvements

* break-up and componentize IconsStoriesAll
* how to handle larger icons? scale for story? show scale %?
* show icon dimensions in preview
* how to manage colors?
* move drawer outside of example, work it into layout flow (static), make can span entire bottom, and use storage to sync
* unified search that keeps light and dark mode storybook example in sync
* sort by relevance
