const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div class="CCC--sticky-stack">
    <div class="xt-sticky sticky--stack-top">
      <div class="xt-card ${classes.cardSm()} ${classes.cardPrimary()}">
        <div class="xt-h4">Top</div>
      </div>
    </div>

    <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()} sticky--hide-content">
      <div class="xt-h4">Lorem ipsum</div>
      <p>
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
        eget, vehicula scelerisque elit.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla
        sollicitudin nunc, ut commodo nulla enim nec nisi.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
    </div>

    <div class="xt-sticky sticky--stack-topsecond">
      <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()}">
        <div class="xt-h6">Top Second</div>
      </div>
    </div>

    <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()} sticky--hide-content">
      <div class="xt-h4">Lorem ipsum</div>
      <p>
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
        eget, vehicula scelerisque elit.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla
        sollicitudin nunc, ut commodo nulla enim nec nisi.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
    </div>

    <div class="xt-sticky sticky--stack-topthird">
      <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()}">
        <div class="xt-h6">Top Third</div>
      </div>
    </div>

    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />

    <div class="xt-sticky sticky--stack-bottom">
      <div class="xt-card ${classes.cardSm()} ${classes.cardPrimary()}">
        <div class="xt-h4">Bottom</div>
      </div>
    </div>

    <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()} sticky--hide-content">
      <div class="xt-h4">Lorem ipsum</div>
      <p>
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
        eget, vehicula scelerisque elit.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla
        sollicitudin nunc, ut commodo nulla enim nec nisi.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
    </div>

    <div class="xt-sticky sticky--stack-bottomsecond">
      <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()}">
        <div class="xt-h6">Bottom Second</div>
      </div>
    </div>

    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
  </div>
`

export const object = {
  html: html,
}
