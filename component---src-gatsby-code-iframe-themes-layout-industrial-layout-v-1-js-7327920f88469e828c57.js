(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"33yf":function(n,i,e){(function(n){function e(n,i){for(var e=0,t=n.length-1;t>=0;t--){var s=n[t];"."===s?n.splice(t,1):".."===s?(n.splice(t,1),e++):e&&(n.splice(t,1),e--)}if(i)for(;e--;e)n.unshift("..");return n}function t(n,i){if(n.filter)return n.filter(i);for(var e=[],t=0;t<n.length;t++)i(n[t],t,n)&&e.push(n[t]);return e}i.resolve=function(){for(var i="",s=!1,a=arguments.length-1;a>=-1&&!s;a--){var r=a>=0?arguments[a]:n.cwd();if("string"!=typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(i=r+"/"+i,s="/"===r.charAt(0))}return(s?"/":"")+(i=e(t(i.split("/"),(function(n){return!!n})),!s).join("/"))||"."},i.normalize=function(n){var a=i.isAbsolute(n),r="/"===s(n,-1);return(n=e(t(n.split("/"),(function(n){return!!n})),!a).join("/"))||a||(n="."),n&&r&&(n+="/"),(a?"/":"")+n},i.isAbsolute=function(n){return"/"===n.charAt(0)},i.join=function(){var n=Array.prototype.slice.call(arguments,0);return i.normalize(t(n,(function(n,i){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n})).join("/"))},i.relative=function(n,e){function t(n){for(var i=0;i<n.length&&""===n[i];i++);for(var e=n.length-1;e>=0&&""===n[e];e--);return i>e?[]:n.slice(i,e-i+1)}n=i.resolve(n).substr(1),e=i.resolve(e).substr(1);for(var s=t(n.split("/")),a=t(e.split("/")),r=Math.min(s.length,a.length),d=r,c=0;c<r;c++)if(s[c]!==a[c]){d=c;break}var o=[];for(c=d;c<s.length;c++)o.push("..");return(o=o.concat(a.slice(d))).join("/")},i.sep="/",i.delimiter=":",i.dirname=function(n){if("string"!=typeof n&&(n+=""),0===n.length)return".";for(var i=n.charCodeAt(0),e=47===i,t=-1,s=!0,a=n.length-1;a>=1;--a)if(47===(i=n.charCodeAt(a))){if(!s){t=a;break}}else s=!1;return-1===t?e?"/":".":e&&1===t?"/":n.slice(0,t)},i.basename=function(n,i){var e=function(n){"string"!=typeof n&&(n+="");var i,e=0,t=-1,s=!0;for(i=n.length-1;i>=0;--i)if(47===n.charCodeAt(i)){if(!s){e=i+1;break}}else-1===t&&(s=!1,t=i+1);return-1===t?"":n.slice(e,t)}(n);return i&&e.substr(-1*i.length)===i&&(e=e.substr(0,e.length-i.length)),e},i.extname=function(n){"string"!=typeof n&&(n+="");for(var i=-1,e=0,t=-1,s=!0,a=0,r=n.length-1;r>=0;--r){var d=n.charCodeAt(r);if(47!==d)-1===t&&(s=!1,t=r+1),46===d?-1===i?i=r:1!==a&&(a=1):-1!==i&&(a=-1);else if(!s){e=r+1;break}}return-1===i||-1===t||0===a||1===a&&i===t-1&&i===e+1?"":n.slice(i,t)};var s="b"==="ab".substr(-1)?function(n,i,e){return n.substr(i,e)}:function(n,i,e){return i<0&&(i=n.length+i),n.substr(i,e)}}).call(this,e("8oxB"))},IRUh:function(n,i,e){"use strict";e.d(i,"a",(function(){return o}));var t=e("dI71"),s=e("q1tI"),a=e.n(s),r=e("iyGq"),d=e("KQm4"),c=(e("yLb1"),function(n){function i(){return n.apply(this,arguments)||this}return Object(t.a)(i,n),i.prototype.render=function(){var n=this.props,i=n.demo,t=n.children;if("undefined"!=typeof window){var s,r=e("Zz1u").Xt,c="gatsby_iframe-inside";i.container&&(c+=" gatsby_iframe-container"),(s=document.documentElement.classList).add.apply(s,Object(d.a)(c.split(" "))),document.documentElement.setAttribute("id","iframe--"+i.name);r.ready((function(){window.self!==window.top&&window.parent.initIframe(window.name,i.htmlSource,i.jsxSource,i.cssSource,i.jsSource)}))}return a.a.createElement(a.a.Fragment,null,t)},i}(a.a.Component)),o=function(n){function i(){return n.apply(this,arguments)||this}return Object(t.a)(i,n),i.prototype.render=function(){var n=this.props.demo,i={title:"Demo",description:"Demo"};return n.path=("/demos/"+n.dirs.join("/")+"/"+n.name).replace("/iframe","").replace("src/gatsby/code/",""),n.cssSource=n.path+".css",n.jsSource=n.path+".js",a.a.createElement(c,{demo:n},a.a.createElement(r.a,{title:i.title,description:i.description}),a.a.createElement("div",{id:"body-outer"},a.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:n.htmlSource}})))},i}(a.a.Component)},tKhQ:function(n,i,e){"use strict";e.r(i),function(n){e.d(i,"demo",(function(){return v}));var t=e("dI71"),s=e("q1tI"),a=e.n(s),r=e("33yf"),d=e.n(r),c=e("IRUh"),o=n.replace(/\\/g,"/"),l=d.a.dirname(o).split("/"),v={container:!1,name:d.a.basename(o,".js"),dirs:l,htmlSource:'\n<div class="slider">\n\n  <nav class="slider-pagination w-full list list-2">\n\n    <div>\n      <button type="button" class="btn btn-circle" data-xt-nav="-1" title="Previous slide">\n        <span class="icon-arrow-left"></span>\n      </button>\n    </div>\n\n    <div class="slider-pagination w-full list list-2_inner">\n      <div class="slider-pagination w-full list list-2_scroll">\n        <button type="button" class="btn xt-ignore" data-xt-pag title="Slide xt-num">\n            xt-content\n        </button>\n      </div>\n    </div>\n\n    <div>\n      <button type="button" class="btn btn-circle" data-xt-nav="1" title="Next slide">\n        <span class="icon-arrow-right"></span>\n      </button>\n    </div>\n\n  </nav>\n\n  <div class="slides">\n    <nav class="slides-inner row row-2">\n\n      <div class="slide">\n        <div class="container">\n          <div class="featured-item">\n\n            <div class="slide-pagination-content">\n              Lorem ipsum\n            </div>\n\n            <div class="featured-item_assets">\n              <div class="row">\n                <div class="featured-item_assets_col--big featured-item_assets_col--big">\n                  <div class="featured-item_asset">\n                    <div class="media-container ratio-37.5">\n                      <div class="media-inner">\n                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class="featured-item_assets_col--sm featured-item_assets_col--sm">\n                  <div class="featured-item_asset">\n                    <div class="media-container ratio-37.5">\n                      <div class="media-inner">\n                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class="slide_card">\n              <div class="card card-primary">\n                <div class="card-design"></div>\n                <div class="card-inner">\n                  <div class="card-content">\n                    <div class="card-item">\n                      <h3 class="h4">\n                        Lorem ipsum\n                      </h3>\n                      <p>\n                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Morbi lacinia rutrum ornare.\n                      </p>\n                      <a href="#" class="btn btn-default btn-big">\n                        Discover\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <div class="slide">\n        <div class="container">\n          <div class="featured-item">\n\n            <div class="slide-pagination-content">\n              Dolor sit amet\n            </div>\n\n            <div class="featured-item_assets">\n              <div class="row">\n                <div class="featured-item_assets_col--sm">\n                  <div class="featured-item_asset">\n                    <div class="media-container ratio-37.5">\n                      <div class="media-inner">\n                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class="featured-item_assets_col--big">\n                  <div class="featured-item_asset">\n                    <div class="media-container ratio-37.5">\n                      <div class="media-inner">\n                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class="slide_card">\n              <div class="card card-primary">\n                <div class="card-design"></div>\n                <div class="card-inner">\n                  <div class="card-content">\n                    <div class="card-item">\n                      <h3 class="h4">\n                        Dolor sit amet\n                      </h3>\n                      <p>\n                        <strong>Lorem ipsum</strong> dolor sit amet.\n                      </p>\n                      <a href="#" class="btn btn-default btn-big">\n                        Discover\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <div class="slide">\n        <div class="container">\n          <div class="featured-item">\n\n            <div class="slide-pagination-content">\n              Consectetur adipiscing elit\n            </div>\n\n            <div class="featured-item_assets">\n              <div class="row">\n                <div class="featured-item_assets_col--big">\n                  <div class="featured-item_asset">\n                    <div class="media-container ratio-37.5">\n                      <div class="media-inner">\n                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class="featured-item_assets_col--sm">\n                  <div class="featured-item_asset">\n                    <div class="media-container ratio-37.5">\n                      <div class="media-inner">\n                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class="slide_card">\n              <div class="card card-primary">\n                <div class="card-design"></div>\n                <div class="card-inner">\n                  <div class="card-content">\n                    <div class="card-item">\n                      <h3 class="h4">\n                        Consectetur adipiscing elit\n                      </h3>\n                      <p>\n                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Morbi lacinia rutrum ornare.\n                      </p>\n                      <a href="#" class="btn btn-default btn-big">\n                        Discover\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <div class="slide">\n        <div class="container">\n          <div class="featured-item">\n\n            <div class="slide-pagination-content">\n              Nam iaculis magna eu consectetur condimentum\n            </div>\n\n            <div class="featured-item_assets">\n              <div class="row">\n                <div class="featured-item_assets_col--sm">\n                  <div class="featured-item_asset">\n                    <div class="media-container ratio-37.5">\n                      <div class="media-inner">\n                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class="featured-item_assets_col--big">\n                  <div class="featured-item_asset">\n                    <div class="media-container ratio-37.5">\n                      <div class="media-inner">\n                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class="slide_card">\n              <div class="card card-primary">\n                <div class="card-design"></div>\n                <div class="card-inner">\n                  <div class="card-content">\n                    <div class="card-item">\n                      <h3 class="h4">\n                        Nam iaculis magna eu consectetur condimentum\n                      </h3>\n                      <p>\n                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Morbi lacinia rutrum ornare.\n                      </p>\n                      <a href="#" class="btn btn-default btn-big">\n                        Discover\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </nav>\n  </div>\n\n</div>\n'},u=function(n){function i(){return n.apply(this,arguments)||this}return Object(t.a)(i,n),i.prototype.render=function(){return a.a.createElement(c.a,{demo:v})},i}(a.a.Component);i.default=u}.call(this,"src/gatsby/code/iframe/themes/layout/industrial-layout-v1.js")}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-themes-layout-industrial-layout-v-1-js-7327920f88469e828c57.js.map