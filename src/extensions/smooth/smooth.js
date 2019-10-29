import { Xt } from 'xtend-library'
import 'xtend-library/src/core/toggle/toggle.js'
import RJSON from 'relaxed-json'

class Smooth extends Xt.Toggle {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    super(object, optionsCustom)
  }
}

//
// options
//

Smooth.componentName = 'xt-smooth'
Smooth.optionsDefault = {
  class: false,
  wheel: {
    selector: 'scrollingElement',
    block: false,
    limit: true,
    transform: false,
    horizontal: false,
    factor: 1,
    friction: function(delta) {
      return delta / 9
    },
    frictionLimit: 1.5,
  },
}
Xt.optionsGlobal[Smooth.componentName] = {}

//
// export
//

Xt.Smooth = Smooth

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.Smooth.componentName + ']',
  mount: function(object) {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.Smooth.componentName)
    const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Smooth(object, options)

    // unmount

    return function unmount() {
      self.destroy()
      self = null
    }
  },
})
