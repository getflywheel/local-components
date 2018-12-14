# Local by Flywheel component library

Welcome to the official component library for Local by Flywheel!

## What's included in this component library?

We appreciate curious minds and that's a great question! 
Take a quick look at our living component documentation [here](https://getflywheel.github.io/local-components/).

In additional to a quickly growing set of React components, we also having SVGs, SASS partials, and more to come!

## Quick start

1. Clone and pull down the latest
1. Install using `yarn`
1. Start up Styleguidist `yarn start`
1. Check it out at `http://localhost:6060`

## Digging deeper

The `local-compoennts` library can be broken down into 3 main parts:

1. components
2. styles
3. svg

### Components

These are the visual elements that make up both Local and its Add-ons. 
There are currently 40+ React components in the library. 
Each component consists of a `.jsx`, `index.js`, `README.md` and optional `.sass` file.

Try it out for yourself!

1. Make changes to the internals of a component through its `.jsx` and `.sass` files (they should live reload)
1. Play around with the examples found in the `README.md` files
1. Have an idea or bug fix? Submit a [pull request](https://github.com/getflywheel/local-components/pulls).

### Styles

The component library leverages CSS Modules to manage and scope styles. 
These are considered **local** styles (not to be confused with the Local app...what are you going to do? `¯\_(ツ)_/¯`)
Scoped local styles are a beautiful thing that allow Local to isolate components, run Add-ons with multiple versions of `local-components` and avoid collisions.

As wonderful as local styles are, there are instances where CSS needs to transcend a component.
For that, we make use of **global** styles.
Global styles should be familiar to most as that's all the web had for 20+ years. 
These styles are intended to be used sparingly as they introduce a lot of challenges when scaling an app with a library of Add-ons and Environments.

The following is an instance where a scoped component may use a combination of local and global styles to achieve a specific result:

```css
:global(.WindowsToolbar .DragRegion)
```

This is something we try to avoid and are actively working to whittle down to the bare essentials.

If you'd like to learn more about scoped styles, please check out CSS Modules [here](https://github.com/css-modules/css-modules).

### SVGs

Coming soon!
