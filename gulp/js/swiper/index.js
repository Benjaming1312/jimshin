const is = require('../is')
module.exports = function () {
  if (!is('.swiper-container')) {
    return
  }

  const options = {
    // Show image per view
    slidesPerView: 'auto',
    // Space
    spaceBetween: 30,
    // Grab
    grabCursor: true,
    // Loop
    loop: true,
    // Auto play
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // effect
    effect: 'fade',
    // navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // Dot pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  }

  // Append navigation
  if (options.hasOwnProperty('navigation')) {
    $('.swiper-container').append(`<div class="${options.navigation.nextEl.replace('.', '')}"></div>`)
    $('.swiper-container').append(`<div class="${options.navigation.prevEl.replace('.', '')}"></div>`)
  }

  // Append dot
  if (options.hasOwnProperty('pagination')) {
    $('.swiper-container').append(`<div class="${options.pagination.el.replace('.', '')}"></div>`)
  }


  const swiper = new Swiper('.swiper-container', options)


  // Text-content
  // swiper.on('slideChange', function () {
  //   const content = new Promise((resolve, reject) => {
  //     gsap.fromTo('.text-content', {opacity: 0, x: 100}, {opacity: 1, x: 0})
  //     resolve()
  //   })

  //   content.then(() => {
  //     gsap.fromTo('.text-content h4', {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 3})
  //   })

  // })
}