module.exports = function () {
  const textType = ['p', 'span', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'figcaption', 'li', 'div', 'small']
  const converter = OpenCC.Converter({ 
    from: 'tw',
    to: 'cn' 
  });
  const rootNode = document.documentElement;
  const HTMLConvertHandler = OpenCC.HTMLConverter(converter, rootNode, 'tw', 'cn');

  // Parse all text and set `lang` attribute
  for (let i = 0; i < textType.length; i++) {
    const dom = textType[i]
    $(`${dom}`).each(function () {
      const text = $(this).text().trim()
      if (text) {
        $(this).attr('lang', 'tw')
      }
    })
  }

  // Set default lang
  let cur_lang = getCookie('lang')
  if (!cur_lang) {
    cur_lang = 'tw'
    setCookie('lang', cur_lang, 1)
  }
  // Init `cn` lang
  if (cur_lang === 'cn') {
    HTMLConvertHandler.convert()
    cur_lang = 'cn'
    setCookie('lang', cur_lang, 1)
  }

  // bind click
  $('.navi .other li').each(function () {
    const class_lang = $(this).attr('class')
    $(this).find('a').click(function (e) {
      e.preventDefault()
      e.stopPropagation()
      
      // Same lang
      if (class_lang === getCookie('lang')) {
        return
      }
      
      switch (class_lang) {
        case 'cn':
          HTMLConvertHandler.convert()
          cur_lang = 'cn'
          setCookie('lang', cur_lang, 1)
          break;      
        case 'tw':
        default:
          HTMLConvertHandler.restore()
          cur_lang = 'tw'
          setCookie('lang', cur_lang, 1)
          break;
      }
    })
  })
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}