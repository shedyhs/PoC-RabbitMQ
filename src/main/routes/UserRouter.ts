import { Router } from 'express';
import { expressAdaptRoute } from '../adapters/ExpressRouteAdapter';
import { container } from '../di/container';

export default (router: Router): void => {
  router.post(
    '/users',
    expressAdaptRoute(container.resolve('createUserController')),
  );
};
