const is = require('./is')

module.exports = function () {
  if (!is('.page.qa')) {
    return
  }

  const url = window.location.href
  $('aside.col-sm-2 a').each(function () {
    const href = $(this).attr('href')
    if (!href) {
      return
    }

    if (url.indexOf(href) >= 0) {
      $(this).addClass('active')
    }
  })
}