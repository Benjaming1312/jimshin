module.exports = function (className, options) {
  return new Promise(resolve => {
    scrollFunction(specifiedTarget(className), options)
  })
}

function scrollFunction (reveal, options = {}) {
  reveal.forEach((el, i) => {
    const oriOptions = {
      scrollTrigger: {
        trigger: el,
        // toggleActions: 'play none none none', // once
        once: true,
        start: 'top 90%',
        end: 'top 20%',
        markers: true // debug flag
      },
      opacity: 0,
      x: 100,
      duration: 1,
      transformOrigin:  'left center',
      ease: 'power1'
    }

    const templateOpts = _.defaultsDeep(_.cloneDeep(options), oriOptions)

    gsap.from(el, templateOpts)
  })
}

function specifiedTarget (className) {
  return gsap.utils.toArray(className)
}