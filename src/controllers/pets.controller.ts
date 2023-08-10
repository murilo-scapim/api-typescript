import { Request, Response } from 'express';
import petsService from '../services/pets.service';

async function create(req: Request, res: Response) {
  const { name, type } = req.body;
  const pet = await petsService.create({ name, type });
  res.status(201).json(pet);
}

export default {
  create,
};