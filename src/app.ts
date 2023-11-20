import express, { Request, Response } from 'express';
import booksRouter from './routers/books.router';

const app = express();

app.use(express.json());
app.use(booksRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;
