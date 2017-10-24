webpackJsonp([41,141],{6:function(n,a,s){"use strict";s(18),s(17),s(12)},11:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=s(13),p=t(e);a["default"]=function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return(0,p["default"])(n)}},12:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=s(11);t(e)},13:function(n,a,s){n.exports={"default":s(14),__esModule:!0}},14:function(n,a,s){s(30),s(16),n.exports=s(20).Array.from},15:function(n,a,s){"use strict";var t=s(25),e=s(29);n.exports=function(n,a,s){a in n?t.f(n,a,e(0,s)):n[a]=s}},16:function(n,a,s){"use strict";var t=s(28),e=s(22),p=s(26),o=s(34),c=s(33),l=s(31),u=s(15),i=s(32);e(e.S+e.F*!s(35)(function(n){Array.from(n)}),"Array",{from:function(n){var a,s,e,r,k=p(n),d="function"==typeof this?this:Array,f=arguments.length,g=f>1?arguments[1]:void 0,m=void 0!==g,h=0,v=i(k);if(m&&(g=t(g,f>2?arguments[2]:void 0,2)),void 0==v||d==Array&&c(v))for(a=l(k.length),s=new d(a);a>h;h++)u(s,h,m?g(k[h],h):k[h]);else for(r=v.call(k),s=new d;!(e=r.next()).done;h++)u(s,h,m?o(r,g,[e.value,h],!0):e.value);return s.length=h,s}})},17:function(n,a){},18:function(n,a){},23:function(n,a,s){"use strict";s(36)},36:function(n,a){},79:function(n,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(n){return Object.keys(n).reduce(function(a,s){return"aria-"!==s.substr(0,5)&&"data-"!==s.substr(0,5)&&"role"!==s||(a[s]=n[s]),a},{})},n.exports=a["default"]},513:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(2),p=t(e),o=s(10),c=t(o),l=s(3),u=t(l),i=s(5),r=t(i),k=s(4),d=t(k),f=s(1),g=t(f),m=s(7),h=t(m),v=s(63),y=t(v),b=s(79),C=t(b),x=s(49),T=t(x),w=function(n){function a(s){(0,u["default"])(this,a);var t=(0,r["default"])(this,n.call(this,s));return t.onClick=function(){var n=t.props,a=n.disabled,s=n.onChange;if(!a){var e=t.state.selected;t.setState({selected:!e},function(){s&&s(!e)})}},t.onTagClose=function(){t.props.onClose&&t.props.onClose(),t.setState({closed:!0},t.props.afterClose)},t.state={selected:s.selected,closed:!1},t}return(0,d["default"])(a,n),a.prototype.componentWillReceiveProps=function(n){this.props.selected!==n.selected&&this.setState({selected:n.selected})},a.prototype.render=function(){var n,a=this.props,s=a.children,t=a.className,e=a.prefixCls,o=a.disabled,l=a.closable,u=a.small,i=a.style,r=(0,h["default"])(t,e,(n={},(0,c["default"])(n,e+"-normal",!o&&(!this.state.selected||u||l)),(0,c["default"])(n,e+"-small",u),(0,c["default"])(n,e+"-active",this.state.selected&&!o&&!u&&!l),(0,c["default"])(n,e+"-disabled",o),(0,c["default"])(n,e+"-closable",l),n)),k=!l||o||u?null:g["default"].createElement(T["default"],{activeClassName:e+"-close-active"},g["default"].createElement("div",{className:e+"-close",role:"button",onClick:this.onTagClose,"aria-label":"remove tag"},g["default"].createElement(y["default"],{type:"cross-circle",size:"xs","aria-hidden":"true"})));return this.state.closed?null:g["default"].createElement("div",(0,p["default"])({},(0,C["default"])(this.props),{className:r,onClick:this.onClick,style:i}),g["default"].createElement("div",{className:e+"-text"},s),k)},a}(g["default"].Component);a["default"]=w,w.defaultProps={prefixCls:"am-tag",disabled:!1,selected:!1,closable:!1,small:!1,onChange:function(){},onClose:function(){},afterClose:function(){}},n.exports=a["default"]},514:function(n,a,s){"use strict";s(6),s(23),s(833)},692:function(n,a,s){n.exports={content:{"zh-CN":[["p","Tag \u5206\u4e3a\u4e24\u79cd\u7c7b\u578b\uff1a",["code","selectable"]," / ",["code","readonly"],", \u540e\u8005\u662f\u65e0\u4ea4\u4e92\u7684\uff0c\u5c3a\u5bf8\u66f4\u5c0f\uff0c\u901a\u5e38\u7528\u4e8e\u5185\u5bb9\u5c55\u793a\u3002"]],"en-US":[["p","There are two kinds of Tag, selectable and readonly type, the latter is a smaller tag without interactive behavior, which is typically used for display content."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/tag/demo/basic.md",id:"components-tag-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`tag selected: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selected<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tag-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Basic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">selected</span><span class="token punctuation">></span></span>Selected<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Callback<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span>\n      <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onClose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">afterClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterClose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      Closable\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">small</span><span class="token punctuation">></span></span>Small and Readonly<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n){console.log("tag selected: "+n)}var t=s(1),e=(s(1),s(514),s(513)),p=n(e);return t.createElement("div",{className:"tag-container"},t.createElement(p["default"],{"data-seed":"logId"},"Basic"),t.createElement(p["default"],{selected:!0},"Selected"),t.createElement(p["default"],{disabled:!0},"Disabled"),t.createElement(p["default"],{onChange:a},"Callback"),t.createElement(p["default"],{closable:!0,onClose:function(){console.log("onClose")},afterClose:function(){console.log("afterClose")}},"Closable"),t.createElement(p["default"],{small:!0},"Small and Readonly"))},style:".tag-container{\n  display: flex;\n  padding-top: 9px;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.tag-container > div {\n  margin-left: 9px;\n  margin-bottom: 9px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.tag-container</span></span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token number">9</span>px<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>\n  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.tag-container</span> > div </span><span class="token punctuation">{</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">9</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">9</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},751:function(n,a,s){n.exports={basic:s(692)}},833:function(n,a){}});