module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
      'users',
      [
        {
          user_uuid: '72cdae0a-cfe7-11e9-bb65-2a2ae2dbcce4',
          username: 'cpatel',
          password: 'cpt123',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    ),
  
    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
  };
  