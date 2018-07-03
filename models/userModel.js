const Conn = require('../connections/mysqlconnection');

class usersModels {

    //Recuperar todos los usuarios
    fetchAll() {
        return new Promise((resolve, reject) => {
            if (!Conn) return reject("No existe conexión");
            let SQL = "SELECT * FROM users";
            Conn.query(SQL, (error, rows) => {
                if (error) return reject(error);
                else return resolve(rows);
            })
        })
    }

    getUser(username) {
        return new Promise((resolve, reject) => {
            if (!Conn) return reject("No existe conexión");
            let SQL = `SELECT * FROM users where username ='${username}';`;
            Conn.query(SQL, (error, rows) => {
                if (error) return reject(error);
                else return resolve(rows);
            })
        });
    };

    getUserByEmailOrUsername(email, username) {
        return new Promise((resolve, reject) => {
            if (!Conn) return reject("No existe conexión");
            let SQL = `SELECT * FROM users where username ='${username}' or email ='${email}';`
            Conn.query(SQL, (error, rows) => {
                if (error) return reject(error);
                else return resolve(rows);
            })
        })
    };

    insertUser(data) {
        return new Promise((resolve, reject) => {
            if (!Conn) return reject("No existe conexión");
            let SQL = `INSERT INTO users (username,email,pass,hash) values ('${data.username}', '${data.email}','${data.password}','${data.hash}');`;
            Conn.query(SQL, (error, rows) => {
                if (error) return reject(error);
                else return resolve(rows);
            })
        })
    }

    getUserByHash(hash) {
        return new Promise((resolve, reject) => {
            if (!Conn) return reject('No existe conexión');
            let SQL = `SELECT * FROM users WHERE hash = '${hash}';`;
            Conn.query(SQL, (error, rows) => {
                if (error) return reject(error);
                else return resolve(rows);
            })
        })
    };

    setActiveUser(hash) {
        return new Promise((resolve, reject) => {
            if (!Conn) return reject('No existe conexión');
            let SQL = `UPDATE users set active=1 , hash='' where hash='${hash}';`;
            Conn.query(SQL, (error, rows) => {
                if (error) return reject(error);
                else return resolve(rows);
            })
        })
    };




}

module.exports = usersModels;