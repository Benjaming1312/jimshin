const is = require('./is')

module.exports = function () {
  if (!is('.page_mobile_mecprod') && !is('.page_mobile_meccg')) {
    $('.navbar .formBS').remove()
    return
  }

  if ($(window).width() < 768) {
    $('.member.hidden-xs .formBS').remove()
    set_search_input()
    const left = $('.member.visible-xs .formBS').offset().left
    $('.member.visible-xs .formBS .search-input').attr('style', `left: -${left}px`)
  }
  else {
    $('.member.visible-xs .formBS').remove()
  }

  $('.input-group-btn .btn.svg.search-icon').click(function (e) {
    e.preventDefault()
    e.stopPropagation()
    $('.search-input').toggleClass('show')
  })
  
  $('#sch_key').on('keyup', function (e) {
    e.preventDefault()
    e.stopPropagation()
    if (e.keyCode === 13) {
      $(this).parents('.input-group').find('.input-submit').click()
    }
  })
}

function set_search_input () {
  const left = $('.member.visible-xs .formBS').offset().left
  if (left <= 0) {
    setTimeout(() => {
      set_search_input()
    }, 300)
  }
  else {
    $('.member.visible-xs .formBS .search-input').attr('style', `left: -${left}px`)
  }
}