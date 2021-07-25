import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/createUserUseCase";
import { ListUserUseCase } from "./listUserUseCase"

let listUserUseCase: ListUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("List all users", () => {
    beforeEach(() => {
        usersRepositoryInMemory  = new UsersRepositoryInMemory();
        listUserUseCase = new ListUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);

    })

    it("Should be able to list all customer", async () => {
        const user: ICreateUserDTO = {
            email: "user@gmail.com",
            password: "123456",
            customer_id: "11122334"
        };

         
        await createUserUseCase.execute(user)

        const all = await listUserUseCase.execute()

      

        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
        



    })
})