(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{227:function(e,n,t){"use strict";t.r(n),t.d(n,"query",function(){return u});t(104),t(105);var a=t(0),o=t.n(a),r=t(243),i=t.n(r),l=t(230),c=(t(152),t(239)),m=t(238),u="450690810";n.default=Object(l.injectIntl)(function(e){var n,t=e.data,a=e.intl,r=t.allMarkdownRemark.edges,l=a.locale;n=r.map(function(e){return e.node.fields.lang}).includes(l)?r.filter(function(e){return e.node.fields.lang===l})[0].node:r[0].node;return o.a.createElement(c.a,null,o.a.createElement(m.a,{title:n.frontmatter.title}),i()(n.html))})},233:function(e,n,t){"use strict";var a=t(240),o=t.n(a),r=t(241),i=t.n(r);i.a.headerFontFamily=["Alegreya Sans","KaiTi","楷体","STKaiti","华文楷体"],i.a.bodyFontFamily=["Alegreya","Microsoft YaHei New","Microsoft Yahei","微软雅黑","宋体","SimHei","STXihei","华文细黑"];var l=new o.a(i.a),c=(l.scale,l.rhythm,l.options);n.a={colors:{main:"#508084",mainAlt:"ghostwhite",pageBg:"white",highlight:"#f4ff99",bodyText:c.bodyColor,headerText:c.headerColor},fonts:{body:c.bodyFontFamily.map(function(e){return'"'+e+'"'}).join(","),header:c.headerFontFamily.map(function(e){return'"'+e+'"'}).join(",")},contentMaxWidth:"960px",contentOverhang:"20px",pageShadow:'\n    position: relative;\n\n    &::before,\n    &::after {\n      border-radius: 100px / 10px;\n      bottom: 10px;\n      box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);\n      content: "";\n      left: 0;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      z-index: -1;\n    }\n\n    &::after {\n      left: auto;\n      right: 10px;\n      transform: skew(8deg) rotate(3deg);\n    }\n  '}},235:function(e,n,t){e.exports=t.p+"static/WaterPlain0008_1_270-639e0f9bcb49e2df527b0af0da421ff2.jpg"},236:function(e,n,t){e.exports=t.p+"static/apilcs_trsp_202x202-0d5e0d2ad01c2a8260c167d7b9586475.png"},237:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAQAAAAD+Fb1AAAAGklEQVR4AWN6WgaBTAzPIJDp/xsIZGL4CoEAcqcUjTsQ+dQAAAAASUVORK5CYII="},238:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(232),i=t.n(r),l=t(230);t(152);function c(e){var n=e.description,t=e.meta,a=e.title,r=e.intl,l=n||r.formatMessage({id:"description"});return o.a.createElement(i.a,{htmlAttributes:{lang:r.locale},title:a,titleTemplate:"%s | "+r.formatMessage({id:"title"}),meta:[{name:"description",content:l},{property:"og:title",content:a},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.formatMessage({id:"author"})},{name:"twitter:title",content:a},{name:"twitter:description",content:l}].concat(t)})}c.defaultProps={meta:[],description:""},n.a=Object(l.injectIntl)(c)},239:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(232),i=t.n(r),l=t(231),c=t(230),m=(t(152),t(233)),u=t(235),s=t.n(u);function d(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(['\n\n  html, body, #___gatsby {\n    height: 100%;\n  }\n\n  div[role="group"][tabindex] {\n    height: 100%;\n  }\n\n  body {\n    padding: 0;\n    margin: 0;\n    background: url(',');\n\n    &::before {\n      box-shadow: 0 0 10px rgba(0,0,0,.8);\n      content: "";\n      height: 10px;\n      left: 0;\n      position: fixed;\n      top: -10px;\n      width: 100%;\n      z-index: 100;\n    }\n  }\n\n  a {\n    color: ',";\n  }\n"]);return d=function(){return e},e}var g=Object(l.b)(d(),s.a,function(e){return e.theme.colors.main}),p={en:"English",zh:"中文"},h=l.c.div.withConfig({displayName:"language-switcher__Container",componentId:"s6ntyk-0"})(["position:absolute;top:40px;right:10px;"]),f=l.c.button.withConfig({displayName:"language-switcher__LanguageButton",componentId:"s6ntyk-1"})(["background:none;border:none;color:",";cursor:pointer;margin:10;"],function(e){return e.activeLocale?"yellow":"white"}),b=function(){return o.a.createElement(h,null,o.a.createElement(c.IntlContextConsumer,null,function(e){var n=e.languages,t=e.language;return n.map(function(e){return o.a.createElement(f,{type:"button",key:e,onClick:function(){return Object(c.changeLocale)("en"===e?"":e)},activeLocale:t===e},p[e])})}))},x=t(236),y=t.n(x),v=t(237),w=t.n(v),E=l.c.div.withConfig({displayName:"layout__Container",componentId:"sc-1orxqys-0"})(["display:flex;flex-direction:column;min-height:100%;overflow:hidden;main{"," background:",";background-image:url(",");border-radius:0 0 8px 0;flex-grow:1;margin:"," auto 0;max-width:",";padding:60px 120px 20px;width:100%;}"],function(e){return e.theme.pageShadow},function(e){return e.theme.colors.pageBg},w.a,function(e){return"-"+e.theme.contentOverhang},function(e){return e.theme.contentMaxWidth}),A=l.c.header.withConfig({displayName:"layout__Header",componentId:"sc-1orxqys-1"})(["background:rgba(0,0,0,0.7);border-bottom:1px solid ",";display:flex;padding-bottom:",";> div{flex-grow:1;margin:0 auto;max-width:",";position:relative;}"],function(e){return e.theme.colors.main},function(e){return e.theme.contentOverhang},function(e){return e.theme.contentMaxWidth}),k=l.c.div.withConfig({displayName:"layout__Branding",componentId:"sc-1orxqys-2"})(["display:flex;flex-direction:row-reverse;margin-bottom:10px;align-items:flex-end;> div{flex-grow:1;}h1{margin-bottom:0;}h2{color:",";font-size:1.4rem;margin-top:0.375rem;}img{height:100px;margin:5px 20px 5px 0;}"],function(e){return e.theme.colors.mainAlt}),C=l.c.nav.withConfig({displayName:"layout__Naivgation",componentId:"sc-1orxqys-3"})([""," background:",";border-radius:0 8px 0 0;color:",";font-family:",";ul{display:flex;margin:0;}li{border-right:1px solid rgba(255,255,255,0.07);display:inline-block;list-style:none;margin-bottom:0;text-align:center;a{color:",";display:inline-block;padding:4px 10px;transition:background-color 0.25s ease;&:hover,&.active{background-color:rgba(255,255,255,0.2);box-shadow:none;}}}"],function(e){return e.theme.pageShadow},function(e){return e.theme.colors.main},function(e){return e.theme.colors.mainAlt},function(e){return e.theme.fonts.header},function(e){return e.theme.colors.mainAlt}),_=l.c.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1orxqys-4"})(["background:rgba(0,0,0,0.7);color:",";padding-top:",";margin-top:-",";> div{margin:0 auto;max-width:",";line-height:50px;text-align:right;}"],function(e){return e.theme.colors.mainAlt},function(e){return e.theme.contentOverhang},function(e){return e.theme.contentOverhang},function(e){return e.theme.contentMaxWidth});n.a=Object(c.injectIntl)(function(e){var n=e.children,t=e.intl;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com",crossOrigin:!0})),o.a.createElement(l.a,{theme:m.a},o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null),o.a.createElement(E,null,o.a.createElement(A,null,o.a.createElement("div",null,o.a.createElement(k,null,o.a.createElement("div",null,o.a.createElement("h1",null,o.a.createElement(c.Link,{to:"/"},t.formatMessage({id:"title"}))),o.a.createElement("h2",null,t.formatMessage({id:"subtitle"}))),o.a.createElement("img",{src:y.a,alt:"APILS Logo"})),o.a.createElement(C,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/",activeClassName:"active"},t.formatMessage({id:"nav.home"}))),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/about/",activeClassName:"active"},t.formatMessage({id:"nav.about"}))),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/volumes/",activeClassName:"active"},t.formatMessage({id:"nav.volumes"}))),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/submissions/",activeClassName:"active"},t.formatMessage({id:"nav.submissions"}))))),o.a.createElement(b,null))),o.a.createElement("main",null,n),o.a.createElement(_,null,o.a.createElement("div",null,"© ",(new Date).getFullYear(),", APILS"))))))})}}]);
//# sourceMappingURL=component---src-templates-static-page-js-5520c65e66498c2b1936.js.map