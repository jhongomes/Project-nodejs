import { inject, injectable } from 'tsyringe';
import { Customer } from '../../infra/typeorm/entities/Customer';
import { ICustomerRepository } from '../../repositories/ICustomerRepository';




@injectable()
class ListFindByCPFCustomerUseCase {
    constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository){}

    async execute(cpf: string): Promise<Customer>{
        const customer = await this.customerRepository.findByCPF(cpf);

        return customer;
    }

}

export { ListFindByCPFCustomerUseCase}