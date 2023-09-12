import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserEntity1694279435373 implements MigrationInterface {
    name = 'AddUserEntity1694279435373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("userId" SERIAL NOT NULL, "fullname" character varying NOT NULL, "nickname" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isFamous" boolean NOT NULL DEFAULT false, "code_confirm" character varying, CONSTRAINT "PK_8bf09ba754322ab9c22a215c919" PRIMARY KEY ("userId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
