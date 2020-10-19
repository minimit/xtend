import path from 'path'
const img = require('components/snippets/img').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultOverlayScreen = require('components/snippets/classes/card-default-overlay-screen').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-overlay>
    <button type="button" class="btn btn-md ${btnPrimary()}">
      screen image full
    </button>
    <div class="overlay overlay-screen">
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="card ${cardDefaultOverlayScreen()} items-center justify-center">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="">
              ${img({ classes: 'object-cover object-center', ratio: '100%' })}
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn-md ${btnPrimary()}">
      screen max-w-3xl
    </button>
    <div class="overlay overlay-screen">
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="card ${cardDefaultOverlayScreen()} items-center justify-center">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="max-w-3xl">
              <div class="py-10 px-11">
                <div class="h3">Lorem ipsum</div>
                <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn-md ${btnPrimary()}">
      screen group max-w-3xl
    </button>
    <div class="overlay overlay-screen">
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="card ${cardDefaultOverlayScreen()} items-center justify-center">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="max-w-3xl">
              <div class="md:card-group">
                <div class="py-8 px-9 md:w-7/12">
                  <div class="h3">Lorem ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>
                <div class="md:w-5/12">
                  <div class="py-8 px-9 bg-gray-500">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                  </div>
                  <div class="py-8 px-9">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                  </div>
                </div>
              </div>
              <div class="">
                ${img({ classes: 'object-cover object-center', ratio: '15%' })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</div>
`
