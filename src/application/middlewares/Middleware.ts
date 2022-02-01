import { HttpRequest, HttpResponse } from '@/shared/interfaces/http';

export interface Middleware {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}
