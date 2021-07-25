import { ICreateCustomerDTO } from "../../dtos/ICreateCustomerDTO";
import { CustomerRepositoryInMemory } from "../../repositories/in-memory/customerRepositoryInMemory";
import { CreateCustomerUseCase } from "../createCustomer/createCustomerUseCase";
import { ListCustomerUseCase } from "./listCustomerUseCase"


let listCustomerUseCase: ListCustomerUseCase;
let customerRepositoryInMemory : CustomerRepositoryInMemory;
let createCustomerUseCase: CreateCustomerUseCase;


describe("List all customer", () => {
    beforeEach(() => {
        customerRepositoryInMemory = new CustomerRepositoryInMemory();
        listCustomerUseCase = new ListCustomerUseCase(customerRepositoryInMemory);
        createCustomerUseCase = new CreateCustomerUseCase(customerRepositoryInMemory);
    });

    it("Should be able to list all users", async () => {
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

        const all = await listCustomerUseCase.execute()

        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    })
})