/* eslint-disable no-console */
import { ApplicationErrors } from '@/shared/application/ApplicationError';
import { DomainError } from '@/shared/domain/DomainError';
import { HttpRequest, HttpResponse } from '@/shared/interfaces/http';

export abstract class BaseController {
  abstract perform(request: HttpRequest): Promise<HttpResponse>;
  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const response = await this.perform(request);
      return response;
    } catch (error) {
      const err = error as Error;
      switch (err.constructor) {
        case DomainError:
          return { data: { error: err.message }, statusCode: 400 };
        case ApplicationErrors.UnauthorizedError:
          return { data: { error: err.message }, statusCode: 401 };
        case ApplicationErrors.ForbiddenError:
          return { data: { error: err.message }, statusCode: 403 };
        case ApplicationErrors.NotFoundError:
          return { data: { error: err.message }, statusCode: 404 };
        case ApplicationErrors.ConflictError:
          return { data: { error: err.message }, statusCode: 409 };
        default:
          console.log('Err', err);
          return { data: { error: 'Internal Server Error' }, statusCode: 500 };
      }
    }
  }
}
