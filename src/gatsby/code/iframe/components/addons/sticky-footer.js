import React from 'react'
import path from 'path'
const cardStickyDefault = require('components/snippets/classes/card-sticky-default').default
const cardStickyPrimary = require('components/snippets/classes/card-sticky-primary').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="site_wrapper">

  <header class="site_header">
    <div class="card ${cardStickyPrimary()}">
      <div class="h4">Header</div>
    </div>
  </header>

  <main class="site_main">
    <div class="card ${cardStickyDefault()}">
      <div class="py-8 px-9">
        <div class="h4">Main</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </main>

  <footer class="site_footer">
    <div class="card ${cardStickyPrimary()}">
      <div class="h4">Footer</div>
    </div>
  </footer>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
