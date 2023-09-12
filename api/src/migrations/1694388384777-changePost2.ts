import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangePost21694388384777 implements MigrationInterface {
    name = 'ChangePost21694388384777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "isNews"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "isNews" boolean NOT NULL`);
    }

}
