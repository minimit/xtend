//////////////////////
// import
//////////////////////

import Xt from '../xtend';
import Core from '../core';

//////////////////////
// Drop
//////////////////////

class Ajax extends Core {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor(object, optionsJs = {}) {
    super(object, optionsJs);
    // prevent scroll on popstate
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init
   */
  init(object = false, optionsJs = false) {
    let self = this;
    // vars
    self.locationFrom = self.locationTo || null; // fix popstate
    self.locationTo = null;
    // super
    super.init();
  }

  /**
   * init setup
   */
  initSetup() {
    super.initSetup();
    let self = this;
    let options = self.options;
    // queryElement
    self.queryElement = self.object.querySelectorAll(options.query)[0] || self.object;
  }

  /**
   * init elements
   */
  initScopeElements() {
    super.initScopeElements();
    let self = this;
    // remove external links
    for (let element of self.elements) {
      if (location.hostname !== element.hostname || element.getAttribute('href').split('#')[0] === '') {
        self.elements = Array.from(self.elements).filter(x => x !== element);
      }
    }
    // generate groups
    self.groupUrl = [];
    for (let element of self.elements) {
      // populate
      let url = element.getAttribute('href').split('#')[0];
      if (!self.groupUrl[url]) {
        self.groupUrl[url] = [];
      }
      self.groupUrl[url].push(element);
      // assign group
      element.setAttribute('data-xt-group', self.namespace + '-' + url);
    }
  }

  /**
   * init start
   * @param {Boolean} saveCurrents
   */
  initStart(saveCurrents) {
    let self = this;
    // initial
    self.initial = true;
    // automatic initial currents
    let elements = self.elements;
    if (elements.length) {
      let found = false;
      for (let element of self.elements) {
        let loc = location.pathname + location.search;
        let url = element.pathname + element.search;
        if (url !== '') {
          if (loc === url) {
            found = true;
            self.eventOn(element, false);
          } else {
            self.eventOff(element, false);
          }
        }
      }
      if (!found) {
        // initial
        self.initial = false;
      }
    } else {
      // initial
      self.initial = false;
    }
    // detect url
    let url;
    if (history.state && history.state.url) {
      // detect from history
      url = history.state.url;
    } else {
      // detect from url location (absolute url without domain name)
      url = location.pathname + location.search;
    }
    // set pushstate
    if (!self.locationFrom) {
      self.locationFrom = new URL(url, location);
    }
    self.pushState(url, document.title);
    // init events
    self.initEvents();
  }

  /**
   * init events
   */
  initEvents() {
    super.initEvents();
    let self = this;
    // event popstate
    window.onpopstate = self.eventPopstateHandler.bind(self);
  }

  //////////////////////
  // handler
  //////////////////////

  /**
   * element on handler
   * @param {Node|HTMLElement|EventTarget|Window} element
   * @param {Event} e
   */
  eventOnHandler(element, e) {
    if (!e || !e.detail || !e.detail.skip) { // needed because we trigger .xt event
      // not when opening in new tab
      if (e.metaKey || e.ctrlKey) {
        return false;
      }
      // prevent links (needed for xt-ajax to go to links and propagate event if inside targets)
      e.preventDefault();
    }
    // super
    super.eventOnHandler(element, e);
  }

  /**
   * element popstate handler
   * @param {Event} e
   */
  eventPopstateHandler(e) {
    let self = this;
    // handler
    if (history.state && history.state.url) {
      // reinit currents
      self.initStart();
      // request set
      requestAnimationFrame(function () {
        self.ajaxRequest(null, history.state.url);
      });
    }
  }

  //////////////////////
  // special
  //////////////////////

