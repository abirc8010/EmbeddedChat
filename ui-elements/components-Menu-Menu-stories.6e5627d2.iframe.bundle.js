(self.webpackChunk_embeddedchat_ui_elements=self.webpackChunk_embeddedchat_ui_elements||[]).push([[377],{"./src/components/Menu/Menu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Menu_stories});var react=__webpack_require__("../../node_modules/react/index.js"),ThemeContextProvider=__webpack_require__("./src/context/ThemeContextProvider.js"),DefaultTheme=__webpack_require__("./src/theme/DefaultTheme.js"),emotion_react_browser_esm=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),useTheme=__webpack_require__("./src/hooks/useTheme.js"),Box=__webpack_require__("./src/components/Box/index.js"),ActionButton=__webpack_require__("./src/components/ActionButton/index.js"),Icon=__webpack_require__("./src/components/Icon/index.js"),useComponentOverrides=__webpack_require__("./src/hooks/useComponentOverrides.js"),appendClassNames=__webpack_require__("./src/lib/appendClassNames.js"),color=__webpack_require__("./src/lib/color.js");var _ref={name:"bjn8wh",styles:"position:relative"};const MenuItem=({icon,label,action,disabled})=>{const{classNames,styleOverrides}=(0,useComponentOverrides.Z)("MenuItem",disabled&&"disabled"),styles=(()=>{const{mode,colors}=(0,useTheme.Z)();return{item:(0,emotion_react_browser_esm.iv)("font-size:14px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;padding:0.25em 0.75em;white-space:nowrap;gap:0.2rem;color:",colors.foreground,";&:hover{background-color:","light"===mode?(0,color._j)(colors.background,.05):(0,color.$n)(colors.background,2),";cursor:pointer;}",""),disabled:(0,emotion_react_browser_esm.iv)("cursor:not-allowed!important;color:",colors.mutedForeground,";","")}})();return(0,emotion_react_browser_esm.tZ)(Box.x,{css:[styles.item,disabled&&styles.disabled,"",""],className:(0,appendClassNames.k)("ec-menu-item",classNames),style:styleOverrides,onClick:!disabled&&action},(0,emotion_react_browser_esm.tZ)(Icon.J,{name:icon,size:"1em"}),label)};MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",methods:[],displayName:"MenuItem"};const Menu_MenuItem=MenuItem;var Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Menu=({options=[],className="",style={},anchor="right bottom",tooltip={isToolTip:!0,position:"bottom",text:"Options"},size="medium",useWrapper=!0})=>{const{theme}=(0,useTheme.Z)(),styles=(()=>{const{theme,colors}=(0,useTheme.Z)();return{wrapper:_ref,container:(0,emotion_react_browser_esm.iv)("position:absolute;top:100%;right:0;display:flex;flex-direction:column;width:fit-content;height:fit-content;z-index:",theme.zIndex?.menu||1300,";border-radius:0.2em;padding:0.5rem 0;box-shadow:",theme.shadows[1],";background-color:",colors.background,";","")}})(),{classNames,styleOverrides}=(0,useComponentOverrides.Z)("Menu",className,style),anchorStyle=(0,react.useMemo)((()=>{const positions=anchor.split(/\s+/),styleAnchor={};return positions.forEach((pos=>{styleAnchor[pos]=0})),styleAnchor}),[anchor]),finalStyle=(0,react.useMemo)((()=>({...anchorStyle,...styleOverrides})),[anchorStyle,styleOverrides]),{classNames:wrapperClasses,styleOverrides:wrapperStyles}=(0,useComponentOverrides.Z)("MenuWrapper"),[isOpen,setOpen]=(0,react.useState)(!1);(0,react.useEffect)((()=>{const onBodyClick=e=>{isOpen&&!e.target.classList.contains("ec-menu-wrapper")&&setOpen(!1)};return document.addEventListener("click",onBodyClick),()=>{document.removeEventListener("click",onBodyClick)}}),[isOpen]);const optionJsx=(0,emotion_react_browser_esm.tZ)(react.Fragment,null,tooltip.isToolTip?(0,emotion_react_browser_esm.tZ)(Tooltip.Z,{text:tooltip.text,position:tooltip.position},(0,emotion_react_browser_esm.tZ)(ActionButton.K,{ghost:!0,icon:"kebab",size,onClick:e=>{e.stopPropagation(),setOpen((prev=>!prev))}})):(0,emotion_react_browser_esm.tZ)(ActionButton.K,{ghost:!0,icon:"kebab",size,onClick:e=>{e.stopPropagation(),setOpen((prev=>!prev))}}),isOpen?(0,emotion_react_browser_esm.tZ)(Box.x,{css:[styles.container,(0,emotion_react_browser_esm.iv)("box-shadow:",theme.shadows[2],";",""),"",""],className:(0,appendClassNames.k)("ec-menu",classNames),style:finalStyle},options.map(((option,idx)=>{return(0,emotion_react_browser_esm.tZ)(Menu_MenuItem,_extends({},option,{key:option.id||idx,action:(action=option.action,disabled=option.disabled,()=>{disabled||(action(),setOpen(!isOpen))})}));var action,disabled}))):null);return useWrapper?(0,emotion_react_browser_esm.tZ)(Box.x,{css:styles.wrapper,className:(0,appendClassNames.k)("ec-menu-wrapper",wrapperClasses),style:wrapperStyles},optionJsx):optionJsx};Menu.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{options:{defaultValue:{value:"[]",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},style:{defaultValue:{value:"{}",computed:!1},required:!1},anchor:{defaultValue:{value:"'right bottom'",computed:!1},required:!1},tooltip:{defaultValue:{value:"{ isToolTip: true, position: 'bottom', text: 'Options' }",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},useWrapper:{defaultValue:{value:"true",computed:!1},required:!1}}};const Menu_Menu=Menu,Menu_stories={title:"Components/Menu",component:Menu_Menu},Default={args:{options:[{id:"thread",label:"Threads",icon:"thread"},{id:"mentions",label:"Mentions",icon:"at"},{id:"members",label:"Members",icon:"members"},{id:"files",label:"Files",icon:"clip"},{id:"starred",label:"Starred",icon:"star"},{id:"pinned",label:"Pinned",icon:"pin"},{id:"search",label:"Search",icon:"magnifier"},{id:"rInfo",label:"Room Information",icon:"info"},{id:"logout",label:"Logout",icon:"reply-directly",color:"error"}],anchor:"left bottom"},render:args=>(0,emotion_react_browser_esm.tZ)(ThemeContextProvider.f,{theme:DefaultTheme.Z},(0,emotion_react_browser_esm.tZ)(Menu_Menu,args))};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: [{\n      id: 'thread',\n      label: 'Threads',\n      icon: 'thread'\n    }, {\n      id: 'mentions',\n      label: 'Mentions',\n      icon: 'at'\n    }, {\n      id: 'members',\n      label: 'Members',\n      icon: 'members'\n    }, {\n      id: 'files',\n      label: 'Files',\n      icon: 'clip'\n    }, {\n      id: 'starred',\n      label: 'Starred',\n      icon: 'star'\n    }, {\n      id: 'pinned',\n      label: 'Pinned',\n      icon: 'pin'\n    }, {\n      id: 'search',\n      label: 'Search',\n      icon: 'magnifier'\n    }, {\n      id: 'rInfo',\n      label: 'Room Information',\n      icon: 'info'\n    }, {\n      id: 'logout',\n      label: 'Logout',\n      icon: 'reply-directly',\n      color: 'error'\n    }],\n    anchor: 'left bottom'\n  },\n  render: args => <ThemeProvider theme={DefaultTheme}>\n      <MenuComponent {...args} />\n    </ThemeProvider>\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/lib/appendClassNames.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>appendClassNames});const appendClassNames=(className,currentClassNames)=>{return value=currentClassNames,Array.isArray(value)?[className,...currentClassNames]:currentClassNames?`${className} ${currentClassNames}`:className;var value}},"./src/lib/color.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$n:()=>lighten,Fq:()=>alpha,_j:()=>darken});var color__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/color/index.js"),color__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_0__);function darken(color,amount=0){return(color=color__WEBPACK_IMPORTED_MODULE_0___default()(color)).darken(amount).hexa()}function lighten(color,amount=0){return(color=color__WEBPACK_IMPORTED_MODULE_0___default()(color)).lighten(amount).hexa()}function alpha(color,amount){return(color=color__WEBPACK_IMPORTED_MODULE_0___default()(color)).alpha(amount).hexa()}},"../../node_modules/color-string/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var colorNames=__webpack_require__("../../node_modules/color-name/index.js"),swizzle=__webpack_require__("../../node_modules/simple-swizzle/index.js"),hasOwnProperty=Object.hasOwnProperty,reverseNames=Object.create(null);for(var name in colorNames)hasOwnProperty.call(colorNames,name)&&(reverseNames[colorNames[name]]=name);var cs=module.exports={to:{},get:{}};function clamp(num,min,max){return Math.min(Math.max(min,num),max)}function hexDouble(num){var str=Math.round(num).toString(16).toUpperCase();return str.length<2?"0"+str:str}cs.get=function(string){var val,model;switch(string.substring(0,3).toLowerCase()){case"hsl":val=cs.get.hsl(string),model="hsl";break;case"hwb":val=cs.get.hwb(string),model="hwb";break;default:val=cs.get.rgb(string),model="rgb"}return val?{model,value:val}:null},cs.get.rgb=function(string){if(!string)return null;var match,i,hexAlpha,rgb=[0,0,0,1];if(match=string.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(hexAlpha=match[2],match=match[1],i=0;i<3;i++){var i2=2*i;rgb[i]=parseInt(match.slice(i2,i2+2),16)}hexAlpha&&(rgb[3]=parseInt(hexAlpha,16)/255)}else if(match=string.match(/^#([a-f0-9]{3,4})$/i)){for(hexAlpha=(match=match[1])[3],i=0;i<3;i++)rgb[i]=parseInt(match[i]+match[i],16);hexAlpha&&(rgb[3]=parseInt(hexAlpha+hexAlpha,16)/255)}else if(match=string.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(i=0;i<3;i++)rgb[i]=parseInt(match[i+1],0);match[4]&&(match[5]?rgb[3]=.01*parseFloat(match[4]):rgb[3]=parseFloat(match[4]))}else{if(!(match=string.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(match=string.match(/^(\w+)$/))?"transparent"===match[1]?[0,0,0,0]:hasOwnProperty.call(colorNames,match[1])?((rgb=colorNames[match[1]])[3]=1,rgb):null:null;for(i=0;i<3;i++)rgb[i]=Math.round(2.55*parseFloat(match[i+1]));match[4]&&(match[5]?rgb[3]=.01*parseFloat(match[4]):rgb[3]=parseFloat(match[4]))}for(i=0;i<3;i++)rgb[i]=clamp(rgb[i],0,255);return rgb[3]=clamp(rgb[3],0,1),rgb},cs.get.hsl=function(string){if(!string)return null;var match=string.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(match){var alpha=parseFloat(match[4]);return[(parseFloat(match[1])%360+360)%360,clamp(parseFloat(match[2]),0,100),clamp(parseFloat(match[3]),0,100),clamp(isNaN(alpha)?1:alpha,0,1)]}return null},cs.get.hwb=function(string){if(!string)return null;var match=string.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(match){var alpha=parseFloat(match[4]);return[(parseFloat(match[1])%360+360)%360,clamp(parseFloat(match[2]),0,100),clamp(parseFloat(match[3]),0,100),clamp(isNaN(alpha)?1:alpha,0,1)]}return null},cs.to.hex=function(){var rgba=swizzle(arguments);return"#"+hexDouble(rgba[0])+hexDouble(rgba[1])+hexDouble(rgba[2])+(rgba[3]<1?hexDouble(Math.round(255*rgba[3])):"")},cs.to.rgb=function(){var rgba=swizzle(arguments);return rgba.length<4||1===rgba[3]?"rgb("+Math.round(rgba[0])+", "+Math.round(rgba[1])+", "+Math.round(rgba[2])+")":"rgba("+Math.round(rgba[0])+", "+Math.round(rgba[1])+", "+Math.round(rgba[2])+", "+rgba[3]+")"},cs.to.rgb.percent=function(){var rgba=swizzle(arguments),r=Math.round(rgba[0]/255*100),g=Math.round(rgba[1]/255*100),b=Math.round(rgba[2]/255*100);return rgba.length<4||1===rgba[3]?"rgb("+r+"%, "+g+"%, "+b+"%)":"rgba("+r+"%, "+g+"%, "+b+"%, "+rgba[3]+")"},cs.to.hsl=function(){var hsla=swizzle(arguments);return hsla.length<4||1===hsla[3]?"hsl("+hsla[0]+", "+hsla[1]+"%, "+hsla[2]+"%)":"hsla("+hsla[0]+", "+hsla[1]+"%, "+hsla[2]+"%, "+hsla[3]+")"},cs.to.hwb=function(){var hwba=swizzle(arguments),a="";return hwba.length>=4&&1!==hwba[3]&&(a=", "+hwba[3]),"hwb("+hwba[0]+", "+hwba[1]+"%, "+hwba[2]+"%"+a+")"},cs.to.keyword=function(rgb){return reverseNames[rgb.slice(0,3)]}},"../../node_modules/color/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{const colorString=__webpack_require__("../../node_modules/color-string/index.js"),convert=__webpack_require__("../../node_modules/color-convert/index.js"),skippedModels=["keyword","gray","hex"],hashedModelKeys={};for(const model of Object.keys(convert))hashedModelKeys[[...convert[model].labels].sort().join("")]=model;const limiters={};function Color(object,model){if(!(this instanceof Color))return new Color(object,model);if(model&&model in skippedModels&&(model=null),model&&!(model in convert))throw new Error("Unknown model: "+model);let i,channels;if(null==object)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(object instanceof Color)this.model=object.model,this.color=[...object.color],this.valpha=object.valpha;else if("string"==typeof object){const result=colorString.get(object);if(null===result)throw new Error("Unable to parse color from string: "+object);this.model=result.model,channels=convert[this.model].channels,this.color=result.value.slice(0,channels),this.valpha="number"==typeof result.value[channels]?result.value[channels]:1}else if(object.length>0){this.model=model||"rgb",channels=convert[this.model].channels;const newArray=Array.prototype.slice.call(object,0,channels);this.color=zeroArray(newArray,channels),this.valpha="number"==typeof object[channels]?object[channels]:1}else if("number"==typeof object)this.model="rgb",this.color=[object>>16&255,object>>8&255,255&object],this.valpha=1;else{this.valpha=1;const keys=Object.keys(object);"alpha"in object&&(keys.splice(keys.indexOf("alpha"),1),this.valpha="number"==typeof object.alpha?object.alpha:0);const hashedKeys=keys.sort().join("");if(!(hashedKeys in hashedModelKeys))throw new Error("Unable to parse color from object: "+JSON.stringify(object));this.model=hashedModelKeys[hashedKeys];const{labels}=convert[this.model],color=[];for(i=0;i<labels.length;i++)color.push(object[labels[i]]);this.color=zeroArray(color)}if(limiters[this.model])for(channels=convert[this.model].channels,i=0;i<channels;i++){const limit=limiters[this.model][i];limit&&(this.color[i]=limit(this.color[i]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}Color.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(places){let self=this.model in colorString.to?this:this.rgb();self=self.round("number"==typeof places?places:1);const args=1===self.valpha?self.color:[...self.color,this.valpha];return colorString.to[self.model](args)},percentString(places){const self=this.rgb().round("number"==typeof places?places:1),args=1===self.valpha?self.color:[...self.color,this.valpha];return colorString.to.rgb.percent(args)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const result={},{channels}=convert[this.model],{labels}=convert[this.model];for(let i=0;i<channels;i++)result[labels[i]]=this.color[i];return 1!==this.valpha&&(result.alpha=this.valpha),result},unitArray(){const rgb=this.rgb().color;return rgb[0]/=255,rgb[1]/=255,rgb[2]/=255,1!==this.valpha&&rgb.push(this.valpha),rgb},unitObject(){const rgb=this.rgb().object();return rgb.r/=255,rgb.g/=255,rgb.b/=255,1!==this.valpha&&(rgb.alpha=this.valpha),rgb},round(places){return places=Math.max(places||0,0),new Color([...this.color.map(roundToPlace(places)),this.valpha],this.model)},alpha(value){return void 0!==value?new Color([...this.color,Math.max(0,Math.min(1,value))],this.model):this.valpha},red:getset("rgb",0,maxfn(255)),green:getset("rgb",1,maxfn(255)),blue:getset("rgb",2,maxfn(255)),hue:getset(["hsl","hsv","hsl","hwb","hcg"],0,(value=>(value%360+360)%360)),saturationl:getset("hsl",1,maxfn(100)),lightness:getset("hsl",2,maxfn(100)),saturationv:getset("hsv",1,maxfn(100)),value:getset("hsv",2,maxfn(100)),chroma:getset("hcg",1,maxfn(100)),gray:getset("hcg",2,maxfn(100)),white:getset("hwb",1,maxfn(100)),wblack:getset("hwb",2,maxfn(100)),cyan:getset("cmyk",0,maxfn(100)),magenta:getset("cmyk",1,maxfn(100)),yellow:getset("cmyk",2,maxfn(100)),black:getset("cmyk",3,maxfn(100)),x:getset("xyz",0,maxfn(95.047)),y:getset("xyz",1,maxfn(100)),z:getset("xyz",2,maxfn(108.833)),l:getset("lab",0,maxfn(100)),a:getset("lab",1),b:getset("lab",2),keyword(value){return void 0!==value?new Color(value):convert[this.model].keyword(this.color)},hex(value){return void 0!==value?new Color(value):colorString.to.hex(this.rgb().round().color)},hexa(value){if(void 0!==value)return new Color(value);const rgbArray=this.rgb().round().color;let alphaHex=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===alphaHex.length&&(alphaHex="0"+alphaHex),colorString.to.hex(rgbArray)+alphaHex},rgbNumber(){const rgb=this.rgb().color;return(255&rgb[0])<<16|(255&rgb[1])<<8|255&rgb[2]},luminosity(){const rgb=this.rgb().color,lum=[];for(const[i,element]of rgb.entries()){const chan=element/255;lum[i]=chan<=.04045?chan/12.92:((chan+.055)/1.055)**2.4}return.2126*lum[0]+.7152*lum[1]+.0722*lum[2]},contrast(color2){const lum1=this.luminosity(),lum2=color2.luminosity();return lum1>lum2?(lum1+.05)/(lum2+.05):(lum2+.05)/(lum1+.05)},level(color2){const contrastRatio=this.contrast(color2);return contrastRatio>=7?"AAA":contrastRatio>=4.5?"AA":""},isDark(){const rgb=this.rgb().color;return(2126*rgb[0]+7152*rgb[1]+722*rgb[2])/1e4<128},isLight(){return!this.isDark()},negate(){const rgb=this.rgb();for(let i=0;i<3;i++)rgb.color[i]=255-rgb.color[i];return rgb},lighten(ratio){const hsl=this.hsl();return hsl.color[2]+=hsl.color[2]*ratio,hsl},darken(ratio){const hsl=this.hsl();return hsl.color[2]-=hsl.color[2]*ratio,hsl},saturate(ratio){const hsl=this.hsl();return hsl.color[1]+=hsl.color[1]*ratio,hsl},desaturate(ratio){const hsl=this.hsl();return hsl.color[1]-=hsl.color[1]*ratio,hsl},whiten(ratio){const hwb=this.hwb();return hwb.color[1]+=hwb.color[1]*ratio,hwb},blacken(ratio){const hwb=this.hwb();return hwb.color[2]+=hwb.color[2]*ratio,hwb},grayscale(){const rgb=this.rgb().color,value=.3*rgb[0]+.59*rgb[1]+.11*rgb[2];return Color.rgb(value,value,value)},fade(ratio){return this.alpha(this.valpha-this.valpha*ratio)},opaquer(ratio){return this.alpha(this.valpha+this.valpha*ratio)},rotate(degrees){const hsl=this.hsl();let hue=hsl.color[0];return hue=(hue+degrees)%360,hue=hue<0?360+hue:hue,hsl.color[0]=hue,hsl},mix(mixinColor,weight){if(!mixinColor||!mixinColor.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof mixinColor);const color1=mixinColor.rgb(),color2=this.rgb(),p=void 0===weight?.5:weight,w=2*p-1,a=color1.alpha()-color2.alpha(),w1=((w*a==-1?w:(w+a)/(1+w*a))+1)/2,w2=1-w1;return Color.rgb(w1*color1.red()+w2*color2.red(),w1*color1.green()+w2*color2.green(),w1*color1.blue()+w2*color2.blue(),color1.alpha()*p+color2.alpha()*(1-p))}};for(const model of Object.keys(convert)){if(skippedModels.includes(model))continue;const{channels}=convert[model];Color.prototype[model]=function(...args){return this.model===model?new Color(this):args.length>0?new Color(args,model):new Color([...(value=convert[this.model][model].raw(this.color),Array.isArray(value)?value:[value]),this.valpha],model);var value},Color[model]=function(...args){let color=args[0];return"number"==typeof color&&(color=zeroArray(args,channels)),new Color(color,model)}}function roundToPlace(places){return function(number){return function roundTo(number,places){return Number(number.toFixed(places))}(number,places)}}function getset(model,channel,modifier){model=Array.isArray(model)?model:[model];for(const m of model)(limiters[m]||(limiters[m]=[]))[channel]=modifier;return model=model[0],function(value){let result;return void 0!==value?(modifier&&(value=modifier(value)),result=this[model](),result.color[channel]=value,result):(result=this[model]().color[channel],modifier&&(result=modifier(result)),result)}}function maxfn(max){return function(v){return Math.max(0,Math.min(max,v))}}function zeroArray(array,length){for(let i=0;i<length;i++)"number"!=typeof array[i]&&(array[i]=0);return array}module.exports=Color},"../../node_modules/simple-swizzle/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isArrayish=__webpack_require__("../../node_modules/simple-swizzle/node_modules/is-arrayish/index.js"),concat=Array.prototype.concat,slice=Array.prototype.slice,swizzle=module.exports=function swizzle(args){for(var results=[],i=0,len=args.length;i<len;i++){var arg=args[i];isArrayish(arg)?results=concat.call(results,slice.call(arg)):results.push(arg)}return results};swizzle.wrap=function(fn){return function(){return fn(swizzle(arguments))}}},"../../node_modules/simple-swizzle/node_modules/is-arrayish/index.js":module=>{module.exports=function isArrayish(obj){return!(!obj||"string"==typeof obj)&&(obj instanceof Array||Array.isArray(obj)||obj.length>=0&&(obj.splice instanceof Function||Object.getOwnPropertyDescriptor(obj,obj.length-1)&&"String"!==obj.constructor.name))}}}]);