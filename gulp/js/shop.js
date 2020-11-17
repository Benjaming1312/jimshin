const is = require('./is')

module.exports = function () {
  if (!is('.shop-list')) {
    return
  }

  $('.module-cglist').appendTo($('.shop-list .append'))
  $('.module-ptlist').appendTo($('.shop-list .append'))

  if ($(window).width() < 768) {
    $('#pageptlist .d-item').each(function () {
      $(this).appendTo($('.row.listBS').eq(0))
    })
  }
}