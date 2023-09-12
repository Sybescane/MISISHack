import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeHackathon1694379006289 implements MigrationInterface {
    name = 'ChangeHackathon1694379006289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "register_start"`);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "link_on_site"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "link_on_site" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "register_start" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "status" hackathon_status_enum NOT NULL`);
    }

}
