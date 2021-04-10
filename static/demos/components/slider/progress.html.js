const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-progress">
    <div class="xt-slider">
      <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden group pointer-events-none">
        <span
          class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500 transition opacity-0 group-in:opacity-100"
        >
          ${classes.spinner({})}
        </span>
      </span>

      <div class="xt-slides">
        <div class="xt-slides-inner xt-row xt-row-4">
          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">1</div>
              <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
                <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                  <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                  <span class="absolute bg-current h-full bottom-0 left-0"></span>
                </span>
              </span>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">2</div>
              <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
                <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                  <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                  <span class="absolute bg-current h-full bottom-0 left-0"></span>
                </span>
              </span>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">3</div>
              <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
                <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                  <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                  <span class="absolute bg-current h-full bottom-0 left-0"></span>
                </span>
              </span>
            </div>
          </div>

          <div class="xt-slide w-7/12 sm:w-5/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">4</div>
              <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
                <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                  <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                  <span class="absolute bg-current h-full bottom-0 left-0"></span>
                </span>
              </span>
            </div>
          </div>

          <div class="xt-slide w-7/12 sm:w-5/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">5</div>
              <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
                <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                  <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                  <span class="absolute bg-current h-full bottom-0 left-0"></span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav class="xt-slider-pagination w-full xt-list xt-list-3 pt-4 items-center justify-center">
        <button
          type="button"
          class="xt-button text-2xs py-2 px-3.5 in:px-5 w-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 in:bg-gray-400 transition-all hidden"
          data-xt-pag
          title="Slide xt-num"
        >
          <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
            <span class="xt-filler absolute inset-0 m-auto text-primary-500">
              <span class="absolute bg-current opacity-25 w-full h-full"></span>
              <span class="absolute bg-current w-full"></span>
            </span>
          </span>
        </button>
      </nav>
    </div>
  </div>
`

export const object = {
  html: html,
}
