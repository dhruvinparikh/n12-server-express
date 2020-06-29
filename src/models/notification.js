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

var Notification = sequelize.define('Notifications',
  {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    name: { type: DataTypes.STRING },
    shortDesc: { type: DataTypes.STRING },
    longDesc: { type: DataTypes.STRING },
    dappUuid: { type: DataTypes.STRING }
  },
  {
    underscored: true
  }
);

module.exports = Notification;
