const is = require('./is')

module.exports  = function () {
  if (!is('.online-contents')) {
    return
  }
  $('.online-contents .owl-carousel').owlCarousel({
    items: 1,
    autoplay:true,
    nav: true,
    dots: true,
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoPlaySpeed: 5000,
    autoPlayTimeout: 1500,
    smartSpeed: 1500,
    navText: [''],
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        440: {
            items: 1
        },
        768: {
            items: 3
        }
    }
  })

  $('.scrollTo a').click(function () {
    scrollTo('owl-wrapper')
  })
}

function scrollTo (target) {
  const top = $(`#${target}`).offset().top
  const navH = $('.navbar').innerHeight()
  const section1H = target === 'section-1' ? $(window).width() < 768 ? 30 : 130 : 0

  $('html, body').stop().animate({
    scrollTop: top - navH - section1H
  }, 1000)
}