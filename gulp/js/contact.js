module.exports = function () {
  const app = new Vue({
    el: '#form',
    data: {
      loading: false,
      form: {
        name: '',
        number: '',
        email: '',
        message: '',
      },
      warning: {
        name: false,
        number: false,
        email: false,
        message: false,
      }
    },
    methods: {
      submit: function () {
        if (this.loading) {
          // now loading
          return
        }

        this.loading = true
        const formKeys = Object.keys(this.form)
        for (let i = 0 ; i < formKeys.length; i++) {
          const key = formKeys[i]
          if (!this.form[key]) {
            this.warning[key] = true
          }
          else {
            this.warning[key] = false
          }
        }
        // Any error
        if (Object.values(this.warning).some(err => err)) {
          console.log('%c (／‵Д′)／~ ╧╧ any error : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', Object.entries(this.warning))
          return
        }

        const data = {
          name: this.form.name,
          number: this.form.number,
          mail: this.form.email,
          message: this.form.message
        }


        axios.post('/send', {data})
        .then(() => {
          console.log('send mail succuss')
          setTimeout(() => {
            this.loading = false
          }, 5000);
        })
        .catch(e => {
          console.error(e)
          setTimeout(() => {
            this.loading = false
          }, 5000);
        })
      }
    },
  })
}