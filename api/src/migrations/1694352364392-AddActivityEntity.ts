import { MigrationInterface, QueryRunner } from "typeorm";

export class AddActivityEntity1694352364392 implements MigrationInterface {
    name = 'AddActivityEntity1694352364392'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "activity" ("activityId" SERIAL NOT NULL, "description" character varying NOT NULL, "date_start" TIMESTAMP NOT NULL, "date_end" TIMESTAMP NOT NULL, CONSTRAINT "PK_23f5c68b666d7fb2d4de04c85bb" PRIMARY KEY ("activityId"))`);
        await queryRunner.query(`CREATE TABLE "user_activity" ("userId" integer NOT NULL, "activityId" integer NOT NULL, CONSTRAINT "PK_bc64ec9945b49e4d457cceedabc" PRIMARY KEY ("userId", "activityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c8d8d7cfc6e3433e725339c952" ON "user_activity" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_446e1be26a44682e157188c9b5" ON "user_activity" ("activityId") `);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "status" "public"."hackathon_status_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_activity" ADD CONSTRAINT "FK_c8d8d7cfc6e3433e725339c952b" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_activity" ADD CONSTRAINT "FK_446e1be26a44682e157188c9b5d" FOREIGN KEY ("activityId") REFERENCES "activity"("activityId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_activity" DROP CONSTRAINT "FK_446e1be26a44682e157188c9b5d"`);
        await queryRunner.query(`ALTER TABLE "user_activity" DROP CONSTRAINT "FK_c8d8d7cfc6e3433e725339c952b"`);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "status" hackathon_status_enum NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_446e1be26a44682e157188c9b5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c8d8d7cfc6e3433e725339c952"`);
        await queryRunner.query(`DROP TABLE "user_activity"`);
        await queryRunner.query(`DROP TABLE "activity"`);
    }

}
