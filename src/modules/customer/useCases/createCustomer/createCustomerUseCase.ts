import { response } from "express";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Customer } from "../../infra/typeorm/entities/Customer";


import { ICustomerRepository} from "../../repositories/ICustomerRepository";

interface IRequest{
 type_customer: string
 name: string;
 lastname: string;
 cpf: string;
 email: string;
 telephone: string;
 zip_code: string;
 street: string;
 number: string;
 city: string;
 state: string;
 store_hours_open: Date;
 day_of_attendance: Date;
 vehicles_used: string;
}

@injectable()
class CreateCustomerUseCase {

   constructor(
     @inject("CustomerRepository")
     private customerRepository: ICustomerRepository){}

     async execute({
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
     }: IRequest): Promise<Customer>{

      if(type_customer == " " || name == " " || lastname == " " || cpf == " " || email == " " || telephone == " " || zip_code == " " ||
      street == " " || number == " " || city == "" || state == " " || vehicles_used == " ") {
               throw new AppError("Fill in fields!");
      }

      const customerAlreadyExists = await this.customerRepository.findByEmail(email);

      if(customerAlreadyExists){
        throw new AppError("There is already a registered user with this e-mail!!")
     }

     const customerExists = await this.customerRepository.findByCPF(cpf)
    
     if(customerExists){
        throw new AppError("CPF Already exists!")
     }

    const customer = await this.customerRepository.create({
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


     return customer
     }
     


    }

export { CreateCustomerUseCase}