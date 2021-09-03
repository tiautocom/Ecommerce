import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1629489953498 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id", 
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "user_sender",
                        type: "uuid",
                    },
                    {
                        name: "user_receiver",
                        type: "uuid",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
