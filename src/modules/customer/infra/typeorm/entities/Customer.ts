import { JoinColumn } from 'typeorm';
import { OneToOne } from 'typeorm';
import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuidv4} from 'uuid';
import { User } from '../../../../accounts/infra/typeorm/entities/User';

@Entity("customers")
class Customer {
    @PrimaryColumn()
    id?: string;

    @Column()
    type_customer: string;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    telephone: string;

    @Column()
    zip_code: string;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    store_hours_open: Date;

    @Column()
    day_of_attendance: Date;


    @Column()
    vehicles_used: string;



    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }

}
export { Customer };