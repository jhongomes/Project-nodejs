import { ICreateCustomerDTO } from "../../dtos/ICreateCustomerDTO";
import { CustomerRepositoryInMemory } from "../../repositories/in-memory/customerRepositoryInMemory";
import { CreateCustomerUseCase } from "../createCustomer/createCustomerUseCase";
import { ListFindByCPFCustomerUseCase } from "./listFindByCPFCustomerUseCase"

let listFindByCPFCustomerUseCase: ListFindByCPFCustomerUseCase;
let customerRepositoryInMemory : CustomerRepositoryInMemory;
let createCustomerUseCase: CreateCustomerUseCase;

describe("Find by cpf to customer", () => {
    beforeEach(() => {
        customerRepositoryInMemory = new CustomerRepositoryInMemory();
        listFindByCPFCustomerUseCase = new ListFindByCPFCustomerUseCase(customerRepositoryInMemory);
        createCustomerUseCase = new CreateCustomerUseCase(customerRepositoryInMemory);
    });

    it("Should be able to findOne cpf user", async () => {
        const customer: ICreateCustomerDTO = {
            type_customer: "test pessoa fisica",
            name: 'luana',
            lastname: 'Maria de Souza',
            cpf: '1111111',
            email: 'luana@gmail.com',
            telephone: '(92) 8888-0000', 
            zip_code: '345555',
            street: 'Compensa',
            number: '500',
            city: 'Manaus',
            state: 'Amazonas',
            store_hours_open: new Date(),
            day_of_attendance: new Date(),
            vehicles_used: 'Hyllux, Gol'
        };

        await createCustomerUseCase.execute(customer);

        const findCPF = await listFindByCPFCustomerUseCase.execute(customer.cpf)

        expect(findCPF.cpf).toBe('1111111')
     
    })
})