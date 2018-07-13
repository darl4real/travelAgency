const Controller = require('./controller');
const UserModel = require('../models/userModel');
const UsModel = require('../models/users');
const IdentService = require('../service/identService');
const SecureService = require('../service/secureService');
const EmailService = require('../service/emailService');
class registerController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }

    index() {
        if (this.req.flash.error) {
            console.log(this.req.flash.error);
            this.res.render('register', { error: this.req.flash.error });
        }
        this.res.render('register');
    }



    register() {;
        // let username = this.req.body.username;
        // let password = this.req.body.password;
        // let fullName = this.req.body.fullName;
        // let email = this.req.body.email;
        let userModel = new UserModel();

        let registerData = this.req.body;





        userModel.getUserByEmailOrUsername(registerData.email, registerData.username)
            .then((data) => {
                if (data.length === 0) {
                    let identService = new IdentService();
                    registerData.hash = identService.getUUIDD(3, 4);
                    let secureService = new SecureService();
                    registerData.password = secureService.encryptPass(registerData.password);
                    //console.log(registerData)
                    let usModel = new UsModel();
                    usModel.register(registerData.username, registerData.email, registerData.password, registerData.fullName, registerData.hash, (info) => {
                        console.log(info)
                    });
                    let emailService = new EmailService();
                    emailService.sendRegisterEmail(registerData);
                    this.res.redirect('/login');

                } else {
                    this.req.flash.error = "El username o el email ya esta en uso";
                    this.res.redirect('/register');
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

module.exports = registerController;