import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangePost1694387484322 implements MigrationInterface {
    name = 'ChangePost1694387484322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "isNews"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "isNews" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "isNews"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "isNews" boolean NOT NULL`);
    }

}
