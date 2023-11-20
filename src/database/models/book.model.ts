import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Book } from '../../types/Book';

// Criar um novo tipo a partir do tipo Pet usando o utility type
export type BookWithOptionalId = Optional<Book, 'id'>;

// Definir o tipo que o sequelize precisa para criar o model
// ModelDefined é um tipo genérico que recebe dois tipos
// O segundo são os campos que serão informados quando a função create for chamada
type BookSequelizeModelCreator = ModelDefined<Book, BookWithOptionalId>;

// Define o tipo para ser usado no service
export type BookSequelizeModel = Model<Book, BookWithOptionalId>;

const BookModel: BookSequelizeModelCreator = db.define('Book', {
  title: DataTypes.STRING,
  price: DataTypes.DECIMAL(10, 2),
}, {
  tableName: 'books',
  timestamps: false,
  underscored: true,
});

export default BookModel;