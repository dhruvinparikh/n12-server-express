/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'user_roles',
      [
        {
          user_id: 'abcda0b5-af31-4e2d-affc-053496efacef',
          role_id: '870aa0b5-af31-efcd-affc-053496efd83e',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 'e4faa0b5-af31-4e2d-affc-053496efabcd',
          role_id: '870bb0b5-af31-efcd-affc-053496efd83e',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: '4cdaa0b5-af31-4e2d-affc-053496efdedf',
          role_id: '870bb0b5-af31-efcd-affc-053496efd83e',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('user_roles', null, {})
};
