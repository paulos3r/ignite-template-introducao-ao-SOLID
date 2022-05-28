import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.body;
      const listAll = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(listAll);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { ListAllUsersController };
