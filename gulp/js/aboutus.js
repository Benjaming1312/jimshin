const is = require('./is')

module.exports = function () {
  if (!is('.page.about')) {
    return
  }

  
  const url = window.location.href
  const target = window.location.href.split('#')[1]

  if (target) {
    scrollTo(target)
  }

  $('.about-dropdown .list-inline a').each(function () {
    $(this).click(function (e) {
      e.preventDefault()
      e.stopPropagation()
      if ($(window).width() < 768) {
        $('.navbar-toggle').click()
      }

      const clickHref = $(this).attr('href').split('#')[1]
      scrollTo(clickHref)
    })
  })

  $('.page.about .owl-carousel').owlCarousel({
    items: 1,
    autoplay:true,
    nav: false,
    dots: true,
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoPlaySpeed: 5000,
    autoPlayTimeout: 1500,
    smartSpeed: 1500,
    navText: [''],
    autoplayHoverPause: true
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