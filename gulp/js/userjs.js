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
$('body').hide()

$(function () {
  setTimeout(() => {
    $('body').show()

    baiduInit()
  })
  aosInit()
  gotop()

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
