import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableItem1612744059130 implements MigrationInterface {
    name = 'CreateTableItem1612744059130'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "item_complemento"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item_complemento"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item_complemento"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item_complemento"."createDateTime" IS NULL`);
    }

}
