# ⚠️This repo is archived. Updates are still published to the [Local Components package](https://www.npmjs.com/package/@getflywheel/local-components). ⚠️

Local Components is the official component library for [Local](https://localwp.com/).

## What's included in this component library?

Take a quick look at our [living component documentation](https://master--62d18352969d7c650b935483.chromatic.com/).

In addition to a quickly growing set of React components, we also have SVGs, SASS partials, and more to come.

## Installation

1. Clone and pull down the latest from the repo
2. Install dependencies using `yarn`

## Storybook

The quickest way to work on `local-components` is to leverage [Storybook](https://storybook.js.org/). Storybook is a
local development area that works well with React components and supports hot-module reloading.

To start Storybook, run `yarn storybook`.

## Developing within Local

If you wish to work on `local-components` and see the changes within Local, you will need to do the following:

1. First run `yarn build` in `local-components`
2. Next run `yarn link` (only needed one time or after unlinking)
3. Switch to `flywheel-local`
3. Then run `nps components.link` (only needed one time or after unlinking)
4. Finally run `nps build.dev`
5. Start Local
6. Make any necessary changes in `local-components`. Note, Local does not support hot-module reloading in all locations
so refreshing the UI in Local (<kbd>Cmd</kbd> + <kbd>R</kbd>) will likely be necessary.

## Running both Storybook and Watch at the same time

If you wish to run both Storybook and the watcher for Local at the same time, you can run `yarn start`. Note, this particular
script spawns two instances of Webpack and is very resource intensive.

## Digging deeper

The `local-components` library can be broken down into 3 main parts:

1. [Components](#components)
2. [Styles](#styles)
3. [SVGs](#svgs)

### Components

These are the visual elements that make up both Local and its Add-ons.
There are currently 40+ React components in the library.
Each component consists of a `.tsx`, `index.js`, `README.md` and optional `.sass` file.

Try it out for yourself!

1. Make changes to the internals of a component through its `.tsx` and `.sass` files (they should live reload)
1. Play around with the examples found in the `README.md` files
1. Have an idea or bug fix? Submit a [pull request](https://github.com/getflywheel/local-components/pulls).

> Note: the entry point for all components and styles is `index.ts`.

#### Containers Wrapper

Several components leverage the `Container.tsx` component to wrap their own implementation.
Container is a highly specialized component that can be toggled on (wraps contents in extra div) or toggled off (no extra div).
In addition, the Container wrapper adds convenience props that allow for easy one-off adjustments like adding 3px of margin without conflicting with the inner content's classes and styles.

> Note: setting any of container's props will automatically toggle it on (disabled: false) thus wrapping the contents in the container wrapper.

#### Organization

Components are organized by type. These type groups can be seen when running Storybook.

### Styles

#### Suit CSS

Naming is hard. And there's no perfect system.
That said, we have chosen [Suit CSS](https://suitcss.github.io/) for naming conventions.

> Note: instead of dashes, local-components uses underscores due to a limitation of a legacy package.

#### CSS Modules

The component library leverages CSS Modules to manage and scope styles.
These are considered **local** styles (not to be confused with the Local app 😉)
Scoped local styles are a beautiful thing that allow Local to isolate components, run Add-ons with multiple versions of `local-components` and avoid collisions.

As wonderful as local styles are, there are instances where CSS needs to transcend a single component.
For that, we make use of **global** styles.
Global styles should be familiar to most as that's what the web largely used for 20+ years.
Global styles are intended to be used sparingly as they introduce a lot of challenges when scaling an app with a library of Add-ons and Environments.

The following is an instance where a scoped component may use a combination of local and global styles to achieve a specific result:

```css
:global(.WindowsToolbar .DragRegion)
```

This is something we try to avoid and are actively working to whittle down to the bare essentials.

If you'd like to learn more about scoped styles, please check out CSS Modules [here](https://github.com/css-modules/css-modules).

#### SASS Partials, Mixins, and Functions

There is an extensive sass system in use that many -- if not most -- components leverage.

##### Partials

If you search for the `_partials` directory, you will find variables, mixins, functions, and other shared resources.

##### Variables

If Local uses a color, it's defined as a variable within the `_variables.scss` file.
In addition, there are fonts, font sizes, font weights, and margin/padding preset values here.

> Note: font sies and margin/padding uses t-shirt sizes to indicate relative sizing while adhering to strict design standards/values.

##### Themes

Local has both light and dark modes. Since this impacts every single components, the `_theme.scss` file contains
mixins that simplifies the implementation of these variations in a repeatable and predictable way.

While you could leverage `if-theme-light` and `if-theme-dark` directly, most light/dark combinations follow a specific pattern and therefore have dedicated mixin.
For example, the `theme-color-black-else-white` mixin applies the `color` style of black (if light) otherwise white (if dark).
Another example, the `theme-background-green-else-graydark` mixin applies the `background` style of green (if light) otherwise graydark (if dark).

> Note: light/dark mode styles are applied by toggling a class added to the `html` element (e.g. Theme__Light).

### SVGs

Coming soon!

## License

[MIT](LICENSE)
