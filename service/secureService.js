const Bcrypt = require('bcrypt');

class secureService {
    encryptPass(pass) {
        return Bcrypt.hashSync(pass, 10);
    }

    comparePass(password, hash) {
        return Bcrypt.compareSync(password, hash);
    }
}

module.exports = secureService;