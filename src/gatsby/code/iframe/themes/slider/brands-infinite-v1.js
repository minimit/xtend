import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: false,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="h5 header-block">
  Constant speed
</div>

<div class="slider demo--brands-infinite-v1 demo--brands-infinite-v1--text">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <a href="#test-link-1" class="slide_content">
              One
            </a>
            <a href="#test-link-2" class="slide_content">
              Two
            </a>
            <a href="#test-link-3" class="slide_content">
              Three
            </a>
            <a href="#test-link-4" class="slide_content">
              Four
            </a>
            <a href="#test-link-5" class="slide_content">
              Five
            </a>
            <a href="#test-link-6" class="slide_content">
              Six
            </a>
            <a href="#test-link-7" class="slide_content">
              Seven
            </a>
            <a href="#test-link-8" class="slide_content">
              Eight
            </a>
            <a href="#test-link-9" class="slide_content">
              Nine
            </a>
            <a href="#test-link-10" class="slide_content">
              Ten
            </a>
            <a href="#test-link-11" class="slide_content">
              Eleven
            </a>
            <a href="#test-link-12" class="slide_content">
              Twelve
            </a>
          </div>
        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination display-none">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>

<div class="h5 header-block">
  Faster or slower depending on horizontal space
</div>

<div class="slider demo--brands-infinite-v1 demo--brands-infinite-v1--text demo--brands-infinite-v1--factor">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <a href="#test-link-1" class="slide_content">
              One
            </a>
            <a href="#test-link-2" class="slide_content">
              Two
            </a>
            <a href="#test-link-3" class="slide_content">
              Three
            </a>
            <a href="#test-link-4" class="slide_content">
              Four
            </a>
            <a href="#test-link-5" class="slide_content">
              Five
            </a>
            <a href="#test-link-6" class="slide_content">
              Six
            </a>
            <a href="#test-link-7" class="slide_content">
              Seven
            </a>
            <a href="#test-link-8" class="slide_content">
              Eight
            </a>
            <a href="#test-link-9" class="slide_content">
              Nine
            </a>
            <a href="#test-link-10" class="slide_content">
              Ten
            </a>
            <a href="#test-link-11" class="slide_content">
              Eleven
            </a>
            <a href="#test-link-12" class="slide_content">
              Twelve
            </a>
          </div>
        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination display-none">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>

<div class="h5 header-block">
  Images
</div>

<div class="slider demo--brands-infinite-v1 demo--brands-infinite-v1--img">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <a href="#test-link-1" class="slide_content">
              ${img({ classes: 'media-cover', ratio: '25%', loading: 'eager' })}
            </a>
            <a href="#test-link-2" class="slide_content">
              ${img({ classes: 'media-cover', ratio: '25%', loading: 'eager' })}
            </a>
            <a href="#test-link-3" class="slide_content">
              ${img({ classes: 'media-cover', ratio: '25%', loading: 'eager' })}
            </a>
            <a href="#test-link-4" class="slide_content">
              ${img({ classes: 'media-cover', ratio: '25%', loading: 'eager' })}
            </a>
            <a href="#test-link-5" class="slide_content">
              ${img({ classes: 'media-cover', ratio: '25%', loading: 'eager' })}
            </a>
            <a href="#test-link-6" class="slide_content">
              ${imgAlt({ classes: 'media-cover', ratio: '25%', loading: 'eager' })}
            </a>
          </div>
        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination display-none">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
