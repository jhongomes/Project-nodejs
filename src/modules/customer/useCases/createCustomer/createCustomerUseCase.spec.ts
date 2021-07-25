import { AppError } from "../../../../shared/errors/AppError";
import { CustomerRepositoryInMemory } from "../../repositories/in-memory/customerRepositoryInMemory";
import { CreateCustomerUseCase } from "./createCustomerUseCase"

let createCustomerUseCase: CreateCustomerUseCase;
let customerRepositoryInMemory: CustomerRepositoryInMemory;

describe("Create Customer", () => {
 

    beforeEach(() => {
        customerRepositoryInMemory = new CustomerRepositoryInMemory();
        createCustomerUseCase = new CreateCustomerUseCase(customerRepositoryInMemory);

    })
    
    it("should be able to create a new customer", async () => {

      const customer = {
        type_customer: 'Pessoa Fisica test',
        name: 'Jhonatan',
        lastname: 'Gomes de Souza',
        cpf: '11111111111',
        email: 'jhonatan@gmail.com',
        telephone: '(92) 99161-8733',
        zip_code: '6802222',
        street: 'Gilberto Mestrinho',
        number: '333',
        city: 'Manaus',
        state: 'Amazonas',
        store_hours_open: new Date(),
        day_of_attendance: new Date(),
        vehicles_used: 'gol'
      } 
       await createCustomerUseCase.execute({
        type_customer: customer.type_customer,
        name: customer.name,
        lastname: customer.lastname,
        cpf: customer.cpf,
        email: customer.email,
        telephone: customer.telephone,
        zip_code: customer.zip_code,
        street: customer.state,
        number: customer.number,
        city: customer.city,
        state: customer.state,
        store_hours_open: customer.store_hours_open,
        day_of_attendance: customer.day_of_attendance,
        vehicles_used: customer.vehicles_used
       
        });

       

        const customerCreated = await customerRepositoryInMemory.findByEmail(customer.email)
        
        
        
        expect(customerCreated).toHaveProperty("id")
    })

    it("should not be able to create a new customer with email exists", async () => {

     expect(async () => {
      const customer = {
        type_customer: 'Pessoa Fisica test',
        name: 'Jhonatan',
        lastname: 'Gomes de Souza',
        cpf: '11111111111',
        email: 'jhonatan@gmail.com',
        telephone: '(92) 99161-8733',
        zip_code: '6802222',
        street: 'Gilberto Mestrinho',
        number: '333',
        city: 'Manaus',
        state: 'Amazonas',
        store_hours_open: new Date(),
        day_of_attendance: new Date(),
        vehicles_used: 'gol'
      } 
       await createCustomerUseCase.execute({
        type_customer: customer.type_customer,
        name: customer.name,
        lastname: customer.lastname,
        cpf: customer.cpf,
        email: customer.email,
        telephone: customer.telephone,
        zip_code: customer.zip_code,
        street: customer.state,
        number: customer.number,
        city: customer.city,
        state: customer.state,
        store_hours_open: customer.store_hours_open,
        day_of_attendance: customer.day_of_attendance,
        vehicles_used: customer.vehicles_used
       
        });

        await createCustomerUseCase.execute({
          type_customer: customer.type_customer,
          name: customer.name,
          lastname: customer.lastname,
          cpf: customer.cpf,
          email: customer.email,
          telephone: customer.telephone,
          zip_code: customer.zip_code,
          street: customer.state,
          number: customer.number,
          city: customer.city,
          state: customer.state,
          store_hours_open: customer.store_hours_open,
          day_of_attendance: customer.day_of_attendance,
          vehicles_used: customer.vehicles_used
         
          });
        }).rejects.toBeInstanceOf(AppError)
     })
  
     it("should not be able to create a new customer with cpf exists", async () => {

      
          expect(async () => {
            const customer = {
              type_customer: 'Pessoa Fisica test',
              name: 'Luana',
              lastname: 'Maria de Souza',
              cpf: '11111111111',
              email: 'luana@gmail.com',
              telephone: '(92) 99160-0000',
              zip_code: '6802222',
              street: 'Centro',
              number: '700',
              city: 'Manaus',
              state: 'Amazonas',
              store_hours_open: new Date(),
              day_of_attendance: new Date(),
              vehicles_used: 'Hyllux'
            } 
             await createCustomerUseCase.execute({
              type_customer: customer.type_customer,
              name: customer.name,
              lastname: customer.lastname,
              cpf: customer.cpf,
              email: customer.email,
              telephone: customer.telephone,
              zip_code: customer.zip_code,
              street: customer.state,
              number: customer.number,
              city: customer.city,
              state: customer.state,
              store_hours_open: customer.store_hours_open,
              day_of_attendance: customer.day_of_attendance,
              vehicles_used: customer.vehicles_used
             
              });
      
              await createCustomerUseCase.execute({
                type_customer: customer.type_customer,
                name: customer.name,
                lastname: customer.lastname,
                cpf: customer.cpf,
                email: customer.email,
                telephone: customer.telephone,
                zip_code: customer.zip_code,
                street: customer.state,
                number: customer.number,
                city: customer.city,
                state: customer.state,
                store_hours_open: customer.store_hours_open,
                day_of_attendance: customer.day_of_attendance,
                vehicles_used: customer.vehicles_used
               
                });
          }).rejects.toBeInstanceOf(AppError)
                 
        })
   
      
})



