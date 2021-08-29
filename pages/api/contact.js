export default function handleRequest(req, res) {

  let nodemailer = require('nodemailer');

  console.log(req.body)

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'astritarsenis@gmail.com',
      pass: 'astrit12#$'
    },
    secure: true
  })


  const mailData = {
    from: 'astritarsenis@gmail.com',
    to: 'samsubas01@gmail.com',
    subject: 'test subject',
    text: 'test text',
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
      
  })

  res.status(200)
}