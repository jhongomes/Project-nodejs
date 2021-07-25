
import { Request, Response} from "express";

import {container } from "tsyringe";

import { CreateUserUseCase} from "./createUserUseCase"



class CreateUserController {
    async handle(request:Request, response:Response): Promise<Response>{
        const { email, password,customer_id} = request.body;
        

        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({
            email,
            password,
            customer_id,
        });


        return response.status(201).send();


    }
}

export { CreateUserController}

