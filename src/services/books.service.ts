import BookModel, { BookWithOptionalId } from '../database/models/book.model';

async function create(book: BookWithOptionalId) {
  const newBook = await BookModel.create(book);
  return newBook.dataValues;
}

export default {
  create,
};