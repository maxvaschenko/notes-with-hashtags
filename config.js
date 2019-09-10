const ip = require('ip');

module.exports = {
    client: {
        host: ip.address(),
        port: 44120
    }
};
