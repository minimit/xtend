import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const cardDefaultDropList = require('components/snippets/classes/card-default-drop-list').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center inline-flex demo--drop-animation-js">

  <div class="drop-container">

    <button type="button" class="btn btn-medium ${btnPrimary()}">
      drop
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card card-small ${cardDefaultDropList()}">
          <div class="card-block py-3">
            <nav class="list-block">
              <a href="#" class="btn btn-small ${btnDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="btn btn-small ${btnDefaultDrop()}">
                Dolor sit
              </button>
              <button type="button" class="btn btn-small ${btnDefaultDrop()}">
                Amet
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="drop-container">

    <button type="button" class="btn btn-medium ${btnPrimary()}">
      drop
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card card-small ${cardDefaultDropList()}">
          <div class="card-block py-3">
            <nav class="list-block">
              <a href="#" class="btn btn-small ${btnDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="btn btn-small ${btnDefaultDrop()}">
                Dolor sit
              </button>
              <button type="button" class="btn btn-small ${btnDefaultDrop()}">
                Amet
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
