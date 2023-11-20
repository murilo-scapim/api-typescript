import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('books', [
      {
        title: 'Clean Code',
      },
      {
        title: 'Aprendendo TypeScript',
      },
      {
        title: 'Java para leigos',
      },
      {
        title: 'Aprendendo Docker',
      },
    ], {});
  },
  
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('books', {});
  }
};