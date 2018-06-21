const email = require('nodemailer');

var mailer = {};
mailer.transporter = email.createTransport({
    service: 'Gmail',
    auth: {
        user: 'darlingtonayakazi@gmail.com',
        pass: '5050Dienyefa'
    },
}, {
    from: 'darlingtonayakazi@gmail.com',
    headers: {}
})


module.exports = mailer;