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
    const positionLeft = $(this).position().left
    if ($(this).find('.dropdown-menu').hasClass('no-align-left')) {
      return
    }
    console.log('%c (／‵Д′)／~ ╧╧ positionLeft : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', positionLeft)
    $(this).find('.dropdown-menu').attr('style', `left: -${positionLeft}px`)
  })

  const loginState = readCookie('Cust')
  console.log('%c (／‵Д′)／~ ╧╧ loginState : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', [loginState])
  if (loginState !== '') {
    if ($(window).width() < 768 ) {
      $('.navbar .member.visible-xs .logout').removeClass('hidden')
    }
    else {
      $('.navbar-nav .member.hidden-xs .logout').removeClass('hidden')
    }
  }
}
