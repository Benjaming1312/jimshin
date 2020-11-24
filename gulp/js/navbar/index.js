const {calcNavHeight} = require('../banner/index.js')
const readCookie = require('../readcookie/index.js')
const is = require('../is')

module.exports = function () {
  // Append mshop member
  $('.hdmenu .nav').appendTo('.fit-content.member')
  const navHeight = calcNavHeight()
  
  $(window).on('scroll', function () {
    const top = $(window).scrollTop()
    if (top > navHeight) {
      $('nav.navbar').addClass('scroll')
    }
    else {
      if (is('.scroll')) {
        $('nav.navbar').removeClass('scroll')
      }
    }
  })

  $('.sub-dropdown-toggle').each(function () {
    $(this).click(function () {
      $(this).parent('li').toggleClass('open')
    })
  })

  $('.dropdown').each(function () {
    if ($(window).width() < 1100 && $(window).width() > 767) {
      $(this).children('a').click(function (e) {
        e.preventDefault()
        e.stopPropagation()
      })
    }

    const positionLeft = $(this).position().left
    if ($(this).find('.dropdown-menu').hasClass('no-align-left')) {
      return
    }
    $(this).find('.dropdown-menu').attr('style', `left: -${positionLeft}px`)
  })

  const loginState = readCookie('Cust')
  if (loginState !== '') {
    if ($(window).width() < 768 ) {
      $('.navbar .member.visible-xs .logout').removeClass('hidden')
    }
    else {
      $('.navbar-nav .member.hidden-xs .logout').removeClass('hidden')
    }
  }
}
