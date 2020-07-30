module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('notificationdata', [
      {
        notification_uuid: '00000001-2c32-4564-8d54-e00d4001b744',
        created_at: new Date(),
        updated_at: new Date(),
        data: JSON.stringify({foo:"bar"}),
        block_number: 1234
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('notificationdata', null, {});
  }
};