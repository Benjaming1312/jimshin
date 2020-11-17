const is = require('./is')

module.exports  = function () {
  if (!(is('#modal') && is('.module-ptlist'))) {
    return
  }

  $('.module-ptlist').addClass('modal-page')
  $('.module-cglist').addClass('modal-page')

  $('.d-item').each(function () {
    
    $(this).click(function (e) {
      e.stopPropagation()
      e.preventDefault()
      
      const imgUrl = $(this).find('.d-img img').attr('src')
      const title = $(this).find('.prod-info .title').text()
      $('#modal .modal-header h4').text(title)
      $('#modal .modal-body .row .img').remove()
      $('#modal .modal-body .row .text').remove()

      $('#modal .modal-body .row').append(`<div class="col-sm-6 col-xs-12 img"><img class="img-responsive" src="${imgUrl}"></div>`)
      $('#modal .modal-body .row').append(`<div class="col-sm-6 col-xs-12 text"></div>`)

      $(this).find('.prod-info').clone().appendTo($('#modal .modal-body .row .text'))

      $('#modal').modal('show')
    })
  })

  $('.scrollTo a').click(function () {
    scrollTo('prod-banner')
  })
}

function scrollTo (target) {
  const top = $(`.${target}`).offset().top
  const navH = $('.navbar').innerHeight()
  const section1H = target === 'section-1' ? $(window).width() < 768 ? 30 : 130 : 0

  $('html, body').stop().animate({
    scrollTop: top - navH - section1H
  }, 1000)
}