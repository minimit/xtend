import React from 'react'
import path from 'path'

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-default list-space-tiny align-items-center">
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-first-element">
    1st element
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-first-target">
    1st target
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--toggle-events-autostart">
    Autostart
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--toggle-events-autostop">
    Autostop
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-add">
    Add
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-remove">
    Remove
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-reinit">
    Reinit
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-restart">
    Restart
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-destroy">
    Destroy
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--slider-events-unmount">
    Unmount
  </button>
</div>

<br/>

<div class="slider" id="demo--slider-events">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide col-6 col-4-sm">
        <div class="slide-inner">

          <div class="card card-slide">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">1</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide-inner">

          <div class="card card-slide">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">2</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm active">
        <div class="slide-inner">

          <div class="card card-slide">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">3</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide-inner">

          <div class="card card-slide">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">4</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide-inner">

          <div class="card card-slide">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">5</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination">
    <button type="button" class="btn btn-default" data-xt-nav="-1" title="Previous slide">
      <span class="icon-xt-chevron-left icon-left"></span> prev
    </button>
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
    <button type="button" class="btn btn-default" data-xt-nav="1" title="Next slide">
      next <span class="icon-xt-chevron-right icon-right"></span>
    </button>
  </nav>

</div>

<br/>

<div class="card card-primary card-small">
  <div class="card-design"></div>
  <div class="card-inner">
    <div class="card-content">
      <div class="card-block card-item card-overflow-y" id="demo--slider-events-log">
      </div>
    </div>
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
