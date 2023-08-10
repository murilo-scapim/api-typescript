import { Router } from 'express';
import petsController from '../controllers/pets.controller';

const petsRouter = Router();

petsRouter.post('/pets', petsController.create);

export default petsRouter;