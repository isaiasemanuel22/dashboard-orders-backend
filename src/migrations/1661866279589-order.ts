import { MigrationInterface, QueryRunner } from "typeorm";

export class order1661866279589 implements MigrationInterface {
    name = 'order1661866279589'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`reserve\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`amountReserve\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`cost\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`name\` \`name\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`dateDelivery\` \`dateDelivery\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`name\` \`name\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`dateDelivery\` \`dateDelivery\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`description\` \`description\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`description\` \`description\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`dateDelivery\` \`dateDelivery\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`name\` \`name\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`description\` \`description\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`dateDelivery\` \`dateDelivery\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`name\` \`name\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`cost\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`amountReserve\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`reserve\``);
    }

}
