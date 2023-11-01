/*! For license information please see components-media-ImageCircle-ImageCircle-stories-mdx.c1c338c3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_getflywheel_local_components=self.webpackChunk_getflywheel_local_components||[]).push([[4907],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./src/components/media/ImageCircle/ImageCircle.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{customSize:()=>customSize,default:()=>__WEBPACK_DEFAULT_EXPORT__,imageCircle:()=>imageCircle,small:()=>small,square:()=>square});__webpack_require__("./node_modules/react/index.js");var _Users_runner_work_1_s_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_ImageCircle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/media/ImageCircle/ImageCircle.tsx"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,_Users_runner_work_1_s_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Media/ImageCircle",component:_ImageCircle__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Default image clipped to circle shape.\nThe contained image uses 'object-fit: cover' to ensure that the entire circle area has pixel data within it regardless of the aspect ratio of the original source."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"ImageCircle",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ImageCircle__WEBPACK_IMPORTED_MODULE_1__.Z,{src:"https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Small circle."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Small",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ImageCircle__WEBPACK_IMPORTED_MODULE_1__.Z,{size:"s",src:"https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Custom sized circle."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Custom Size",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ImageCircle__WEBPACK_IMPORTED_MODULE_1__.Z,{size:"100px",src:"https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Image clipped to rounded square shape."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Square",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ImageCircle__WEBPACK_IMPORTED_MODULE_1__.Z,{size:"s",square:!0,src:"https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"})})})]})}const imageCircle=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ImageCircle__WEBPACK_IMPORTED_MODULE_1__.Z,{src:"https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"});imageCircle.storyName="ImageCircle",imageCircle.parameters={storySource:{source:'<ImageCircle src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png" />'}};const small=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ImageCircle__WEBPACK_IMPORTED_MODULE_1__.Z,{size:"s",src:"https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"});small.storyName="Small",small.parameters={storySource:{source:'<ImageCircle size="s" src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png" />'}};const customSize=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ImageCircle__WEBPACK_IMPORTED_MODULE_1__.Z,{size:"100px",src:"https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"});customSize.storyName="Custom Size",customSize.parameters={storySource:{source:'<ImageCircle size="100px" src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png" />'}};const square=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ImageCircle__WEBPACK_IMPORTED_MODULE_1__.Z,{size:"s",square:!0,src:"https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"});square.storyName="Square",square.parameters={storySource:{source:'<ImageCircle size="s" square={true} src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png" />'}};const componentMeta={title:"Media/ImageCircle",component:_ImageCircle__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["stories-mdx"],includeStories:["imageCircle","small","customSize","square"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_runner_work_1_s_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/components/media/ImageCircle/ImageCircle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>ImageCircle_ImageCircle_ImageCircle});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ImageCircle=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/components/media/ImageCircle/ImageCircle.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ImageCircle.Z,options);const ImageCircle_ImageCircle=ImageCircle.Z&&ImageCircle.Z.locals?ImageCircle.Z.locals:void 0;var ClippedContent=__webpack_require__("./src/components/modules/ClippedContent/ClippedContent.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class ImageCircle_ImageCircle_ImageCircle extends react.Component{render(){return(0,jsx_runtime.jsx)(ClippedContent.Z,{className:classnames_default()(ImageCircle_ImageCircle.ImageCircleContainer,this.props.containerClassName,{[ImageCircle_ImageCircle.ImageCircleContainer__SizeSmall]:"s"===this.props.size}),shape:this.props.square?"rect-rounded":"circle",style:{..."s"!==this.props.size&&"m"!==this.props.size&&{width:this.props.size,minWidth:this.props.size,height:this.props.size}},tag:this.props.tag,useFullHeight:!1,useFullWidth:!1,children:(0,jsx_runtime.jsx)("img",{className:classnames_default()(ImageCircle_ImageCircle.ImageCircle,this.props.className),id:this.props.id,onError:this.props.onError,onLoad:this.props.onLoad,src:this.props.src,style:{...this.props.style}})})}}ImageCircle_ImageCircle_ImageCircle.defaultProps={size:"m",square:!1,tag:"div"};try{ImageCircle_ImageCircle_ImageCircle.displayName="ImageCircle",ImageCircle_ImageCircle_ImageCircle.__docgenInfo={description:"",displayName:"ImageCircle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"FunctionGeneric"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"FunctionGeneric"}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"string"}},square:{defaultValue:{value:"false"},description:"",name:"square",required:!1,type:{name:"boolean"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},tag:{defaultValue:{value:"div"},description:"",name:"tag",required:!1,type:{name:"string"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"((element: HTMLElement) => string | void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},"aria-checked":{defaultValue:null,description:"",name:"aria-checked",required:!1,type:{name:'boolean | "mixed" | "false" | "true"'}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"",name:"aria-expanded",required:!1,type:{name:'boolean | "false" | "true"'}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/media/ImageCircle/ImageCircle.tsx#ImageCircle"]={docgenInfo:ImageCircle_ImageCircle_ImageCircle.__docgenInfo,name:"ImageCircle",path:"src/components/media/ImageCircle/ImageCircle.tsx#ImageCircle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/modules/ClippedContent/ClippedContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>ClippedContent_ClippedContent_ClippedContent});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ClippedContent=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/components/modules/ClippedContent/ClippedContent.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ClippedContent.Z,options);const ClippedContent_ClippedContent=ClippedContent.Z&&ClippedContent.Z.locals?ClippedContent.Z.locals:void 0;var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class ClippedContent_ClippedContent_ClippedContent extends react.Component{render(){const ContainerTag=this.props.tag;return(0,jsx_runtime.jsx)(ContainerTag,{className:classnames_default()(ClippedContent_ClippedContent.ClippedContent,this.props.className,{[ClippedContent_ClippedContent.ClippedContent__AlignX]:"center"===this.props.alignX,[ClippedContent_ClippedContent.ClippedContent__AlignY]:"center"===this.props.alignY,[ClippedContent_ClippedContent.ClippedContent__FullHeight]:this.props.useFullHeight,[ClippedContent_ClippedContent.ClippedContent__FullWidth]:this.props.useFullWidth,[ClippedContent_ClippedContent.ClippedContent__ShapeCircle]:"circle"===this.props.shape}),id:this.props.id,style:{...this.props.style,...this.props.height&&{height:this.props.height},...this.props.width&&{width:this.props.width}},children:this.props.children})}}ClippedContent_ClippedContent_ClippedContent.defaultProps={alignX:"none",alignY:"none",shape:"rect-rounded",tag:"div",useFullHeight:!0,useFullWidth:!0};try{ClippedContent_ClippedContent_ClippedContent.displayName="ClippedContent",ClippedContent_ClippedContent_ClippedContent.__docgenInfo={description:"",displayName:"ClippedContent",props:{alignX:{defaultValue:{value:"none"},description:"",name:"alignX",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"center"'}]}},alignY:{defaultValue:{value:"none"},description:"",name:"alignY",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"center"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},shape:{defaultValue:{value:"rect-rounded"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rect-rounded"'}]}},tag:{defaultValue:{value:"div"},description:"",name:"tag",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},useFullHeight:{defaultValue:{value:"true"},description:"",name:"useFullHeight",required:!1,type:{name:"boolean"}},useFullWidth:{defaultValue:{value:"true"},description:"",name:"useFullWidth",required:!1,type:{name:"boolean"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"((element: HTMLElement) => string | void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},"aria-checked":{defaultValue:null,description:"",name:"aria-checked",required:!1,type:{name:'boolean | "mixed" | "false" | "true"'}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"",name:"aria-expanded",required:!1,type:{name:'boolean | "false" | "true"'}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modules/ClippedContent/ClippedContent.tsx#ClippedContent"]={docgenInfo:ClippedContent_ClippedContent_ClippedContent.__docgenInfo,name:"ClippedContent",path:"src/components/modules/ClippedContent/ClippedContent.tsx#ClippedContent"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/components/media/ImageCircle/ImageCircle.sass":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ImageCircleContainer_F6xkT_v17-7-3-beta-14{width:40px;min-width:40px;height:40px}.ImageCircleContainer_F6xkT_v17-7-3-beta-14.ImageCircleContainer__SizeSmall_laBki_v17-7-3-beta-14{width:32px;min-width:32px;height:32px}.ImageCircleContainer_F6xkT_v17-7-3-beta-14 .ImageCircle_m1YO1_v17-7-3-beta-14{width:100%;height:100%;object-fit:cover}","",{version:3,sources:["webpack://./src/components/media/ImageCircle/ImageCircle.sass"],names:[],mappings:"AAEA,4CACC,UAAA,CACA,cAAA,CACA,WAAA,CAEA,kGACC,UAAA,CACA,cAAA,CACA,WAAA,CAED,+EACC,UAAA,CACA,WAAA,CACA,gBAAA",sourcesContent:["@import '../../../styles/_partials/index'\n\n.ImageCircleContainer\n\twidth: 40px\n\tmin-width: 40px\n\theight: 40px\n\n\t&.ImageCircleContainer__SizeSmall\n\t\twidth: 32px\n\t\tmin-width: 32px\n\t\theight: 32px\n\n\t.ImageCircle\n\t\twidth: 100%\n\t\theight: 100%\n\t\tobject-fit: cover\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ImageCircleContainer:"ImageCircleContainer_F6xkT_v17-7-3-beta-14",ImageCircleContainer__SizeSmall:"ImageCircleContainer__SizeSmall_laBki_v17-7-3-beta-14",ImageCircle:"ImageCircle_m1YO1_v17-7-3-beta-14"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/components/modules/ClippedContent/ClippedContent.sass":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ClippedContent__zFRy_v17-7-3-beta-14{display:flex;flex-direction:column;clip-path:inset(-1px 0 round 4px)}.ClippedContent__zFRy_v17-7-3-beta-14.ClippedContent__AlignX_KL953_v17-7-3-beta-14{justify-content:center}.ClippedContent__zFRy_v17-7-3-beta-14.ClippedContent__AlignY_czK9X_v17-7-3-beta-14{align-items:center}.ClippedContent__zFRy_v17-7-3-beta-14.ClippedContent__FullHeight_Ni3U5_v17-7-3-beta-14{height:100%}.ClippedContent__zFRy_v17-7-3-beta-14.ClippedContent__FullWidth_ZnQxa_v17-7-3-beta-14{width:100%}.ClippedContent__zFRy_v17-7-3-beta-14.ClippedContent__ShapeCircle_l5Im1_v17-7-3-beta-14{clip-path:circle(50%)}","",{version:3,sources:["webpack://./src/components/modules/ClippedContent/ClippedContent.sass"],names:[],mappings:"AAEA,sCACC,YAAA,CACA,qBAAA,CACA,iCAAA,CAEA,mFACC,sBAAA,CAED,mFACC,kBAAA,CAED,uFACC,WAAA,CAED,sFACC,UAAA,CAED,wFACC,qBAAA",sourcesContent:["@import '../../../styles/_partials/index'\n\n.ClippedContent\n\tdisplay: flex\n\tflex-direction: column\n\tclip-path: inset(-1px 0 round 4px)\n\n\t&.ClippedContent__AlignX\n\t\tjustify-content: center\n\n\t&.ClippedContent__AlignY\n\t\talign-items: center\n\n\t&.ClippedContent__FullHeight\n\t\theight: 100%\n\n\t&.ClippedContent__FullWidth\n\t\twidth: 100%\n\n\t&.ClippedContent__ShapeCircle\n\t\tclip-path: circle(50%)\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ClippedContent:"ClippedContent__zFRy_v17-7-3-beta-14",ClippedContent__AlignX:"ClippedContent__AlignX_KL953_v17-7-3-beta-14",ClippedContent__AlignY:"ClippedContent__AlignY_czK9X_v17-7-3-beta-14",ClippedContent__FullHeight:"ClippedContent__FullHeight_Ni3U5_v17-7-3-beta-14",ClippedContent__FullWidth:"ClippedContent__FullWidth_ZnQxa_v17-7-3-beta-14",ClippedContent__ShapeCircle:"ClippedContent__ShapeCircle_l5Im1_v17-7-3-beta-14"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);