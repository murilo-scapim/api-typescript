import express, { Request, Response } from 'express';
import petsRouter from './routers/pets.router';

const app = express();

app.use(express.json());
app.use(petsRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;
