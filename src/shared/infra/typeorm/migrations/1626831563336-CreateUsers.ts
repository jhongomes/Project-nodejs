import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1626831563336 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'customer_id',
                        type: 'uuid',
                        default: false,
                    },
                    {
                      name: 'created_at',
                      type: 'timestamp',
                      default: 'now()',
                    },
                    {
                      name: 'updated_at',
                      type: 'timestamp',
                      default: 'now()',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKCustomer',
                        referencedTableName: 'customers',
                        referencedColumnNames: ['id'],
                        columnNames: ['customer_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                ],
            })

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
