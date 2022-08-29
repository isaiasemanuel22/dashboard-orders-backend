import { MigrationInterface, QueryRunner } from "typeorm"

export class Order1661712988534 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "order" RENAME COLUMN "name" TO "title"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "order" RENAME COLUMN "title" TO "name"`,
        )
    }

}
