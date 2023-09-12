import { MigrationInterface, QueryRunner } from "typeorm";

export class AddHackathonProperty1694347620343 implements MigrationInterface {
    name = 'AddHackathonProperty1694347620343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "description"`);
        await queryRunner.query(`CREATE TYPE "public"."hackathon_format_enum" AS ENUM('Очный', 'Онлайн', 'Онлайн/Очно')`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "format" "public"."hackathon_format_enum" NOT NULL DEFAULT 'Онлайн'`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "link_on_register" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "link_on_site" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "register_start" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "register_end" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "status" "public"."hackathon_status_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "status" hackathon_status_enum NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "register_end"`);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "register_start"`);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "link_on_site"`);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "link_on_register"`);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "format"`);
        await queryRunner.query(`DROP TYPE "public"."hackathon_format_enum"`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "description" character varying NOT NULL`);
    }

}
