import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from "bcryptjs";
import { Customer } from "../../../customer/infra/typeorm/entities/Customer";
interface IRequest{
    email: string;
    password: string;
    customer_id: string;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository){}

    async execute({
        email,
        password,
        customer_id,
    }: IRequest): Promise<void>{

        if(email =="" || password == "") throw new AppError("Fill in fields!");

        const usersAlreadyExists = await this.usersRepository.findByEmail(email);

        if(usersAlreadyExists){
            throw new AppError("There is already a registered user with this e-mail!!")
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            email,
            password: passwordHash,
            customer_id,

        });
        
    }

}

export { CreateUserUseCase}