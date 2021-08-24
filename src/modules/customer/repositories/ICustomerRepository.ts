import { ICreateCustomerDTO} from "../dtos/ICreateCustomerDTO";

import { Customer } from "../infra/typeorm/entities/Customer";

interface ICustomerRepository{

    create(data: ICreateCustomerDTO): Promise<Customer>;
    list(): Promise<Customer[]>;
    findByEmail(email:string): Promise<Customer | undefined>;
    findByCPF(cpf: string): Promise<Customer | undefined>;
    save(customer: Customer): Promise<Customer>;
    remove(customer: Customer): Promise<Customer>;
    findById(id: string): Promise<Customer>;
}
export { ICustomerRepository}