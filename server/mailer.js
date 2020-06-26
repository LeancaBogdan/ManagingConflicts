require('dotenv').config()

const nodemailer = require('nodemailer')

const sendEmail = (email, subject, message) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
  })

  const mail = {
    from: "scenariideconflict@gmail.com ",
    to: email,
    subject: subject,
    text: message
  }

  transporter.sendMail(mail, function(error, response) {
      if(error) {
          console.log(error)
      } else {
          console.log( " email sent successfully")
      }
      transporter.close();
  })
}

module.exports = { sendEmail }
