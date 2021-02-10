import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEntityFornecedor1612920918819 implements MigrationInterface {
    name = 'AddEntityFornecedor1612920918819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "fornecedor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedBy" character varying(300) NOT NULL, CONSTRAINT "PK_5bff2d88b4e0ef84a6444b786a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`DROP TABLE "fornecedor"`);
    }

}
