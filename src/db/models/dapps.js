'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DApps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.Notifications, { as: "Notifications" });
    }
  };
  DApps.init({
    uuid: {
      type: DataTypes.UUID, 
      primaryKey: true, 
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    logoUrl: {
      type: DataTypes.STRING, 
      allowNull: false
    }
  }, {
    tableName: 'dapps',
    underscored: true, 
    sequelize,
    modelName: 'DApps',
  });

  DApps.associate = (models) =>{
    DApps.hasMany(models.Notifications, { as: "Notifications" });
  }
  return DApps;
};