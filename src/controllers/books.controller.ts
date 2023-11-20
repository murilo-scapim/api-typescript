import { Request, Response } from 'express';
import booksService from '../services/books.service';

async function create(req: Request, res: Response) {
  const { title, price } = req.body;
  const serviceResponse = await booksService.create({ title, price });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  return res.status(201).json(serviceResponse.data);
}

async function list(_req: Request, res: Response) {
  const serviceResponse = await booksService.list();
  
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
}

export default {
  create,
  list,
};