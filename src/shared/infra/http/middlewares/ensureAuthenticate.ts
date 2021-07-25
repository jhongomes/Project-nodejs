import {Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";
import auth from "../../../../config/auth";
import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { UsersTokensRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { AppError } from "../../../errors/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticate(request:Request, response:Response, next: NextFunction){


    const authHeader = request.headers.authorization;

    const usersTokensRepository = new UsersTokensRepository();


    if(!authHeader){
        throw new AppError("token missin", 401);
    }

    const [, token] = authHeader.split(" ")

    try{
        const { sub: user_id} = verify(token, 
            auth.secret_refresh_token
         ) as IPayload;

        

        const user = await usersTokensRepository.findByUserIdAnRefreshToken(
            user_id,
            token
        )

        if(!user){
            throw new AppError("User does not exists!", 401);
        }

        next();
    }catch{
        throw new AppError("invalid token!", 401);

    }
}