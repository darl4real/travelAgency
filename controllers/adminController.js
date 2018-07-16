var controller = require('./controller');
var AdminModel = require('../models/admin');

class adminController extends controller {
    constructor(req, res, next) {
        super(req, res, next);
    }

    modificaViajes() {
        let id = this.req.body.id;
        let travel = this.req.body.travel;
        let price = this.req.body.price;
        let ahorro = this.req.body.ahorro;
        let file = this.req.file;
        let dest = '/img/';
        let url = dest + file.filename;
        console.log(id + ' ' + travel + ' ' + price + ' ' + url + ' ' + ahorro)
        console.log(typeof(id))
        console.log(typeof(url))
        let adminModel = new AdminModel();
        if (travel !== '') {
            adminModel.modifyTravelName(id, travel, (info) => {
                console.log(info);
            })
        }
        if (price !== '') {
            adminModel.modifyTravelPrecio(id, price, (info) => {
                console.log(info)
            })
        }
        if (ahorro !== '') {
            adminModel.modifyTravelAhorro(id, ahorro, (info) => {
                console.log(info)
            })
        }
        if (url !== '') {
            adminModel.modifyTravelUrl(id, url, (info) => {
                console.log(info)
            })
        }
    }

    añadeViaje() {
        let travel = this.req.body.travel;
        let price = this.req.body.price;
        let ahorro = this.req.body.ahorro;
        let file = this.req.file;
        console.log(file)
        let dest = '/img/';
        let url = dest + file.filename;

        let adminModel = new AdminModel();
        adminModel.addTravel(travel, price, ahorro, url, (info) => {
            console.log(info);
        })
    }

    busquedaDeId(id) {
        let adminModel = new AdminModel();
        adminModel.searchId(id, (info) => {
            console.log(typeof(info[0].active));
            //let info2 = !(info);
            //console.log(info2)
            if (info[0].active == 1) {
                adminModel.changeActive(id, info[0].active - 1, (info2) => {
                    console.log(info2)
                })
            } else if (info[0].active == 0) {
                adminModel.changeActive(id, info[0].active + 1, (info2) => {
                    console.log(info2)
                })
            }
            this.res.redirect('/admin');
        })
    }

    eliminaPorId(id) {
        let adminModel = new AdminModel();
        adminModel.deleteId(id, (info) => {
            console.log(info);
        })
        this.res.redirect('/admin');
    }
}

module.exports = adminController;