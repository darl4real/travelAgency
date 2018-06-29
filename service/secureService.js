const Bcrypt = require('bcrypt');

class secureService {
    encryptPass(pass) {
        return Bcrypt.hashSync(pass, 10);
    }
}

module.exports = secureService;