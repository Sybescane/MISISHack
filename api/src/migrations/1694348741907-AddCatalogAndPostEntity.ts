import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCatalogAndPostEntity1694348741907 implements MigrationInterface {
    name = 'AddCatalogAndPostEntity1694348741907'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "catalog" ("catalogId" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_9ead1dd144f31d0a74dbc2b97e4" PRIMARY KEY ("catalogId"))`);
        await queryRunner.query(`CREATE TABLE "post" ("postId" SERIAL NOT NULL, "title" character varying NOT NULL, "message" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "isNews" boolean NOT NULL, "userUserId" integer, "catalogCatalogId" integer, CONSTRAINT "PK_9b3ab408235ba7d60345a84f994" PRIMARY KEY ("postId"))`);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "status" "public"."hackathon_status_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_383f47c98d6fc3e18786e00ed41" FOREIGN KEY ("userUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_a508f92b097d7d977395514d45b" FOREIGN KEY ("catalogCatalogId") REFERENCES "catalog"("catalogId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_a508f92b097d7d977395514d45b"`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_383f47c98d6fc3e18786e00ed41"`);
        await queryRunner.query(`ALTER TABLE "hackathon" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "hackathon" ADD "status" hackathon_status_enum NOT NULL`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "catalog"`);
    }

}
