import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSpecializationEntity1694337540846 implements MigrationInterface {
    name = 'AddSpecializationEntity1694337540846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "specialization" ("specializationId" SERIAL NOT NULL, "spec_name" character varying NOT NULL, CONSTRAINT "PK_a71f66706ebf26c36f68b7512dc" PRIMARY KEY ("specializationId"))`);
        await queryRunner.query(`CREATE TABLE "user_specialization" ("userId" integer NOT NULL, "specializationId" integer NOT NULL, CONSTRAINT "PK_e3afa68c136e7f38758294ab386" PRIMARY KEY ("userId", "specializationId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_44395c80d597815d6a2ae14dfb" ON "user_specialization" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_425c1039a1f316b865717ffc93" ON "user_specialization" ("specializationId") `);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "code_confirm"`);
        await queryRunner.query(`ALTER TABLE "user_specialization" ADD CONSTRAINT "FK_44395c80d597815d6a2ae14dfbc" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_specialization" ADD CONSTRAINT "FK_425c1039a1f316b865717ffc935" FOREIGN KEY ("specializationId") REFERENCES "specialization"("specializationId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_specialization" DROP CONSTRAINT "FK_425c1039a1f316b865717ffc935"`);
        await queryRunner.query(`ALTER TABLE "user_specialization" DROP CONSTRAINT "FK_44395c80d597815d6a2ae14dfbc"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "code_confirm" character varying`);
        await queryRunner.query(`DROP INDEX "public"."IDX_425c1039a1f316b865717ffc93"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_44395c80d597815d6a2ae14dfb"`);
        await queryRunner.query(`DROP TABLE "user_specialization"`);
        await queryRunner.query(`DROP TABLE "specialization"`);
    }

}
