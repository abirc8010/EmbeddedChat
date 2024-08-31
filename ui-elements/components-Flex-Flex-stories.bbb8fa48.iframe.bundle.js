"use strict";(self.webpackChunk_embeddedchat_ui_elements=self.webpackChunk_embeddedchat_ui_elements||[]).push([[41],{"./src/components/Flex/Flex.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Flex_stories});var react=__webpack_require__("../../node_modules/react/index.js"),ThemeContextProvider=__webpack_require__("./src/context/ThemeContextProvider.js"),DefaultTheme=__webpack_require__("./src/theme/DefaultTheme.js"),Box=__webpack_require__("./src/components/Box/index.js"),emotion_react_browser_esm=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function FlexContainer({inline=!1,children,direction,wrap,alignItems,alignContent,justifyContent,style={},...props}){const containerStyle=(0,react.useMemo)((()=>(void 0!==inline&&void 0===style.display&&(style.display=inline?"inline-flex":"flex"),void 0!==direction&&void 0===style.flexDirection&&(style.flexDirection=direction),void 0!==wrap&&void 0===style.flexWrap&&(style.flexWrap="no-wrap"===wrap?"nowrap":wrap),void 0!==alignItems&&void 0===style.alignItems&&(style.alignItems=("start"===alignItems?"flex-start":"end"===alignItems&&"flex-end")||alignItems),void 0!==alignContent&&void 0===style.alignContent&&(style.alignContent=("start"===alignContent?"flex-start":"end"===alignContent&&"flex-end")||alignContent),void 0!==justifyContent&&void 0===style.justifyContent&&(style.justifyContent=("start"===justifyContent?"flex-start":"end"===justifyContent&&"flex-end")||justifyContent),style)),[alignContent,alignItems,direction,inline,justifyContent,style,wrap]);return(0,emotion_react_browser_esm.tZ)(Box.x,_extends({style:{...containerStyle}},props)," ",children," ")}FlexContainer.displayName="FlexContainer",FlexContainer.__docgenInfo={description:"",methods:[],displayName:"FlexContainer",props:{inline:{defaultValue:{value:"false",computed:!1},required:!1},style:{defaultValue:{value:"{}",computed:!1},required:!1}}};const Flex_FlexContainer=FlexContainer;function FlexItem_extends(){return FlexItem_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},FlexItem_extends.apply(this,arguments)}function FlexItem({children,order,grow,shrink,basis,align,style={},...props}){const itemStyle=(0,react.useMemo)((()=>(void 0!==order&&void 0===style.order&&(style.order=order),void 0!==grow&&void 0===style.flexGrow&&(style.flexGrow=grow),void 0!==shrink&&void 0===style.flexShrink&&(style.flexShrink=shrink),void 0!==basis&&void 0===style.flexBasis&&(style.flexBasis=basis),void 0!==align&&void 0===style.alignSelf&&(style.alignSelf=("start"===align?"flex-start":"end"===align&&"flex-end")||align),style)),[align,basis,grow,order,shrink,style]);return(0,emotion_react_browser_esm.tZ)(Box.x,FlexItem_extends({style:{...itemStyle}},props)," ",children," ")}FlexItem.displayName="FlexItem",FlexItem.__docgenInfo={description:"",methods:[],displayName:"FlexItem",props:{style:{defaultValue:{value:"{}",computed:!1},required:!1}}};const Flex_FlexItem=FlexItem;const Flex_stories={title:"Components/Flex"};var _ref={name:"tux0rc",styles:"width:100px;height:50px;background-color:lightblue"},_ref2={name:"1onfaqf",styles:"width:100px;height:50px;background-color:lightcoral"},_ref3={name:"19wo7ae",styles:"width:100px;height:50px;background-color:lightgreen"};const Template=args=>(0,emotion_react_browser_esm.tZ)(ThemeContextProvider.f,{theme:DefaultTheme.Z},(0,emotion_react_browser_esm.tZ)(Flex_FlexContainer,args,(0,emotion_react_browser_esm.tZ)(Flex_FlexItem,args,(0,emotion_react_browser_esm.tZ)(Box.x,{css:_ref},"Item 1")),(0,emotion_react_browser_esm.tZ)(Flex_FlexItem,args,(0,emotion_react_browser_esm.tZ)(Box.x,{css:_ref2},"Item 2")),(0,emotion_react_browser_esm.tZ)(Flex_FlexItem,args,(0,emotion_react_browser_esm.tZ)(Box.x,{css:_ref3},"Item 3"))));Template.displayName="Template";const Default=Template.bind({});Default.args={inline:!1,direction:"row",wrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"space-around",order:0,grow:1,shrink:1,basis:"auto",align:"stretch"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ThemeProvider theme={DefaultTheme}>\n    <FlexContainer {...args}>\n      <FlexItem {...args}>\n        <Box css={{\n        width: '100px',\n        height: '50px',\n        backgroundColor: 'lightblue'\n      }}>\n          Item 1\n        </Box>\n      </FlexItem>\n      <FlexItem {...args}>\n        <Box css={{\n        width: '100px',\n        height: '50px',\n        backgroundColor: 'lightcoral'\n      }}>\n          Item 2\n        </Box>\n      </FlexItem>\n      <FlexItem {...args}>\n        <Box css={{\n        width: '100px',\n        height: '50px',\n        backgroundColor: 'lightgreen'\n      }}>\n          Item 3\n        </Box>\n      </FlexItem>\n    </FlexContainer>\n  </ThemeProvider>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useComponentOverrides=__webpack_require__("./src/hooks/useComponentOverrides.js");const Box_style={box:{name:"w4tggu",styles:"margin:0;padding:0;border-width:0;box-sizing:border-box;border-style:solid;border-color:currentColor;outline:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;flex:0 1 auto"}};var emotion_react_browser_esm=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Box=(0,react.forwardRef)((({children=null,className="",style={},is="div",...props},ref)=>{const{classNames,styleOverrides}=(0,useComponentOverrides.Z)("Box"),Element=`${is}`;return(0,emotion_react_browser_esm.tZ)(Element,_extends({ref,css:Box_style.box,className:`ec-box ${className} ${classNames}`,style:{...styleOverrides,...style}},props),children)}));Box.propTypes={children:prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().node),prop_types_default().node]),className:prop_types_default().string,style:prop_types_default().object,is:prop_types_default().string},Box.displayName="Box",Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},is:{defaultValue:{value:"'div'",computed:!1},description:"",type:{name:"string"},required:!1}}};const Box_Box=Box},"./src/components/Box/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>_Box__WEBPACK_IMPORTED_MODULE_0__.Z});var _Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Box/Box.js")},"./src/context/ThemeContextProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeContext,f:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_theme_DefaultTheme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/DefaultTheme.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const ThemeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),ThemeProvider=({children,theme:initialTheme,mode:initialMode})=>{const defaultTheme=initialTheme||_theme_DefaultTheme__WEBPACK_IMPORTED_MODULE_1__.Z,[mode,setMode]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialMode||"light"),[theme,setTheme]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultTheme),colors=theme.schemes?.[mode],invertedColors=theme.schemes?.[(mode=>"light"===mode?"dark":"light")(mode)];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{initialTheme&&setTheme(initialTheme)}),[initialTheme]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{initialMode&&setMode(initialMode)}),[initialMode]);const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({theme,mode,colors,invertedColors,setMode,setTheme})),[theme,mode,colors,invertedColors]);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.tZ)(ThemeContext.Provider,{value},children)};ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider"}},"./src/hooks/useComponentOverrides.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_useTheme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useTheme.js");const __WEBPACK_DEFAULT_EXPORT__=(component,className="",style={})=>{const{theme}=(0,_useTheme__WEBPACK_IMPORTED_MODULE_1__.Z)(),classNames=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>`${Array.isArray(className)?className.join(" "):className} ${theme?.components?.[component]?.classNames||""}`),[className,component,theme?.components]);return{styleOverrides:(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...style,...theme?.components&&theme?.components[component]?.styleOverrides||{}})),[component,style,theme?.components]),classNames,configOverrides:(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...theme?.components&&theme?.components[component]?.configOverrides||{}})),[component,theme?.components]),variantOverrides:(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>theme?.variants&&theme?.variants[component]||""),[component,theme?.variants])}}},"./src/hooks/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_context_ThemeContextProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/context/ThemeContextProvider.js"),_theme_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/theme/DefaultTheme.js");const __WEBPACK_DEFAULT_EXPORT__=()=>{const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_ThemeContextProvider__WEBPACK_IMPORTED_MODULE_1__.N);if(!context){const defaultMode="light",defaultTheme=_theme_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.Z,colors=defaultTheme.schemes?.[defaultMode],invertedColors=defaultTheme.schemes?.[(mode=defaultMode,"light"===mode?"dark":"light")];return{theme:defaultTheme,mode:defaultMode,colors,invertedColors,setMode:()=>{},setTheme:()=>{}}}var mode;return context}},"./src/theme/DefaultTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={schemes:{radius:"0.2rem",common:{black:"hsl(0, 100%, 0%)",white:"hsl(0, 100%, 100%)"},light:{background:"hsl(0, 0%, 100%)",foreground:"hsl(240, 10%, 3.9%)",card:"hsl(0, 0%, 100%)",cardForeground:"hsl(240, 10%, 3.9%)",popover:"hsl(0, 0%, 100%)",popoverForeground:"hsl(240, 10%, 3.9%)",primary:"hsl(240, 5.9%, 10%)",primaryForeground:"hsl(0, 0%, 98%)",secondary:"hsl(240, 4.8%, 95.9%)",secondaryForeground:"hsl(240, 5.9%, 10%)",muted:"hsl(240, 4.8%, 95.9%)",mutedForeground:"hsl(240, 3.8%, 46.1%)",accent:"hsl(240, 4.8%, 95.9%)",accentForeground:"hsl(240, 5.9%, 10%)",destructive:"hsl(0, 84.2%, 60.2%)",destructiveForeground:"hsl(0, 0%, 98%)",border:"hsl(240, 5.9%, 90%)",input:"hsl(240, 5.9%, 90%)",ring:"hsl(240, 5.9%, 10%)",warning:"hsl(38, 92%, 50%)",warningForeground:"hsl(48, 96%, 89%)",success:"hsl(91, 60.4%, 81.2%)",successForeground:"hsl(90, 61.1%, 14.1%)",info:"hsl(214, 76.4%, 50.2%)",infoForeground:"hsl(214.3, 77.8%, 92.9%)"},dark:{background:"hsl(240, 10%, 3.9%)",foreground:"hsl(0, 0%, 98%)",card:"hsl(240, 10%, 3.9%)",cardForeground:"hsl(0, 0%, 98%)",popover:"hsl(240, 10%, 3.9%)",popoverForeground:"hsl(0, 0%, 98%)",primary:"hsl(0, 0%, 98%)",primaryForeground:"hsl(240, 5.9%, 10%)",secondary:"hsl(240, 3.7%, 15.9%)",secondaryForeground:"hsl(0, 0%, 98%)",muted:"hsl(240, 3.7%, 15.9%)",mutedForeground:"hsl(240, 5%, 64.9%)",accent:"hsl(240, 3.7%, 15.9%)",accentForeground:"hsl(0, 0%, 98%)",destructive:"hsl(0, 62.8%, 30.6%)",destructiveForeground:"hsl(0, 0%, 98%)",border:"hsl(240, 3.7%, 15.9%)",input:"hsl(240, 3.7%, 15.9%)",ring:"hsl(240, 4.9%, 83.9%)",warning:"hsl(48, 96%, 89%)",warningForeground:"hsl(38, 92%, 50%)",success:"hsl(90, 61.1%, 14.1%)",successForeground:"hsl(90, 60%, 90.2%)",info:"hsl(214.3, 77.8%, 92.9%)",infoForeground:"hsl(214.4, 75.8%, 19.4%)"}},shadows:["none","rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px","rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"],zIndex:{divider:1e3,body:1100,general:1200,menu:1300,tooltip:1400,modal:1500,toastbar:1600}}}}]);