const is = require('../is')

module.exports = function () {
  if (!is('.idx')) {
    return
  }

  section1Owl()
  section3Owl()
}

function section1Owl () {
  $('.idx.section-1 .owl-carousel').owlCarousel({
    items: 1,
    autoplay:true,
    nav: true,
    dots: false,
    loop: true,
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
            items: 3,
            margin: 30
        }
    }
  })
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
            items: 1
        }
    }
  })
}