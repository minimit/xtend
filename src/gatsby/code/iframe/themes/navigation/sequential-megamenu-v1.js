import React from 'react'
import path from 'path'
const checkDefault = require('components/snippets/classes/form-check-default').default

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
<div class="megamenu">

  <div class="relative bg-accent-500 text-white">

    <span class="megamenu-line fixed top-0 left-0 bg-white"></span>

    <div class="container">

      <div class="list -mx-4">

        <div class="drop-container">

          <a href="#menu1" type="button" class="btn btn-lg btn-line rounded-md py-6 opacity-75 hover:opacity-100 active:opacity-100">
            Menu #1
          </a>

          <div class="drop drop-static p-0">
            <div class="drop-inner overflow-hidden">
              <div class="design-setup bg-accent-900"></div>
              <div class="drop-content py-10 text-white links-inverse text-sm">

                <div class="container">
                  <div class="row row-4">

                    <div class="w-full md:w-4/12">
                      <div class="media-container ratio-50">
                        <div class="media-inner">
                          <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                        </div>
                      </div>
                    </div>

                    <div class="w-6/12 md:w-8/12">
                      <div class="row row-2 flex-col flex-wrap" style="max-height: 20rem;">

                        <div class="w-full md:w-6/12 lg:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Lorem ipsum
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Consectetur
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Adipiscing elit
                            </a>
                          </div>
                        </div>

                        <div class="w-full md:w-6/12 lg:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Dolor sit amet
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                          </div>
                        </div>

                        <div class="w-full md:w-6/12 lg:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Lorem ipsum
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Consectetur
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Adipiscing elit
                            </a>
                          </div>
                        </div>

                        <div class="w-full md:w-6/12 lg:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Lorem ipsum
                          </a>
                        </div>

                        <div class="w-full md:w-6/12 lg:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Dolor sit amet
                          </a>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div class="drop-container">

          <a href="#menu2" type="button" class="btn btn-lg btn-line rounded-md py-6 opacity-75 hover:opacity-100 active:opacity-100">
            Menu #2
          </a>

          <div class="drop drop-static p-0">
            <div class="drop-inner overflow-hidden">
              <div class="design-setup bg-accent-900"></div>
              <div class="drop-content py-10 text-white links-inverse text-sm">

                <div class="container">
                  <div class="row row-4">

                    <div class="w-full md:w-4/12">
                      <div class="media-container ratio-50">
                        <div class="media-inner">
                          <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                        </div>
                      </div>
                    </div>

                    <div class="w-6/12 md:w-8/12">
                      <div class="row row-2 flex-col flex-wrap" style="max-height: 30rem;">

                        <div class="w-full md:w-6/12 lg:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Lorem ipsum
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Consectetur
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Adipiscing elit
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Consectetur
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Adipiscing elit
                            </a>
                          </div>
                        </div>

                        <div class="w-full md:w-6/12 lg:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Dolor sit amet
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                          </div>
                        </div>

                        <div class="w-full md:w-6/12 lg:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Lorem ipsum
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Consectetur
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Adipiscing elit
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Consectetur
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Adipiscing elit
                            </a>
                          </div>
                        </div>

                        <div class="w-full md:w-6/12 lg:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Lorem ipsum
                          </a>
                        </div>

                        <div class="w-full md:w-6/12 lg:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Dolor sit amet
                          </a>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div class="drop-container">

          <a href="#menu3" type="button" class="btn btn-lg btn-line rounded-md py-6 opacity-75 hover:opacity-100 active:opacity-100">
            Menu #3
          </a>

          <div class="drop drop-static p-0">
            <div class="drop-inner overflow-hidden">
              <div class="design-setup bg-accent-900"></div>
              <div class="drop-content py-10 text-white links-inverse text-sm">

                <div class="container">
                  <div class="row row-4">

                    <div class="w-full md:w-4/12">
                      <div class="media-container ratio-50">
                        <div class="media-inner">
                          <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                        </div>
                      </div>
                    </div>

                    <div class="w-6/12 md:w-8/12">
                      <div class="row row-2 flex-col flex-wrap" style="max-height: 15rem;">

                        <div class="w-full md:w-6/12 lg:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Lorem ipsum
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Consectetur
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Adipiscing elit
                            </a>
                          </div>
                        </div>

                        <div class="w-full md:w-6/12 lg:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Dolor sit amet
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm rounded-md text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <a href="#menu4" class="btn btn-lg btn-line rounded-md py-6 opacity-75 hover:opacity-100 active:opacity-100">
          Link #4
        </a>

      </div>

    </div>
  </div>

  <!-- mouse events instead of click you can remove this -->
  <div class="container pt-10">
    <label class="form-label-check">
      <input type="checkbox" class="form-check form-checkbox rounded-md ${checkDefault()}">
      <span class="ml-3">Use mouse events</span>
    </label>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
