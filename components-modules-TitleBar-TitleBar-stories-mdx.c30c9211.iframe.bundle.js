/*! For license information please see components-modules-TitleBar-TitleBar-stories-mdx.c30c9211.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_getflywheel_local_components=self.webpackChunk_getflywheel_local_components||[]).push([[673],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./src/components/modules/TitleBar/TitleBar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>TitleBar_stories,titleBar:()=>titleBar,withRightAlignedContent:()=>withRightAlignedContent,withRightAlignedCta:()=>withRightAlignedCta});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TitleBar=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/components/modules/TitleBar/TitleBar.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TitleBar.Z,options);const TitleBar_TitleBar=TitleBar.Z&&TitleBar.Z.locals?TitleBar.Z.locals:void 0;var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Container=__webpack_require__("./src/components/modules/Container/Container.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TitleBar_TitleBar_TitleBar=props=>(0,jsx_runtime.jsx)(Container.W,{children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()(TitleBar_TitleBar.TitleBar,"TitleBar",props.className),id:props.id,style:props.style,children:[(0,jsx_runtime.jsx)("div",{children:props.title}),props.children&&(0,jsx_runtime.jsx)("div",{className:TitleBar_TitleBar.TitleBar_Content,children:props.children})]})});try{TitleBar_TitleBar_TitleBar.displayName="TitleBar",TitleBar_TitleBar_TitleBar.__docgenInfo={description:"",displayName:"TitleBar",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},container:{defaultValue:null,description:"",name:"container",required:!1,type:{name:"IContainerProps"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"((element: HTMLElement) => string | void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},"aria-checked":{defaultValue:null,description:"",name:"aria-checked",required:!1,type:{name:'boolean | "mixed" | "false" | "true"'}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"",name:"aria-expanded",required:!1,type:{name:'boolean | "false" | "true"'}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modules/TitleBar/TitleBar.tsx#TitleBar"]={docgenInfo:TitleBar_TitleBar_TitleBar.__docgenInfo,name:"TitleBar",path:"src/components/modules/TitleBar/TitleBar.tsx#TitleBar"})}catch(__react_docgen_typescript_loader_error){}var blocks=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p",code:"code",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(blocks.h_,{title:"Modules/TitleBar",component:TitleBar_TitleBar_TitleBar}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"TitleBar"})," component is used to create context around its functionality and is particularly useful for Add-ons located within inside of existing views."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["For more information on the ",(0,jsx_runtime.jsx)(_components.code,{children:"TitleBar"})," component and its use, please check out our ",(0,jsx_runtime.jsx)(_components.a,{href:"https://build.localbyflywheel.com/project/designing-your-add-on/creating-your-layout#the-title-bar",target:"_blank",rel:"nofollow noopener noreferrer",children:"design system"}),"."]}),"\n",(0,jsx_runtime.jsx)(blocks.Xz,{children:(0,jsx_runtime.jsx)(blocks.oG,{name:"TitleBar",children:(0,jsx_runtime.jsx)(TitleBar_TitleBar_TitleBar,{title:"Add-on Title"})})}),"\n",(0,jsx_runtime.jsx)(blocks.Xz,{children:(0,jsx_runtime.jsx)(blocks.oG,{name:"With right-aligned content",children:(0,jsx_runtime.jsx)(TitleBar_TitleBar_TitleBar,{title:"Add-on with title",children:(0,jsx_runtime.jsx)(_components.p,{children:"optional right content"})})})}),"\n",(0,jsx_runtime.jsx)(blocks.Xz,{children:(0,jsx_runtime.jsx)(blocks.oG,{name:"With right-aligned CTA",children:(0,jsx_runtime.jsxs)(TitleBar_TitleBar_TitleBar,{title:"Add-on with title",children:[(0,jsx_runtime.jsx)("span",{children:"optional right content"}),(0,jsx_runtime.jsx)("a",{href:"#",children:"Action link"})]})})})]})}const titleBar=()=>(0,jsx_runtime.jsx)(TitleBar_TitleBar_TitleBar,{title:"Add-on Title"});titleBar.storyName="TitleBar",titleBar.parameters={storySource:{source:'<TitleBar title="Add-on Title" />'}};const withRightAlignedContent=()=>(0,jsx_runtime.jsx)(TitleBar_TitleBar_TitleBar,{title:"Add-on with title",children:(0,jsx_runtime.jsx)("p",{children:"optional right content"})});withRightAlignedContent.storyName="With right-aligned content",withRightAlignedContent.parameters={storySource:{source:'<TitleBar title="Add-on with title"><p>{"optional right content"}</p></TitleBar>'}};const withRightAlignedCta=()=>(0,jsx_runtime.jsxs)(TitleBar_TitleBar_TitleBar,{title:"Add-on with title",children:[(0,jsx_runtime.jsx)("span",{children:"optional right content"}),(0,jsx_runtime.jsx)("a",{href:"#",children:"Action link"})]});withRightAlignedCta.storyName="With right-aligned CTA",withRightAlignedCta.parameters={storySource:{source:'<TitleBar title="Add-on with title"><span>{"optional right content"}</span><a href="#">{"Action link"}</a></TitleBar>'}};const componentMeta={title:"Modules/TitleBar",component:TitleBar_TitleBar_TitleBar,tags:["stories-mdx"],includeStories:["titleBar","withRightAlignedContent","withRightAlignedCta"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const TitleBar_stories=componentMeta},"./src/components/modules/Container/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>Container});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),ContainerMarginLookupEnum=function(ContainerMarginLookupEnum){return ContainerMarginLookupEnum.none="none",ContainerMarginLookupEnum.xs="xs",ContainerMarginLookupEnum.s="s",ContainerMarginLookupEnum.m="m",ContainerMarginLookupEnum.l="l",ContainerMarginLookupEnum.xl="xl",ContainerMarginLookupEnum}(ContainerMarginLookupEnum||{}),ContainerMarginPropNameEnum=function(ContainerMarginPropNameEnum){return ContainerMarginPropNameEnum.margin="margin",ContainerMarginPropNameEnum.marginBottom="marginBottom",ContainerMarginPropNameEnum.marginLeft="marginLeft",ContainerMarginPropNameEnum.marginRight="marginRight",ContainerMarginPropNameEnum.marginTop="marginTop",ContainerMarginPropNameEnum}(ContainerMarginPropNameEnum||{});class ContainerMarginHelper{static getContainerMarginStyle(props){return{...this.processMarginType(props.margin,ContainerMarginPropNameEnum.margin),...this.processMarginType(props.marginTop,ContainerMarginPropNameEnum.marginTop),...this.processMarginType(props.marginRight,ContainerMarginPropNameEnum.marginRight),...this.processMarginType(props.marginBottom,ContainerMarginPropNameEnum.marginBottom),...this.processMarginType(props.marginLeft,ContainerMarginPropNameEnum.marginLeft)}}static processMarginType(marginValue,propName){if(void 0!==marginValue)return this.wrapReturnValue(this.parseMargin(marginValue),propName)}static parseMargin(margin){return margin.split(" ").reduce(((list,value)=>(list.push(this.formatFinalValue(this.parseExpression(value))),list)),[]).join(" ")}static formatFinalValue(value){if(void 0!==value)return"number"==typeof value&&0!==value?`${value}px`:value}static lookupValue(value){return void 0===value?value:this.sizeLookups.get(value)}static wrapReturnValue(value,propName){if(void 0!==value)return{[propName]:value}}static parseExpression(s){const expressionShiftedValues=s.match(/[+\-]*(\.\w+|\w+(\.\w+)?)/g)||[];let total=0;for(;expressionShiftedValues.length;){const result=this.getExpressionShiftedValuesAndSign(expressionShiftedValues.shift());void 0===result||isNaN(parseInt(result.value))?console.warn(`Warning - ContainerMargin: The margin value '${result&&result.value}' from the original expression '${s}' is not valid and will be ignored.`):"+"===result.sign?total+=parseFloat(result.value):total-=parseFloat(result.value)}return total}static getExpressionShiftedValuesAndSign(shiftedValue){if(void 0===shiftedValue)return shiftedValue;let lookup,sign=shiftedValue.startsWith("-")?"-":"+",value=shiftedValue;return(shiftedValue.startsWith("-")||shiftedValue.startsWith("+"))&&(value=shiftedValue.slice(1,shiftedValue.length)),lookup=this.lookupValue(value),{shiftedValue,sign,value:void 0!==lookup?String(lookup):value}}}ContainerMarginHelper.sizeLookups=new Map(Object.entries({0:0,[ContainerMarginLookupEnum.none]:0,[ContainerMarginLookupEnum.xs]:5,[ContainerMarginLookupEnum.s]:10,[ContainerMarginLookupEnum.m]:20,[ContainerMarginLookupEnum.l]:30,[ContainerMarginLookupEnum.xl]:40}));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=react.forwardRef(((props,ref)=>{const Tag=props.element||"div",element=props.element,propsWithoutDefaults={...props};delete propsWithoutDefaults.children,delete propsWithoutDefaults.disabled;const doRenderOnlyChildren=!0===props.disabled||0===Object.keys(propsWithoutDefaults).length,doRenderContainerWithTagName="string"==typeof props.element||void 0===props.element;return doRenderOnlyChildren?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.children}):doRenderContainerWithTagName?(0,jsx_runtime.jsx)(Tag,{className:classnames_default()(props.className),id:props.id,style:{...props.style,...ContainerMarginHelper.getContainerMarginStyle(props)},onClick:props.onClick,onKeyDown:props.onKeyDown,tabIndex:props.tabIndex,"aria-checked":props["aria-checked"],ref,children:props.children}):react.cloneElement(element,{children:Array(props.children||[]).concat(element.props.children||[]),className:classnames_default()(props.className,element.props.className),style:{...props.style,...element.props.style,...ContainerMarginHelper.getContainerMarginStyle(props)},onClick:props.onClick,onKeyDown:props.onKeyDown,tabIndex:props.tabIndex,ref,"aria-checked":props["aria-checked"]})}));Container.defaultProps={};try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"((element: HTMLElement) => string | void)"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-checked":{defaultValue:null,description:"",name:"aria-checked",required:!1,type:{name:'boolean | "mixed" | "false" | "true"'}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"",name:"aria-expanded",required:!1,type:{name:'boolean | "false" | "true"'}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},disabled:{defaultValue:null,description:"Whether to include the container (false) or exclude it (true)",name:"disabled",required:!1,type:{name:"boolean"}},element:{defaultValue:null,description:"The container element or tag (if string) to be used as the container.",name:"element",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},margin:{defaultValue:null,description:"Margin values to be set to 'style' prop",name:"margin",required:!1,type:{name:"ContainerMarginLookupType"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ContainerMarginLookupType"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ContainerMarginLookupType"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ContainerMarginLookupType"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ContainerMarginLookupType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modules/Container/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/modules/Container/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/components/modules/TitleBar/TitleBar.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".TitleBar_BVBDm_v17-7-3-beta-14{display:flex;flex-direction:row;justify-content:space-between;flex:1;width:100%;padding:15px 20px 15px 30px;font-weight:700;background:#e7e7e7}.Theme__Dark .Theme__Light .TitleBar_BVBDm_v17-7-3-beta-14{background:#e7e7e7}.Theme__Dark .TitleBar_BVBDm_v17-7-3-beta-14 .Theme__Light{background:#e7e7e7}.Theme__Dark .Theme__Inverted .TitleBar_BVBDm_v17-7-3-beta-14{background:#e7e7e7}.Theme__Dark .TitleBar_BVBDm_v17-7-3-beta-14{background:#434344}.Theme__Light .Theme__Dark .TitleBar_BVBDm_v17-7-3-beta-14{background:#434344}.Theme__Light .TitleBar_BVBDm_v17-7-3-beta-14 .Theme__Dark{background:#434344}.Theme__Light .Theme__Inverted .TitleBar_BVBDm_v17-7-3-beta-14{background:#434344}.TitleBar_Content_PIG5__v17-7-3-beta-14{margin-left:20px;text-align:right;font-weight:300}.TitleBar_Content_PIG5__v17-7-3-beta-14>*{margin-right:10px}.TitleBar_Content_PIG5__v17-7-3-beta-14>*:last-child{margin-right:0}","",{version:3,sources:["webpack://./src/components/modules/TitleBar/TitleBar.scss","webpack://./src/styles/_partials/_variables.scss","webpack://./src/styles/_partials/_theme.scss"],names:[],mappings:"AAEA,gCACC,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,MAAA,CACA,UAAA,CACA,2BAAA,CACA,eCmFsB,CCnCrB,kBD/CO,CCGE,2DA4CT,kBD/CO,CCQE,2DAuCT,kBD/CO,CCaE,8DAkCT,kBD/CO,CCsBE,6CA4BT,kBDrDY,CC8BH,2DAuBT,kBDrDY,CCmCH,2DAkBT,kBDrDY,CCwCH,+DAaT,kBDrDY,CDMd,wCACC,gBAAA,CACA,gBAAA,CACA,eCyEuB,CDvEvB,0CACC,iBAAA,CAGD,qDACC,cAAA",sourcesContent:["@import '../../../styles/_partials/index';\n\n.TitleBar {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\tflex: 1; // fill width if within flexbox display (the assumption is that they would only be placing this component within a vertical flex direction)\n\twidth: 100%;\n\tpadding: 15px 20px 15px 30px;\n\tfont-weight: $font-weight-700-bold;\n\t@include theme-background-gray15-else-graydark50;\n}\n\n.TitleBar_Content {\n\tmargin-left: 20px;\n\ttext-align: right;\n\tfont-weight: $font-weight-300-light;\n\n\t> * {\n\t\tmargin-right: 10px;\n\t}\n\n\t> *:last-child {\n\t\tmargin-right: 0;\n\t}\n}\n",'$black: #000;\n$white: #fff;\n\n$gray: #5d5e5e;\n$gray-darker: #131313;\n$gray-dark: #262727;\n$gray-dark-alt: #303031;\n$gray-dark50: #434344;\n$gray75: #9f9c9c;\n$gray25: #c7c4c4;\n$gray15: #e7e7e7;\n$gray5: #f7f6f6;\n$gray2: #fafafa;\n$gray1: #fcfcfc;\n\n$green: #51bb7b;\n$green-dark: #267048;\n$green-dark50: #419564;\n$green75: #add9b8;\n$green25: #d4ead9;\n$green15: #D8F0DE;\n$green2: #f4faf7;\n\n$blue: #50c6db;\n$blue-dark: #01516e;\n$blue-dark25: #296a82;\n$blue-dark50: #338199;\n$blue75: #b0e0ea;\n\n$blue25: #d6eef2;\n$blue5: #8fd6e3;\n\n$red: #ef4e65;\n$red-darker: #933140;\n$red-dark: #8c2738;\n$red-dark50: #ba3e51;\n$red75: #f18085;\n$red25: #fad1cd;\n$red15: #FFE2DF;\n\n$orange: #f47820;\n$orange-alt: #f48720;\n$orange-dark: #8e4402;\n$orange-dark50: #bb5f23;\n$orange75: #fab889;\n$orange25: #fdd9be;\n\n$pink: #e0368c;\n$pink-dark: #851252;\n$pink-dark50: #af2a6f;\n$pink75: #eba0c0;\n$pink25: #f3cddd;\n\n$purple: #8351a0;\n$purple-dark: #4e2760;\n$purple-dark50: #693f7e;\n$purple75: #b69cc8;\n$purple25: #b69cc8;\n\n$yellow: #f0ce15;\n$yellow-dark: #9a7700;\n$yellow-dark50: #c3a028;\n$yellow75: #f6e299;\n$yellow25: #f9edc9;\n\n/* Fonts */\n$museo-sans-rounded: "Museo Sans Rounded", sans-serif;\n$system-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n// Reusable Color Patterns\n\n$theme-border-light: $gray15;\n$theme-border-dark: $gray-dark50;\n$theme-input-border-box-shadow-dark: $gray;\n$theme-overlay-box-shadow-light: rgba(0, 0, 0, 0.09);\n$theme-overlay-box-shadow-dark: rgba(0, 0, 0, 0.4);\n\n\n$font-size-header-xs: 1.4rem;\n$font-size-header-s: 1.8rem;\n$font-size-header-m: 2.4rem;\n$font-size-header-l: 3.2rem;\n$font-size-header-xl: 4.2rem;\n$font-size-content-xs: 1.1rem;\n$font-size-content-s: 1.2rem;\n$font-size-content-m: 1.4rem;\n$font-size-content-l: 1.6rem;\n$font-size-content-xl: 1.8rem;\n\n$font-weight-300-light: 300;\n$font-weight-400-normal: 400;\n$font-weight-500-medium: 500;\n$font-weight-700-bold: 700;\n$font-weight-900-heavy: 900;\n\n$gutter-size-xs: 5px;\n$gutter-size-s: 10px;\n$gutter-size-m: 20px;\n$gutter-size-l: 30px;\n$gutter-size-xl: 40px;\n','@import \'./variables\';\n\n//\n// Theme Utilities\n//\n\n@mixin if-theme-light {\n\t// apply as default (no .Theme__Light selector required)\n\t@content;\n\n\t// loop over each selector for the css rule to correctly apply each style\n\t@each $selector in selector-parse(&) {\n\t\t// support explicitly setting section theme color for selector pattern: html .Theme__Dark div .Theme__Light div .my-custom-selector\n\t\t@at-root :global(.Theme__Dark) :global(.Theme__Light) #{$selector} {\n\t\t\t@content;\n\t\t}\n\n\t\t// support explicitly setting section theme color for selector pattern: html .Theme__Dark div .my-custom-selector div .Theme__Light div (e.g .Theme__Dark body .Theme__Light)\n\t\t@at-root :global(.Theme__Dark) #{$selector} :global(.Theme__Light) {\n\t\t\t@content;\n\t\t}\n\n\t\t// Handle basic theme inversion\n\t\t@at-root :global(.Theme__Dark) :global(.Theme__Inverted) #{$selector} {\n\t\t\t@content;\n\t\t}\n\t}\n}\n\n@mixin if-theme-dark {\n\t// loop over each selector for the css rule to correctly apply each style\n\t@each $selector in selector-parse(&) {\n\t\t@at-root :global(.Theme__Dark) #{$selector} {\n\t\t\t@content;\n\t\t}\n\n\t\t// support explicitly setting section theme color for selector pattern: html .Theme__Light div .Theme__Dark div .my-custom-selector\n\t\t@at-root :global(.Theme__Light) :global(.Theme__Dark) #{$selector} {\n\t\t\t@content;\n\t\t}\n\n\t\t// support explicitly setting section theme color for selector pattern: html .Theme__Light div .my-custom-selector div .Theme__Dark div (e.g .Theme__Light body .Theme__Dark)\n\t\t@at-root :global(.Theme__Light) #{$selector} :global(.Theme__Dark) {\n\t\t\t@content;\n\t\t}\n\n\t\t// Handle basic theme inversion\n\t\t@at-root :global(.Theme__Light) :global(.Theme__Inverted) #{$selector} {\n\t\t\t@content;\n\t\t}\n\t}\n}\n\n// Theme General CSS Props\n\n@mixin __theme-background($lightmodeBackground, $darkmodeBackground) {\n\t@include if-theme-light() {\n\t\tbackground: $lightmodeBackground;\n\t}\n\t@include if-theme-dark() {\n\t\tbackground: $darkmodeBackground;\n\t}\n}\n\n@mixin theme-background-gray1-else-none-disabled {\n\t@include __theme-background($gray1, none);\n}\n\n@mixin theme-background-gray2-else-gray2row {\n\t@include __theme-background($gray2, #292A2A); // 35% of $gray-dark50\n}\n\n@mixin theme-background-gray2-else-graydark {\n\t@include __theme-background($gray2, $gray-dark);\n}\n\n@mixin theme-background-gray2-else-graydark50 {\n\t@include __theme-background($gray2, $gray-dark50);\n}\n\n@mixin theme-background-gray5-else-graydarkalt {\n\t@include __theme-background($gray5, $gray-dark-alt);\n}\n\n@mixin theme-background-gray5-else-gray-dark50 {\n\t@include __theme-background($gray5, $gray-dark50);\n}\n\n@mixin theme-background-gray15-else-graydark50 {\n\t@include __theme-background($gray15, $gray-dark50);\n}\n\n@mixin theme-background-gray15-else-graydarkalt {\n\t@include __theme-background($gray15, $gray-dark-alt);\n}\n\n@mixin theme-background-none-else-graydark50 {\n\t@include __theme-background(none, $gray-dark50);\n}\n\n@mixin theme-background-gray15-else-gray {\n\t@include __theme-background($gray15, $gray);\n}\n\n@mixin theme-background-gray25-else-gray {\n\t@include __theme-background($gray25, $gray);\n}\n\n@mixin theme-background-gray25-else-graydark50 {\n\t@include __theme-background($gray25, $gray-dark50);\n}\n\n@mixin theme-background-graydark-else-white {\n\t@include __theme-background($gray-dark, $white);\n}\n\n@mixin theme-background-green-else-graydark {\n\t@include __theme-background($green, $gray-dark);\n}\n\n@mixin theme-background-greendark-else-green {\n\t@include __theme-background($green-dark, $green);\n}\n\n@mixin theme-background-greendark50-else-green {\n\t@include __theme-background($green-dark50, $green);\n}\n\n@mixin theme-background-greendark50-else-graydarker {\n\t@include __theme-background($green-dark50, $gray-darker);\n}\n\n@mixin theme-background-white-else-graydark {\n\t@include __theme-background($white, $gray-dark);\n}\n\n@mixin theme-background-white-else-gray25 {\n\t@include __theme-background($white, $gray25);\n}\n\n@mixin theme-background-white-else-graydarkalt {\n\t@include __theme-background($white, $gray-dark-alt);\n}\n\n@mixin theme-background-white-else-graydark50 {\n\t@include __theme-background($white, $gray-dark50);\n}\n\n@mixin theme-background-white-else-gray3row {\n\t@include __theme-background($white, #373737);\n}\n\n@mixin theme-background-white85-else-graydark {\n\t@include __theme-background(rgba($white, .85), $gray-dark);\n}\n\n@mixin __theme-border($property: "", $lightmodeLighten: 0%, $darkmodeLighten: 0%, $border-light: $theme-border-light, $border-dark: $theme-border-dark, $border-width: 2px) {\n\t@if $property == "" or $property == "box-shadow" {\n\t\t@include if-theme-light() {\n\t\t\tbox-shadow: 0 0 0 $border-width $border-light;\n\t\t}\n\t\t@include if-theme-dark() {\n\t\t\tbox-shadow: 0 0 0 $border-width lighten($border-dark, $darkmodeLighten);\n\t\t}\n\t}\n\t@else {\n\t\t@include if-theme-light() {\n\t\t\t#{$property}: $border-width solid $border-light;\n\t\t}\n\t\t@include if-theme-dark() {\n\t\t\t#{$property}: $border-width solid lighten($border-dark, $darkmodeLighten);\n\t\t}\n\t}\n}\n\n@mixin theme-border($lightmodeLighten: 0%, $darkmodeLighten: 0%) {\n\t@include __theme-border("", $lightmodeLighten, $darkmodeLighten);\n}\n\n@mixin theme-border-bottom($lightmodeLighten: 0%, $darkmodeLighten: 0%) {\n\t@include __theme-border("border-bottom", $lightmodeLighten, $darkmodeLighten);\n}\n\n@mixin theme-border-left($lightmodeLighten: 0%, $darkmodeLighten: 0%) {\n\t@include __theme-border("border-left", $lightmodeLighten, $darkmodeLighten);\n}\n\n@mixin theme-border-right($lightmodeLighten: 0%, $darkmodeLighten: 0%) {\n\t@include __theme-border("border-right", $lightmodeLighten, $darkmodeLighten);\n}\n\n@mixin theme-border-top($lightmodeLighten: 0%, $darkmodeLighten: 0%) {\n\t@include __theme-border("border-top", $lightmodeLighten, $darkmodeLighten);\n}\n\n@mixin __theme-border-color($property: "border-color") {\n\t@include if-theme-light() {\n\t\t#{$property}: $theme-border-light;\n\t}\n\t@include if-theme-dark() {\n\t\t#{$property}: $theme-border-dark;\n\t}\n}\n\n@mixin theme-border-color {\n\t@include __theme-border-color;\n}\n\n@mixin __theme-color($colorLight, $colorDark) {\n\t@include if-theme-light() {\n\t\tcolor: $colorLight;\n\t}\n\t@include if-theme-dark() {\n\t\tcolor: $colorDark;\n\t}\n}\n\n@mixin theme-color-black-else-white {\n\t@include __theme-color($black, $white);\n}\n\n@mixin theme-color-gray-else-gray15 {\n\t@include __theme-color($gray, $gray15);\n}\n\n@mixin theme-color-gray-else-gray25 {\n\t@include __theme-color($gray, $gray25);\n}\n\n@mixin theme-color-gray-else-gray75 {\n\t@include __theme-color($gray, $gray75);\n}\n\n@mixin theme-color-gray-else-white {\n\t@include __theme-color($gray, $white);\n}\n\n@mixin theme-color-gray15-else-gray-dark50-disabled {\n\t@include __theme-color($gray15, $gray-dark50);\n}\n\n@mixin theme-color-gray25-else-gray {\n\t@include __theme-color($gray25, $gray);\n}\n\n@mixin theme-color-gray25-else-gray-dark50 {\n\t@include __theme-color($gray25, $gray-dark50);\n}\n\n@mixin theme-color-gray25-else-gray25 {\n\t@include __theme-color($gray25, $gray25);\n}\n\n@mixin theme-color-gray25-else-white {\n\t@include __theme-color($gray25, $white);\n}\n\n@mixin theme-color-gray25-else-gray75 {\n\t@include __theme-color($gray25, $gray75);\n}\n\n@mixin theme-color-gray75-else-gray25 {\n\t@include __theme-color($gray75, $gray25);\n}\n\n@mixin theme-color-gray75-else-white {\n\t@include __theme-color($gray75, $white);\n}\n\n@mixin theme-color-graydark-else-white {\n\t@include __theme-color($gray-dark, $white);\n}\n\n@mixin theme-color-graydark-else-gray25 {\n\t@include __theme-color($gray-dark, $gray25);\n}\n\n@mixin theme-color-graydark50-else-gray25 {\n\t@include __theme-color($gray-dark50, $gray25);\n}\n\n@mixin theme-color-graydark50-else-white {\n\t@include __theme-color($gray-dark50, $white);\n}\n\n@mixin theme-color-white-else-gray25 {\n\t@include __theme-color($white, $gray25);\n}\n\n@mixin theme-color-red-dark50-else-red {\n\t@include __theme-color($red-dark50, $red);\n}\n\n@mixin __theme-fill($fillLight, $fillDark) {\n\t@include if-theme-light() {\n\t\tfill: $fillLight;\n\t}\n\t@include if-theme-dark() {\n\t\tfill: $fillDark;\n\t}\n}\n\n@mixin theme-fill-gray-else-white {\n\t@include __theme-fill($gray, $white);\n}\n\n@mixin theme-fill-gray15-else-gray {\n\t@include __theme-fill($gray15, $gray);\n}\n\n@mixin theme-fill-gray25-else-gray75 {\n\t@include __theme-fill($gray25, $gray75);\n}\n\n@mixin theme-fill-gray75-else-gray25 {\n\t@include __theme-fill($gray75, $gray25)\n}\n\n@mixin theme-fill-graydark-else-gray25 {\n\t@include __theme-fill($gray-dark, $gray25);\n}\n\n@mixin theme-fill-graydark-else-white {\n\t@include __theme-fill($gray-dark, $white);\n}\n\n@mixin theme-fill-green-else-white {\n\t@include __theme-fill($green, $white);\n}\n\n@mixin theme-fill-green-else-gray25 {\n\t@include __theme-fill($green, $gray25);\n}\n\n@mixin theme-fill-greendark-else-green {\n\t@include __theme-fill($green-dark, $green);\n}\n\n@mixin theme-fill-greendark-else-gray75 {\n\t@include __theme-fill($green-dark, $gray75);\n}\n\n@mixin theme-fill-greendark-else-graydark {\n\t@include __theme-fill($green-dark, $gray-dark);\n}\n\n@mixin theme-fill-white-else-graydark {\n\t@include __theme-fill($white, $gray-dark);\n}\n\n@mixin theme-fill-white-else-green75 {\n\t@include __theme-fill($white, $green75);\n}\n\n@mixin theme-fill-greendark50-else-white-hover {\n\t@include __theme-fill($green-dark50, $white);\n}\n\n@mixin __theme-overlay-boxshadow($boxshadowLight, $boxshadowDark) {\n\t@include if-theme-light() {\n\t\tbox-shadow: 0px -5px 16px $boxshadowLight;\n\t}\n\t@include if-theme-dark() {\n\t\tbox-shadow: 0px -5px 16px $boxshadowDark;\n\t}\n}\n\n@mixin theme-overlay-boxshadow {\n\t@include __theme-overlay-boxshadow($theme-overlay-box-shadow-light, $theme-overlay-box-shadow-dark);\n}\n\n// Theme Components\n\n@mixin theme-button-pill-disabled {\n\t@include if-theme-light() {\n\t\tbackground: $gray15 !important;\n\t\tcolor: $gray75 !important;\n\t}\n\t@include if-theme-dark() {\n\t\tbackground: $gray !important;\n\t\tcolor: $gray-dark50 !important;\n\t}\n}\n\n@mixin theme-input-background-color {\n\t@include if-theme-light() {\n\t\tbackground-color: $white;\n\t}\n\t@include if-theme-dark() {\n\t\tbackground-color: $gray-dark;\n\t}\n}\n\n@mixin theme-tab-border-active {\n\t@include if-theme-light() {\n\t\tborder-bottom: 4px solid $green;\n\t}\n\t@include if-theme-dark() {\n\t\tborder-bottom: 4px solid $green;\n\t}\n}\n\n@mixin theme-input-border-box-shadow {\n\tborder: none;\n\tborder-radius: 4px;\n\t@include __theme-border("", 0%, 0%, $theme-border-light, $theme-input-border-box-shadow-dark, 1px);\n}\n\n@mixin theme-input-border {\n\tborder: none;\n\tborder-radius: 4px;\n\t@include __theme-border("border", 0%, 0%, $theme-border-light, $theme-input-border-box-shadow-dark, 1px);\n}\n\n// Theme Patterns\n\n@mixin theme-stripes-white-else-graydark {\n\t@include if-theme-light() {\n\t\t@include stripes($white, $gray1);\n\t}\n\t@include if-theme-dark() {\n\t\t@include stripes(#2a2b2b, $gray-dark);\n\t}\n}\n\n@mixin theme-stripes-gray15-else-graydark {\n\t@include if-theme-light() {\n\t\t@include stripes($gray15, $gray5);\n\t}\n\t@include if-theme-dark() {\n\t\t@include stripes($gray-dark, $gray-dark50);\n\t}\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={TitleBar:"TitleBar_BVBDm_v17-7-3-beta-14",TitleBar_Content:"TitleBar_Content_PIG5__v17-7-3-beta-14"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);