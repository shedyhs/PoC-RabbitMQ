import express from 'express';
import path from 'path';
import { setupMiddlewares } from './middlewares';
import { setupRoutes } from './routes';

const app = express();

app.use(
  '/public',
  express.static(path.resolve(__dirname, '..', '..', '..', 'public')),
);

setupMiddlewares(app);
setupRoutes(app);
export { app };
