const is = require('./is')

module.exports  = function () {
  if (!(is('#modal') && is('.module-ptlist'))) {
    return
  }

  $('.module-ptlist').addClass('modal-page')

  $('.d-item').each(function () {
    
    $(this).click(function () {
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
}