(self.webpackChunk=self.webpackChunk||[]).push([[9760],{5318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var o=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),l=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(b,c(c({ref:e},u),{},{components:n})):o.createElement(b,c({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4697:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var o=n(9603),r=n(120),a=(n(7378),n(5318)),c={title:"Contact Bot"},i={unversionedId:"examples/basic/contact-bot",id:"examples/basic/contact-bot",isDocsHomePage:!1,title:"Contact Bot",description:"Try out the bot",source:"@site/docs/examples/basic/contact-bot.md",sourceDirName:"examples/basic",slug:"/examples/basic/contact-bot",permalink:"/docs/examples/basic/contact-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/examples/basic/contact-bot.md",version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1620021446,formattedLastUpdatedAt:"5/3/2021",frontMatter:{title:"Contact Bot"},sidebar:"docs",previous:{title:"Ding Dong Bot",permalink:"/docs/examples/basic/ding-dong-bot"},next:{title:"Deno in Tutorial Bot",permalink:"/docs/examples/advanced/demo-in-tutorial"}},s=[{value:"Try out the bot",id:"try-out-the-bot",children:[]}],l={toc:s};function u(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"try-out-the-bot"},"Try out the bot"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/Soumi7/Contact-Bot-Wechaty/tree/main/?fontsize=14&hidenavigation=1&module=%2Fcontact-bot.js&theme=dark"},(0,a.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wechaty-contact-bot"}))),(0,a.kt)("p",null,"You can try out the Wechaty Contact bot using this interactive CodeSandbox."),(0,a.kt)("p",null,"Just scan the generated QR code with WeChat app, and you are ready to play with the bot!"),(0,a.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/Soumi7/Contact-Bot-Wechaty/tree/main/?fontsize=12&hidenavigation=1&module=%2Fcontact-bot.js&theme=dark",title:"wechaty-contact-bot",sandbox:"allow-forms allow-modals allow-popups allow-same-origin allow-scripts"}))}u.isMDXComponent=!0}}]);