/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'roles',
      [
        {
          name: 'Admin',
          role_id: '870aa0b5-af31-efcd-affc-053496efd83e',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'User',
          role_id: '870bb0b5-af31-efcd-affc-053496efd83e',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('roles', null, {})
};
