import { MigrationInterface, QueryRunner } from "typeorm";

export class ConnectTeamSpecialization1694347865433 implements MigrationInterface {
    name = 'ConnectTeamSpecialization1694347865433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "team_specialization" ("teamId" integer NOT NULL, "specializationId" integer NOT NULL, CONSTRAINT "PK_690dad7868db4eccf091ba731e4" PRIMARY KEY ("teamId", "specializationId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d45d52f0e34b2556de89c75d65" ON "team_specialization" ("teamId") `);
        await queryRunner.query(`CREATE INDEX "IDX_330bf76e4ea3e2ebeb35466e6e" ON "team_specialization" ("specializationId") `);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "status" "public"."hackathon_status_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "team_specialization" ADD CONSTRAINT "FK_d45d52f0e34b2556de89c75d658" FOREIGN KEY ("teamId") REFERENCES "team"("teamId") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "team_specialization" ADD CONSTRAINT "FK_330bf76e4ea3e2ebeb35466e6ed" FOREIGN KEY ("specializationId") REFERENCES "specialization"("specializationId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "team_specialization" DROP CONSTRAINT "FK_330bf76e4ea3e2ebeb35466e6ed"`);
        await queryRunner.query(`ALTER TABLE "team_specialization" DROP CONSTRAINT "FK_d45d52f0e34b2556de89c75d658"`);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "status" hackathon_status_enum NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_330bf76e4ea3e2ebeb35466e6e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d45d52f0e34b2556de89c75d65"`);
        await queryRunner.query(`DROP TABLE "team_specialization"`);
    }

}
