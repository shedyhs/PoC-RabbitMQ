import { RequestHandler } from 'express';
import { BaseController } from '@/application/controllers/BaseController';

type Adapter = (controller: BaseController) => RequestHandler;

export const expressAdaptRoute: Adapter = (controller) => async (req, res) => {
  const { statusCode, data } = await controller.handle({
    body: req.body,
    params: req.params,
    query: req.query,
  });
  const successStatusCode = statusCode >= 200 && statusCode < 300;
  const response = successStatusCode ? data : { error: data.message };
  return res.status(statusCode).json(response);
};
