import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;
      const turnUser = this.turnUserAdminUseCase.execute({ user_id });

      return response.json(turnUser);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}

export { TurnUserAdminController };
