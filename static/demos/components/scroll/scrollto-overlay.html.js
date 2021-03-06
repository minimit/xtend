const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--scrollto-overlay">
    <!-- sticky for demo purpose remove this -->
    <div class="xt-sticky">
      <div class="xt-card ${classes.cardSm()} ${classes.cardPrimary()}">
        <div class="xt-list xt-list-3">
          <a
            href="#anchor-0"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-overlay="{ targets: '#overlay--scrollto', classSkip: { elements: true } }"
          >
            #0
          </a>
          <a
            href="#anchor-1"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-overlay="{ targets: '#overlay--scrollto', classSkip: { elements: true } }"
          >
            #1
          </a>
          <button
            type="button"
            class="xt-button button--custom ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-overlay="{ targets: '#overlay--scrollto', classSkip: { elements: true } }"
          >
            custom
          </button>
          <a
            href="#anchor-2"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-overlay="{ targets: '#overlay--scrollto', classSkip: { elements: true } }"
            data-xt-scrollto-hash="true"
          >
            #2
          </a>
          <a
            href="#anchor-2"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-scrollto-hash="true"
          >
            #2 only anchor
          </a>
        </div>
      </div>
    </div>

    <!-- switcher for demo purpose remove this -->
    <div class="container">
      <form class="text-sm mt-4">
        <label class="${classes.checkLabel()}">
          <input type="checkbox" class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkDefault()}" />
          <span class="${classes.checkContent()}">Deactivate classes</span>
        </label>
      </form>
    </div>

    <div class="xt-overlay" id="overlay--scrollto">
      <div class="xt-backdrop pointer-events-none bg-black opacity-25"></div>
      <div class="xt-overlay-container py-0">
        <div class="xt-overlay-inner">
          <button type="button" class="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
            ${classes.iconX()}
          </button>

          <div class="xt-sticky">
            <div class="xt-card ${classes.cardSm()} ${classes.cardPrimary()}">
              <div class="xt-list xt-list-3">
                <a
                  href="#anchor-0"
                  class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                >
                  #0
                </a>
                <a
                  href="#anchor-1"
                  class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                >
                  #1
                </a>
                <button
                  type="button"
                  class="xt-button button--custom ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                >
                  custom
                </button>
                <a
                  href="#anchor-2"
                  class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                >
                  #2
                </a>
              </div>
            </div>
          </div>

          <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()}" id="anchor-0">
            <div class="xt-h4">Lorem ipsum dolor sit amet</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
              fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
              egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean
              feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
            </p>
            <div class="xt-list xt-list-3">
              <a
                href="#anchor-0"
                class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                #0
              </a>
              <a
                href="#anchor-1"
                class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                #1
              </a>
              <button
                type="button"
                class="xt-button button--custom ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                custom
              </button>
              <a
                href="#anchor-2"
                class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                #2
              </a>
            </div>
          </div>

          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />

          <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()}" id="anchor-1">
            <div class="xt-h4">Lorem ipsum dolor sit amet</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
              fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
              egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean
              feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
            </p>
            <div class="xt-list xt-list-3">
              <a
                href="#anchor-0"
                class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                #0
              </a>
              <a
                href="#anchor-1"
                class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                #1
              </a>
              <button
                type="button"
                class="xt-button button--custom ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                custom
              </button>
              <a
                href="#anchor-2"
                class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                #2
              </a>
            </div>
          </div>

          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />

          <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()}" id="anchor-custom">
            <div class="xt-h4">Lorem ipsum dolor sit amet</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
              fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
              egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean
              feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
            </p>
          </div>

          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />

          <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()}" id="anchor-2">
            <div class="xt-h4">Lorem ipsum dolor sit amet</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
              fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
              egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean
              feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
            </p>
            <div class="xt-list xt-list-3">
              <a
                href="#anchor-0"
                class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                #0
              </a>
              <a
                href="#anchor-1"
                class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                #1
              </a>
              <button
                type="button"
                class="xt-button button--custom ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                custom
              </button>
              <a
                href="#anchor-2"
                class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                #2
              </a>
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
