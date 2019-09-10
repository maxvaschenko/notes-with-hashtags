const ip = require('ip');

module.exports = {
    client: {
        host: ip.address(),
        port: 44120
    },
    server: {
      endpoint: 'https://gentle-escarpment-19443.herokuapp.com'
    }
};
