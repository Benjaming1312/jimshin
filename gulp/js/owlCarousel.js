module.exports = function () {
  const module = $(window).width() < 768 ? 'visible-xs' : 'hidden-xs'
  $(`.idx-banner.owl-carousel.${module}`).owlCarousel({
    items: 1,
    autoplay:true,
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
  })
}