  /**
   * ajax request
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   */
  ajaxRequest(element, url) {
    let self = this;
    let options = self.options;
    // url
    if (element) {
      url = element.getAttribute('href').split('#')[0];
    }
    // location
    self.locationTo = new URL(url, location);
    // autoClose
    dispatchEvent(new CustomEvent('autoClose.xt'));
    // dispatch
    let detail = self.eDetailSet();
    self.object.dispatchEvent(new CustomEvent('request.xt.ajax', {detail: detail}));
    // duration
    self.detail.requestDate = new Date();
    clearTimeout(parseFloat(self.object.dataset[self.namespaceComponent + 'AjaxDurationTimeout']));
    requestAnimationFrame( function() {
      self.detail.requestDuration = options.duration || Xt.animTime(self.queryElement);
      // call
      let request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onload = function () {
        self.ajaxResponse(element, url, request);
      };
      request.onerror = function () {
        self.ajaxResponse(element, url, request);
      };
      request.send();
    });
  }

  /**
   * ajax response
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {XMLHttpRequest} request Html response
   */
  ajaxResponse(element, url, request) {
    let self = this;
    // dispatch
    let detail = self.eDetailSet();
    self.detail.request = request;
    self.object.dispatchEvent(new CustomEvent('response.xt.ajax', {detail: detail}));
    // duration
    self.detail.requestDuration -= new Date() - self.detail.requestDate;
    if (self.detail.requestDuration > 0) {
      self.object.dataset[self.namespaceComponent + 'AjaxDurationTimeout'] = setTimeout( function() {
        // request
        if (request.status >= 200 && request.status <= 300) {
          self.ajaxSuccess(element, url, request);
        } else {
          self.ajaxError(element, url, request);
        }
      }, self.detail.requestDuration).toString();
    } else {
      // request
      if (request.status >= 200 && request.status <= 300) {
        self.ajaxSuccess(element, url, request);
      } else {
        self.ajaxError(element, url, request);
      }
    }
  }

  /**
   * ajax success
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {XMLHttpRequest} request Html response
   */
  ajaxSuccess(element, url, request) {
    let self = this;
    let options = self.options;
    // autoClose
    dispatchEvent(new CustomEvent('autoCloseFix.xt'));
    // set substitute
    let html = document.createElement('html');
    html.innerHTML = request.responseText.trim();
    let title = html.querySelectorAll('head title')[0].innerHTML;
    let replace = html.querySelectorAll(options.query)[0];
    // populate dom
    self.queryElement.outerHTML = replace.outerHTML;
    // queryElement
    self.queryElement = self.object.querySelectorAll(options.query)[0] || self.object;
    // pushstate
    self.pushState(url, title);
    // garbage collector
    html = null;
    replace = null;
    // dispatch
    let detail = self.eDetailSet();
    self.detail.request = request;
    self.object.dispatchEvent(new CustomEvent('replace.xt.ajax', {detail: detail}));
    // reinit
    if (!self.initial) {
      self.initial = true;
      self.init();
    }
  }

  /**
   * ajax error
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {XMLHttpRequest} request Html response
   */
  ajaxError(element, url, request) {
    let self = this;
    // reinit currents
    self.initStart();
    // dispatch
    let detail = self.eDetailSet();
    self.detail.request = request;
    self.object.dispatchEvent(new CustomEvent('replace.xt.ajax', {detail: detail}));
  }

  /**
   * history pushstate
   */
  pushState(url, title) {
    // push object state
    if (!history.state || !history.state.url || history.state.url !== url) {
      document.title = title;
      history.pushState({'url': url, 'title': title}, title, url);
    } else {
      document.title = history.state.title;
    }
  }

}

//////////////////////
// option
//////////////////////

Ajax.componentName = 'xt-ajax';
Ajax.optionsDefault = {
  "query": "body", // needs to be unique
  "baseUrl": "/",
  "duration": false,
  "elements": "a[href]:not([href^='#'])",
  "class": "active",
  "on": "click",
  "toggle": false,
  "min": 0,
  "max": 1,
  "instant": true,
  "aria": false
};

//////////////////////
// export
//////////////////////

export default Ajax;