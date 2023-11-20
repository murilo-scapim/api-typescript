import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('books', [
      {
        title: 'Clean Code',
        price: 80.00,
      },
      {
        title: 'Aprendendo TypeScript',
        price: 100.00,
      },
      {
        title: 'Java para leigos',
        price: 75.00,
      },
      {
        title: 'Aprendendo Docker',
        price: 150.00,
      },
    ], {});
  },
  
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('books', {});
  }
};