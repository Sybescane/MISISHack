import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAchievmentAndDisciplineEntity1694353668938 implements MigrationInterface {
    name = 'AddAchievmentAndDisciplineEntity1694353668938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."discipline_format_enum" AS ENUM('Экзамен', 'Зачет', 'Зачет с оценкой', 'Курсовая работа')`);
        await queryRunner.query(`CREATE TABLE "discipline" ("disciplineId" SERIAL NOT NULL, "name" character varying NOT NULL, "semestr" integer NOT NULL, "format" "public"."discipline_format_enum" NOT NULL, CONSTRAINT "PK_8131b28e7f332a334b9281d6c1e" PRIMARY KEY ("disciplineId"))`);
        await queryRunner.query(`CREATE TABLE "achievment" ("achievmentId" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "points" integer NOT NULL, "isCustom" boolean NOT NULL, "disciplineDisciplineId" integer, CONSTRAINT "PK_780c23a36fd61873b23488ee7a2" PRIMARY KEY ("achievmentId"))`);
        await queryRunner.query(`CREATE TABLE "user_achievment" ("userId" integer NOT NULL, "achievmentId" integer NOT NULL, CONSTRAINT "PK_67678ca23e399cc233aa98fce2b" PRIMARY KEY ("userId", "achievmentId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d7b02e59edf365318439ee76ca" ON "user_achievment" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_78164b2e507ee79f9dc6a887a3" ON "user_achievment" ("achievmentId") `);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "status" "public"."hackathon_status_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "achievment" ADD CONSTRAINT "FK_5489be4aba3ead29471ff07b247" FOREIGN KEY ("disciplineDisciplineId") REFERENCES "discipline"("disciplineId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_achievment" ADD CONSTRAINT "FK_d7b02e59edf365318439ee76ca4" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_achievment" ADD CONSTRAINT "FK_78164b2e507ee79f9dc6a887a3d" FOREIGN KEY ("achievmentId") REFERENCES "specialization"("specializationId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_achievment" DROP CONSTRAINT "FK_78164b2e507ee79f9dc6a887a3d"`);
        await queryRunner.query(`ALTER TABLE "user_achievment" DROP CONSTRAINT "FK_d7b02e59edf365318439ee76ca4"`);
        await queryRunner.query(`ALTER TABLE "achievment" DROP CONSTRAINT "FK_5489be4aba3ead29471ff07b247"`);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "status" hackathon_status_enum NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_78164b2e507ee79f9dc6a887a3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d7b02e59edf365318439ee76ca"`);
        await queryRunner.query(`DROP TABLE "user_achievment"`);
        await queryRunner.query(`DROP TABLE "achievment"`);
        await queryRunner.query(`DROP TABLE "discipline"`);
        await queryRunner.query(`DROP TYPE "public"."discipline_format_enum"`);
    }

}
