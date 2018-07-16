var conn = require('../connections/mysqlconnection');

class AdminModel {

    showTravels(cb) {
        if (!conn) return cb("no se ha podido crear la conexion");
        const SQL = "SELECT * FROM travels WHERE active='1';";
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows);
        })
    }

    paintTable(cb) {
        if (!conn) return cb("no se ha podido crear la conexion");
        const SQL = "SELECT * FROM travels;";
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows);
        })
    }

    modifyTravelName(id, travel, cb) {
        if (!conn) return cb("no se ha podido crear la conexion");
        const SQL = `UPDATE travels set travel='${travel}' where id='${id}';`;
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows)
        })
    }

    modifyTravelPrecio(id, precio, cb) {
        if (!conn) return cb("no se ha podido crear la conexion");
        const SQL = `UPDATE travels set price='${precio}' where id='${id}';`;
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows)
        })
    }

    modifyTravelAhorro(id, ahorro, cb) {
        if (!conn) return cb("no se ha podido crear la conexion");
        const SQL = `UPDATE travels set ahorro='${ahorro}' where id='${id}';`;
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows)
        })
    }

    modifyTravelUrl(id, url, cb) {
        if (!conn) return cb("no se ha podido crear la conexion");
        const SQL = `UPDATE travels set urlfoto='${url}' where id='${id}';`;
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows)
        })
    }

    addTravel(travel, price, ahorro, url, cb) {
        if (!conn) return cb('No se ha podido crear la conexion');
        const SQL = `INSERT INTO travels(travel, price, ahorro, urlfoto) 
        VALUES ('${travel}','${price}','${ahorro}', '${url}');`;
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error)
            else return cb(rows);
        })
    }

    searchId(id, cb) {
        if (!conn) return cb("no se ha podido crear la conexion");
        const SQL = `SELECT active FROM travels where id = '${id}';`;
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows);
        })
    }

    changeActive(id, ac, cb) {
        if (!conn) return cb("no se ha podido crear la conexion");
        const SQL = `UPDATE travels set active='${ac}' where id='${id}';`;
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows);
        })
    }

    deleteId(id, cb) {
        if (!conn) return cb("no se ha podido crear la conexion");
        const SQL = `DELETE FROM travels WHERE id='${id}';`;
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows);
        })
    }

}

module.exports = AdminModel;