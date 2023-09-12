import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUser1694410417322 implements MigrationInterface {
    name = 'ChangeUser1694410417322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "about" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "tgContact" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "tgContact"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "about"`);
    }

}
