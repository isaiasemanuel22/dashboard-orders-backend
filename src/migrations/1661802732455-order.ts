import { MigrationInterface, QueryRunner } from "typeorm";

export class order1661802732455 implements MigrationInterface {
    name = 'order1661802732455'

    public async up(queryRunner: QueryRunner): Promise<void> {
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
    }

}
