webpackJsonp([43,141],{6:function(n,a,s){"use strict";s(18),s(17),s(12)},11:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var p=s(13),e=t(p);a["default"]=function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return(0,e["default"])(n)}},12:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=s(11);t(p)},13:function(n,a,s){n.exports={"default":s(14),__esModule:!0}},14:function(n,a,s){s(30),s(16),n.exports=s(20).Array.from},15:function(n,a,s){"use strict";var t=s(25),p=s(29);n.exports=function(n,a,s){a in n?t.f(n,a,p(0,s)):n[a]=s}},16:function(n,a,s){"use strict";var t=s(28),p=s(22),e=s(26),o=s(34),c=s(33),l=s(31),u=s(15),i=s(32);p(p.S+p.F*!s(35)(function(n){Array.from(n)}),"Array",{from:function(n){var a,s,p,r,k=e(n),f="function"==typeof this?this:Array,d=arguments.length,m=d>1?arguments[1]:void 0,g=void 0!==m,v=0,y=i(k);if(g&&(m=t(m,d>2?arguments[2]:void 0,2)),void 0==y||f==Array&&c(y))for(a=l(k.length),s=new f(a);a>v;v++)u(s,v,g?m(k[v],v):k[v]);else for(r=y.call(k),s=new f;!(p=r.next()).done;v++)u(s,v,g?o(r,m,[p.value,v],!0):p.value);return s.length=v,s}})},17:function(n,a){},18:function(n,a){},23:function(n,a,s){"use strict";s(36)},36:function(n,a){},110:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(2),e=t(p),o=s(3),c=t(o),l=s(5),u=t(l),i=s(4),r=t(i),k=s(1),f=t(k),d=s(7),m=t(d),g=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var p=0,t=Object.getOwnPropertySymbols(n);p<t.length;p++)a.indexOf(t[p])<0&&(s[t[p]]=n[t[p]]);return s},v=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n=this.props,a=n.prefixCls,s=n.className,t=n.children,p=n.mode,o=n.icon,c=n.onLeftClick,l=n.leftContent,u=n.rightContent,i=g(n,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return f["default"].createElement("div",(0,e["default"])({},i,{className:(0,m["default"])(s,a,a+"-"+p)}),f["default"].createElement("div",{className:a+"-left",role:"button",onClick:c},o?f["default"].createElement("span",{className:a+"-left-icon","aria-hidden":"true"},o):null,l),f["default"].createElement("div",{className:a+"-title"},t),f["default"].createElement("div",{className:a+"-right"},u))},a}(f["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}},n.exports=a["default"]},111:function(n,a,s){"use strict";s(6),s(205)},205:function(n,a){},626:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u5bfc\u822a\u680f","en-US":"NavBar"},filename:"components/nav-bar/demo/basic.md",id:"components-nav-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NavBar<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span>\n      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span>\n      <span class="token attr-name">icon={&lt;Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n      onLeftClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onLeftClick\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      rightContent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">\'16px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ellipsis<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>NavBar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavBar</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span>\n      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>\n      <span class="token attr-name">leftContent</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Back<span class="token punctuation">"</span></span>\n      <span class="token attr-name">rightContent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n        <span class="token operator">&lt;</span>Icon key<span class="token operator">=</span><span class="token string">"0"</span> type<span class="token operator">=</span><span class="token string">"search"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">\'16px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ellipsis<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>NavBar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavBar</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(1),s(111),s(110)),p=n(t),e=(s(23),s(63)),o=n(e);return a.createElement("div",null,a.createElement(p["default"],{mode:"light",icon:a.createElement(o["default"],{type:"left"}),onLeftClick:function(){return console.log("onLeftClick")},rightContent:[a.createElement(o["default"],{key:"0",type:"search",style:{marginRight:"16px"}}),a.createElement(o["default"],{key:"1",type:"ellipsis"})]},"NavBar"),a.createElement(p["default"],{mode:"dark",leftContent:"Back",rightContent:[a.createElement(o["default"],{key:"0",type:"search",style:{marginRight:"16px"}}),a.createElement(o["default"],{key:"1",type:"ellipsis"})]},"NavBar"))}}},731:function(n,a,s){n.exports={basic:s(626)}}});