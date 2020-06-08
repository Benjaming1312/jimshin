module.exports = function () {
  setTimeout(() => {
    $('body').fadeIn()

    setTimeout(() => {
      AOS.init({
        once: true
      })
    })
  }, 1000);
}