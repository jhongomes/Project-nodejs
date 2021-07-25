import { inject, injectable } from "tsyringe";
import { Customer } from "../../infra/typeorm/entities/Customer";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";

@injectable()
class ListCustomerUseCase {
    constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository){}

    async execute(): Promise<Customer[]>{
        const customer = await this.customerRepository.list();

        return customer;
    }

}
export { ListCustomerUseCase}