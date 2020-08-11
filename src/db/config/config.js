require('dotenv').config();
const config = require('../../config');
const configJSON = config.db.getConfigJSON();
module.exports = configJSON;
