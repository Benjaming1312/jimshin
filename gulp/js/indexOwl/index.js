const is = require('../is')

module.exports = function () {
  if (!is('.idx')) {
    return
  }

  section3Owl()
  section4Owl()
}

function section3Owl () {
  $('.idx.section-3 .owl-carousel').owlCarousel({
    items: 1,
    autoplay:true,
    nav: true,
    dots: false,
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
            items: 5
        }
    }
  })
}

function section4Owl () {
  $('.idx.section-4 .owl-carousel').owlCarousel({
    items: 1,
    autoplay:true,
    nav: true,
    dots: false,
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
            items: 2,
            margin: 15
        },
        440: {
            items: 2,
            margin: 15
        },
        768: {
            items: 6,
            margin: 15
        }
    }
  })
}