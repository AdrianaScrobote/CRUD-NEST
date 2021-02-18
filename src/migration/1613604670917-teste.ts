import {MigrationInterface, QueryRunner} from "typeorm";

export class teste1613604670917 implements MigrationInterface {
    name = 'teste1613604670917'

    public async up(queryRunner: QueryRunner): Promise<void> {
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
    }

}
