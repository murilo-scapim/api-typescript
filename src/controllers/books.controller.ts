import { Request, Response } from 'express';
import booksService from '../services/books.service';

async function create(req: Request, res: Response) {
  const { title, price } = req.body;
  const book = await booksService.create({ title, price });
  return res.status(201).json(book);
}

export default {
  create,
};