import { inject, injectable } from "tsyringe";
import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";



@injectable()
class ListUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository) {}

    async execute(): Promise<User[]>{
        const user = await this.usersRepository.list();

        return user;

    }

}

export { ListUserUseCase}