const is = require('./is')

module.exports = function () {
  if (!is('.news-detail')) {
    return
  }

  $('.main').addClass('news-detail')
}