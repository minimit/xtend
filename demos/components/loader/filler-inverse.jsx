import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center justify-center">
        <div className="xt-card rounded-md text-white xt-links-inverse bg-primary-500">
          <div className="text-sm py-6 px-7">
            <div className="xt-h5">Small</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
          <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-white text-opacity-50">
              <span className="block absolute bg-current opacity-25 w-full h-full"></span>
              <span className="block absolute bg-current h-full animate-xt-filler-x"></span>
            </span>
          </span>
        </div>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
          Lorem ipsum
          <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-white text-opacity-50">
              <span className="block absolute bg-current opacity-25 w-full h-full"></span>
              <span className="block absolute bg-current h-full animate-xt-filler-x"></span>
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}