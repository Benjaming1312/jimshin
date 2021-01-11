// $(function () {
//     // owlcarouselfn('.banner .row .col-xs-12', false, true)
// })
// $('test').click((e) => {
//     return e ? true : false
// })
// import owl from 'owlCarousel.js'
// const owlFn = require('./owlCarousel')
const aosInit = require('./aos')
const gotop = require('./scrollTo')
// const {banner} = require('./banner/index.js')
// const navbar = require('./navbar/index.js')
// const idxOwl = require('./indexOwl/index.js')
// const qa = require('./qa')
// const neewsDetail = require('./newsDetail.js')
// const prodDetail = require('./productDetail/index.js')
// const about = require('./aboutus.js')
// const online_contents = require('./online-content.js')
// const mshop = require('./mshop.js')
// const prod_modal = require('./prod_modal.js')
// const shop = require('./shop.js')
// const search = require('./search.js')
// const footer = require('./footer.js')

const baiduInit = require('./baidu.js')

// const swiperJS = require('./swiper/index.js')
// const scollFn = require('./scrollTrigger/index.js')

$(function () {
  $('body').hide()
  setTimeout(() => {
    $('body').fadeIn(700)
    // particles
    particlesJS.load('particles-js', './dist/static/particles.json', function() {
    })

    baiduInit()
    aosInit()
  }, 1000)
  gotop()

  $(window).scroll(function () {
    setTimeout(() => {
      console.log('%c (／‵Д′)／~ ╧╧ scroll : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff')
      const top = $(window).scrollTop()
      const sectionTop = $('#section-1').offset().top
      if (top > sectionTop) {
        return
      }
      
      const top_sectionTop = top - sectionTop
      if (Math.abs(top_sectionTop) > 600) {
        $('.linear-gradient').attr('style', `opacity: 0;`)
        return
      }

      const calc_top_sectionTop_reverse = (1000 - Math.abs(top_sectionTop)) / 1000
      console.log('%c (／‵Д′)／~ ╧╧ abs_top_sectionTop : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', [calc_top_sectionTop_reverse, top_sectionTop])
      $('.linear-gradient').attr('style', `opacity: ${calc_top_sectionTop_reverse};`)
    })
  })

  // Nav scroll
  $('#myNavbar li a').click(function () {
    const target = $(this).data('scroll')
    console.log('%c (／‵Д′)／~ ╧╧  : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', target)
    scrollTo(target)

    if ($(window).width() < 768) {
      $('.navbar-toggle').click()
    }
  })

  // banner scroll
  $('.banner .scroll').click(function () {
    scrollTo('section-1')
  })

  // read more
  $('.section-1 .readmore a').click(function () {
    $('.section-1 .en-content').fadeIn(700)
  })
})

function scrollTo (target) {
  const top = $(`#${target}`).offset().top
  const navH = $('.navbar').innerHeight()
  const section1H = target === 'section-1' ? $(window).width() < 768 ? 30 : 30 : 0

  $('html, body').stop().animate({
    scrollTop: top - navH
  }, 1000)
}

// owlFn()

// $(function () {
//   es6()
// })
