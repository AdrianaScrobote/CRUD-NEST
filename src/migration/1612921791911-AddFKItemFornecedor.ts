import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFKItemFornecedor1612921791911 implements MigrationInterface {
    name = 'AddFKItemFornecedor1612921791911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "fornecedorId" uuid`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "fornecedor"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "fornecedor"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_f88d8e75c0514d2e1abf57e5d20" FOREIGN KEY ("fornecedorId") REFERENCES "fornecedor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_f88d8e75c0514d2e1abf57e5d20"`);
        await queryRunner.query(`COMMENT ON COLUMN "fornecedor"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "fornecedor"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "fornecedorId"`);
    }

}
