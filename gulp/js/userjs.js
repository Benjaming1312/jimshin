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
const swiperJS = require('./swiper/index.js')

$(function () {
  aosInit()
  // owlFn()
  gotop()
  swiperJS()
})

// owlFn()

// $(function () {
//   es6()
// })
