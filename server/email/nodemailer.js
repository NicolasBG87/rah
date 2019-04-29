const nodemailer = require("nodemailer");
const keys = require("../config/keys.dev");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: keys.nodemailer.user,
    pass: keys.nodemailer.pass
  }
});

module.exports = (to, subject, html) => {
  return transporter.sendMail({
    from: '"Remote Auction House" <admin@rah.com>',
    to,
    subject,
    html
  });
};
