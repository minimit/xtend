import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="hero relative overflow-hidden">
        <div className="xt-media-container bg-gray-600 w-full h-96">
          <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
        </div>
        <div className="flex relative">
          <a href="#" className="relative p-8 md:p-12 lg:p-16 xl:p-24 mx-auto max-w-2xl text-center group">
            <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">Lorem ipsum</h2>
            <h3 className="xt-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
            </h3>
            <div className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
              Lorem ipsum
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}