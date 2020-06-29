/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          user_id: '4cdaa0b5-af31-4e2d-affc-053496efdedf',
          access_token: 'xxx-xxx-xxx',
          username: 'john',
          password: 'john123',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 'e4faa0b5-af31-4e2d-affc-053496efabcd',
          access_token: 'xxx-xxx-xxx',
          username: 'kpatel',
          password: 'kush123',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 'abcda0b5-af31-4e2d-affc-053496efacef',
          access_token: 'xxx-xxx-xxx',
          username: 'cpatel',
          password: 'cpt123',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('users', null, {})
};
