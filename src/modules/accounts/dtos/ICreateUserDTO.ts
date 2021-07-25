import { Customer } from "../../customer/infra/typeorm/entities/Customer";



interface ICreateUserDTO{

email: string;
password: string;
customer_id: string;
}

export { ICreateUserDTO}