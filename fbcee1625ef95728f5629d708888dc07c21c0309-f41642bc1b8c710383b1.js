(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+jkl":function(t,n,e){"use strict";e.r(n),n.default=()=>"text-black text-opacity-75 font-semibold"},"33yf":function(t,n,e){(function(t){function e(t,n){for(var e=0,a=t.length-1;a>=0;a--){var i=t[a];"."===i?t.splice(a,1):".."===i?(t.splice(a,1),e++):e&&(t.splice(a,1),e--)}if(n)for(;e--;e)t.unshift("..");return t}function a(t,n){if(t.filter)return t.filter(n);for(var e=[],a=0;a<t.length;a++)n(t[a],a,t)&&e.push(t[a]);return e}n.resolve=function(){for(var n="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(n=o+"/"+n,i="/"===o.charAt(0))}return(i?"/":"")+(n=e(a(n.split("/"),(function(t){return!!t})),!i).join("/"))||"."},n.normalize=function(t){var s=n.isAbsolute(t),o="/"===i(t,-1);return(t=e(a(t.split("/"),(function(t){return!!t})),!s).join("/"))||s||(t="."),t&&o&&(t+="/"),(s?"/":"")+t},n.isAbsolute=function(t){return"/"===t.charAt(0)},n.join=function(){var t=Array.prototype.slice.call(arguments,0);return n.normalize(a(t,(function(t,n){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},n.relative=function(t,e){function a(t){for(var n=0;n<t.length&&""===t[n];n++);for(var e=t.length-1;e>=0&&""===t[e];e--);return n>e?[]:t.slice(n,e-n+1)}t=n.resolve(t).substr(1),e=n.resolve(e).substr(1);for(var i=a(t.split("/")),s=a(e.split("/")),o=Math.min(i.length,s.length),l=o,r=0;r<o;r++)if(i[r]!==s[r]){l=r;break}var d=[];for(r=l;r<i.length;r++)d.push("..");return(d=d.concat(s.slice(l))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var n=t.charCodeAt(0),e=47===n,a=-1,i=!0,s=t.length-1;s>=1;--s)if(47===(n=t.charCodeAt(s))){if(!i){a=s;break}}else i=!1;return-1===a?e?"/":".":e&&1===a?"/":t.slice(0,a)},n.basename=function(t,n){var e=function(t){"string"!=typeof t&&(t+="");var n,e=0,a=-1,i=!0;for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!i){e=n+1;break}}else-1===a&&(i=!1,a=n+1);return-1===a?"":t.slice(e,a)}(t);return n&&e.substr(-1*n.length)===n&&(e=e.substr(0,e.length-n.length)),e},n.extname=function(t){"string"!=typeof t&&(t+="");for(var n=-1,e=0,a=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var l=t.charCodeAt(o);if(47!==l)-1===a&&(i=!1,a=o+1),46===l?-1===n?n=o:1!==s&&(s=1):-1!==n&&(s=-1);else if(!i){e=o+1;break}}return-1===n||-1===a||0===s||1===s&&n===a-1&&n===e+1?"":t.slice(n,a)};var i="b"==="ab".substr(-1)?function(t,n,e){return t.substr(n,e)}:function(t,n,e){return n<0&&(n=t.length+n),t.substr(n,e)}}).call(this,e("8oxB"))},IRUh:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var a=e("q1tI"),i=e.n(a),s=e("iyGq"),o=e("KQm4");e("yLb1");class l extends i.a.Component{render(){const{demo:t,children:n}=this.props;if("undefined"!=typeof window){var a;e("RoSU");const n=e("Zz1u").Xt;let i="gatsby_iframe-inside";t.container&&(i+=" gatsby_iframe-container"),(a=document.documentElement.classList).add.apply(a,Object(o.a)(i.split(" "))),document.documentElement.setAttribute("id","iframe--"+t.name);const s=()=>{window.self!==window.top&&window.parent.initIframe(window.name,t.htmlSource,t.jsxSource,t.cssSource,t.jsSource)};n.ready(s)}return i.a.createElement(i.a.Fragment,null,n)}}class r extends i.a.Component{render(){const{demo:t}=this.props,n={title:"Demo",description:"Demo"};return t.path=("/demos/"+t.dirs.join("/")+"/"+t.name).replace("/iframe","").replace("src/gatsby/code/",""),t.cssSource=t.path+".css",t.jsSource=t.path+".js",i.a.createElement(l,{demo:t},i.a.createElement(s.a,{title:n.title,description:n.description}),i.a.createElement("div",{id:"body-outer"},i.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:t.htmlSource}})))}}},PJgn:function(t,n,e){"use strict";e.r(n),n.default=()=>"border text-primary-500 border-gray-400 bg-gray-200 transition-all"},Sl05:function(t,n,e){"use strict";e.r(n),n.default=()=>"border text-primary-500 border-gray-400 bg-gray-200 transition-all"},Xu6d:function(t,n,e){"use strict";e.r(n),n.default=()=>"py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"},ZOsq:function(t,n,e){"use strict";e.r(n),function(t){e.d(n,"demo",(function(){return C}));var a=e("q1tI"),i=e.n(a),s=e("33yf"),o=e.n(s),l=e("IRUh");const r="text-black rounded-md bg-gray-200 border-transparent transform ease-out-quint duration-500 border hover:bg-gray-300 hover:border-gray-400 hover:-translate-y-1 active:bg-gray-400 active:translate-y-0",d="text-white rounded-md bg-primary-500 border-transparent transform ease-out-quint duration-500 border hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 active:bg-primary-700 active:translate-y-0",c="transform ease-in-out-quint duration-500 delay-200 opacity-0 scale-50 group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:scale-100",u="transform ease-in-out-quint duration-500 opacity-0 -translate-y-2 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0",p="transition-opacity ease-in-out-quint duration-300 opacity-0 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100",x=()=>"font-sans font-semibold leading-snug tracking-wider uppercase "+r+" hover:shadow-lg active:shadow-sm",v=()=>"font-sans font-semibold leading-snug tracking-wider uppercase "+d+" hover:shadow-lg active:shadow-sm",b=e("C6C/").default,m=e("fnSM").default,g=e("laZN").default,y=e("+jkl").default,f=e("Xu6d").default,h=e("PJgn").default,w=e("Sl05").default,k=e("TaEE").iconX,S=e("TaEE").iconSearch,j=t.replace(/\\/g,"/"),q=o.a.dirname(j).split("/"),C={container:!0,name:o.a.basename(j,".js"),dirs:q};C.htmlSource='\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Button\n</div>\n\n<div class="xt-list xt-list-3 items-center">\n\n  <button type="button" class="xt-button text-xs py-2 px-3.5 '+x()+'">\n    Gray\n  </button>\n\n  <button type="button" class="xt-button text-xs py-2 px-3.5 '+v()+'">\n    Primary\n  </button>\n\n  <button type="button" class="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase transform ease-out-quint duration-500 hover:-translate-y-1 active:translate-y-0">\n    Text\n  </button>\n\n  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md xt-link transform ease-out-quint duration-500 hover:-translate-y-1 active:translate-y-0">\n    Link\n  </button>\n\n</div>\n\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Drop\n</div>\n\n<div class="xt-list xt-list-3 items-center">\n\n  <div data-xt-drop>\n\n    <button type="button" class="xt-button text-xs py-2 px-3.5 '+v()+'">\n      list\n    </button>\n\n    <div class="xt-drop p-4 group" data-xt-duration="700">\n      <div class="xt-drop-inner">\n        <div class="xt-design-setup rounded-md shadow-drop bg-white '+c+'"></div>\n        <div class="xt-card w-64 py-3 rounded-md text-black xt-links-default '+u+'">\n          <nav class="xt-list flex-col">\n            <a href="#" class="xt-button text-2xs py-1.5 px-6 '+b()+'">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit\n            </a>\n            <button type="button" class="xt-button text-2xs py-1.5 px-6 '+b()+'">\n              Dolor sit\n            </button>\n            <button type="button" class="xt-button text-2xs py-1.5 px-6 '+b()+'">\n              Amet\n            </button>\n          </nav>\n        </div>\n      </div>\n      <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white z-drop text-black xt-links-default '+p+'"></div>\n    </div>\n\n  </div>\n\n  <div data-xt-drop>\n\n    <button type="button" class="xt-button text-xs py-2 px-3.5 '+v()+'">\n      card\n    </button>\n\n    <div class="xt-drop p-4 group" data-xt-duration="700">\n      <div class="xt-drop-inner">\n        <div class="xt-design-setup rounded-md shadow-drop bg-white '+c+'"></div>\n        <div class="xt-card w-80 rounded-md text-black xt-links-default '+u+'">\n          <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl" aria-label="Close">\n            '+k()+'\n          </button>\n          <div class="text-base p-8">\n            <div class="xt-h4 ">Lorem ipsum</div>\n            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n          </div>\n        </div>\n      </div>\n      <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white z-drop text-black xt-links-default '+p+'"></div>\n    </div>\n\n  </div>\n\n</div>\n\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Tooltip\n</div>\n\n<div class="xt-list xt-list-3 items-center">\n\n  <div data-xt-tooltip>\n\n    <button type="button" class="xt-button text-xs py-2 px-3.5 '+v()+'">\n      tooltip\n    </button>\n\n    <div class="xt-tooltip p-2 group" data-xt-duration="700">\n      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip '+g()+" "+c+'">\n        <div class="'+u+'">\n          Lorem ipsum dolor sit amet\n        </div>\n      </div>\n      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black '+p+'"></div>\n    </div>\n\n  </div>\n\n  <div data-xt-tooltip>\n\n    <div class="xt-tooltip-item">\n\n      <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md '+v()+'">\n        list group\n      </button>\n\n      <div class="xt-tooltip p-2 group" data-xt-duration="700">\n        <div class="rounded-md shadow-tooltip text-black bg-white '+c+'">\n          <form class="text-sm">\n\n            <div class="xt-list flex-nowrap max-w-sm text-black xt-links-default '+u+'">\n\n              <div class="xt-list-inner flex-auto">\n                <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-l-md '+x()+'">\n                  '+S({classes:"text-xl -my-1"})+'\n                </button>\n                <input type="text" class="xt-input '+f()+'" aria-label="Search" placeholder="Seach Catalog" />\n              </div>\n\n              <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-r-md '+v()+'">\n                Search\n              </button>\n\n            </div>\n\n          </form>\n        </div>\n        <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black '+p+'"></div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Overlay\n</div>\n\n<div class="xt-list xt-list-3 items-center">\n\n  <div data-xt-overlay>\n    <button type="button" class="xt-button text-xs py-2 px-3.5 '+v()+'">\n      screen full\n    </button>\n    <div class="xt-overlay group" data-xt-duration="700">\n      <div class="xt-backdrop xt-overlay-ui bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>\n      <div class="xt-overlay-container p-0">\n        <button type="button" class="xt-button xt-dismiss fixed z-last mr-2 top-0 right-0 p-5 text-2xl text-black xt-links-default '+u+'" aria-label="Close">\n          '+k()+'\n        </button>\n        <div class="xt-overlay-inner">\n\n          <div class="xt-design-setup rounded-md bg-white '+c+'"></div>\n\n          <div class="xt-card xt-min-h-screen items-center justify-center rounded-md text-black xt-links-default '+u+'">\n            <div class="xt-media-container bg-gray-700 xt-ratio-100">\n              <div class="xt-media-inner">\n                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div data-xt-overlay>\n\n    <button type="button" class="xt-button text-xs py-2 px-3.5 '+v()+'">\n      left blocks\n    </button>\n\n    <div class="xt-overlay group" data-xt-duration="700">\n      <div class="xt-backdrop xt-overlay-ui bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>\n      <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">\n        <div class="xt-overlay-inner">\n\n          <div class="xt-design-setup bg-white '+c+'"></div>\n\n          <div class="xt-card xt-min-h-screen text-black xt-links-default '+u+'">\n            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">\n              '+k()+'\n            </button>\n            <div class="xt-list bg-primary-500">\n              <button type="button" class="xt-button text-xs py-2 px-3.5 '+v()+'">\n                Menu\n              </button>\n              <button type="button" class="xt-button text-xs py-2 px-3.5 '+v()+'">\n                Info\n              </button>\n              <button type="button" class="xt-button text-xs py-2 px-3.5 '+v()+'">\n                Account\n              </button>\n            </div>\n            <div class="xt-media-container bg-gray-700 h-48">\n              <div class="xt-media-inner">\n                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">\n              </div>\n            </div>\n            <div class="text-base p-8">\n              <div class="xt-h4 ">Lorem ipsum</div>\n              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n            </div>\n            <div class="text-sm p-6 bg-gray-500 mt-auto">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div data-xt-overlay>\n\n    <button type="button" class="xt-button text-xs py-2 px-3.5 '+v()+'">\n      contact\n    </button>\n\n    <div class="xt-overlay group" data-xt-duration="700">\n      <div class="xt-backdrop xt-overlay-ui bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>\n      <div class="xt-overlay-container max-w-5xl">\n        <div class="xt-overlay-inner">\n\n          <div class="xt-design-setup rounded-md md:rounded-tr-none shadow-overlay bg-white '+c+'"></div>\n\n          <div class="xt-card rounded-md text-black xt-links-default '+u+'">\n            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl '+m()+' md:p-3 md:right-auto md:left-100" aria-label="Close">\n              '+k()+'\n            </button>\n\n            <div class="md:xt-card-group">\n\n              <div class="text-base p-8 md:w-7/12">\n                <div class="xt-h4 ">\n                  Contact us\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>\n                <form class="text-sm">\n                  <div class="xt-row xt-row-x-6 xt-row-y-4">\n\n                    <div class="w-full md:w-6/12">\n                      <label class="xt-label mb-3 '+y()+'">\n                        Name\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+f()+'" aria-label="Name">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="xt-label mb-3 '+y()+'">\n                        Surname\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+f()+'" aria-label="Surname">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="xt-label mb-3 '+y()+'">\n                        Email\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+f()+'" aria-label="Email">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="xt-label mb-3 '+y()+'">\n                        Telephone\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+f()+'" aria-label="Telephone">\n                    </div>\n\n                    <div class="w-full">\n                      <label class="xt-label mb-3 '+y()+'">\n                        Subject\n                      </label>\n                      <select class="xt-input xt-select rounded-md '+f()+'" aria-label="Subject">\n                        <option selected value="">Select an option</option>\n                        <option>Test</option>\n                        <option>Test</option>\n                        <option>Test</option>\n                      </select>\n                    </div>\n\n                    <div class="w-full">\n                      <label class="xt-label mb-3 '+y()+'">\n                        Message\n                      </label>\n                      <textarea class="xt-input xt-textarea rounded-md '+f()+' h-24 resize-vertical" aria-label="Message"></textarea>\n                    </div>\n\n                    <div class="w-full">\n                      <label class="xt-label-check">\n                        <input type="checkbox" class="xt-check xt-checkbox rounded-md '+h()+'">\n                        <span class="xt-check-content">\n                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.\n                        </span>\n                      </label>\n                    </div>\n\n                    <div class="w-full">\n                      <button type="submit" class="xt-button text-xs py-2 px-3.5 '+v()+'">\n                        Send\n                      </button>\n                    </div>\n\n                  </div>\n                </form>\n              </div>\n\n              <div class="md:w-5/12 flex flex-col">\n                <div class="xt-media-container bg-gray-700 h-48 md:xt-ratio-100">\n                  <div class="xt-media-inner">\n                    <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                  </div>\n                </div>\n                <div class="text-base p-8 bg-gray-300 rounded-b-md md:rounded-bl-none flex-full">\n                  <p class="xt-h5 ">\n                    Didn\'t find what you was looking for?\n                  </p>\n                  <p>\n                      Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at <a href="mailto:info@info.com">info@info.com</a>.\n                  </p>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div data-xt-overlay>\n\n    <button type="button" class="xt-button text-xs py-2 px-3.5 '+v()+'">\n      newsletter\n    </button>\n\n    <div class="xt-overlay group" data-xt-duration="700">\n      <div class="xt-backdrop xt-overlay-ui bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>\n      <div class="xt-overlay-container max-w-5xl">\n        <div class="xt-overlay-inner">\n\n          <div class="xt-design-setup rounded-md md:rounded-tr-none shadow-overlay bg-white '+c+'"></div>\n\n          <div class="xt-card rounded-md text-black xt-links-default '+u+'">\n            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl '+m()+' md:p-3 md:right-auto md:left-100" aria-label="Close">\n              '+k()+'\n            </button>\n\n            <div class="md:xt-card-group">\n\n              <div class="md:w-5/12 flex flex-col">\n                <div class="xt-media-container bg-gray-700 rounded-t-md md:rounded-tr-none h-48 lg:xt-ratio-100 md:flex-full">\n                  <div class="xt-media-inner">\n                    <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                  </div>\n                </div>\n              </div>\n\n              <div class="text-base p-8 md:w-7/12">\n                <div class="xt-h4 ">\n                  Subscribe to our newsletter\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>\n                <form class="text-sm">\n                  <div class="xt-row xt-row-x-6 xt-row-y-4">\n\n                    <div class="w-full">\n                      <label class="xt-label mb-3 '+y()+'">\n                        Email\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+f()+'" aria-label="Email">\n                    </div>\n\n                    <div class="w-full">\n\n                      <label class="xt-label mb-3 '+y()+'">\n                        Subject\n                      </label>\n\n                      <div class="xt-row xt-row-x-8 xt-row-y-2">\n\n                        <div class="w-full sm:w-auto">\n                          <label class="xt-label-check">\n                            <input type="radio" class="xt-check xt-radio rounded-full '+w()+'" name="radio-usage" checked>\n                            <span class="xt-check-content">\n                              Option 1\n                            </span>\n                          </label>\n                        </div>\n\n                        <div class="w-full sm:w-auto">\n                          <label class="xt-label-check">\n                            <input type="radio" class="xt-check xt-radio rounded-full '+w()+'" name="radio-usage">\n                            <span class="xt-check-content">\n                              Option 2\n                            </span>\n                          </label>\n                        </div>\n\n                        <div class="w-full sm:w-auto">\n                          <label class="xt-label-check">\n                            <input type="radio" class="xt-check xt-radio rounded-full '+w()+'" name="radio-usage">\n                            <span class="xt-check-content">\n                              Option 3\n                            </span>\n                          </label>\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                    <div class="w-full">\n                      <label class="xt-label-check">\n                        <input type="checkbox" class="xt-check xt-checkbox rounded-md '+h()+'">\n                        <span class="xt-check-content">\n                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.\n                        </span>\n                      </label>\n                    </div>\n\n                    <div class="w-full">\n                      <button type="submit" class="xt-button text-xs py-2 px-3.5 '+v()+'">\n                        Subscribe\n                      </button>\n                    </div>\n\n                  </div>\n                </form>\n              </div>\n\n            </div>\n\n            <div class="text-sm p-6 rounded-b-md bg-gray-300">\n              <p>\n                Receive <strong>free discount</strong> periodically on all our products.\n              </p>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Card\n</div>\n\n<div class="xt-row xt-row-6">\n\n  <div class="w-full md:w-6/12">\n    <a role="button" class="xt-card '+r+' hover:shadow-xl active:shadow-md">\n      <div class="text-base p-8">\n        <div class="xt-h4 ">Default</div>\n        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n      </div>\n    </a>\n  </div>\n\n  <div class="w-full md:w-6/12">\n    <a role="button" class="xt-card '+d+' hover:shadow-xl active:shadow-md">\n      <div class="text-base p-8">\n        <div class="xt-h4 ">Primary</div>\n        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n      </div>\n    </a>\n  </div>\n\n</div>\n';class E extends i.a.Component{render(){return i.a.createElement(l.a,{demo:C})}}n.default=E}.call(this,"src/gatsby/code/iframe/themes/animation/float-animation-v1.js")},fnSM:function(t,n,e){"use strict";e.r(n),n.default=()=>"transition md:text-white md:bg-primary-500 md:hover:bg-primary-600 md:active:bg-primary-700"}}]);
//# sourceMappingURL=fbcee1625ef95728f5629d708888dc07c21c0309-f41642bc1b8c710383b1.js.map