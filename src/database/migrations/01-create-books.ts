import { Model, QueryInterface, DataTypes } from 'sequelize';

import { Book } from '../../types/Book';

export default { 
  up(queryInterface: QueryInterface) { 
    return queryInterface.createTable<Model<Book>>('books', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    })
  }, 
  
  down(queryInterface: QueryInterface) { 
    return queryInterface.dropTable('books') 
  } 
};