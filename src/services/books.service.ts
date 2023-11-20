import BookModel, {
  BookSequelizeModel,
  BookWithOptionalId,
} from '../database/models/book.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function create(book: BookWithOptionalId) {
  const newBook = await BookModel.create(book);
  return newBook.dataValues;
}

async function list(): Promise<ServiceResponse<BookSequelizeModel[]>> {
  const books = await BookModel.findAll();
  return { status: 'SUCCESSFUL', data: books };
}

export default {
  create,
  list,
};