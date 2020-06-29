const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
  config.CFG_DB_NAME,
  config.CFG_DB_USER,
  config.CFG_DB_PASSWORD,
  {
    dialect: config.CFG_DB_DIALECT,
    host: config.CFG_DB_HOST
  }
);

var Dapp = sequelize.define('Dapps',
  {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    description: { type: DataTypes.STRING },
    logoUrl: { type: DataTypes.STRING }
  },
  {
    underscored: true
  }
);

module.exports = Dapp;
