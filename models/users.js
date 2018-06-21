let conn = require('../connections/mysqlconnection');

class UserModel {
    getAll(cb) {
        if (!conn) return cb("No se ha podido crear la conexión");
        const SQL = "SELECT * FROM users;";
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows);
        })
    }

    findUser(username, cb) {
        if (!conn) return cb("No se ha podido crear la conexión");
        const SQL = "SELECT * FROM users WHERE username LIKE '%" + username + "%';";
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows);
        })
    }
    findMail(email, cb) {

    }

    register(userName, email, pass, cb) {

    }

}

module.exports = UserModel;