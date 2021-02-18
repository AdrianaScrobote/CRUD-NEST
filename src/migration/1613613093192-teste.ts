import {MigrationInterface, QueryRunner} from "typeorm";

export class teste1613613093192 implements MigrationInterface {
    name = 'teste1613613093192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "mpath" character varying DEFAULT ''`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "fornecedor"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "fornecedor"."lastChangedDateTime" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "fornecedor"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "fornecedor"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "mpath"`);
    }

}
