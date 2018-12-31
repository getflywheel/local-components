# withMargin

## Considerations
- Margin styles are generated at runtime, have a specificity of 0-1-0 by default (.class), and therefore may not take precedence if another class rule -- with the same specificity -- was loaded afterwards. As such, make sure the component `withMargin` wraps does not indepedently set margin on itself or uses the `selectorPrefix` option to increase its css specificity.


## Bugs
- when switching 'useSeparateClassnamesForEachMarginProp' there's one example that's different 🤔 (this is because of load order and is a serious issue ... not sure there's a good way to solve this ... update: there is a decent way ... add another class ... just make one up for non-'margin' shorthand props if using separate classNames)
- individual prop styles should set individual stylesheets so they can be reused (that's the whole point genius)(there are some serious issues with this idea)


## Potential Enhancements
- offset support
- tests
- where :export { none: 0; xs: 5px; ... } lives
- cleanup
- shorten invalid css characters used with replace
- try with other components
- try with a non-component (just element) to see if that can work
- Could add package version to `marginStyleSheetId` to scope margins styles to a particular version, but perhaps it would be best not to since these styles should possibly transcend versions (plus this would result in fewer generated styles).
