var Express = require('express');
var router = Express.Router();
var LoginController = require('../controllers/loginController');

router.get('/', function(req, res, next) {
    let loginController = new LoginController(req, res, next);
    loginController.index();
});


router.post('/', function(req, res, next) {
    let loginController = new LoginController(req, res, next);
    loginController.login();
});

module.exports = router;