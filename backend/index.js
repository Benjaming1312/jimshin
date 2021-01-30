const nodemailer = require('nodemailer')
const express = require('express')
const CONFIG = require('./config')
const fs = require('fs')

const app = express()

const mailTransport = nodemailer.createTransport({
  host: CONFIG.host,
  secureConnecton: true,
  port: CONFIG.port,
  auth: {
    user: CONFIG.auth.user,
    pass: CONFIG.auth.pass
  }
})

mailTransport.verify(function (err, suc) {
  if (err) {
    console.log('\x1b[46m\x1b[37m (／‵Д′)／~ ╧╧  verify error:', err)
  }
  else {
    console.log('\x1b[46m\x1b[37m (／‵Д′)／~ ╧╧  success:', suc)
  }
})

const mainPage = fs.readFileSync('./index.html', 'utf8')

app.use('/dist', express.static(__dirname + '/dist'))
app.use(express.json()) 
app.use (express.urlencoded({extended: false}))

app.get('/', function (req,res) {
  res.send(mainPage)
})

app.post('/send', function (req, res) {
  if (req) {
    send(req.body.data)
    res.send('ok')
  }
})

app.listen(process.env.PORT || CONFIG.routePort, () => {
  // console.log('mail server run at :', CONFIG.routePort)
})


function send(data) {
  const temp = {
    from: CONFIG.mailFrom,
    to: CONFIG.mailTo,
    subject: CONFIG.mailSubject,
    html: `<p>姓名 Name: &nbsp;&nbsp;${data.name}</p><p>电话 Number: &nbsp;&nbsp;<a href="tel:${data.number}">${data.number}</a></p><p>电邮 E-mail: &nbsp;&nbsp;${data.mail}</p><p>留言 Messages: <br>${data.message.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>`
  }

  mailTransport.sendMail(temp, function (err) {
    if (err) {
      console.log('send mail error  :', err)
    }
    console.log('\x1b[46m\x1b[37m (／‵Д′)／~ ╧╧  send done:')
  })
}
