(self.webpackChunk=self.webpackChunk||[]).push([[5955],{5318:function(t,e,a){"use strict";a.d(e,{Zo:function(){return p},kt:function(){return y}});var r=a(7378);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),s=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),h=s(a),y=n,g=h["".concat(i,".").concat(y)]||h[y]||u[y]||l;return a?r.createElement(g,c(c({ref:e},p),{},{components:a})):r.createElement(g,c({ref:e},p))}));function y(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,c=new Array(l);c[0]=h;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,c[1]=o;for(var s=2;s<l;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3585:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return c},metadata:function(){return o},toc:function(){return i},default:function(){return p}});var r=a(9603),n=a(120),l=(a(7378),a(5318)),c={slug:"/polyglot/scala/",title:"Scala Wechaty",sidebar_label:"Scala"},o={unversionedId:"polyglot/scala/overview",id:"polyglot/scala/overview",isDocsHomePage:!1,title:"Scala Wechaty",description:"Scala Wechaty",source:"@site/docs/polyglot/scala/overview.md",sourceDirName:"polyglot/scala",slug:"/polyglot/scala/",permalink:"/docs/polyglot/scala/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/scala/overview.md",version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1620021446,formattedLastUpdatedAt:"5/3/2021",sidebar_label:"Scala",frontMatter:{slug:"/polyglot/scala/",title:"Scala Wechaty",sidebar_label:"Scala"},sidebar:"docs",previous:{title:"Java Wechaty",permalink:"/docs/polyglot/java/"},next:{title:"PHP Wechaty",permalink:"/docs/polyglot/php/"}},i=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],s={toc:i};function p(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/wechaty/scala-wechaty"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-Scala-890",alt:"Scala Wechaty"}))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GitHub Repo ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wechaty/scala-wechaty"},"https://github.com/wechaty/scala-wechaty")),(0,l.kt)("li",{parentName:"ul"},"Getting Started Template Repo ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wechaty/scala-wechaty-getting-started"},"https://github.com/wechaty/scala-wechaty-getting-started"))),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"Template Repo: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wechaty/scala-wechaty-getting-started"},"https://github.com/wechaty/scala-wechaty-getting-started")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/scala-wechaty-getting-started.git\ncd scala-wechaty-getting-started\nmake install\nmake bot\n")),(0,l.kt)("h2",{id:"blogs"},"Blogs"),(0,l.kt)("p",null,"Read blogs with the ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," tag at ",(0,l.kt)("a",{parentName:"p",href:"https://wechaty.js.org/tags.html#scala"},"https://wechaty.js.org/tags.html#scala")),(0,l.kt)("h2",{id:"history"},"History"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/wechaty/scala-wechaty"},"Scala Wechaty, @jcai, Jul 2, 2020"))),(0,l.kt)("h2",{id:"maintainers"},"Maintainers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/jcai"},"@jcai"))))}p.isMDXComponent=!0}}]);