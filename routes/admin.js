var express = require('express');
var router = express.Router();
var HomeController = require('../controllers/homeController');
const UploadService = require('../service/uploadService');
let uploadService = new UploadService();
let upload = uploadService.up();

let AdminController = require('../controllers/adminController');

router.get('/', function(req, res, next) {
    if (req.session.admin) {
        let homeController = new HomeController(req, res, next);
        homeController.getInfo();
    } else {
        res.redirect('/')
    }
});

router.post('/', function(req, res, next) {
    let homeController = new HomeController(req, res, next);
    homeController.getInfo();
});

router.post('/anadir', function(req, res, next) {
    res.render('anadir', {
        title: 'Añadir',
        layout: 'layoutAdmin'
    })
});
router.post('/anadir/viajes', upload.single('file'), function(req, res, next) {
    //let file = req.file;
    //console.log(req.file);
    //console.log('/'+file.destination+'/'+file.filename)
    let adminController = new AdminController(req, res, next);
    adminController.añadeViaje();
    res.redirect('/admin')
});


router.post('/modificar', function(req, res, next) {
    res.render('modificar', {
        title: 'Modificar',
        layout: 'layoutAdmin'
    })
});

router.get('/modificar/:id', function(req, res, next) {
    //console.log(req.params.id)
    let adminController = new AdminController(req, res, next);
    adminController.busquedaDeId(req.params.id);


});

router.get('/elim/:id', function(req, res, next) {
    //console.log(req.params.id)
    let adminController = new AdminController(req, res, next);
    adminController.eliminaPorId(req.params.id);
});

router.post('/modificar/viajes', upload.single('file'), function(req, res, next) {
    let adminController = new AdminController(req, res, next);
    adminController.modificaViajes();
    res.redirect('/admin');
});

router.post('/upload', upload.single('file'), (req, res, next) => {
    console.log(req.file);
    res.json(req.file);
})

module.exports = router;