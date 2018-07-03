const Controller = require('./controller');

class homeController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

    index() {
        if (this.req.session.username) {
            this.res.render('index', {
                title: 'Home',
                username: this.req.session.username
            });
        } else {
            this.res.render('index', {
                title: 'Home'
            });
        }

    }
}

module.exports = homeController;