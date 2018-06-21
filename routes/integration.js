const Express = require('express');
const Router = Express.Router();
const LoginController = require('../controllers/loginController');
const Email = require('../configuration/emailConf');
const Path = require('path');
const HbsEmail = require('nodemailer-express-handlebars');


Router.get('/', (req, res, next) => {
    res.status(200).json("Integración");
});

Router.get('/login', (req, res, next) => {
    let loginController = new LoginController(req, res, next);
    loginController.index();
});

Router.post('/login', (req, res, next) => {
    let loginController = new LoginController(req, res, next);
    loginController.login();
});

Router.get('/email', (req, res, next) => {


    Email.transporter.use('compile', HbsEmail({
        viewEngine: 'hbs',
        extName: '.hbs',
        viewPath: Path.join(__dirname, '../views/emails')
    }));
    let message = {
        to: 'xavi@geekshubs.com',
        subject: 'Email de prueba',
        template: 'email',
        context: {
            text: 'Enviamos una prueba por handlebars'
        },
        attachments: [{
            filename: 'xavi.jpeg',
            path: __dirname + '/../public/images/xavi.jpeg',
            cid: 'imagen'
        }]
    };
    Email.transporter.sendMail(message, (error, info) => {
        if (error) {
            res.status(500).send(error, message);
            return
        }
        Email.transporter.close();
        res.status(200).send('Respuesta "%s"' + info.response);
    });
})

module.exports = Router;