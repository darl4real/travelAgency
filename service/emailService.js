const Hbs = require('nodemailer-express-handlebars');
const Path = require('path');
const Email = require('../configuration/emailConf');


class emailService {

    sendRegisterEmail(data) {
        Email.transporter.use('compile', Hbs({
            viewEngine: 'hbs',
            extName: '.hbs',
            viewPath: Path.join(__dirname, '../views/email-templates')
        }));
        let message = {
            to: data.email,
            subject: 'Registro',
            template: 'emailregister',
            context: {
                username: data.username,
                hash: data.hash
            }
        }
        Email.transporter.sendMail(message, (error, info) => {
            if (error) {
                return console.log('Error' + error);

            }
            Email.transporter.close();
            return console.log("Email enviado");
        })
    }

}

module.exports = emailService;