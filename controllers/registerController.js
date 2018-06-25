const Controller = require('./controller');

const UserModel = require('../models/users');
class registerController extends Controller

{

    constructor(req, res, next)

    {

        super(req, res, next)

    }
    login()

    {

        let username = this.req.body.uname;

        let pass = this.req.body.psw;

        console.log(typeof(pass));

        let userModel = new UserModel();

        userModel.findUser(username, (info) => {
            if (info.length === 0) {

                this.req.flash('info', 'El usuario no existe');

                this.index();

            } else {
                console.log(JSON.stringify(info));
                if (pass === info[0].password) {

                    this.index();
                } else {

                    this.req.flash('info', 'El pass es incorrecto');

                    this.index();

                }

            }
        })
    }
    index()

    {

        let info = this.req.flash('info');

        if (info == "")

        {

            console.log(" NO Existe info");

            this.res.render('register',

                {
                    title: 'register',
                    layout: 'layout2'
                });

        } else {

            console.log("Existe info");
            this.res.render('register',

                {
                    title: 'register',
                    layout: 'layout2',
                    info: info
                });

            info = "";

        }

    }

    register() {
        // let a = this.req.body.username; 
        //let b = password;
        // let userModel = new UserModel();
        //usermodel.findUser
        //usermodel.findEmail
        //usermodel.register(fullname, username, email, password, (info)=>{

        //})

        let username = this.req.body.username;
        let password = this.req.body.password;
        let fullName = this.req.body.fullName;
        let email = this.req.body.email;
        let userModel = new UserModel();
        // userModel.findUser
        console.log('Usuario ->' + fullName);

        userModel.register(username, email, password, fullName, (info) => {
            console.log(info)
        })


        this.res.redirect('/login');
    }
}
module.exports = registerController;