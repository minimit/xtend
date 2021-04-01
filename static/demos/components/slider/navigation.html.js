const markupSlider = require('src/gatsby/templates/snippets/markup-slider-navigation').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div class="demo--slider-navigation">
    <div class="xt-slider">${indentString(markupSlider(), 2)}</div>
  </div>
`

export const object = {
  html: html,
}
