import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
  } from "typeorm";
  import { Exclude } from "class-transformer";
  import { v4 as uuid } from "uuid";
import { Customer } from "../../../../customer/infra/typeorm/entities/Customer";
import { JoinColumn } from "typeorm";

  
  @Entity("users")
  class User {
    @PrimaryColumn()
    id: string;
  
    @Column()
    email: string;
  
    @Exclude()
    @Column()
    password: string;

    @JoinColumn({ name: 'customer_id'})
    @OneToOne(() => Customer)
    customer: Customer

    @Column()
    customer_id: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { User };