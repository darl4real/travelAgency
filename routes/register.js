var Express = require('express');
var router = Express.Router();
var RegisterController = require('../controllers/registerController');

router.get('/', function(req, res, next) {
    let registerController = new RegisterController(req, res, next);
    registerController.index();
});


router.post('/', function(req, res, next) {
    let registerController = new RegisterController(req, res, next);
    registerController.register();
});

module.exports = router;