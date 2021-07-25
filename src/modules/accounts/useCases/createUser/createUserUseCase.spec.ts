import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/createUserUseCase";




let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory  = new UsersRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);

    })

    it("should be able to create a new user", async () => {
        const user: ICreateUserDTO = {
            email: "user@gmail.com",
            password: "123456",
            customer_id: "11122334"
        };
         
        await createUserUseCase.execute(user)

        
         expect(user).toHaveProperty("email");
         expect(user).toHaveProperty("password");
         expect(user).toHaveProperty("customer_id");


    })

    it("should not be able to create a new user with email exists", async () => {
       
        expect(async () => {
            const user: ICreateUserDTO = {
                email: "user@gmail.com",
                password: "123456",
                customer_id: "11122334"
            };
             
            await createUserUseCase.execute(user)
    
            await createUserUseCase.execute(user)
            
            
        }).rejects.toBeInstanceOf(AppError)


    })
})


