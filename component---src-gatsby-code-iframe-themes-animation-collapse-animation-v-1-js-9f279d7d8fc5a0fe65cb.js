(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+jkl":function(n,e,a){"use strict";a.r(e),e.default=function(){return"text-black text-opacity-75"}},"7s4p":function(n,e,a){"use strict";a.r(e),e.default=function(){return"text-white links-inverse bg-accent-500 hover:bg-accent-600 group-hover:bg-accent-600 active:bg-accent-700 group-active:bg-accent-700"}},Bwg2:function(n,e,a){"use strict";a.r(e),e.default=function(){return"text-black links-default bg-gray-200 hover:bg-gray-300 group-hover:bg-gray-300 active:bg-gray-400 group-active:bg-gray-400"}},IDlN:function(n,e,a){"use strict";a.r(e),e.default=function(){return"text-black links-default placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300"}},PJgn:function(n,e,a){"use strict";a.r(e),e.default=function(){return"border text-accent-500 border-gray-400 bg-gray-200"}},Sl05:function(n,e,a){"use strict";a.r(e),e.default=function(){return"border text-accent-500 border-gray-400 bg-gray-200"}},Xu6d:function(n,e,a){"use strict";a.r(e),e.default=function(){return"text-black links-default placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300"}},mhP7:function(n,e,a){"use strict";a.r(e),e.default=function(){return"text-black links-default bg-white"}},"yl+3":function(n,e,a){"use strict";a.r(e),function(n){a.d(e,"demo",(function(){return q}));var t=a("dI71"),l=a("q1tI"),i=a.n(l),s=a("33yf"),d=a.n(s),r=a("IRUh"),o=a("sf5o").default,c=a("ynCB").default,u=a("mhP7").default,m=a("Bwg2").default,v=a("7s4p").default,b=a("IDlN").default,p=a("TaEE").iconSearch,f=a("imjJ").default,g=a("+jkl").default,y=a("Xu6d").default,h=a("PJgn").default,x=a("Sl05").default,w=a("TaEE").iconX,k="h-0 overflow-hidden transform ease-in-out-quint duration-700 -translate-y-4 group-active:ease-out-quint group-active:translate-y-0",I="transform ease-in-out-quint duration-700 opacity-0 -translate-y-4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0",j=n.replace(/\\/g,"/"),S=d.a.dirname(j).split("/"),q={container:!0,name:d.a.basename(j,".js"),dirs:S};q.htmlSource='\n<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">\n  List Group\n</div>\n\n<form data-xt-toggle="{ elements: \'.w-full > .btn\', targets: \'.w-full > .list\', collapseWidth: \'targets\' }">\n\n  <div class="row row-x-3 row-y-2">\n\n    <div class="w-full md:w-auto">\n      <button type="button" class="btn btn-md rounded-md '+o()+'">\n        List group\n      </button>\n    </div>\n\n    <div class="w-full md:w-auto">\n      <div class="list flex-nowrap max-w-sm w-0 overflow-hidden transform ease-in-out-quint duration-700 -translate-x-4 active:ease-out-quint active:translate-x-0">\n\n        <div class="list-inner flex-auto">\n          <button type="button" class="btn btn-md rounded-l-md '+m()+'">\n            '+p({classes:"icon-lg"})+'\n          </button>\n          <input type="text" class="form-item '+b()+'" aria-label="Search" placeholder="Seach Catalog" />\n        </div>\n\n        <button type="button" class="btn btn-md rounded-r-md '+v()+'">\n          Search\n        </button>\n\n      </div>\n    </div>\n\n  </div>\n\n</form>\n\n<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">\n  Drop\n</div>\n\n<div class="list list-2 items-center">\n\n  <div data-xt-drop="{ targetsInner: \'.drop-inner\', collapseHeight: \'targetsInner\' }">\n\n    <button type="button" class="btn btn-md rounded-md '+o()+'">\n      list\n    </button>\n\n    <div class="drop group duration-700"> \x3c!-- needed for animation time, put max time with delay --\x3e\n      <div class="drop-inner rounded-md shadow-drop '+k+'">\n        <div class="card w-64 py-3 rounded-md '+c()+' ">\n          <nav class="list flex-col rounded-md'+I+'">\n            <a href="#" class="btn btn-sm '+f()+'">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit\n            </a>\n            <button type="button" class="btn btn-sm '+f()+'">\n              Dolor sit\n            </button>\n            <button type="button" class="btn btn-sm '+f()+'">\n              Amet\n            </button>\n          </nav>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div data-xt-drop="{ targetsInner: \'.drop-inner\', collapseHeight: \'targetsInner\' }">\n\n    <button type="button" class="btn btn-md rounded-md '+o()+'">\n      card\n    </button>\n\n    <div class="drop group duration-700"> \x3c!-- needed for animation time, put max time with delay --\x3e\n      <div class="drop-inner rounded-md shadow-drop '+k+'">\n        <div class="card w-80 rounded-md '+c()+'">\n          <div class="btn btn-close p-5 text-xl '+I+'" aria-label="Close">\n            '+w()+'\n          </div>\n          <div class="card-md rounded-md '+I+'">\n            <div class="h4">Lorem ipsum</div>\n            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">\n  Overlay\n</div>\n\n<div class="list list-2 items-center">\n\n  <div data-xt-overlay="{ targetsInner: \':scope > .overlay-container > .overlay-inner\', collapseHeight: \'targetsInner\' }">\n    <button type="button" class="btn btn-md rounded-md '+o()+'">\n      screen full\n    </button>\n    <div class="overlay group duration-700"> \x3c!-- needed for animation time, put max time with delay --\x3e\n      <div class="btn btn-close p-5 text-2xl fixed z-last mr-2 '+I+'" aria-label="Close">\n        '+w()+'\n      </div>\n      <div class="overlay-container p-0">\n        <div class="overlay-inner '+k+'">\n\n          <div class="card min-h-screen items-center justify-center '+u()+'">\n            <div class="media-container ratio-100 '+I+'">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div data-xt-overlay="{ targetsInner: \':scope > .overlay-container > .overlay-inner\', collapseHeight: \'targetsInner\' }">\n\n    <button type="button" class="btn btn-md rounded-md '+o()+'">\n      left blocks\n    </button>\n\n    <div class="overlay group duration-700"> \x3c!-- needed for animation time, put max time with delay --\x3e\n      <div class="overlay-container p-0 max-w-md ml-0 mr-auto">\n        <div class="overlay-inner '+k+'">\n\n          <div class="card min-h-screen '+u()+'">\n            <div class="btn btn-close p-5 text-2xl" aria-label="Close">\n              '+w()+'\n            </div>\n            <div class="list bg-accent-500 '+I+'">\n              <button type="button" class="btn btn-md '+o()+'">\n                Menu\n              </button>\n              <button type="button" class="btn btn-md '+o()+'">\n                Info\n              </button>\n              <button type="button" class="btn btn-md '+o()+'">\n                Account\n              </button>\n            </div>\n            <div class="media-container h-48 '+I+'">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n              </div>\n            </div>\n            <div class="card-md '+I+'">\n              <div class="h4">Lorem ipsum</div>\n              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n            </div>\n            <div class="card-sm bg-gray-500 mt-auto '+I+'">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div data-xt-overlay="{ targetsInner: \':scope > .overlay-container > .overlay-inner\', collapseHeight: \'targetsInner\' }">\n\n    <button type="button" class="btn btn-md rounded-md '+o()+'">\n      contact\n    </button>\n\n    <div class="overlay group duration-700"> \x3c!-- needed for animation time, put max time with delay --\x3e\n      <div class="overlay-container max-w-5xl">\n        <div class="overlay-inner rounded-md shadow-overlay '+k+'">\n\n          <div class="card rounded-md '+u()+'">\n            <div class="btn btn-close p-5 text-2xl" aria-label="Close">\n              '+w()+'\n            </div>\n\n            <div class="md:card-group rounded-md '+I+'">\n\n              <div class="card-md md:card-lg md:w-7/12">\n                <div class="h4">\n                  Contact us\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>\n                <form class="text-lg">\n                  <div class="row row-x-3 row-y-2">\n\n                    <div class="w-full md:w-6/12">\n                      <label class="form-label mb-3 '+g()+'">\n                        Name\n                      </label>\n                      <input type="text" class="form-item rounded-md '+y()+'" aria-label="Name">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="form-label mb-3 '+g()+'">\n                        Surname\n                      </label>\n                      <input type="text" class="form-item rounded-md '+y()+'" aria-label="Surname">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="form-label mb-3 '+g()+'">\n                        Email\n                      </label>\n                      <input type="text" class="form-item rounded-md '+y()+'" aria-label="Email">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="form-label mb-3 '+g()+'">\n                        Telephone\n                      </label>\n                      <input type="text" class="form-item rounded-md '+y()+'" aria-label="Telephone">\n                    </div>\n\n                    <div class="w-full">\n                      <label class="form-label mb-3 '+g()+'">\n                        Subject\n                      </label>\n                      <select class="form-item form-select rounded-md '+y()+'" aria-label="Subject">\n                        <option selected value="">Select an option</option>\n                        <option>Test</option>\n                        <option>Test</option>\n                        <option>Test</option>\n                      </select>\n                    </div>\n\n                    <div class="w-full">\n                      <label class="form-label mb-3 '+g()+'">\n                        Message\n                      </label>\n                      <textarea class="form-item rounded-md '+y()+' h-24 resize-vertical" aria-label="Message"></textarea>\n                    </div>\n\n                    <div class="w-full">\n                      <label class="form-label-check">\n                        <input type="checkbox" class="form-check form-checkbox rounded-md '+h()+'">\n                        <span class="ml-3">\n                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.\n                        </span>\n                      </label>\n                    </div>\n\n                    <div class="w-full">\n                      <button type="submit" class="btn btn-md rounded-md '+o()+'">\n                        Send\n                      </button>\n                    </div>\n\n                  </div>\n                </form>\n              </div>\n\n              <div class="md:w-5/12 flex flex-col '+I+'">\n                <div class="media-container rounded-b-md md:rounded-bl-none md:rounded-br-md h-48 md:ratio-100">\n                  <div class="media-inner">\n                    <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                  </div>\n                </div>\n                <div class="card-md bg-gray-300 flex-full text-sm">\n                  <p class="h5">\n                    Didn\'t find what you was looking for?\n                  </p>\n                  <p>\n                      Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at <a href="mailto:info@info.com">info@info.com</a>.\n                  </p>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div data-xt-overlay="{ targetsInner: \':scope > .overlay-container > .overlay-inner\', collapseHeight: \'targetsInner\' }">\n\n    <button type="button" class="btn btn-md rounded-md '+o()+'">\n      newsletter\n    </button>\n\n    <div class="overlay group duration-700"> \x3c!-- needed for animation time, put max time with delay --\x3e\n      <div class="overlay-container max-w-5xl">\n        <div class="overlay-inner rounded-md shadow-overlay '+k+'">\n\n          <div class="card rounded-md '+u()+'">\n            <div class="btn btn-close p-5 text-2xl" aria-label="Close">\n              '+w()+'\n            </div>\n\n            <div class="md:card-group rounded-md '+I+'">\n\n              <div class="md:w-5/12 flex flex-col">\n                <div class="media-container rounded-t-md md:rounded-tr-none h-48 lg:ratio-100 md:flex-full">\n                  <div class="media-inner">\n                    <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                  </div>\n                </div>\n              </div>\n\n              <div class="card-md md:card-lg md:w-7/12">\n                <div class="h4">\n                  Subscribe to our newsletter\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>\n                <form class="text-lg">\n                  <div class="row row-x-3 row-y-2">\n\n                    <div class="w-full">\n                      <label class="form-label mb-3 '+g()+'">\n                        Email\n                      </label>\n                      <input type="text" class="form-item rounded-md '+y()+'" aria-label="Email">\n                    </div>\n\n                    <div class="w-full">\n\n                      <label class="form-label mb-3 '+g()+'">\n                        Subject\n                      </label>\n\n                      <div class="row row-x-4 row-y-1">\n\n                        <div class="w-full sm:w-auto">\n                          <label class="form-label-check">\n                            <input type="radio" class="form-check form-radio rounded-full '+x()+'" name="radio-usage" checked>\n                            <span class="ml-3">\n                              Option 1\n                            </span>\n                          </label>\n                        </div>\n\n                        <div class="w-full sm:w-auto">\n                          <label class="form-label-check">\n                            <input type="radio" class="form-check form-radio rounded-full '+x()+'" name="radio-usage">\n                            <span class="ml-3">\n                              Option 2\n                            </span>\n                          </label>\n                        </div>\n\n                        <div class="w-full sm:w-auto">\n                          <label class="form-label-check">\n                            <input type="radio" class="form-check form-radio rounded-full '+x()+'" name="radio-usage">\n                            <span class="ml-3">\n                              Option 3\n                            </span>\n                          </label>\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                    <div class="w-full">\n                      <label class="form-label-check">\n                        <input type="checkbox" class="form-check form-checkbox rounded-md '+h()+'">\n                        <span class="ml-3">\n                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.\n                        </span>\n                      </label>\n                    </div>\n\n                    <div class="w-full">\n                      <button type="submit" class="btn btn-md rounded-md '+o()+'">\n                        Subscribe\n                      </button>\n                    </div>\n\n                  </div>\n                </form>\n              </div>\n\n            </div>\n\n            <div class="card-sm rounded-b-md bg-gray-300 text-xs '+I+'">\n              <p>\n                Receive <strong>free discount</strong> periodically on all our products.\n              </p>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div data-xt-overlay="{ collapseHeight: \'targets\' }">\n\n    <button type="button" class="btn btn-md rounded-md '+o()+'">\n      collapse targets\n    </button>\n\n    <div class="overlay group h-0 overflow-hidden ease-in-out-quint duration-700"> \x3c!-- needed for animation time, put max time with delay --\x3e\n      <div class="overlay-container max-w-5xl">\n        <div class="overlay-inner rounded-md shadow-overlay">\n\n          <div class="card rounded-md '+u()+'">\n            <div class="btn btn-close p-5 text-2xl" aria-label="Close">\n              '+w()+'\n            </div>\n\n            <div class="md:card-group rounded-md '+I+'">\n\n              <div class="md:w-5/12 flex flex-col">\n                <div class="media-container rounded-t-md md:rounded-tr-none h-48 lg:ratio-100 md:flex-full">\n                  <div class="media-inner">\n                    <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                  </div>\n                </div>\n              </div>\n\n              <div class="card-md md:card-lg md:w-7/12">\n                <div class="h4">\n                  Subscribe to our newsletter\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>\n                <form class="text-lg">\n                  <div class="row row-x-3 row-y-2">\n\n                    <div class="w-full">\n                      <label class="form-label mb-3 '+g()+'">\n                        Email\n                      </label>\n                      <input type="text" class="form-item rounded-md '+y()+'" aria-label="Email">\n                    </div>\n\n                    <div class="w-full">\n\n                      <label class="form-label mb-3 '+g()+'">\n                        Subject\n                      </label>\n\n                      <div class="row row-x-4 row-y-1">\n\n                        <div class="w-full sm:w-auto">\n                          <label class="form-label-check">\n                            <input type="radio" class="form-check form-radio rounded-full '+x()+'" name="radio-usage" checked>\n                            <span class="ml-3">\n                              Option 1\n                            </span>\n                          </label>\n                        </div>\n\n                        <div class="w-full sm:w-auto">\n                          <label class="form-label-check">\n                            <input type="radio" class="form-check form-radio rounded-full '+x()+'" name="radio-usage">\n                            <span class="ml-3">\n                              Option 2\n                            </span>\n                          </label>\n                        </div>\n\n                        <div class="w-full sm:w-auto">\n                          <label class="form-label-check">\n                            <input type="radio" class="form-check form-radio rounded-full '+x()+'" name="radio-usage">\n                            <span class="ml-3">\n                              Option 3\n                            </span>\n                          </label>\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                    <div class="w-full">\n                      <label class="form-label-check">\n                        <input type="checkbox" class="form-check form-checkbox rounded-md '+h()+'">\n                        <span class="ml-3">\n                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.\n                        </span>\n                      </label>\n                    </div>\n\n                    <div class="w-full">\n                      <button type="submit" class="btn btn-md rounded-md '+o()+'">\n                        Subscribe\n                      </button>\n                    </div>\n\n                  </div>\n                </form>\n              </div>\n\n            </div>\n\n            <div class="card-sm rounded-b-md bg-gray-300 text-xs '+I+'">\n              <p>\n                Receive <strong>free discount</strong> periodically on all our products.\n              </p>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n';var C=function(n){function e(){return n.apply(this,arguments)||this}return Object(t.a)(e,n),e.prototype.render=function(){return i.a.createElement(r.a,{demo:q})},e}(i.a.Component);e.default=C}.call(this,"src/gatsby/code/iframe/themes/animation/collapse-animation-v1.js")},ynCB:function(n,e,a){"use strict";a.r(e),e.default=function(){return"text-black links-default bg-white"}}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-themes-animation-collapse-animation-v-1-js-9f279d7d8fc5a0fe65cb.js.map