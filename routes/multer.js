const Express = require('express');
const Router = Express.Router();
const Multer = require('multer');

const storage = Multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }

});

const upload = Multer({ storage });

Router.get('/', (req, res, next) => {
    res.render('uploads', {
        title: 'Subida de archivos'
    });
});

Router.post('/upload', upload.single('file'), (req, res, next) => {
    console.log(req.file);
    res.json(req.file);
})
module.exports = Router;