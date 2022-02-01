import { CreateUserUseCase } from '@/application/usecases/user/CreateUserUsecase';
import { HttpRequest, HttpResponse } from '@/shared/interfaces/http';
import { BaseController } from '../BaseController';

export class CreateUserController extends BaseController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {
    super();
  }

  async perform(request: HttpRequest): Promise<HttpResponse> {
    const user = this.createUserUseCase.execute(request.body);
    return { data: user, statusCode: 201 };
  }
}
