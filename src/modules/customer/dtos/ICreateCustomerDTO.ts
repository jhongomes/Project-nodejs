

interface ICreateCustomerDTO{
    id?: string;
    type_customer: string;
    name: string;
    lastname: string;
    cpf: string;
    email: string;
    telephone: string;
    zip_code: string;
    street: string;
    number: string;
    city: string;
    state: string;
    store_hours_open: Date;
    day_of_attendance: Date;
    vehicles_used: string;

}
export {ICreateCustomerDTO}