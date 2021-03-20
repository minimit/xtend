const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()}"> Input </label>
          <input type="text" class="xt-input ${classes.inputUnderline()}" aria-label="Input" placeholder="Input" />
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()}"> Disabled </label>
          <input
            type="text"
            class="xt-input ${classes.inputUnderline()}"
            aria-label="Input"
            placeholder="Input"
            disabled
          />
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()}"> File </label>
          <input type="file" class="xt-input ${classes.inputUnderline()}" aria-label="File" />
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()}"> Textarea </label>
          <textarea
            class="xt-input xt-textarea ${classes.inputUnderline()} h-24 resize-vertical"
            aria-label="Textarea"
            placeholder="Textarea"
          ></textarea>
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()}"> Select </label>
          <select class="xt-input xt-select ${classes.inputUnderline()}" aria-label="Select">
            <option selected value="">Select an option</option>
            <option>Test</option>
            <option>Test</option>
            <option>Test</option>
          </select>
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()}"> Select multiple </label>
          <select class="xt-input xt-select ${classes.inputUnderline()}" multiple aria-label="Select multiple">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()}"> Checkbox </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="xt-label-check">
                <input
                  type="checkbox"
                  class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}"
                  checked
                  disabled
                />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="w-full">
              <label class="xt-label-check">
                <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()}"> Radio </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="xt-label-check">
                <input
                  type="radio"
                  class="xt-check xt-radio rounded-full ${classes.radioDefault()}"
                  name="radio-default"
                  checked
                />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="w-full">
              <label class="xt-label-check">
                <input
                  type="radio"
                  class="xt-check xt-radio rounded-full ${classes.radioDefault()}"
                  name="radio-default"
                />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()}"> Switch </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="xt-label-check">
                <input type="checkbox" class="xt-check xt-switch rounded-full ${classes.switchDefault()}" />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="w-full">
              <label class="xt-label-check">
                <input
                  type="radio"
                  class="xt-check xt-switch rounded-full ${classes.switchDefault()}"
                  name="switch-default"
                  checked
                />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="w-full">
              <label class="xt-label-check">
                <input
                  type="radio"
                  class="xt-check xt-switch rounded-full ${classes.switchDefault()}"
                  name="switch-default"
                />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="w-full">
          <button type="submit" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
            submit
          </button>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
