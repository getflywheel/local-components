"use strict";(self.webpackChunk_getflywheel_local_components=self.webpackChunk_getflywheel_local_components||[]).push([[3030],{"./src/components/tables/TableListRepeater/TableListRepeater.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>TableListRepeater_stories,header:()=>header,noHeader:()=>noHeader,noSubmit:()=>noSubmit,repeatingContent:()=>repeatingContent,tableListRepeater:()=>tableListRepeater});var _path,react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),TableList=__webpack_require__("./src/components/tables/TableList/TableList.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const close_small=function SvgCloseSmall(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 8"},props),_path||(_path=react.createElement("path",{d:"M7.71 6.29 5.41 4l2.3-2.29A1 1 0 0 0 6.29.29L4 2.59 1.71.29A1 1 0 1 0 .29 1.71L2.59 4 .29 6.29a1 1 0 1 0 1.42 1.42L4 5.41l2.29 2.3a1 1 0 0 0 1.42-1.42z"})))};var lodash_isequal=__webpack_require__("./node_modules/lodash.isequal/index.js"),lodash_isequal_default=__webpack_require__.n(lodash_isequal),TableList_TableList=__webpack_require__("./src/components/tables/TableList/TableList.sass"),PrimaryButton=__webpack_require__("./src/components/buttons/PrimaryButton/PrimaryButton.tsx"),Button=__webpack_require__("./src/components/buttons/Button/Button.tsx"),Icons=__webpack_require__("./src/components/icons/Icons.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class TableListRepeater extends react.Component{constructor(props){super(props),this.state={addingItem:!1,initialData:this.props.data?[...this.props.data]:[],unsavedData:this.props.data?[...this.props.data]:[]},this.addItem=this.addItem.bind(this)}UNSAFE_componentWillReceiveProps(nextProps){lodash_isequal_default()(nextProps.data,this.state.initialData)||nextProps.data&&this.setState({initialData:[...nextProps.data],unsavedData:[...nextProps.data]})}onChange(unsavedData){"function"==typeof this.props.onChange&&this.props.onChange(unsavedData)}async addItem(){let newItem;if("function"==typeof this.props.itemTemplate){this.setState({addingItem:!0});try{newItem=await this.props.itemTemplate()}catch(e){return void this.setState({addingItem:!1})}}else newItem=this.props.itemTemplate;const unsavedData=this.state.unsavedData.concat([newItem]);this.onChange(unsavedData),this.setState({addingItem:!1,unsavedData})}async removeItem(index){const unsavedData=this.state.unsavedData.slice();if(this.props.onBeforeRemove){if(!await this.props.onBeforeRemove(unsavedData[index],index))return}unsavedData.splice(index,1),this.onChange(unsavedData),this.setState({unsavedData})}updateItemFactory(index){return item=>{const unsavedData=this.state.unsavedData.slice();unsavedData[index]=item,this.onChange(unsavedData),this.setState({unsavedData})}}renderHeader(){if(this.props.header)return(0,jsx_runtime.jsxs)("li",{className:classnames_default()(TableList_TableList.Z.TableListRow,TableList_TableList.Z.TableListRowHeader),children:[this.props.header,(0,jsx_runtime.jsx)("strong",{className:classnames_default()(TableList_TableList.Z.TableListRowHeader__SeparatorLeft,TableList_TableList.Z.TableListRowHeader__RemoveHeading)})]})}renderSubmit(){if(this.props.onSubmit)return(0,jsx_runtime.jsx)("div",{className:TableList_TableList.Z.TableListRepeaterSubmit,children:(0,jsx_runtime.jsx)(PrimaryButton.K,{inline:!0,onClick:()=>this.props.onSubmit&&this.props.onSubmit(this.state.unsavedData),disabled:lodash_isequal_default()(this.props.data,this.state.unsavedData)||this.props.submitDisabled,children:this.props.submitLabel})})}render(){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)(TableList.b,{form:!0,className:classnames_default()(TableList_TableList.Z.TableListRepeater,this.props.className),id:this.props.id,style:this.props.style,children:[this.renderHeader(),this.state.unsavedData.map(((item,index)=>(0,jsx_runtime.jsxs)("li",{className:TableList_TableList.Z.TableListRow,children:[this.props.repeatingContent.call(this,Object.assign({},item),index,this.updateItemFactory(index)),(0,jsx_runtime.jsx)("div",{className:classnames_default()(TableList_TableList.Z.TableList__Remove,TableList_TableList.Z.TableList__SeparatorLeft),children:(0,jsx_runtime.jsx)("span",{onClick:()=>this.removeItem(index),children:(0,jsx_runtime.jsx)(close_small,{})})})]},index)))]}),(0,jsx_runtime.jsx)("div",{className:TableList_TableList.Z.TableListRepeaterAdd,children:(0,jsx_runtime.jsx)("div",{className:"InnerPaneSidebarHeaderButtons_Add",children:(0,jsx_runtime.jsxs)(Button.z,{inline:!0,leftIcon:Icons.AddIcon,onClick:this.addItem,disabled:this.state.addingItem,children:[this.state.addingItem?"Adding":"Add "," ",this.props.labelSingular]})})}),this.renderSubmit()]})}}TableListRepeater.defaultProps={labelSingular:"Item",submitDisabled:!1,submitLabel:"Submit"};try{TableListRepeater.displayName="TableListRepeater",TableListRepeater.__docgenInfo={description:"",displayName:"TableListRepeater",props:{data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any[]"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},itemTemplate:{defaultValue:null,description:"",name:"itemTemplate",required:!0,type:{name:"any"}},labelSingular:{defaultValue:{value:"Item"},description:"",name:"labelSingular",required:!1,type:{name:"string"}},onBeforeRemove:{defaultValue:null,description:"",name:"onBeforeRemove",required:!1,type:{name:"FunctionGeneric"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"FunctionGeneric"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FunctionGeneric"}},repeatingContent:{defaultValue:null,description:"",name:"repeatingContent",required:!0,type:{name:"FunctionGeneric"}},submitDisabled:{defaultValue:{value:"false"},description:"",name:"submitDisabled",required:!1,type:{name:"boolean"}},submitLabel:{defaultValue:{value:"Submit"},description:"",name:"submitLabel",required:!1,type:{name:"string"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"((element: HTMLElement) => string | void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},"aria-checked":{defaultValue:null,description:"",name:"aria-checked",required:!1,type:{name:'boolean | "mixed" | "false" | "true"'}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"",name:"aria-expanded",required:!1,type:{name:'boolean | "false" | "true"'}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tables/TableListRepeater/TableListRepeater.tsx#TableListRepeater"]={docgenInfo:TableListRepeater.__docgenInfo,name:"TableListRepeater",path:"src/components/tables/TableListRepeater/TableListRepeater.tsx#TableListRepeater"})}catch(__react_docgen_typescript_loader_error){}var FlySelect=__webpack_require__("./src/components/inputs/FlySelect/FlySelect.tsx"),blocks=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs");const header=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("strong",{className:"TableListRowHeader__SeparatorRight",style:{width:"33%"},children:"Column 1"}),(0,jsx_runtime.jsx)("strong",{style:{width:"33%"},children:"Column 2"}),(0,jsx_runtime.jsx)("strong",{style:{width:"33%"},children:"Column 3"})]}),repeatingContent=(item,index,updateItem)=>{const _components=Object.assign({div:"div",input:"input"},(0,lib.ah)());return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.div,{className:"TableListRowHeader__SeparatorRight TableListRow__Input",children:(0,jsx_runtime.jsx)(_components.input,{placeholder:"Column 1",value:item.column1,onChange:e=>{item.column1=e.target.value,updateItem(item)}})}),(0,jsx_runtime.jsx)(_components.div,{className:"TableListRow__Input",children:(0,jsx_runtime.jsx)(_components.input,{placeholder:"I am a dumb input and won't store data."})}),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(FlySelect.Z,{placeholder:"– Select Something –",value:item.column3,options:["Test 1","Test 2"],onChange:value=>{item.column3=value,updateItem(item)}})})]})};function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(blocks.h_,{title:"Tables/TableListRepeater",component:TableListRepeater}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(blocks.Xz,{children:(0,jsx_runtime.jsx)(blocks.oG,{name:"TableListRepeater",children:(0,jsx_runtime.jsx)(TableListRepeater,{header,repeatingContent,onSubmit:()=>console.log("onSubmit"),submitLabel:"Submit This Stuff!",labelSingular:"Item",itemTemplate:{column1:"",column3:"Test 2"}})})}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"no-submit",children:"No Submit"}),"\n",(0,jsx_runtime.jsx)(blocks.Xz,{children:(0,jsx_runtime.jsx)(blocks.oG,{name:"No Submit",children:(0,jsx_runtime.jsx)(TableListRepeater,{header,repeatingContent,labelSingular:"Item",onChange:()=>console.log("onChange"),itemTemplate:{column1:"",column3:"Test 2"}})})}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"no-header",children:"No Header"}),"\n",(0,jsx_runtime.jsx)(blocks.Xz,{children:(0,jsx_runtime.jsx)(blocks.oG,{name:"No Header",children:(0,jsx_runtime.jsx)(TableListRepeater,{repeatingContent,onSubmit:()=>console.log("onSubmit"),submitLabel:"Submit This Stuff!",labelSingular:"Item",itemTemplate:{column1:"",column3:"Test 2"}})})})]})}const tableListRepeater=()=>(0,jsx_runtime.jsx)(TableListRepeater,{header,repeatingContent,onSubmit:()=>console.log("onSubmit"),submitLabel:"Submit This Stuff!",labelSingular:"Item",itemTemplate:{column1:"",column3:"Test 2"}});tableListRepeater.storyName="TableListRepeater",tableListRepeater.parameters={storySource:{source:'<TableListRepeater header={header} repeatingContent={repeatingContent} onSubmit={() => console.log("onSubmit")} submitLabel="Submit This Stuff!" labelSingular="Item" itemTemplate={{\n  column1: "",\n  column3: "Test 2"\n}} />'}};const noSubmit=()=>(0,jsx_runtime.jsx)(TableListRepeater,{header,repeatingContent,labelSingular:"Item",onChange:()=>console.log("onChange"),itemTemplate:{column1:"",column3:"Test 2"}});noSubmit.storyName="No Submit",noSubmit.parameters={storySource:{source:'<TableListRepeater header={header} repeatingContent={repeatingContent} labelSingular="Item" onChange={() => console.log("onChange")} itemTemplate={{\n  column1: "",\n  column3: "Test 2"\n}} />'}};const noHeader=()=>(0,jsx_runtime.jsx)(TableListRepeater,{repeatingContent,onSubmit:()=>console.log("onSubmit"),submitLabel:"Submit This Stuff!",labelSingular:"Item",itemTemplate:{column1:"",column3:"Test 2"}});noHeader.storyName="No Header",noHeader.parameters={storySource:{source:'<TableListRepeater repeatingContent={repeatingContent} onSubmit={() => console.log("onSubmit")} submitLabel="Submit This Stuff!" labelSingular="Item" itemTemplate={{\n  column1: "",\n  column3: "Test 2"\n}} />'}};const componentMeta={title:"Tables/TableListRepeater",component:TableListRepeater,tags:["stories-mdx"],includeStories:["tableListRepeater","noSubmit","noHeader"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const TableListRepeater_stories=componentMeta},"./src/components/buttons/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ButtonPropIntent,z:()=>Button});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/buttons/_private/ButtonBase/ButtonBase.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let ButtonPropIntent=function(ButtonPropIntent){return ButtonPropIntent.default="default",ButtonPropIntent.destructive="destructive",ButtonPropIntent}({});function setIntentColor(props,defaultValue){return props.intent===ButtonPropIntent.destructive?_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.xc.red:defaultValue}function setForm(props,defaultValue){return props.intent===ButtonPropIntent.destructive?_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.ZE.fill:defaultValue}const Button=props=>{const{className,id,intent,privateOptions,...otherProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.Xd,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,"Button"),color:setIntentColor(props,_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.xc.green),id,form:setForm(props,_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.ZE.outline),padding:_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.d$.m,...privateOptions,...otherProps})};Button.defaultProps={disabled:_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.Xd.defaultProps.disabled,intent:ButtonPropIntent.default,tag:_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.Xd.defaultProps.tag};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"destructive"'},{value:'"default"'},{value:'"destructive"'}]}},privateOptions:{defaultValue:null,description:"",name:"privateOptions",required:!1,type:{name:"IButtonBaseProps"}},disabled:{defaultValue:null,description:"Whether the button is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Whether the button is active.",name:"active",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"The form name attribute",name:"name",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"The click handler.",name:"onClick",required:!1,type:{name:"FunctionGeneric"}},tag:{defaultValue:null,description:"The html element tag used for the button.",name:"tag",required:!1,type:{name:"string"}},tagProps:{defaultValue:null,description:"Props specific to the tag prop tag defined and applied to this component.",name:"tagProps",required:!1,type:{name:"{ [prop: string]: any; }"}},type:{defaultValue:null,description:"The default behavior of the button.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},leftIcon:{defaultValue:null,description:"SVG Icon to be placed left of text",name:"leftIcon",required:!1,type:{name:"any"}},rightIcon:{defaultValue:null,description:"SVG Icon to be placed right of text",name:"rightIcon",required:!1,type:{name:"any"}},svgStyle:{defaultValue:null,description:"Whether the svg is stroke only, fill only, or whether to not modify either",name:"svgStyle",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"stroke"'},{value:'"background"'},{value:'"none"'},{value:'"fill"'},{value:'"stroke"'},{value:'"background"'},{value:'"none"'}]}},inline:{defaultValue:null,description:"Display inline-flex vs flex",name:"inline",required:!1,type:{name:"boolean"}},stopKeyDownPropagation:{defaultValue:null,description:"Stop propagation - prevents button keydown event from bubbling up to wrapping elements with potential listeners",name:"stopKeyDownPropagation",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"",name:"container",required:!1,type:{name:"IContainerProps"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"((element: HTMLElement) => string | void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},"aria-checked":{defaultValue:null,description:"",name:"aria-checked",required:!1,type:{name:'boolean | "mixed" | "false" | "true"'}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"",name:"aria-expanded",required:!1,type:{name:'boolean | "false" | "true"'}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/buttons/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/buttons/PrimaryButton/PrimaryButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>PrimaryButton,t:()=>PrimaryButtonPropIntent});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/buttons/_private/ButtonBase/ButtonBase.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let PrimaryButtonPropIntent=function(PrimaryButtonPropIntent){return PrimaryButtonPropIntent.default="default",PrimaryButtonPropIntent.destructive="destructive",PrimaryButtonPropIntent}({});const PrimaryButton=props=>{const{className,id,intent,privateOptions,...otherProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.Xd,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,"PrimaryButton"),color:intent===PrimaryButtonPropIntent.destructive?_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.xc.red:_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.xc.green,id,form:_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.ZE.fill,padding:_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.d$.l,...privateOptions,...otherProps})};PrimaryButton.defaultProps={disabled:_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.Xd.defaultProps.disabled,intent:PrimaryButtonPropIntent.default,tag:_private_ButtonBase_ButtonBase__WEBPACK_IMPORTED_MODULE_2__.Xd.defaultProps.tag};try{PrimaryButton.displayName="PrimaryButton",PrimaryButton.__docgenInfo={description:"",displayName:"PrimaryButton",props:{intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"destructive"'},{value:'"default"'},{value:'"destructive"'}]}},privateOptions:{defaultValue:null,description:"",name:"privateOptions",required:!1,type:{name:"IButtonBaseProps"}},disabled:{defaultValue:null,description:"Whether the button is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Whether the button is active.",name:"active",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"The form name attribute",name:"name",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"The click handler.",name:"onClick",required:!1,type:{name:"FunctionGeneric"}},tag:{defaultValue:null,description:"The html element tag used for the button.",name:"tag",required:!1,type:{name:"string"}},tagProps:{defaultValue:null,description:"Props specific to the tag prop tag defined and applied to this component.",name:"tagProps",required:!1,type:{name:"{ [prop: string]: any; }"}},type:{defaultValue:null,description:"The default behavior of the button.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},leftIcon:{defaultValue:null,description:"SVG Icon to be placed left of text",name:"leftIcon",required:!1,type:{name:"any"}},rightIcon:{defaultValue:null,description:"SVG Icon to be placed right of text",name:"rightIcon",required:!1,type:{name:"any"}},svgStyle:{defaultValue:null,description:"Whether the svg is stroke only, fill only, or whether to not modify either",name:"svgStyle",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"stroke"'},{value:'"background"'},{value:'"none"'},{value:'"fill"'},{value:'"stroke"'},{value:'"background"'},{value:'"none"'}]}},inline:{defaultValue:null,description:"Display inline-flex vs flex",name:"inline",required:!1,type:{name:"boolean"}},stopKeyDownPropagation:{defaultValue:null,description:"Stop propagation - prevents button keydown event from bubbling up to wrapping elements with potential listeners",name:"stopKeyDownPropagation",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"",name:"container",required:!1,type:{name:"IContainerProps"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"((element: HTMLElement) => string | void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},"aria-checked":{defaultValue:null,description:"",name:"aria-checked",required:!1,type:{name:'boolean | "mixed" | "false" | "true"'}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"",name:"aria-expanded",required:!1,type:{name:'boolean | "false" | "true"'}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/PrimaryButton/PrimaryButton.tsx#PrimaryButton"]={docgenInfo:PrimaryButton.__docgenInfo,name:"PrimaryButton",path:"src/components/buttons/PrimaryButton/PrimaryButton.tsx#PrimaryButton"})}catch(__react_docgen_typescript_loader_error){}}}]);