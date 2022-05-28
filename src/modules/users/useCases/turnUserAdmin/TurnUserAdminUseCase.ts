import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userIdAlreadyExists = this.usersRepository.findById(user_id);

    if (!userIdAlreadyExists) {
      throw new Error("User Not exist id");
    }

    const userUpdate = this.usersRepository.turnAdmin(userIdAlreadyExists);

    return userUpdate;
  }
}

export { TurnUserAdminUseCase };
