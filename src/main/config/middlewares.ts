import { Express, json } from 'express';

export const setupMiddlewares = (app: Express): void => {
  app.use(json());
  app.use((req, res, next) => {
    res.set('access-control-allow-origin', '*');
    res.set('access-control-allow-methods', '*');
    res.set('access-control-allow-headers', '*');
    next();
  });
};
