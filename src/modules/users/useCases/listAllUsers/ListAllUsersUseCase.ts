import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userIdAlreadyExists = this.usersRepository.findById(user_id);

    if (!userIdAlreadyExists) {
      throw new Error("the not exist user!");
    }
    if (!userIdAlreadyExists.admin) {
      throw new Error("not is User admin");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
