import { DataTypes, Model, QueryInterface } from 'sequelize';

import { Pet } from '../../types/Pet';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Pet>>('pets', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    })
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('pets')
  }
};