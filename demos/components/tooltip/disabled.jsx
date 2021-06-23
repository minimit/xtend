import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div className="demo--tooltip-disable-react">
      <div data-xt-tooltip="{ elements: ':scope > .xt-tooltip-item', targets: ':scope > .xt-tooltip-item > .xt-tooltip', matches: { '(min-width: 768px)': { disabled: true } } }">
        Lorem ipsum
        <div className="xt-tooltip-item">
          <a href="#">dolor</a>

          <div className="xt-tooltip p-2">
            <div className="relative text-xs py-2 px-3.5 rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum
              <div
                className="inline-block"
                data-xt-tooltip="{ elements: ':scope > .xt-tooltip-item', targets: ':scope > .xt-tooltip-item > .xt-tooltip' }">
                <div className="xt-tooltip-item">
                  <a href="#">dolor</a>

                  <div className="xt-tooltip p-2">
                    <div className="relative text-xs py-2 px-3.5 rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                      Consectetur adipiscing elit
                    </div>
                  </div>
                </div>
              </div>
              sit amet
            </div>
          </div>
        </div>
        sit amet
      </div>
    </div>
  )
}