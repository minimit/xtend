(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"2iEb":function(t,n,e){"use strict";e.r(n),n.default=function(){return"text-black links-default bg-gray-200"}},"50uA":function(t,n,e){"use strict";e.r(n);var o=e("Ybrd").default,d=e("I3pL").default;n.default=function(){return'\n<div class="slides">\n  <nav class="slides-inner row row-2" id="demo--slider-events-targets">\n\n    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">\n      <div class="card rounded-md '+d()+'">\n        <div class="h4">1</div>\n      </div>\n    </div>\n\n    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">\n      <div class="card rounded-md '+d()+'">\n        <div class="h4">2</div>\n      </div>\n    </div>\n\n    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">\n      <div class="card rounded-md '+d()+'">\n        <div class="h4">3</div>\n      </div>\n    </div>\n\n    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">\n      <div class="card rounded-md '+d()+'">\n        <div class="h4">4</div>\n      </div>\n    </div>\n\n    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">\n      <div class="card rounded-md '+d()+'">\n        <div class="h4">5</div>\n      </div>\n    </div>\n\n  </nav>\n</div>\n\n<nav class="slider-pagination w-full list list-2">\n  <button type="button" class="btn '+o()+'" data-xt-nav="-1" title="Previous slide">\n    prev\n  </button>\n  <button type="button" class="btn '+o()+' xt-ignore" data-xt-pag title="Slide xt-num">\n  </button>\n  <button type="button" class="btn '+o()+'" data-xt-nav="1" title="Next slide">\n    next\n  </button>\n</nav>\n'}},S6im:function(t,n,e){"use strict";var o=e("lSNA");function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}t.exports=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2?arguments[2]:void 0;if(e=s({indent:" ",includeEmptyLines:!1},e),"string"!=typeof t)throw new TypeError("Expected `input` to be a `string`, got `".concat(typeof t,"`"));if("number"!=typeof n)throw new TypeError("Expected `count` to be a `number`, got `".concat(typeof n,"`"));if("string"!=typeof e.indent)throw new TypeError("Expected `options.indent` to be a `string`, got `".concat(typeof e.indent,"`"));if(0===n)return t;var o=e.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return t.replace(o,e.indent.repeat(n))}},lSNA:function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},"oP/2":function(t,n,e){"use strict";e.r(n),function(t){e.d(n,"demo",(function(){return p}));var o=e("dI71"),d=e("q1tI"),s=e.n(d),i=e("33yf"),r=e.n(i),a=e("IRUh"),u=e("sf5o").default,c=e("2iEb").default,l=e("50uA").default,b=e("S6im"),v=t.replace(/\\/g,"/"),m=r.a.dirname(v).split("/"),p={container:!0,full:!1,name:r.a.basename(v,".js"),dirs:m};p.htmlSource='\n<div class="list list-1 items-center mb-4">\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-first-element">\n    1st element\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-first-target">\n    1st target\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--toggle-events-autostart">\n    Autostart\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--toggle-events-autostop">\n    Autostop\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-add">\n    Add\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-remove">\n    Remove\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-block">\n    Block/Unblock\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-reinit">\n    Reinit\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-restart">\n    Restart\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-destroy">\n    Destroy\n  </button>\n  <button type="button" class="btn btn-sm rounded-md '+u()+'" id="demo--slider-events-unmount">\n    Unmount\n  </button>\n</div>\n\n<div class="slider" id="demo--slider-events">\n'+b(l(),2)+'\n</div>\n\n<div class="card rounded-md '+c()+' mt-6">\n  <div class="card-sm overflow-y-auto overflow-x-hidden overflow-sub max-h-56" id="demo--slider-events-log">\n  </div>\n</div>\n';var f=function(t){function n(){return t.apply(this,arguments)||this}return Object(o.a)(n,t),n.prototype.render=function(){return s.a.createElement(a.a,{demo:p})},n}(s.a.Component);n.default=f}.call(this,"src/gatsby/code/iframe/components/core/slider/events-methods.js")}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-components-core-slider-events-methods-js-08a62a28442c057ed83b.js.map