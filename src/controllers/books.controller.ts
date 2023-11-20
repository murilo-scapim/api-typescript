import { Request, Response } from 'express';
import booksService from '../services/books.service';

async function create(req: Request, res: Response) {
  const { title, price } = req.body;
  const book = await booksService.create({ title, price });
  return res.status(201).json(book);
}

async function list(_req: Request, res: Response) {
  const serviceResponse = await booksService.list();
  
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  res.status(200).json(serviceResponse.data);
}

export default {
  create,
  list,
};