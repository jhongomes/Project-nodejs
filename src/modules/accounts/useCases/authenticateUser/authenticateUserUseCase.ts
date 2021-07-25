import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

import { compare} from "bcryptjs"

import { sign } from "jsonwebtoken"
import { IUsersTokensRepository } from "../../repositories/IUsersTokensRepository";
import auth from "../../../../config/auth";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";

interface IRequest{
    email: string;
    password: string;
}

interface IResponse {
    user: {
        id: string,
        email: string
    },
    token: string;
    refresh_token: string;
}


@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UsersTokensRepository")
        private usersTokenRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
        ){}

    async execute({ email, password}: IRequest): Promise<IResponse>{

        const user = await this.usersRepository.findByEmail(email);
        const { expires_in_token, 
                secret_refresh_token, 
                secret_token, 
                expires_in_refresh_token,
                expires_refresh_token_days
            } = auth

        if(!user){
            throw new AppError("Email or password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new AppError("Email or password incorrect!");
        }

        const token = sign({}, secret_token, {
            subject: user.id,
            expiresIn: expires_in_token,
        }); 

        const refresh_token = sign({ email }, secret_refresh_token, {
            subject: user.id,
            expiresIn: expires_in_refresh_token
        } )

        const refresh_token_expires_date = this.dateProvider.addDays
        (expires_refresh_token_days)

        await this.usersTokenRepository.create({
            user_id: user.id,
            refresh_token: refresh_token,
            expires_date: refresh_token_expires_date,
           
            
        })

        const toeknReturn: IResponse = {
            token,
            user: {
                id: user.id,
                email: user.email
            },
            refresh_token,
        };
        

        return toeknReturn;
    }

}

export { AuthenticateUserUseCase}
