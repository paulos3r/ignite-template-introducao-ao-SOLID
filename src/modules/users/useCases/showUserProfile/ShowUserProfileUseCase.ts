import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userIdAlreadyExists = this.usersRepository.findById(user_id);

    if (!userIdAlreadyExists) {
      throw new Error("Not exists User");
    }

    return userIdAlreadyExists;
  }
}

export { ShowUserProfileUseCase };
