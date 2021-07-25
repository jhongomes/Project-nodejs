import { getRepository, Repository } from "typeorm";
import { Customer } from "../../../../customer/infra/typeorm/entities/Customer";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";

import { User } from "../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor(){
       this.repository = getRepository(User);
   }
    
    async create({email, password, customer_id}: ICreateUserDTO): Promise<void> {
       
        const user = await this.repository.create({
            email,
            password,
            customer_id,
        
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> { 
        const user = await this.repository.findOne({ email })

        return user;
    }
    async findById(id: string): Promise<User> {
      const user = await this.repository.findOne({ id })

      return user;
    }

    async list(): Promise<User[]> {
        const all = await this.repository.find({ relations: ['customer']});

        return all;
    }
    

}
export { UsersRepository}