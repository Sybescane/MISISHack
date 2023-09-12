import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTeamEntity1694339255299 implements MigrationInterface {
    name = 'AddTeamEntity1694339255299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "team" ("teamId" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "isOpened" boolean NOT NULL DEFAULT false, "captainUserId" integer, CONSTRAINT "PK_e3c1e347fd4f0813cc7b2e2115b" PRIMARY KEY ("teamId"))`);
        await queryRunner.query(`CREATE TABLE "user_team" ("userId" integer NOT NULL, "teamId" integer NOT NULL, CONSTRAINT "PK_5344f2beb6d670a703b46d7db0b" PRIMARY KEY ("userId", "teamId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_32ecd75ddc134fd687792507e9" ON "user_team" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e50bd38e4f1ba4fa1f3c6a356b" ON "user_team" ("teamId") `);
        await queryRunner.query(`ALTER TABLE "team" ADD CONSTRAINT "FK_d4351f561740ca5ebfae4912a3c" FOREIGN KEY ("captainUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_team" ADD CONSTRAINT "FK_32ecd75ddc134fd687792507e90" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_team" ADD CONSTRAINT "FK_e50bd38e4f1ba4fa1f3c6a356bc" FOREIGN KEY ("teamId") REFERENCES "team"("teamId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_team" DROP CONSTRAINT "FK_e50bd38e4f1ba4fa1f3c6a356bc"`);
        await queryRunner.query(`ALTER TABLE "user_team" DROP CONSTRAINT "FK_32ecd75ddc134fd687792507e90"`);
        await queryRunner.query(`ALTER TABLE "team" DROP CONSTRAINT "FK_d4351f561740ca5ebfae4912a3c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e50bd38e4f1ba4fa1f3c6a356b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_32ecd75ddc134fd687792507e9"`);
        await queryRunner.query(`DROP TABLE "user_team"`);
        await queryRunner.query(`DROP TABLE "team"`);
    }

}
