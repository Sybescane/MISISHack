import { MigrationInterface, QueryRunner } from "typeorm";

export class AddHackathonEntity1694340558804 implements MigrationInterface {
    name = 'AddHackathonEntity1694340558804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."hackathon_status_enum" AS ENUM()`);
        await queryRunner.query(`CREATE TABLE "hackathon" ("hackathonId" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "status" "public"."hackathon_status_enum" NOT NULL, "date_start" TIMESTAMP NOT NULL, "date_end" TIMESTAMP NOT NULL, CONSTRAINT "PK_b69e4425cf3bdeaec5fdb7f4f82" PRIMARY KEY ("hackathonId"))`);
        await queryRunner.query(`CREATE TABLE "team_hackathon" ("teamId" integer NOT NULL, "hackathonId" integer NOT NULL, CONSTRAINT "PK_80b6d2d176b162767872b545cce" PRIMARY KEY ("teamId", "hackathonId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_52770a74d1d730df690e9227a8" ON "team_hackathon" ("teamId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2f638c4c72f82ced1a7093a745" ON "team_hackathon" ("hackathonId") `);
        await queryRunner.query(`ALTER TABLE "team_hackathon" ADD CONSTRAINT "FK_52770a74d1d730df690e9227a8a" FOREIGN KEY ("teamId") REFERENCES "team"("teamId") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "team_hackathon" ADD CONSTRAINT "FK_2f638c4c72f82ced1a7093a7456" FOREIGN KEY ("hackathonId") REFERENCES "hackathon"("hackathonId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "team_hackathon" DROP CONSTRAINT "FK_2f638c4c72f82ced1a7093a7456"`);
        await queryRunner.query(`ALTER TABLE "team_hackathon" DROP CONSTRAINT "FK_52770a74d1d730df690e9227a8a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2f638c4c72f82ced1a7093a745"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_52770a74d1d730df690e9227a8"`);
        await queryRunner.query(`DROP TABLE "team_hackathon"`);
        await queryRunner.query(`DROP TABLE "hackathon"`);
        await queryRunner.query(`DROP TYPE "public"."hackathon_status_enum"`);
    }

}
