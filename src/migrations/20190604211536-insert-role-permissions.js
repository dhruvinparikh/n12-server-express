/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'permission_roles',
      [
        {
          permission_id: '870aa0b5-af31-4e2d-affc-053496efd83e',
          role_id: '870aa0b5-af31-efcd-affc-053496efd83e',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          permission_id: '222aa0b5-af31-4e2d-affc-053496efd83e',
          role_id: '870aa0b5-af31-efcd-affc-053496efd83e',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          permission_id: '870aa0b5-af31-4e2d-affc-053496efd83e',
          role_id: '870bb0b5-af31-efcd-affc-053496efd83e',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('permission_roles', null, {})
};
