(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2iEb":function(e,n,r){"use strict";r.r(n),n.default=function(){return"text-black links-default bg-gray-200"}},"33yf":function(e,n,r){(function(e){function r(e,n){for(var r=0,t=e.length-1;t>=0;t--){var i=e[t];"."===i?e.splice(t,1):".."===i?(e.splice(t,1),r++):r&&(e.splice(t,1),r--)}if(n)for(;r--;r)e.unshift("..");return e}function t(e,n){if(e.filter)return e.filter(n);for(var r=[],t=0;t<e.length;t++)n(e[t],t,e)&&r.push(e[t]);return r}n.resolve=function(){for(var n="",i=!1,a=arguments.length-1;a>=-1&&!i;a--){var s=a>=0?arguments[a]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(n=s+"/"+n,i="/"===s.charAt(0))}return(i?"/":"")+(n=r(t(n.split("/"),(function(e){return!!e})),!i).join("/"))||"."},n.normalize=function(e){var a=n.isAbsolute(e),s="/"===i(e,-1);return(e=r(t(e.split("/"),(function(e){return!!e})),!a).join("/"))||a||(e="."),e&&s&&(e+="/"),(a?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(t(e,(function(e,n){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},n.relative=function(e,r){function t(e){for(var n=0;n<e.length&&""===e[n];n++);for(var r=e.length-1;r>=0&&""===e[r];r--);return n>r?[]:e.slice(n,r-n+1)}e=n.resolve(e).substr(1),r=n.resolve(r).substr(1);for(var i=t(e.split("/")),a=t(r.split("/")),s=Math.min(i.length,a.length),o=s,u=0;u<s;u++)if(i[u]!==a[u]){o=u;break}var c=[];for(u=o;u<i.length;u++)c.push("..");return(c=c.concat(a.slice(o))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,t=-1,i=!0,a=e.length-1;a>=1;--a)if(47===(n=e.charCodeAt(a))){if(!i){t=a;break}}else i=!1;return-1===t?r?"/":".":r&&1===t?"/":e.slice(0,t)},n.basename=function(e,n){var r=function(e){"string"!=typeof e&&(e+="");var n,r=0,t=-1,i=!0;for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){r=n+1;break}}else-1===t&&(i=!1,t=n+1);return-1===t?"":e.slice(r,t)}(e);return n&&r.substr(-1*n.length)===n&&(r=r.substr(0,r.length-n.length)),r},n.extname=function(e){"string"!=typeof e&&(e+="");for(var n=-1,r=0,t=-1,i=!0,a=0,s=e.length-1;s>=0;--s){var o=e.charCodeAt(s);if(47!==o)-1===t&&(i=!1,t=s+1),46===o?-1===n?n=s:1!==a&&(a=1):-1!==n&&(a=-1);else if(!i){r=s+1;break}}return-1===n||-1===t||0===a||1===a&&n===t-1&&n===r+1?"":e.slice(n,t)};var i="b"==="ab".substr(-1)?function(e,n,r){return e.substr(n,r)}:function(e,n,r){return n<0&&(n=e.length+n),e.substr(n,r)}}).call(this,r("8oxB"))},IRUh:function(e,n,r){"use strict";r.d(n,"a",(function(){return c}));var t=r("dI71"),i=r("q1tI"),a=r.n(i),s=r("iyGq"),o=r("KQm4"),u=(r("yLb1"),function(e){function n(){return e.apply(this,arguments)||this}return Object(t.a)(n,e),n.prototype.render=function(){var e=this.props,n=e.demo,t=e.children;if("undefined"!=typeof window){var i,s=r("Zz1u").Xt,u=r("vkEH").makeDocument,c="gatsby_iframe-inside";n.container&&(c+=" gatsby_iframe-container"),(i=document.documentElement.classList).add.apply(i,Object(o.a)(c.split(" "))),document.documentElement.setAttribute("id","iframe--"+n.name);s.ready((function(){window.self!==window.top&&window.parent.initIframe(window.name,n.htmlSource,n.jsxSource,n.cssSource,n.jsSource),u()}))}return a.a.createElement(a.a.Fragment,null,t)},n}(a.a.Component)),c=function(e){function n(){return e.apply(this,arguments)||this}return Object(t.a)(n,e),n.prototype.render=function(){var e=this.props.demo,n={title:"Demo",description:"Demo"};return e.path=("/demos/"+e.dirs.join("/")+"/"+e.name).replace("/iframe","").replace("src/gatsby/code/",""),e.cssSource=e.path+".css",e.jsSource=e.path+".js",a.a.createElement(u,{demo:e},a.a.createElement(s.a,{title:n.title,description:n.description}),a.a.createElement("div",{id:"body-outer"},a.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:e.htmlSource}})))},n}(a.a.Component)},Yg7f:function(e,n,r){"use strict";r.r(n),n.default=function(){return"text-white links-inverse bg-accent-500"}},emhF:function(e,n,r){"use strict";r.r(n),function(e){r.d(n,"demo",(function(){return v}));var t=r("dI71"),i=r("q1tI"),a=r.n(i),s=r("33yf"),o=r.n(s),u=r("IRUh"),c=r("Ybrd").default,l=r("sf5o").default,d=r("2iEb").default,m=r("Yg7f").default,b=r("TaEE").iconX,f=e.replace(/\\/g,"/"),h=o.a.dirname(f).split("/"),v={container:!1,name:o.a.basename(f,".js"),dirs:h};v.htmlSource='\n<div data-xt-sticky="{ sticky: \'fixed\' }">\n  <div class="card card-sm '+m()+'">\n    <div class="list list-2">\n      <a href="#anchor-0" class="btn btn-md rounded-md '+l()+'">\n        anchor 0\n      </a>\n      <a href="#anchor-1" class="btn btn-md rounded-md '+l()+'">\n        anchor 1\n      </a>\n      <a href="#anchor-2" class="btn btn-md rounded-md '+l()+'">\n        anchor 2\n      </a>\n      <button type="button" class="btn btn-md rounded-md '+c()+'" data-xt-overlay="{ targets: \'#demo--overlay-scroll-to-anchor\' }">\n        anchors within overlay\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class="overlay" id="demo--overlay-scroll-to-anchor">\n  <div class="overlay-container p-0">\n    <div class="overlay-inner">\n\n      <div class="btn btn-close p-5 text-2xl" aria-label="Close">\n        '+b()+'\n      </div>\n\n      <div class="card card-sm '+d()+'" id="anchor-overlay-0">\n        <div class="h4">Lorem ipsum dolor sit amet</div>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>\n        <div class="list list-2">\n          <a href="#anchor-overlay-0" class="btn btn-md rounded-md '+c()+'">\n            anchor overlay 0\n          </a>\n          <a href="#anchor-overlay-1" class="btn btn-md rounded-md '+c()+'">\n            anchor overlay 1\n          </a>\n          <a href="#anchor-overlay-2" class="btn btn-md rounded-md '+c()+'">\n            anchor overlay 2\n          </a>\n        </div>\n      </div>\n\n      <br/><br/><br/><br/><br/><br/><br/>\n      <br/><br/><br/><br/><br/><br/><br/>\n      <br/><br/><br/><br/><br/><br/><br/>\n\n      <div class="card card-sm '+d()+'" id="anchor-overlay-1">\n        <div class="h4">Lorem ipsum dolor sit amet</div>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>\n        <div class="list list-2">\n          <a href="#anchor-overlay-0" class="btn btn-md rounded-md '+c()+'">\n            anchor overlay 0\n          </a>\n          <a href="#anchor-overlay-1" class="btn btn-md rounded-md '+c()+'">\n            anchor overlay 1\n          </a>\n          <a href="#anchor-overlay-2" class="btn btn-md rounded-md '+c()+'">\n            anchor overlay 2\n          </a>\n        </div>\n      </div>\n\n      <br/><br/><br/><br/><br/><br/><br/>\n      <br/><br/><br/><br/><br/><br/><br/>\n      <br/><br/><br/><br/><br/><br/><br/>\n\n      <div class="card card-sm '+d()+'" id="anchor-overlay-2">\n        <div class="h4">Lorem ipsum dolor sit amet</div>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>\n        <div class="list list-2">\n          <a href="#anchor-overlay-0" class="btn btn-md rounded-md '+c()+'">\n            anchor overlay 0\n          </a>\n          <a href="#anchor-overlay-1" class="btn btn-md rounded-md '+c()+'">\n            anchor overlay 1\n          </a>\n          <a href="#anchor-overlay-2" class="btn btn-md rounded-md '+c()+'">\n            anchor overlay 2\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<div class="container">\n\n  <div class="card card-sm '+d()+'" id="anchor-0">\n    <div class="h4">Lorem ipsum dolor sit amet</div>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>\n    <div class="list list-2">\n      <a href="#anchor-0" class="btn btn-md rounded-md '+c()+'">\n        anchor 0\n      </a>\n      <a href="#anchor-1" class="btn btn-md rounded-md '+c()+'">\n        anchor 1\n      </a>\n      <a href="#anchor-2" class="btn btn-md rounded-md '+c()+'">\n        anchor 2\n      </a>\n    </div>\n  </div>\n\n  <br/><br/><br/><br/><br/><br/><br/>\n  <br/><br/><br/><br/><br/><br/><br/>\n  <br/><br/><br/><br/><br/><br/><br/>\n\n  <div class="card card-sm '+d()+'" id="anchor-1">\n    <div class="h4">Lorem ipsum dolor sit amet</div>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>\n    <div class="list list-2">\n      <a href="#anchor-0" class="btn btn-md rounded-md '+c()+'">\n        anchor 0\n      </a>\n      <a href="#anchor-1" class="btn btn-md rounded-md '+c()+'">\n        anchor 1\n      </a>\n      <a href="#anchor-2" class="btn btn-md rounded-md '+c()+'">\n        anchor 2\n      </a>\n    </div>\n  </div>\n\n  <br/><br/><br/><br/><br/><br/><br/>\n  <br/><br/><br/><br/><br/><br/><br/>\n  <br/><br/><br/><br/><br/><br/><br/>\n\n  <div class="card card-sm '+d()+'" id="anchor-2">\n    <div class="h4">Lorem ipsum dolor sit amet</div>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>\n    <div class="list list-2">\n      <a href="#anchor-0" class="btn btn-md rounded-md '+c()+'">\n        anchor 0\n      </a>\n      <a href="#anchor-1" class="btn btn-md rounded-md '+c()+'">\n        anchor 1\n      </a>\n      <a href="#anchor-2" class="btn btn-md rounded-md '+c()+'">\n        anchor 2\n      </a>\n    </div>\n  </div>\n\n</div>\n';var p=function(e){function n(){return e.apply(this,arguments)||this}return Object(t.a)(n,e),n.prototype.render=function(){return a.a.createElement(u.a,{demo:v})},n}(a.a.Component);n.default=p}.call(this,"src/gatsby/code/iframe/components/addons/navigation/scroll-to-anchor.js")}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-components-addons-navigation-scroll-to-anchor-js-2ac26867f7f66c6973cf.js.map