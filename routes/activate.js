const Express = require('express');
const Router = Express.Router();

Router.get('/:hash', (req, res, next) => {
    let hash = req.params.hash;
    console.log(hash)
})

module.exports = Router;