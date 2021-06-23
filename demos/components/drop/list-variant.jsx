import React from 'react'
import 'xtendui'
import 'xtendui/src/drop'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-drop="{ elements: ':scope > .xt-button', targets: ':scope > .xt-drop' }">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            Text
          </button>

          <div className="xt-drop p-4">
            <div className="xt-card w-64 py-3.5 *** rounded-md shadow-drop text-black xt-links-default bg-white ***">
              <nav className="xt-list flex-col">
                <a
                  href="#"
                  className="xt-button text-2xs py-2 px-6 *** w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75 ***">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button
                  type="button"
                  className="xt-button text-2xs py-2 px-6 *** w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75 ***">
                  Dolor sit
                </button>
                <button
                  type="button"
                  className="xt-button text-2xs py-2 px-6 *** w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75 ***">
                  Amet
                </button>
              </nav>
            </div>
          </div>
        </div>

        <div data-xt-drop="{ elements: ':scope > .xt-button', targets: ':scope > .xt-drop' }">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            Primary
          </button>

          <div className="xt-drop p-4">
            <div className="xt-card w-64 py-3.5 *** rounded-md shadow-drop text-white xt-links-inverse bg-primary-500 ***">
              <nav className="xt-list flex-col">
                <a
                  href="#"
                  className="xt-button text-2xs py-2 px-6 *** w-full justify-start text-left text-white font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75 ***">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button
                  type="button"
                  className="xt-button text-2xs py-2 px-6 *** w-full justify-start text-left text-white font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75 ***">
                  Dolor sit
                </button>
                <button
                  type="button"
                  className="xt-button text-2xs py-2 px-6 *** w-full justify-start text-left text-white font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75 ***">
                  Amet
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}