module.exports = function () {
  setTimeout(() => {
    $('body').fadeIn()

    setTimeout(() => {
      AOS.init({
        once: true,
        duration: 700
      })
    })
  }, 1000);
}