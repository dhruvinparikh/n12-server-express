/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'permissions',
      [
        {
          permission_id: '870aa0b5-af31-4e2d-affc-053496efd83e',
          name: 'view',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          permission_id: '222aa0b5-af31-4e2d-affc-053496efd83e',
          name: 'edit',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('permissions', null, {})
};
