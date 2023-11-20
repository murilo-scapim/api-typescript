import BookModel, {
  BookSequelizeModel,
  BookWithOptionalId,
} from '../database/models/book.model';
import { Book } from '../types/Book';
import { ServiceResponse } from '../types/ServiceResponse';

async function create(
  book: BookWithOptionalId,
): Promise<ServiceResponse<Book>> {
  const newBook = await BookModel.create(book);

  const responseService = { status: 'SUCCESSFUL', data: newBook.dataValues };
  return responseService as ServiceResponse<Book>;
}

async function list():
Promise<ServiceResponse<BookSequelizeModel[]>> {
  const books = await BookModel.findAll();
  return { status: 'SUCCESSFUL', data: books };
}

export default {
  create,
  list,
};