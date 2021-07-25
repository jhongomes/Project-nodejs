import { Request, Response} from "express";

import {container, injectable } from "tsyringe";

import { CreateCustomerUseCase} from "./createCustomerUseCase";

@injectable()
class CreateCustomerController {

    async handle(request: Request, response:Response): Promise<Response>{
        const {type_customer, name, lastname, cpf, email, telephone,
            zip_code, street, number, city, state,  store_hours_open,
            day_of_attendance, vehicles_used } = request.body;

        const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

         await createCustomerUseCase.execute({
            type_customer,
            
             name, 
             lastname,
             cpf, 
             email, 
             telephone,
             zip_code, 
             street, 
             number, 
             city, 
             state,  
             store_hours_open,
             day_of_attendance, 
             vehicles_used,
        })

        return response.status(201).json(createCustomerUseCase)
    }

}

export { CreateCustomerController}