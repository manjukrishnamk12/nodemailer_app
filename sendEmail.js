require('dotenv').config();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});


const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.TO_EMAIL,
  subject: 'Hello from nodemailer',
  text: 'Hey there, this is a test email!'
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
