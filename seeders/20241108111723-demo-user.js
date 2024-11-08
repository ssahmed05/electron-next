'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'john_doe',
        email: 'john.doe@example.com',
        password: 'password123', // In a real app, you'd hash passwords
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'jane_smith',
        email: 'jane.smith@example.com',
        password: 'password123', // In a real app, you'd hash passwords
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'admin_user',
        email: 'admin@example.com',
        password: 'adminpassword', // In a real app, you'd hash passwords
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
