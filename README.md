# Local by Flywheel component library

Welcome to the official component library for Local by Flywheel! 
Here you will find UI resources for that Local Add-on you know you want to build.

> Local 3.0.0 or greater required

## What's included in this component library?

We appreciate curious minds and that's a great question! Take a quick look at our living component documentation [here](https://getflywheel.github.io/local-components/).

In additional to a quickly growing set of React components, we also having SVGs, SASS partials, and more to come!

## Quick start

This library is intended for Add-on development and will only work within an Electron and React dev environemnt.
The quickest way to get started is to duplicate an existing Add-on from your Local app's `addons` directory.

macOS: `~/Library/Application Support/Local by Flywheel/addons`
Windows: `?`

If you have the `local-addon-notes` Add-on installed, duplicate it now. 
Once have a copy of your Add-on, let's make some changes to it:

1. Start by running the watch command in your new Add-on's directory 
    ```bash
    yarn watch
    ```
1. Open the `package.json` file and change `productName` and `bgColor`.
1. Edit the `redender.js` file to return a simple gray-outline button:
    ```js
    import { Button } from '@getflywheel/local-components';
	...
    hooks.addContent('SiteInfoOverview', (site) => <Button className="--GrayOutline">My Add-on Button</Button>);
    ```
1. With the Local app open, refresh it by using the shortcut cmd+R (ctrl+R for Windows).
    > If this key command doesn't refresh the page for you, try enabling the Developer tools in Preferences > Advanced > Show Develop Tools
1. You should now be able to see your changes and are well on your way to creating your first Local Add-on!

## How to get started

Let's first install `local-components` in your current project using your preferred package manager:

`yarn add @getflywheel/local-components`

or 

`npm install @getflywheel/local-components`

## Digging deeper

The `local-compoennts` library is broken down into 3 main parts:

1. components
2. styles
3. svg

### Components

These are the visual elements that make up both Local and its Add-ons. 
There are currently 40+ React components in the library. 
Each component consists of a `.jsx`, `index.js`, `README.md` and optional `.sass` file.

It's extremely easy to check out and play around with these components:

1. Pull down the `local-components repository`:
    ```bash
    git clone git@github.com:getflywheel/local-components.git
	```
1. Install
	```bash
	yarn
	```
	or
	```bash
	npm install
	```
1. Run build and watch
	```bash
	
	```
1. Make changes, play around with the `.jsx` and `.sass` file (they should live reload)
1. Have an idea or bug fix? Submit a [pull request](https://github.com/getflywheel/local-components/pulls).

### Styles

The component library leverages CSS Modules to manage and scope styles. 
These are considered **local** styles (not to be confused with the Local app...what are you going to do? `¯\_(ツ)_/¯`)
Scoped local styles are a beautiful thing that allow Local to isolate components, run Add-ons with multiple versions of `local-components` and avoid collisions.

As wonderful as local styles are, there are instances where CSS needs to transcend a components and for that we have **global** styles.
Global styles should be familiar as that's all the web had for 20+ years. 
These styles are intended to be used sparingly as they introduce a lot of challenges when scaling an app with a library of Add-ons and Environments.

There are instances where a scoped component may use a combination of local and global styles to achieve a specific result.
As seen below:

```css
:global(.WindowsToolbar .DragRegion)
```

This is something we try to avoid and are actively working to widdle down to the bare essentials.

If you'd like to learn more about our scoped styles strategy, please check out CSS Modules [here](https://github.com/css-modules/css-modules).

### SVGs

Coming soon!

## More about Add-on Development

We're really excited about the future of Add-ons within Local!
If you haven't heard, Add-ons allow you to create and extend functionality in Local with an ever-growing number of hooks, apis, and features so you and others can get the most out of Local.

If you'd like to learn more about Add-ons, check out our [docs](https://docs.localbyflywheel.com).
