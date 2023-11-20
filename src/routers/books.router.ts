import { Router } from 'express';
import booksController from '../controllers/books.controller';

const booksRouter = Router();

booksRouter.post('/books', booksController.create);
booksRouter.get('/books', booksController.list);

export default booksRouter;