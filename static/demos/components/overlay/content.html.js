const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay="{ elements: '[data-xt-overlay-el]', targets: '[data-xt-overlay-tr]' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-overlay-el
        >
          asset
        </button>

        <div class="xt-overlay" data-xt-overlay-tr>
          <div class="xt-backdrop pointer-events-none bg-black opacity-25"></div>
          <div class="xt-overlay-container max-w-3xl">
            <div class="xt-overlay-inner">
              <div class="xt-card ${classes.cardRadius()} shadow-overlay ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="xt-media-container bg-gray-500 rounded-md xt-ratio-37.5">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay="{ elements: '[data-xt-overlay-el]', targets: '[data-xt-overlay-tr]' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-overlay-el
        >
          asset and text
        </button>

        <div class="xt-overlay" data-xt-overlay-tr>
          <div class="xt-backdrop pointer-events-none bg-black opacity-25"></div>
          <div class="xt-overlay-container max-w-3xl">
            <div class="xt-overlay-inner">
              <div class="xt-card ${classes.cardRadius()} shadow-overlay ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="xt-media-container bg-gray-500 rounded-t-md xt-ratio-37.5">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div class="*** ${classes.cardMd()} ***">
                  <div class="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                  <p>
                    Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                    justo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                    ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
                  </p>
                  <p>
                    Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                    justo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay="{ elements: '[data-xt-overlay-el]', targets: '[data-xt-overlay-tr]' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-overlay-el
        >
          text
        </button>

        <div class="xt-overlay" data-xt-overlay-tr>
          <div class="xt-backdrop pointer-events-none bg-black opacity-25"></div>
          <div class="xt-overlay-container max-w-3xl">
            <div class="xt-overlay-inner">
              <div class="xt-card ${classes.cardRadius()} shadow-overlay ${classes.cardWhite()}">
                <div class="*** ${classes.cardMd()} rounded-t-md ${classes.cardDefault()} ***">
                  <div class="xt-h4">Lorem ipsum</div>
                </div>
                <div class="*** ${classes.cardMd()} bg-gray-200 ***">
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                </div>
                <div class="*** ${classes.cardSm()} rounded-b-md ${classes.cardPrimary()} ***">
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
