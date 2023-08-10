import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('pets', [
      {
        name: 'Spike',
        type: 'Dog'
      },
      {
        name: 'Bob',
        type: 'Cat'
      },
      {
        name: 'Regex',
        type: 'Dog'
      },
      {
        name: 'Docker',
        type: 'Cat'
      },
    ], {});
  },
  
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('pets', {});
  }
};