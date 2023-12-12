/*! For license information please see components-layout-Divider-Divider-stories-mdx.30e1329a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_getflywheel_local_components=self.webpackChunk_getflywheel_local_components||[]).push([[8041],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./src/components/layout/Divider/Divider.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{centeredBadge:()=>centeredBadge,default:()=>__WEBPACK_DEFAULT_EXPORT__,divider:()=>divider,lMargin:()=>lMargin,xlMargin:()=>xlMargin});__webpack_require__("./node_modules/react/index.js");var _Users_runner_work_1_s_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_Divider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/layout/Divider/Divider.tsx"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,_Users_runner_work_1_s_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Layout/Divider",component:_Divider__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"A horizontal divider with medium (20px) top and bottom margin."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Divider",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:"Some text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_1__.Z,{marginSize:"m"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\ntincidunt nec orci ac elementum. Sed vitae ligula non dolor\negestas congue. Etiam at luctus sem. Sed metus lorem, dapibus\nnon congue nec, mattis eu leo. In condimentum mi nec tristique\npretium. Aliquam vel urna vitae justo accumsan auctor. Mauris\npurus orci, hendrerit et dignissim eu, efficitur non dui. Donec\nfringilla ipsum eu rutrum ultricies. Mauris vel neque fermentum,\nporta justo id, pretium mauris. Donec rhoncus, ante et laoreet\ntincidunt, leo lorem dapibus dolor, vel ultrices metus odio et\nfelis."})})]})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"L Margin",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:"Some text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_1__.Z,{marginSizeTop:"l"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\ntincidunt nec orci ac elementum. Sed vitae ligula non dolor\negestas congue. Etiam at luctus sem. Sed metus lorem, dapibus\nnon congue nec, mattis eu leo. In condimentum mi nec tristique\npretium. Aliquam vel urna vitae justo accumsan auctor. Mauris\npurus orci, hendrerit et dignissim eu, efficitur non dui. Donec\nfringilla ipsum eu rutrum ultricies. Mauris vel neque fermentum,\nporta justo id, pretium mauris. Donec rhoncus, ante et laoreet\ntincidunt, leo lorem dapibus dolor, vel ultrices metus odio et\nfelis."})})]})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"A horizontal divider with extra-large (40px) margin below it."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"XL Margin",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:"Some text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_1__.Z,{marginSizeBottom:"xl"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\ntincidunt nec orci ac elementum. Sed vitae ligula non dolor\negestas congue. Etiam at luctus sem. Sed metus lorem, dapibus\nnon congue nec, mattis eu leo. In condimentum mi nec tristique\npretium. Aliquam vel urna vitae justo accumsan auctor. Mauris\npurus orci, hendrerit et dignissim eu, efficitur non dui. Donec\nfringilla ipsum eu rutrum ultricies. Mauris vel neque fermentum,\nporta justo id, pretium mauris. Donec rhoncus, ante et laoreet\ntincidunt, leo lorem dapibus dolor, vel ultrices metus odio et\nfelis."})})]})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Divider with a horizontally and vertically centered child element."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Centered Badge",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:"Some text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_1__.Z,{marginSize:"m",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{background:"yellow",padding:"5px 10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Some Badge"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\ntincidunt nec orci ac elementum. Sed vitae ligula non dolor\negestas congue. Etiam at luctus sem. Sed metus lorem, dapibus\nnon congue nec, mattis eu leo. In condimentum mi nec tristique\npretium. Aliquam vel urna vitae justo accumsan auctor. Mauris\npurus orci, hendrerit et dignissim eu, efficitur non dui. Donec\nfringilla ipsum eu rutrum ultricies. Mauris vel neque fermentum,\nporta justo id, pretium mauris. Donec rhoncus, ante et laoreet\ntincidunt, leo lorem dapibus dolor, vel ultrices metus odio et\nfelis."})})]})})})]})}const divider=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:"Some text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_1__.Z,{marginSize:"m"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\ntincidunt nec orci ac elementum. Sed vitae ligula non dolor\negestas congue. Etiam at luctus sem. Sed metus lorem, dapibus\nnon congue nec, mattis eu leo. In condimentum mi nec tristique\npretium. Aliquam vel urna vitae justo accumsan auctor. Mauris\npurus orci, hendrerit et dignissim eu, efficitur non dui. Donec\nfringilla ipsum eu rutrum ultricies. Mauris vel neque fermentum,\nporta justo id, pretium mauris. Donec rhoncus, ante et laoreet\ntincidunt, leo lorem dapibus dolor, vel ultrices metus odio et\nfelis."})})]});divider.storyName="Divider",divider.parameters={storySource:{source:'<div><div>{"Some text"}</div><Divider marginSize="m" /><div><p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\\ntincidunt nec orci ac elementum. Sed vitae ligula non dolor\\negestas congue. Etiam at luctus sem. Sed metus lorem, dapibus\\nnon congue nec, mattis eu leo. In condimentum mi nec tristique\\npretium. Aliquam vel urna vitae justo accumsan auctor. Mauris\\npurus orci, hendrerit et dignissim eu, efficitur non dui. Donec\\nfringilla ipsum eu rutrum ultricies. Mauris vel neque fermentum,\\nporta justo id, pretium mauris. Donec rhoncus, ante et laoreet\\ntincidunt, leo lorem dapibus dolor, vel ultrices metus odio et\\nfelis."}</p></div></div>'}};const lMargin=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:"Some text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_1__.Z,{marginSizeTop:"l"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\ntincidunt nec orci ac elementum. Sed vitae ligula non dolor\negestas congue. Etiam at luctus sem. Sed metus lorem, dapibus\nnon congue nec, mattis eu leo. In condimentum mi nec tristique\npretium. Aliquam vel urna vitae justo accumsan auctor. Mauris\npurus orci, hendrerit et dignissim eu, efficitur non dui. Donec\nfringilla ipsum eu rutrum ultricies. Mauris vel neque fermentum,\nporta justo id, pretium mauris. Donec rhoncus, ante et laoreet\ntincidunt, leo lorem dapibus dolor, vel ultrices metus odio et\nfelis."})})]});lMargin.storyName="L Margin",lMargin.parameters={storySource:{source:'<div><div>{"Some text"}</div><Divider marginSizeTop="l" /><div><p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\\ntincidunt nec orci ac elementum. Sed vitae ligula non dolor\\negestas congue. Etiam at luctus sem. Sed metus lorem, dapibus\\nnon congue nec, mattis eu leo. In condimentum mi nec tristique\\npretium. Aliquam vel urna vitae justo accumsan auctor. Mauris\\npurus orci, hendrerit et dignissim eu, efficitur non dui. Donec\\nfringilla ipsum eu rutrum ultricies. Mauris vel neque fermentum,\\nporta justo id, pretium mauris. Donec rhoncus, ante et laoreet\\ntincidunt, leo lorem dapibus dolor, vel ultrices metus odio et\\nfelis."}</p></div></div>'}};const xlMargin=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:"Some text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_1__.Z,{marginSizeBottom:"xl"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\ntincidunt nec orci ac elementum. Sed vitae ligula non dolor\negestas congue. Etiam at luctus sem. Sed metus lorem, dapibus\nnon congue nec, mattis eu leo. In condimentum mi nec tristique\npretium. Aliquam vel urna vitae justo accumsan auctor. Mauris\npurus orci, hendrerit et dignissim eu, efficitur non dui. Donec\nfringilla ipsum eu rutrum ultricies. Mauris vel neque fermentum,\nporta justo id, pretium mauris. Donec rhoncus, ante et laoreet\ntincidunt, leo lorem dapibus dolor, vel ultrices metus odio et\nfelis."})})]});xlMargin.storyName="XL Margin",xlMargin.parameters={storySource:{source:'<div><div>{"Some text"}</div><Divider marginSizeBottom="xl" /><div><p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\\ntincidunt nec orci ac elementum. Sed vitae ligula non dolor\\negestas congue. Etiam at luctus sem. Sed metus lorem, dapibus\\nnon congue nec, mattis eu leo. In condimentum mi nec tristique\\npretium. Aliquam vel urna vitae justo accumsan auctor. Mauris\\npurus orci, hendrerit et dignissim eu, efficitur non dui. Donec\\nfringilla ipsum eu rutrum ultricies. Mauris vel neque fermentum,\\nporta justo id, pretium mauris. Donec rhoncus, ante et laoreet\\ntincidunt, leo lorem dapibus dolor, vel ultrices metus odio et\\nfelis."}</p></div></div>'}};const centeredBadge=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:"Some text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_1__.Z,{marginSize:"m",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{background:"yellow",padding:"5px 10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Some Badge"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\ntincidunt nec orci ac elementum. Sed vitae ligula non dolor\negestas congue. Etiam at luctus sem. Sed metus lorem, dapibus\nnon congue nec, mattis eu leo. In condimentum mi nec tristique\npretium. Aliquam vel urna vitae justo accumsan auctor. Mauris\npurus orci, hendrerit et dignissim eu, efficitur non dui. Donec\nfringilla ipsum eu rutrum ultricies. Mauris vel neque fermentum,\nporta justo id, pretium mauris. Donec rhoncus, ante et laoreet\ntincidunt, leo lorem dapibus dolor, vel ultrices metus odio et\nfelis."})})]});centeredBadge.storyName="Centered Badge",centeredBadge.parameters={storySource:{source:'<div><div>{"Some text"}</div><Divider marginSize="m"><div style={{\n      background: "yellow",\n      padding: "5px 10px"\n    }}><p>{"Some Badge"}</p></div></Divider><div><p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\\ntincidunt nec orci ac elementum. Sed vitae ligula non dolor\\negestas congue. Etiam at luctus sem. Sed metus lorem, dapibus\\nnon congue nec, mattis eu leo. In condimentum mi nec tristique\\npretium. Aliquam vel urna vitae justo accumsan auctor. Mauris\\npurus orci, hendrerit et dignissim eu, efficitur non dui. Donec\\nfringilla ipsum eu rutrum ultricies. Mauris vel neque fermentum,\\nporta justo id, pretium mauris. Donec rhoncus, ante et laoreet\\ntincidunt, leo lorem dapibus dolor, vel ultrices metus odio et\\nfelis."}</p></div></div>'}};const componentMeta={title:"Layout/Divider",component:_Divider__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["stories-mdx"],includeStories:["divider","lMargin","xlMargin","centeredBadge"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_runner_work_1_s_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);