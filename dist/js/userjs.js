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
      setTimeout(function () {
        $('body').fadeIn();

        setTimeout(function () {
          AOS.init({
            once: true,
            duration: 700
          });
        });
      }, 1000);
    };
  }, {}], 2: [function (require, module, exports) {
    module.exports = function () {
      initMap(); //创建和初始化地图
    };

    //创建和初始化地图函数：
    function initMap() {
      if (!BMap) {
        console.log('%c (／‵Д′)／~ ╧╧ not BMap : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff');
        setTimeout(function () {
          initMap();
        }, 1000);
      } else {
        createMap(); //创建地图
        setMapEvent(); //设置地图事件
        addMapControl(); //向地图添加控件
      }
    }

    //创建地图函数：
    function createMap() {
      var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
      var point = new BMap.Point(121.361189, 31.165525); //定义一个中心点坐标
      map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
      window.map = map; //将map变量存储在全局
    }

    //地图事件设置函数：
    function setMapEvent() {
      map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
      map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
      map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
      map.enableKeyboard(); //启用键盘上下左右键移动地图
    }

    //地图控件添加函数：
    function addMapControl() {
      //向地图中添加缩放控件
      var ctrl_nav = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE });
      map.addControl(ctrl_nav);
      //向地图中添加缩略图控件
      var ctrl_ove = new BMap.OverviewMapControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1 });
      map.addControl(ctrl_ove);
      //向地图中添加比例尺控件
      var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
      map.addControl(ctrl_sca);
    }
  }, {}], 3: [function (require, module, exports) {
    // $(function () {
    //     // owlcarouselfn('.banner .row .col-xs-12', false, true)
    // })
    // $('test').click((e) => {
    //     return e ? true : false
    // })
    // import owl from 'owlCarousel.js'
    // const owlFn = require('./owlCarousel')
    var aosInit = require('./aos');
    var gotop = require('./scrollTo');
    // const {banner} = require('./banner/index.js')
    // const navbar = require('./navbar/index.js')
    // const idxOwl = require('./indexOwl/index.js')
    // const qa = require('./qa')
    // const neewsDetail = require('./newsDetail.js')
    // const prodDetail = require('./productDetail/index.js')
    // const about = require('./aboutus.js')
    // const online_contents = require('./online-content.js')
    // const mshop = require('./mshop.js')
    // const prod_modal = require('./prod_modal.js')
    // const shop = require('./shop.js')
    // const search = require('./search.js')
    // const footer = require('./footer.js')

    var baiduInit = require('./baidu.js');

    // const swiperJS = require('./swiper/index.js')
    // const scollFn = require('./scrollTrigger/index.js')

    $(function () {
      $('body').hide();
      setTimeout(function () {
        $('body').fadeIn(700);
        // particles
        particlesJS.load('particles-js', './dist/static/particles.json', function () {});

        baiduInit();
        aosInit();
      }, 5000);
      gotop();

      // Nav scroll
      $('#myNavbar li a').click(function () {
        var target = $(this).data('scroll');
        console.log('%c (／‵Д′)／~ ╧╧  : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', target);
        scrollTo(target);

        if ($(window).width() < 768) {
          $('.navbar-toggle').click();
        }
      });

      // banner scroll
      $('.banner .scroll').click(function () {
        scrollTo('section-1');
      });

      // read more
      $('.section-1 .readmore a').click(function () {
        $('.section-1 .en-content').fadeIn(700);
      });
    });

    function scrollTo(target) {
      var top = $("#" + target).offset().top;
      var navH = $('.navbar').innerHeight();
      var section1H = target === 'section-1' ? $(window).width() < 768 ? 30 : 30 : 0;

      $('html, body').stop().animate({
        scrollTop: top - navH
      }, 1000);
    }

    // owlFn()

    // $(function () {
    //   es6()
    // })
  }, { "./aos": 1, "./baidu.js": 2, "./scrollTo": 4 }], 4: [function (require, module, exports) {
    // $(function () {
    //     $('.gotop a').on('click', function () {
    //         $('html, body').animate({
    //             scrollTop: 0
    //         }, 1000)
    //     })
    //     $('.scroll').on('click', function () {
    //         var section1_top = $('.section_1').offset().top
    //         $('html, body').animate({
    //             scrollTop: section1_top
    //         }, 1000)
    //     })
    // })

    // function scrollFn (target) {
    //   console.warn('target', target)
    //   var top = $('#' + target).offset().top
    //   $('html, body').stop().animate({
    //     scrollTop: top - 100
    //   }, 1000)
    // }

    module.exports = function () {
      $('.gotop').on('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
      });
    };
  }, {}] }, {}, [3]);
//# sourceMappingURL=userjs.js.map
