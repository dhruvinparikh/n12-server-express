'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('notificationdata', {
      notification_uuid: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
      },
      data: {
        allowNull: true,
        type: Sequelize.JSONB,
      },
      block_number: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('NotificationData');
  }
};