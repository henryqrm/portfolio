'use strict';
var nodemailer = require('nodemailer');
var express = require('express');

var router = express.Router();
/*
Here we are configuring our SMTP Server details.
STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport("SMTP", {
  service: "Gmail",
  auth: {
    user: "henryqrm@gmail.com",
    pass: "Henryq3,14"
  }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/
router
  .post('/', function(req, res) {
    var mailOptions = {
      to: req.query.email,
      subject: '[PORTIFÓLIO] ' + req.query.name,
      text: req.query.message
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response) {
      if (error) {
        console.log(error);
        res.end("error");
      } else {
        console.log("Message sent: " + response.message);
        res.end("sent");
      }
    });
  });
  module.exports = router;
