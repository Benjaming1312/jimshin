const is = require('./is')

module.exports = function () {
  if (is('.page_mobileform') || // 聯絡我們
  is('.service') // 服務專區
  ) {
    console.log('%c (／‵Д′)／~ ╧╧  footer: ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff')
    $('.gotop-section').attr('style', 'margin-top: 0;')
  }
}