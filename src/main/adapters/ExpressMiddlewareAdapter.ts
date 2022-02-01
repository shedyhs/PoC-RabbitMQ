import { RequestHandler } from 'express';
import { Middleware } from '@/application/middlewares/Middleware';

type Adapter = (middleware: Middleware) => RequestHandler;
export const expressAdapterMiddleware: Adapter =
  (middleware) => async (req, res, next) => {
    const { statusCode, data } = await middleware.handle(req);

    if (statusCode === 200) {
      Object.assign(req, data);
      next();
    } else {
      res.status(statusCode).json({ error: data.message });
    }
  };
