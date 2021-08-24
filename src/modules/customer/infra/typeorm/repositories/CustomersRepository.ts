import {  getRepository, Repository } from "typeorm";
import { ICreateCustomerDTO } from "../../../dtos/ICreateCustomerDTO";
import { Customer } from "../entities/Customer";
import { ICustomerRepository } from "../../../repositories/ICustomerRepository";


class CustomerRepository implements ICustomerRepository{
    private repository: Repository<Customer>

    constructor(){
        this.repository = getRepository(Customer)
    }
      
    
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
    vehicles_used
   }: ICreateCustomerDTO): Promise<Customer> {

    const customer = this.repository.create({
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
    });

    await this.repository.save(customer);

    return customer;
        
    }
    async list(): Promise<Customer[]> {
        const customer = await this.repository.find();

        return customer;
    }

    async findByEmail(email: string): Promise<Customer | undefined> {
        const customer = await this.repository.findOne(email)
        
        return customer;

    }

    async findByCPF(cpf: string): Promise<Customer | undefined> {
        const customer = await this.repository.findOne(cpf)

        return customer;
    }

    async save(customer: Customer): Promise<Customer> {
        const customers = await this.repository.save(customer);
        
        return customers;
    }

    async remove(customer: Customer): Promise<Customer> {
       const customers = await this.repository.remove(customer);

       return customers;
    }

    async findById(id: string): Promise<Customer> {
        const customer = await this.repository.findOne(id);

        return customer;
    }




}

export {CustomerRepository}