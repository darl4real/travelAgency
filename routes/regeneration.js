const Express = require('express');
const Router = Express.Router();
const IdentificacionService = require('../service/identificationService');
const SecureService = require('../service/secureService');

Router.get('/hash/:hash', (req, res, next) => {
    console.log("Entra en regeneration ->" + req.params.hash);
    res.send(200);
});

Router.get('/uid', (req, res, next) => {
    let identificacionService = new IdentificacionService();
    console.log("Entra en UID ->" +
        identificacionService.getUUIDD(1, 3));
    res.send(200);
});

Router.get('/encrypt/:pass', (req, res, next) => {
    let pass = req.params.pass;
    let secureService = new SecureService();
    let encryptpass = secureService.encryptPass(pass);
    console.log("Pass encriptada ->" +
        encryptpass
    );
    console.log("Pass : " + pass + "Pass Encrypt: " +
        encryptpass + " Resultado ->" +
        secureService.comparePass(pass, encryptpass)
    );
    res.send(200);
});

module.exports = Router;