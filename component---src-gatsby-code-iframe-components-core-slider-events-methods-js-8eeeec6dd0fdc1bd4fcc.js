(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"2iEb":function(t,n,e){"use strict";e.r(n),n.default=function(){return"text-black links-default bg-gray-200"}},"33yf":function(t,n,e){(function(t){function e(t,n){for(var e=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),e++):e&&(t.splice(r,1),e--)}if(n)for(;e--;e)t.unshift("..");return t}function r(t,n){if(t.filter)return t.filter(n);for(var e=[],r=0;r<t.length;r++)n(t[r],r,t)&&e.push(t[r]);return e}n.resolve=function(){for(var n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(n=s+"/"+n,i="/"===s.charAt(0))}return(i?"/":"")+(n=e(r(n.split("/"),(function(t){return!!t})),!i).join("/"))||"."},n.normalize=function(t){var o=n.isAbsolute(t),s="/"===i(t,-1);return(t=e(r(t.split("/"),(function(t){return!!t})),!o).join("/"))||o||(t="."),t&&s&&(t+="/"),(o?"/":"")+t},n.isAbsolute=function(t){return"/"===t.charAt(0)},n.join=function(){var t=Array.prototype.slice.call(arguments,0);return n.normalize(r(t,(function(t,n){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},n.relative=function(t,e){function r(t){for(var n=0;n<t.length&&""===t[n];n++);for(var e=t.length-1;e>=0&&""===t[e];e--);return n>e?[]:t.slice(n,e-n+1)}t=n.resolve(t).substr(1),e=n.resolve(e).substr(1);for(var i=r(t.split("/")),o=r(e.split("/")),s=Math.min(i.length,o.length),a=s,d=0;d<s;d++)if(i[d]!==o[d]){a=d;break}var u=[];for(d=a;d<i.length;d++)u.push("..");return(u=u.concat(o.slice(a))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var n=t.charCodeAt(0),e=47===n,r=-1,i=!0,o=t.length-1;o>=1;--o)if(47===(n=t.charCodeAt(o))){if(!i){r=o;break}}else i=!1;return-1===r?e?"/":".":e&&1===r?"/":t.slice(0,r)},n.basename=function(t,n){var e=function(t){"string"!=typeof t&&(t+="");var n,e=0,r=-1,i=!0;for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!i){e=n+1;break}}else-1===r&&(i=!1,r=n+1);return-1===r?"":t.slice(e,r)}(t);return n&&e.substr(-1*n.length)===n&&(e=e.substr(0,e.length-n.length)),e},n.extname=function(t){"string"!=typeof t&&(t+="");for(var n=-1,e=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===n?n=s:1!==o&&(o=1):-1!==n&&(o=-1);else if(!i){e=s+1;break}}return-1===n||-1===r||0===o||1===o&&n===r-1&&n===e+1?"":t.slice(n,r)};var i="b"==="ab".substr(-1)?function(t,n,e){return t.substr(n,e)}:function(t,n,e){return n<0&&(n=t.length+n),t.substr(n,e)}}).call(this,e("8oxB"))},"50uA":function(t,n,e){"use strict";e.r(n);var r=e("Ybrd").default,i=e("I3pL").default;n.default=function(){return'\n<div class="slides">\n  <nav class="slides-inner row row-2" id="demo--slider-events-targets">\n\n    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">\n      <div class="card rounded-md '+i()+'">\n        <div class="h4">1</div>\n      </div>\n    </div>\n\n    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">\n      <div class="card rounded-md '+i()+'">\n        <div class="h4">2</div>\n      </div>\n    </div>\n\n    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">\n      <div class="card rounded-md '+i()+'">\n        <div class="h4">3</div>\n      </div>\n    </div>\n\n    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">\n      <div class="card rounded-md '+i()+'">\n        <div class="h4">4</div>\n      </div>\n    </div>\n\n    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">\n      <div class="card rounded-md '+i()+'">\n        <div class="h4">5</div>\n      </div>\n    </div>\n\n  </nav>\n</div>\n\n<nav class="slider-pagination w-full list list-2">\n  <button type="button" class="btn '+r()+'" data-xt-nav="-1" title="Previous slide">\n    prev\n  </button>\n  <button type="button" class="btn '+r()+' xt-ignore" data-xt-pag title="Slide xt-num">\n  </button>\n  <button type="button" class="btn '+r()+'" data-xt-nav="1" title="Next slide">\n    next\n  </button>\n</nav>\n'}},I3pL:function(t,n,e){"use strict";e.r(n),n.default=function(){return"card-md text-center text-black links-default bg-gray-200"}},IRUh:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e("dI71"),i=e("q1tI"),o=e.n(i),s=e("iyGq"),a=e("KQm4"),d=(e("yLb1"),function(t){function n(){return t.apply(this,arguments)||this}return Object(r.a)(n,t),n.prototype.render=function(){var t=this.props,n=t.demo,r=t.children;if("undefined"!=typeof window){var i,s=e("Zz1u").Xt,d="gatsby_iframe-inside";n.container&&(d+=" gatsby_iframe-container"),(i=document.documentElement.classList).add.apply(i,Object(a.a)(d.split(" "))),document.documentElement.setAttribute("id","iframe--"+n.name);s.ready((function(){window.self!==window.top&&window.parent.initIframe(window.name,n.htmlSource,n.jsxSource,n.cssSource,n.jsSource)}))}return o.a.createElement(o.a.Fragment,null,r)},n}(o.a.Component)),u=function(t){function n(){return t.apply(this,arguments)||this}return Object(r.a)(n,t),n.prototype.render=function(){var t=this.props.demo,n={title:"Demo",description:"Demo"};return t.path=("/demos/"+t.dirs.join("/")+"/"+t.name).replace("/iframe","").replace("src/gatsby/code/",""),t.cssSource=t.path+".css",t.jsSource=t.path+".js",o.a.createElement(d,{demo:t},o.a.createElement(s.a,{title:n.title,description:n.description}),o.a.createElement("div",{id:"body-outer"},o.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:t.htmlSource}})))},n}(o.a.Component)},S6im:function(t,n,e){"use strict";var r=e("lSNA");function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}t.exports=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2?arguments[2]:void 0;if(e=o({indent:" ",includeEmptyLines:!1},e),"string"!=typeof t)throw new TypeError("Expected `input` to be a `string`, got `".concat(typeof t,"`"));if("number"!=typeof n)throw new TypeError("Expected `count` to be a `number`, got `".concat(typeof n,"`"));if("string"!=typeof e.indent)throw new TypeError("Expected `options.indent` to be a `string`, got `".concat(typeof e.indent,"`"));if(0===n)return t;var r=e.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return t.replace(r,e.indent.repeat(n))}},Ybrd:function(t,n,e){"use strict";e.r(n),n.default=function(){return"text-black links-default bg-gray-200 hover:bg-gray-300 active:bg-gray-400"}},lSNA:function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},"oP/2":function(t,n,e){"use strict";e.r(n),function(t){e.d(n,"demo",(function(){return p}));var r=e("dI71"),i=e("q1tI"),o=e.n(i),s=e("33yf"),a=e.n(s),d=e("IRUh"),u=e("sf5o").default,c=e("2iEb").default,l=e("50uA").default,b=e("S6im"),f=t.replace(/\\/g,"/"),m=a.a.dirname(f).split("/"),p={container:!0,name:a.a.basename(f,".js"),dirs:m};p.htmlSource='\n<div class="list list-1 items-center mb-4">\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-first-element">\n    1st element\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-first-target">\n    1st target\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--toggle-events-autostart">\n    Autostart\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--toggle-events-autostop">\n    Autostop\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-add">\n    Add\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-remove">\n    Remove\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-block">\n    Block/Unblock\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-reinit">\n    Reinit\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-restart">\n    Restart\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-destroy">\n    Destroy\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-unmount">\n    Unmount\n  </button>\n</div>\n\n<div class="slider" id="demo--slider-events">\n'+b(l(),2)+'\n</div>\n\n<div class="card rounded-md '+c()+' mt-6">\n  <div class="card-sm overflow-y-auto overflow-x-hidden overflow-sub max-h-56" id="demo--slider-events-log">\n  </div>\n</div>\n';var v=function(t){function n(){return t.apply(this,arguments)||this}return Object(r.a)(n,t),n.prototype.render=function(){return o.a.createElement(d.a,{demo:p})},n}(o.a.Component);n.default=v}.call(this,"src/gatsby/code/iframe/components/core/slider/events-methods.js")},sf5o:function(t,n,e){"use strict";e.r(n),n.default=function(){return"text-white links-inverse bg-accent-500 hover:bg-accent-600 active:bg-accent-700"}}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-components-core-slider-events-methods-js-8eeeec6dd0fdc1bd4fcc.js.map