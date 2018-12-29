Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index) {

  // vars

  let timeTotal = .8;

  let timeMask = .8;
  let sizeMask = 200;

  let timeContent = .8;
  let delayContent = .15;
  let sizeContent = 100;
  let delayContentMax = delayContent * 2;
  let durationContent = timeContent + delayContentMax;

  CustomEase.create('easeIn', '.41, .1, .175, 1');
  CustomEase.create('easeOut', '.77, 0, .175, 1');

  // slider

  let slider = new Xt.Slider(main, {
    "auto": 6000,
    "durationOn": timeTotal * 1000,
    "durationOff": timeTotal * 1000
  });

  let dragger = slider.dragger;

  // drag event

  dragger.addEventListener('drag.xt.slider', function (e) {
    let self = e.detail.object;
    let slide = slider.targets.filter(x => x.classList.contains('active'))[0];
    let contents = slide.querySelectorAll('.card_content > *');
    let ratio = Math.abs(self.detail.xStart - self.detail.xCurrent) / slide.clientWidth;
    // direction
    let direction = 1;
    if (self.detail.xStart - self.detail.xCurrent > 0) {
      direction = -1;
    }
    // mask
    TweenMax.set(slide, {x: -self.detail.xDist + 'px', opacity: 1});
    TweenMax.set(dragger, {x: self.detail.xDist});
    // content
    for (let content of contents) {
      let ratioWithDelay = (durationContent - parseFloat(content.dataset.tlDelay)) * ratio / timeContent;
      TweenMax.set(content, {x: sizeContent * ratioWithDelay * direction, opacity: 1});
    }
  });

  // dragend event

  dragger.addEventListener('dragend.xt.slider', function (e) {
    let slide = slider.targets.filter(x => x.classList.contains('active'))[0];
    let contents = slide.querySelectorAll('.card_content > *');
    // mask
    TweenMax.to(slide, timeMask, {x: 0, opacity: 1, ease: 'easeOut'});
    TweenMax.to(dragger, timeMask, {x: 0, ease: 'easeOut'});
    // content
    for (let content of contents) {
      TweenMax.to(content, timeContent, {x: 0, opacity: 1, ease: 'easeOut'});
    }
  });

  // slider items

  for (let slide of slider.targets) {

    // on event

    slide.addEventListener('on.xt', function (e) {
      let xMax = slide.clientWidth;
      let contents = slide.querySelectorAll('.card_content > *');
      // content
      for (let [i, content] of contents.entries()) {
        content.dataset.tlDelay = Math.min(delayContent * i, delayContentMax).toString();
      }
      // direction
      let direction = 1;
      if (slide.classList.contains('xt-inverse')) {
        direction = -1;
      }
      // setup
      TweenMax.set(slide, {opacity: 0});
      // mask
      TweenMax.set(slide, {x: -xMax * direction});
      TweenMax.to(slide, timeMask, {x: 0, opacity: 1, ease: 'easeIn'});
      TweenMax.set(dragger, {x: xMax * direction});
      TweenMax.to(dragger, timeMask, {x: 0, ease: 'easeIn'});
      TweenMax.set(dragger.children[0], {x: sizeMask * direction});
      TweenMax.to(dragger.children[0], timeMask, {x: 0, ease: 'easeIn'});
      // content
      for (let content of contents) {
        TweenMax.set(content, {x: sizeContent * direction, opacity: 0});
        setTimeout(function () {
          TweenMax.to(content, timeContent, {x: 0, opacity: 1, ease: 'easeIn'});
        }, parseFloat(content.dataset.tlDelay) * 1000);
      }
    });

    // off event

    slide.addEventListener('off.xt', function (e) {
      let xMax = slide.clientWidth;
      let contents = slide.querySelectorAll('.card_content > *');
      // direction
      let direction = 1;
      if (slide.classList.contains('xt-inverse')) {
        direction = -1;
      }
      // mask
      TweenMax.to(slide, timeMask, {x: xMax * direction, opacity: 0, ease: 'easeOut'});
      TweenMax.to(dragger, timeMask, {x: -xMax * direction, ease: 'easeOut'});
      // content
      for (let content of contents) {
        setTimeout(function () {
          TweenMax.to(content, timeContent, {x: -sizeContent * direction, opacity: 0, ease: 'easeOut'});
        }, parseFloat(content.dataset.tlDelay) * 1000);
      }
    });

  }

}