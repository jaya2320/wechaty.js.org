(self.webpackChunk=self.webpackChunk||[]).push([[2676],{5318:function(t,e,r){"use strict";r.d(e,{Zo:function(){return c},kt:function(){return f}});var n=r(7378);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),p=l(r),f=i,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(h,a(a({ref:e},c),{},{components:r})):n.createElement(h,a({ref:e},c))}));function f(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=p;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5626:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function i(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return i}})},8948:function(t,e,r){"use strict";r.d(e,{C:function(){return o},Z:function(){return a}});var n=r(353),i=r(5626);function o(){var t=(0,n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,u=void 0!==a&&a,s=o.absolute,l=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(u)return e+r;var c=r.startsWith(e)?r:e+r.replace(/^\//,"");return l?t+c:c}(o,r,t,e)}}}function a(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},3091:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=r(9603),i=r(120),o=(r(7378),r(5318)),a=r(8948),u={sidebar_label:"Rui.BOT",title:"Case Study: Rui.BOT"},s={unversionedId:"showcases/rui-bot",id:"showcases/rui-bot",isDocsHomePage:!1,title:"Case Study: Rui.BOT",description:"Rui.BOT is an assistant bot for Rui, who is the  Founder & CEO of Juzi.BOT.",source:"@site/docs/showcases/rui-bot.mdx",sourceDirName:"showcases",slug:"/showcases/rui-bot",permalink:"/docs/showcases/rui-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/showcases/rui-bot.mdx",version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1620021446,formattedLastUpdatedAt:"5/3/2021",sidebar_label:"Rui.BOT",frontMatter:{sidebar_label:"Rui.BOT",title:"Case Study: Rui.BOT"},sidebar:"docs",previous:{title:"Case Study: OSS.Chat",permalink:"/docs/showcases/osschat-bot"},next:{title:"Cast Study: Friday BOT",permalink:"/docs/showcases/friday-bot"}},l=[{value:"Features",id:"features",children:[]},{value:"Talk from Azure Cloud Show: Build An Assistant BOT for Introducing Startup to Investors With QnAMaker.ai",id:"talk-from-azure-cloud-show-build-an-assistant-bot-for-introducing-startup-to-investors-with-qnamakerai",children:[]},{value:"Links",id:"links",children:[]},{value:"Credit",id:"credit",children:[]}],c={toc:l};function d(t){var e=t.components,r=(0,i.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("img",{alt:"Friday.BOT",src:(0,a.Z)("img/docs/rui-bot.png"),width:"256",height:"256"}),(0,o.kt)("p",null,"Rui.BOT is an assistant bot for Rui, who is the  Founder & CEO of Juzi.BOT."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"It has the following functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduce JuziBot"),(0,o.kt)("li",{parentName:"ul"},"Introduce Jiarui Li"),(0,o.kt)("li",{parentName:"ul"},"Introduce the product"),(0,o.kt)("li",{parentName:"ul"},"Answer the frequency questions"),(0,o.kt)("li",{parentName:"ul"},"valuation"),(0,o.kt)("li",{parentName:"ul"},"receive friendship automatically and introduce it selt"),(0,o.kt)("li",{parentName:"ul"},"Change Qnamaker key to a formal one"),(0,o.kt)("li",{parentName:"ul"},"Add rui.juzi.bot domain for ",(0,o.kt)("a",{parentName:"li",href:"https://rui-bot.herokuapp.com"},"https://rui-bot.herokuapp.com")),(0,o.kt)("li",{parentName:"ul"},"Add more frequency questions into QnAMaker"),(0,o.kt)("li",{parentName:"ul"},"Reply the right valuation")),(0,o.kt)("h2",{id:"talk-from-azure-cloud-show-build-an-assistant-bot-for-introducing-startup-to-investors-with-qnamakerai"},"Talk from Azure Cloud Show: Build An Assistant BOT for Introducing Startup to Investors With QnAMaker.ai"),(0,o.kt)("div",{style:{position:"relative",paddingBottom:"56.25%",paddingTop:"30px",height:0,overflow:"hidden"}},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed/ZYjYAT2g-1Q?start=108",allowFullScreen:!0,webkitallowfullscreen:"true",frameBorder:"0",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u4f55\u7528 QnAMaker.ai \u6784\u5efa\u4e00\u4e2a\u6295\u878d\u8d44\u804a\u5929\u673a\u5668\u4eba - Azure Show: ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/2020/05/19/qnamaker-juzi-bot-for-investors-rui/"},"https://wechaty.js.org/2020/05/19/qnamaker-juzi-bot-for-investors-rui/"))),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub Repo: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/juzibot/rui-bot"},"https://github.com/juzibot/rui-bot"))),(0,o.kt)("h2",{id:"credit"},"Credit"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://juzi.bot"},"Juzi.BOT"),", \u53e5\u5b50\u4e92\u52a8\u662f\u4e00\u5bb6\u4eba\u5de5\u667a\u80fd\u6280\u672f\u4e0e\u670d\u52a1\u63d0\u4f9b\u5546\uff0c\u4e3b\u8425\u4e1a\u52a1\u662f\u57fa\u4e8e\u5fae\u4fe1\u751f\u6001\uff0c\u4e3a\u5ba2\u6237\u63d0\u4f9b\u96c6\u9500\u552e\u3001\u5e02\u573a\u548c\u552e\u540e\u4e8e\u4e00\u4f53\u7684\u667a\u80fd\u673a\u5668\u4eba\u5ba2\u670d\u7cfb\u7edf\uff0c\u901a\u8fc7\u667a\u80fd\u5bf9\u8bdd\uff0c\u5ba2\u670d\u7cfb\u7edf\u548c\u6570\u636e\u5206\u6790\u5e2e\u52a9\u4f01\u4e1a\u5feb\u901f\u83b7\u5ba2\uff0c\u589e\u52a0\u7528\u6237\u7c98\u6027\u5e76\u63d0\u9ad8\u8f6c\u5316\u3002"))}d.isMDXComponent=!0}}]);