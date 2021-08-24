import { inject, injectable, container } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Customer } from "../../infra/typeorm/entities/Customer";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";

interface IRequest {
 id?: string;
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
class UpdateCustomerUseCase {

    constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository){}
    

    async execute({
      id,
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
    }:IRequest): Promise<Customer>{

      if(type_customer == " " || name == " " || lastname == " " || cpf == " " || email == " " || telephone == " " || zip_code == " " ||
          street == " " || number == " " || city == "" || state == " " ||   vehicles_used == " ") {
                   throw new AppError("Fill in fields");
          }

    
     const customer = await this.customerRepository.findById(id);

     if(!customer){
        throw new AppError("Customer not found !")
     }


     if(cpf !== customer?.cpf){

     const customerAlreadyExistsCPF = await this.customerRepository.findByCPF(cpf)
    
     if(customerAlreadyExistsCPF){
        throw new AppError("CPF Already exists!")
     }
   }

     if(email !== customer?.email){

     const customerAlreadyExists = await this.customerRepository.findByEmail(email);

     if(customerAlreadyExists){
          throw new AppError("There is already a registered user with this e-mail!")
       }
      }


       customer.type_customer = type_customer;
       customer.name = name;
       customer.lastname = lastname;
       customer.cpf = cpf;
       customer.email = email;
       customer.telephone = telephone;
       customer.zip_code = zip_code;
       customer.street = street;
       customer.number = number;
       customer.city = city;
       customer.state = state;
       customer.store_hours_open = store_hours_open;
       customer.day_of_attendance = day_of_attendance;
       customer.vehicles_used = vehicles_used;

    
      await this.customerRepository.save(customer);

       return customer;
    }
}

export { UpdateCustomerUseCase }