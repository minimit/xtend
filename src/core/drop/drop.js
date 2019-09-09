import { Xt } from 'xtend-library'
import 'xtend-library/src/core/javascript/controller.js'

class Drop extends Xt.Controller {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor (object, optionsJs = {}) {
    super(object, optionsJs)
  }

  //
  // init
  //

  /**
   * init aria
   */
  initAria () {
    super.initAria()
    const self = this
    const options = self.options
    // aria
    if (options.aria) {
      for (const el of self.elements) {
        const ariaEls = Xt.queryAll(el, options.ariaControls)
        const ariaEl = ariaEls.length ? ariaEls[0] : el
        ariaEl.setAttribute('aria-haspopup', 'listbox')
      }
      for (const tr of self.targets) {
        tr.setAttribute('role', 'listbox')
      }
    }
  }
}

//
// option
//

Drop.componentName = 'xt-drop'
Drop.optionsDefault = {
  targets: ':scope > .drop',
  elementsInner: ':scope > a, :scope > button',
  on: 'click',
  min: 0,
  max: 1,
  instant: { elementsInner: true },
  autoClose: true,
  closeOutside: 'body',
  ariaControls: ':scope > a, :scope > button'
}

//
// export
//

Xt.Drop = Drop

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.Drop.componentName + ']',
  mount: function (object) {
    let self = new Xt.Drop(object, object.getAttribute('data-' + Xt.Drop.componentName))

    // unmount

    return function unmount () {
      self.destroy()
      self = null
    }
  }
})
