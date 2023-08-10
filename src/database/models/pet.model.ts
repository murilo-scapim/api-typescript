import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Pet } from '../../types/Pet';

// Criar um novo tipo a partir do tipo Pet usando utility type
export type PetWithOptionalId = Optional<Pet, 'id'>;

// Definir o tipo que o sequelize precisa para criar o model
// ModelDefined é um tipo genérico que recebe dois tipos
// O segundo são os campos que serão informados quando a função create for chamada
type PetSequelizeModelCreator = ModelDefined<Pet, PetWithOptionalId>;

// Define o tipo para ser usado no service
export type PetSequelizeModel = Model<Pet, PetWithOptionalId>;

const PetModel: PetSequelizeModelCreator = db.define('Pet', {
  name: DataTypes.STRING,
  type: DataTypes.STRING,
}, {
  tableName: 'pets',
  timestamps: false,
  underscored: true,
});

export default PetModel;