import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1628012127177 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "created_At",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_At",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
