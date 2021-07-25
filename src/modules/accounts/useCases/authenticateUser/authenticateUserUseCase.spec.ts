import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/createUserUseCase";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase"
import { v4 as uuid } from 'uuid'
import { UsersTokensRepositoryInMemory } from "../../repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DatejsDateProvider";


let authenticateUserUseCase : AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let dateProvider: DayjsDateProvider;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory  = new UsersRepositoryInMemory();
        usersTokensRepositoryInMemory= new UsersTokensRepositoryInMemory()
        dateProvider = new DayjsDateProvider();

        authenticateUserUseCase = new AuthenticateUserUseCase
        (usersRepositoryInMemory, usersTokensRepositoryInMemory, dateProvider);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);

    })

    it("should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            email: "user@gmail.com",
            password: "123456",
            customer_id: "11122334"
        };

         
        await createUserUseCase.execute(user)

        const result = await authenticateUserUseCase.execute({
             email: user.email,
             password: user.password
         });

        
         expect(result).toHaveProperty("token");
    })


    it("should not be able to authenticate an nonexistent user", () => {
        expect(async () =>{
            await authenticateUserUseCase.execute({
                email: "false@gmail.com",
                password: '1234'
            });
   
        }).rejects.toBeInstanceOf(AppError);
    })

    it("should be able to authenticate with incorrect password", () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                email: 'user@user.com',
                password: '1234',
                customer_id: uuid(),
            }
                   
         await createUserUseCase.execute(user)

         await authenticateUserUseCase.execute({
             email: user.email,
             password: "incorrectPassword"
         })
        }).rejects.toBeInstanceOf(AppError)
    })
})


  