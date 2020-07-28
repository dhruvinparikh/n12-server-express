'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.DApps, {foreignKey: 'd_app_uuid', as: 'DApps' })
    }
  };
  NotificationData.init({
    notificationUuid: {
      type: DataTypes.UUID,
      allowNull: false,
      field:"notification_uuid"
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    blockNumber: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
  }, {
    tableName: 'notificationdata',
    underscored: true, 
    sequelize,
    modelName: 'NotificationData',
    timestamps: true,
  });

  NotificationData.associate = (models) =>{
    NotificationData.belongsTo(models.Notifications, { foreignKey: 'notification_uuid' });
  }
  return NotificationData;
};