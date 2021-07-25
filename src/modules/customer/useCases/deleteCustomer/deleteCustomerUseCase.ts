import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Customer } from "../../infra/typeorm/entities/Customer";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";



@injectable()
class DeleteCustomerUseCase {
    constructor(
    @inject("CustomerRepository")

    private customerRepository: ICustomerRepository){}

    async execute(id: string): Promise<Customer>{
        
        const customer = await this.customerRepository.findById(id);

        if(!customer){
           throw new AppError("Customer not found !")
        }

        await this.customerRepository.remove(customer);

        return customer;

    }
}

export { DeleteCustomerUseCase}