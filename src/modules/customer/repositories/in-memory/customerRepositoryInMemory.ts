import { ICreateCustomerDTO } from "../../dtos/ICreateCustomerDTO";
import { Customer } from "../../infra/typeorm/entities/Customer";

import { ICustomerRepository } from "../ICustomerRepository";



class CustomerRepositoryInMemory implements ICustomerRepository{
   

    customers: Customer[] = [];


    async create({
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
    }: ICreateCustomerDTO): Promise<void> {
       const customer = new Customer();

       Object.assign(customer, {
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
       this.customers.push(customer);
    }
     
    async list(): Promise<Customer[]> {
        const all = this.customers;
        return all;
    }

    async findByEmail(email: string): Promise<Customer> {
      const customer = this.customers.find((customer) => customer.email === email);
       return customer;
    }

    async findByCPF(cpf: string): Promise<Customer> {
        const customer = this.customers.find((customer) => customer.cpf === cpf);
        return customer;
    }

    async save(customer: Customer): Promise<Customer> {
        this.customers.push(customer);


        return customer;
    }

   async remove(customer: Customer): Promise<Customer> {
        const findIndex = this.customers.findIndex( customer => customer === customer)

        this.customers.splice(findIndex, 1);


        return customer;       
    
   }
       

    async findById(id: string): Promise<Customer> {
       const customer = this.customers.find((customer) => customer.id === id);
       return customer;
    }

}

export { CustomerRepositoryInMemory}