import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';


import "../container/providers/index";
import { ICustomerRepository } from "../../modules/customer/repositories/ICustomerRepository"
import { CustomerRepository } from "../../modules/customer/infra/typeorm/repositories/CustomersRepository";
import { IUsersTokensRepository } from '../../modules/accounts/repositories/IUsersTokensRepository';
import { UsersTokensRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersTokensRepository';
import { IDateProvider } from './providers/DateProvider/IDateProvider';




container.registerSingleton<ICustomerRepository>(
    "CustomerRepository",
    CustomerRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    UsersTokensRepository
)
