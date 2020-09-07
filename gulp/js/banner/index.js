const is = require('../is')

function banner () {
  if (!is('.banner')) {
    return
  }

  const navHeight = calcNavHeight()
  $('.banner').attr('style', `margin-top: ${navHeight}px;`)
}

function calcNavHeight () {
  return $('nav.navbar').innerHeight()
}

module.exports = {
  banner, calcNavHeight
}