"use strict";

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
      }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, f, f.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    module.exports = function () {
      var textType = ['p', 'span', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'figcaption', 'li', 'div', 'small'];
      var converter = OpenCC.Converter({
        from: 'tw',
        to: 'cn'
      });
      var rootNode = document.documentElement;
      var HTMLConvertHandler = OpenCC.HTMLConverter(converter, rootNode, 'tw', 'cn');

      // Parse all text and set `lang` attribute
      for (var i = 0; i < textType.length; i++) {
        var dom = textType[i];
        $("" + dom).each(function () {
          var text = $(this).text().trim();
          if (text) {
            $(this).attr('lang', 'tw');
          }
        });
      }

      // Set default lang
      var cur_lang = getCookie('lang');
      if (!cur_lang) {
        cur_lang = 'tw';
        setCookie('lang', cur_lang, 1);
      }
      // Init `cn` lang
      if (cur_lang === 'cn') {
        HTMLConvertHandler.convert();
        cur_lang = 'cn';
        setCookie('lang', cur_lang, 1);
      }

      // bind click
      $('.navi .other li').each(function () {
        var class_lang = $(this).attr('class');
        $(this).find('a').click(function (e) {
          e.preventDefault();
          e.stopPropagation();

          // Same lang
          if (class_lang === getCookie('lang')) {
            return;
          }

          switch (class_lang) {
            case 'cn':
              HTMLConvertHandler.convert();
              cur_lang = 'cn';
              setCookie('lang', cur_lang, 1);
              break;
            case 'tw':
            default:
              HTMLConvertHandler.restore();
              cur_lang = 'tw';
              setCookie('lang', cur_lang, 1);
              break;
          }
        });
      });
    };

    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
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
  }, {}], 2: [function (require, module, exports) {
    var util = require('./util');
    var idx_banner = require('./owlCarousel');
    var convert = require('./covert_cc');

    $(function () {
      util();
      idx_banner();
      convert();
    });
  }, { "./covert_cc": 1, "./owlCarousel": 3, "./util": 4 }], 3: [function (require, module, exports) {
    module.exports = function () {
      var module = $(window).width() < 768 ? 'visible-xs' : 'hidden-xs';
      $(".idx-banner.owl-carousel." + module).owlCarousel({
        items: 1,
        autoplay: true,
        nav: false,
        dots: true,
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        navText: [],
        smartSpeed: 1500,
        autoplayHoverPause: false
      });
    };
  }, {}], 4: [function (require, module, exports) {
    // JavaScript Document
    module.exports = function () {
      $(function () {
        AOS.init();
        set_member();
        set_mobile_navi();
        set_menu_toggle();
        set_header();
        set_go_top();
        set_swiper();
      });
    };
    function set_swiper() {
      if ($('.brand_slider').length > 0) {
        var swiper = new Swiper('.brand_slider .swiper-container', {
          spaceBetween: 0,
          loop: true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            300: {
              slidesPerView: 2

            },

            499: {
              slidesPerView: 3

            },

            999: {
              slidesPerView: 4
            },

            1280: {
              slidesPerView: 5
            },

            1360: {
              slidesPerView: 6
            }

          }
        });
      }
    }
    function set_member() {
      var a_link_html = '';
      $('.header_menu .hdmenu li').each(function (index, element) {
        a_link_html = a_link_html + $(this).html();
      });
      $('.header_div .outer .nav_menu ul li.member').html(a_link_html);
    }
    function set_mobile_navi() {
      if ($('.mobile_navi').length > 0) {
        var navi_html = $('.header_div .outer .nav_menu ul').html();
        $('.mobile_navi .navi_ul').html(navi_html);
        $('.mobile_navi .navi_ul li.other').prependTo('.mobile_navi .navi_ul');
        $('.mobile_navi .navi_ul li.other ul li.cart a').appendTo('.mobile_navi .navi_ul li.other ul li.member');
      }
      $('.mobile_navi ul li a').click(function () {
        if ($(this).attr('href').indexOf('#') > -1) {
          $('.toggle_btn').trigger('click');
        }
      });
      $('.mobile_navi .navi_ul li a.had_submenu').click(function (event) {
        event.preventDefault();
        $(this).parent().toggleClass('active');
      });
    }
    function set_menu_toggle() {
      $('.toggle_btn').insertAfter('#overlay');
      $('.toggle_btn').click(function (e) {
        e.preventDefault()
        e.stopPropagation()
        $(this).toggleClass('active');
        $('#navbar').toggleClass('collapse');
        $('body').toggleClass('mobile_nav_active');
        $('#mobile-body-overly').toggle();
      });
    }
    function set_go_top() {

      var iScrollPos = 0;

      $(window).scroll(function () {
        var iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > iScrollPos) {
          //Scrolling Down
          $('.gotop').addClass('show');
        } else {
          $('.gotop').removeClass('show');
        }
        iScrollPos = iCurScrollPos;
      });
      $('.gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
      });
    }
    function set_header() {

      var hei = $('.header_div').height();
      var iScrollPos = 0;
      $(window).scroll(function () {
        var iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > 100) {
          $('.header_div').addClass('scroll');
          $('body').addClass('scroll');
        } else {
          $('.header_div').removeClass('scroll');
          $('body').removeClass('scroll');
        }
        iScrollPos = iCurScrollPos;
      });
    }
  }, {}] }, {}, [2]);
//# sourceMappingURL=userjs.js.map
