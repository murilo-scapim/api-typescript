import PetModel, { PetWithOptionalId } from '../database/models/pet.model';

async function create(pet: PetWithOptionalId) {
  const newPet = await PetModel.create(pet);

  return newPet.dataValues;
}

export default {
  create,
};