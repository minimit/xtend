import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultDrop = require('components/snippets/classes/card-default-drop').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center">

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      small
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card card-sm ${cardDefaultDrop()}">
          <div class="btn btn-close p-5" aria-label="Close"><span class="icon-close"></span></div>
          <div class="card-block card-block-sm text-sm">
            <div class="h5">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      medium
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card card-md ${cardDefaultDrop()}">
          <div class="btn btn-close p-5" aria-label="Close"><span class="icon-close"></span></div>
          <div class="card-block card-block-md">
            <div class="h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      large
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card card-lg ${cardDefaultDrop()}">
          <div class="btn btn-close p-5" aria-label="Close"><span class="icon-close"></span></div>
          <div class="card-block card-block-lg text-lg">
            <div class="h3">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`