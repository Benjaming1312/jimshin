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
const navbar = require('./navbar/index.js')
const idxOwl = require('./indexOwl/index.js')
const qa = require('./qa')
const neewsDetail = require('./newsDetail.js')
const prodDetail = require('./productDetail/index.js')
const about = require('./aboutus.js')
const online_contents = require('./online-content.js')
const mshop = require('./mshop.js')
const prod_modal = require('./prod_modal.js')
const shop = require('./shop.js')
const search = require('./search.js')
const footer = require('./footer.js')

// const swiperJS = require('./swiper/index.js')
// const scollFn = require('./scrollTrigger/index.js')
$('body').hide()

$(function () {
  setTimeout(() => {
    navbar()
    // banner()
    idxOwl()
    qa()
    neewsDetail()
    prodDetail()
    about()
    online_contents()
    prod_modal()
    shop()
    mshop()
    search()
    footer()
    $('body').show()
  })
  aosInit()
  gotop()
})


// owlFn()

// $(function () {
//   es6()
// })
