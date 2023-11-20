import { Router } from 'express';
import booksController from '../controllers/books.controller';

const booksRouter = Router();

booksRouter.post('/books', booksController.create);

export default booksRouter;