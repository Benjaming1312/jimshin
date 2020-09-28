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

      setTimeout(() => {
        scrollContent(href)
      }, 500)
    }
    

    $(this).click(function (e) {
      e.preventDefault()
      e.stopPropagation()

      $('aside.col-sm-2 a.active').removeClass('active')
      $(this).addClass('active')

      scrollContent(href)
    })
  })
}

function scrollContent (href) {
  const navH = $('.navbar').innerHeight()
  const top = $(href).offset().top - navH - 100

  $('html, body').animate({
    scrollTop: top
  }, 1000)

}