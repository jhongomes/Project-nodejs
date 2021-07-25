import { v4 as uuid } from 'uuid';
import { Entity, PrimaryColumn, JoinColumn, ManyToOne, CreateDateColumn, Column} from "typeorm";
import { User } from "./User";


@Entity("users_token")

class UserTokens{

    @PrimaryColumn()
    id: string;

    @Column()
    refresh_token: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id"})
    user:User;

    @Column()
    expires_date: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }

}

export { UserTokens}

