(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+8/F":function(n,t,e){"use strict";e.r(t),t.default=function(){return"text-black links-default bg-white"}},"2iEb":function(n,t,e){"use strict";e.r(t),t.default=function(){return"text-black links-default bg-gray-200"}},"33yf":function(n,t,e){(function(n){function e(n,t){for(var e=0,o=n.length-1;o>=0;o--){var r=n[o];"."===r?n.splice(o,1):".."===r?(n.splice(o,1),e++):e&&(n.splice(o,1),e--)}if(t)for(;e--;e)n.unshift("..");return n}function o(n,t){if(n.filter)return n.filter(t);for(var e=[],o=0;o<n.length;o++)t(n[o],o,n)&&e.push(n[o]);return e}t.resolve=function(){for(var t="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var s=i>=0?arguments[i]:n.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return(r?"/":"")+(t=e(o(t.split("/"),(function(n){return!!n})),!r).join("/"))||"."},t.normalize=function(n){var i=t.isAbsolute(n),s="/"===r(n,-1);return(n=e(o(n.split("/"),(function(n){return!!n})),!i).join("/"))||i||(n="."),n&&s&&(n+="/"),(i?"/":"")+n},t.isAbsolute=function(n){return"/"===n.charAt(0)},t.join=function(){var n=Array.prototype.slice.call(arguments,0);return t.normalize(o(n,(function(n,t){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n})).join("/"))},t.relative=function(n,e){function o(n){for(var t=0;t<n.length&&""===n[t];t++);for(var e=n.length-1;e>=0&&""===n[e];e--);return t>e?[]:n.slice(t,e-t+1)}n=t.resolve(n).substr(1),e=t.resolve(e).substr(1);for(var r=o(n.split("/")),i=o(e.split("/")),s=Math.min(r.length,i.length),l=s,u=0;u<s;u++)if(r[u]!==i[u]){l=u;break}var a=[];for(u=l;u<r.length;u++)a.push("..");return(a=a.concat(i.slice(l))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(n){if("string"!=typeof n&&(n+=""),0===n.length)return".";for(var t=n.charCodeAt(0),e=47===t,o=-1,r=!0,i=n.length-1;i>=1;--i)if(47===(t=n.charCodeAt(i))){if(!r){o=i;break}}else r=!1;return-1===o?e?"/":".":e&&1===o?"/":n.slice(0,o)},t.basename=function(n,t){var e=function(n){"string"!=typeof n&&(n+="");var t,e=0,o=-1,r=!0;for(t=n.length-1;t>=0;--t)if(47===n.charCodeAt(t)){if(!r){e=t+1;break}}else-1===o&&(r=!1,o=t+1);return-1===o?"":n.slice(e,o)}(n);return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},t.extname=function(n){"string"!=typeof n&&(n+="");for(var t=-1,e=0,o=-1,r=!0,i=0,s=n.length-1;s>=0;--s){var l=n.charCodeAt(s);if(47!==l)-1===o&&(r=!1,o=s+1),46===l?-1===t?t=s:1!==i&&(i=1):-1!==t&&(i=-1);else if(!r){e=s+1;break}}return-1===t||-1===o||0===i||1===i&&t===o-1&&t===e+1?"":n.slice(t,o)};var r="b"==="ab".substr(-1)?function(n,t,e){return n.substr(t,e)}:function(n,t,e){return t<0&&(t=n.length+t),n.substr(t,e)}}).call(this,e("8oxB"))},IRUh:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var o=e("dI71"),r=e("q1tI"),i=e.n(r),s=e("iyGq"),l=e("KQm4"),u=(e("yLb1"),function(n){function t(){return n.apply(this,arguments)||this}return Object(o.a)(t,n),t.prototype.render=function(){var n=this.props,t=n.demo,o=n.children;if("undefined"!=typeof window){var r,s=e("Zz1u").Xt,u="gatsby_iframe-inside";t.container&&(u+=" gatsby_iframe-container"),(r=document.documentElement.classList).add.apply(r,Object(l.a)(u.split(" "))),document.documentElement.setAttribute("id","iframe--"+t.name);s.ready((function(){window.self!==window.top&&window.parent.initIframe(window.name,t.htmlSource,t.jsxSource,t.cssSource,t.jsSource)}))}return i.a.createElement(i.a.Fragment,null,o)},t}(i.a.Component)),a=function(n){function t(){return n.apply(this,arguments)||this}return Object(o.a)(t,n),t.prototype.render=function(){var n=this.props.demo,t={title:"Demo",description:"Demo"};return n.path=("/demos/"+n.dirs.join("/")+"/"+n.name).replace("/iframe","").replace("src/gatsby/code/",""),n.cssSource=n.path+".css",n.jsSource=n.path+".js",i.a.createElement(u,{demo:n},i.a.createElement(s.a,{title:t.title,description:t.description}),i.a.createElement("div",{id:"body-outer"},i.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:n.htmlSource}})))},t}(i.a.Component)},TaEE:function(n,t,e){"use strict";e.r(t),e.d(t,"iconX",(function(){return o})),e.d(t,"iconSearch",(function(){return r})),e.d(t,"iconArrowLeft",(function(){return i})),e.d(t,"iconArrowRight",(function(){return s})),e.d(t,"iconArrowUp",(function(){return l})),e.d(t,"iconArrowDown",(function(){return u})),e.d(t,"iconChevronLeft",(function(){return a})),e.d(t,"iconChevronRight",(function(){return c})),e.d(t,"iconChevronUp",(function(){return d})),e.d(t,"iconChevronDown",(function(){return v})),e.d(t,"iconLocate",(function(){return h})),e.d(t,"iconPackage",(function(){return p})),e.d(t,"iconGithub",(function(){return f})),e.d(t,"iconLink",(function(){return w})),e.d(t,"iconCode",(function(){return g})),e.d(t,"iconMaximize",(function(){return m})),e.d(t,"iconExternal",(function(){return y})),e.d(t,"iconCopy",(function(){return b}));var o=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'},r=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>'},i=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>'},s=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'},l=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>'},u=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>'},a=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><polyline points="15 18 9 12 15 6"></polyline></svg>'},c=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><polyline points="9 18 15 12 9 6"></polyline></svg>'},d=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><polyline points="18 15 12 9 6 15"></polyline></svg>'},v=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><polyline points="6 9 12 15 18 9"></polyline></svg>'},h=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'},p=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>'},f=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'},w=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'},g=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'},m=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>'},y=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>'},b=function(n){var t=(void 0===n?{}:n).classes,e=void 0===t?null:t;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(e=e?" "+e:"")+'"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'}},Ybrd:function(n,t,e){"use strict";e.r(t),t.default=function(){return"text-black links-default bg-gray-200 hover:bg-gray-300 active:bg-gray-400"}},sf5o:function(n,t,e){"use strict";e.r(t),t.default=function(){return"text-white links-inverse bg-accent-500 hover:bg-accent-600 active:bg-accent-700"}},z8Vr:function(n,t,e){"use strict";e.r(t),function(n){e.d(t,"demo",(function(){return w}));var o=e("dI71"),r=e("q1tI"),i=e.n(r),s=e("33yf"),l=e.n(s),u=e("IRUh"),a=e("sf5o").default,c=e("Ybrd").default,d=e("2iEb").default,v=e("+8/F").default,h=e("TaEE").iconX,p=n.replace(/\\/g,"/"),f=l.a.dirname(p).split("/"),w={container:!0,name:l.a.basename(p,".js"),dirs:f};w.htmlSource='\n<div class="list list-1 items-center mb-4">\n  <button type="button" class="btn btn-sm rounded-md '+a()+'" id="demo--overlay-events-first-element">\n    1st element\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+a()+'" id="demo--overlay-events-first-target">\n    1st target\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+a()+'" id="demo--overlay-events-block">\n    Block/Unblock\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+a()+'" id="demo--overlay-events-reinit">\n    Reinit\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+a()+'" id="demo--overlay-events-restart">\n    Restart\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+a()+'" id="demo--overlay-events-destroy">\n    Destroy\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+a()+'" id="demo--overlay-events-unmount">\n    Unmount\n  </button>\n</div>\n\n<div class="list list-1 items-center mb-4">\n  <button type="button" class="btn btn-md rounded-md '+c()+'" id="demo--overlay-events">\n    Toggle 0\n  </button>\n  <button type="button" class="btn btn-md rounded-md '+c()+'" id="demo--overlay-events-alt">\n    Toggle 1\n  </button>\n</div>\n\n<div class="overlay" id="overlay-nested">\n  <div class="overlay-container max-w-5xl">\n    <div class="overlay-inner">\n\n      <div class="card rounded-md shadow-overlay '+v()+'">\n        <div class="btn btn-close p-5 text-2xl" aria-label="Close">\n          '+h()+'\n        </div>\n        <div class="card-md md:card-lg">\n          <div class="h3">Overlay</div>\n          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>\n          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<div class="card rounded-md '+d()+' mt-6">\n  <div class="card-sm overflow-y-auto overflow-x-hidden overflow-sub max-h-56" id="demo--overlay-events-log">\n  </div>\n</div>\n';var g=function(n){function t(){return n.apply(this,arguments)||this}return Object(o.a)(t,n),t.prototype.render=function(){return i.a.createElement(u.a,{demo:w})},t}(i.a.Component);t.default=g}.call(this,"src/gatsby/code/iframe/components/core/overlay/events-methods.js")}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-components-core-overlay-events-methods-js-5e6af048ba7fe9f1c17c.js.map