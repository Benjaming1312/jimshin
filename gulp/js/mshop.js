const is = require('./is')

module.exports = function () {
  if (is('.module-rcglist')) {
    assignAOS()
    d_item_click()
  }

  // $('.main').addClass('news-detail')
}

function assignAOS () {
  const dur = 1000
  $('.d-item').attr('data-aos', 'fade-up')
  $('.d-item').attr('data-aos-duration', dur)
}

function d_item_click () {
  $('.d-item').each(function () {
    const url = $(this).find('a').attr('href')
    $(this).click(function () {
      window.location.href = url
    })
  })
}