import { Request, Response} from 'express';

import { container, injectable } from "tsyringe";
import { UpdateCustomerUseCase } from './updateCustomerUseCase';


@injectable()
class UpdateCustomerController {

    async handle(request:Request, response:Response): Promise<Response>{
        const {type_customer, name, lastname, cpf, email, telephone,
            zip_code, street, number, city, state,  store_hours_open,
            day_of_attendance, vehicles_used } = request.body;

        const updateCustomerUseCase = container.resolve(UpdateCustomerUseCase);

        const customer = await updateCustomerUseCase.execute({
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
             vehicles_used
        });

        return response.json(customer);

    }

}

export { UpdateCustomerController}