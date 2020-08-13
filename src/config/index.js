require('dotenv').config() 

const email = require("./email.config");
const api = require('./api.config');
const db = require('./db.config');
const apollo = require('./apollo.config')
// Perform validation
email.validate({ allowed: "strict" });
api.validate({ allowed: "strict" });
db.validate({ allowed : "strict" });
apollo.validate({ allowed: "strict" });

module.exports = { email, api, db, apollo };
