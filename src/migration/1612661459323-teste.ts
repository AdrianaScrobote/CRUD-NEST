import {MigrationInterface, QueryRunner} from "typeorm";

export class teste1612661459323 implements MigrationInterface {
    name = 'teste1612661459323'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
    }

}
