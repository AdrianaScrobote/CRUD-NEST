import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEntityPedido1613276369222 implements MigrationInterface {
    name = 'AddEntityPedido1613276369222'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pedido" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying(300) NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "lastChangedBy" character varying(300) NOT NULL, CONSTRAINT "PK_af8d8b3d07fae559c37f56b3f43" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedido_itens_item" ("pedidoId" uuid NOT NULL, "itemId" uuid NOT NULL, CONSTRAINT "PK_b7006d308bc8fe16a0fa6321cca" PRIMARY KEY ("pedidoId", "itemId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_46a35d7343711d577a4dab8502" ON "pedido_itens_item" ("pedidoId") `);
        await queryRunner.query(`CREATE INDEX "IDX_598655e60da4b3ae5e98d0cc57" ON "pedido_itens_item" ("itemId") `);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "fornecedor"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "fornecedor"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "pedido_itens_item" ADD CONSTRAINT "FK_46a35d7343711d577a4dab85028" FOREIGN KEY ("pedidoId") REFERENCES "pedido"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido_itens_item" ADD CONSTRAINT "FK_598655e60da4b3ae5e98d0cc572" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido_itens_item" DROP CONSTRAINT "FK_598655e60da4b3ae5e98d0cc572"`);
        await queryRunner.query(`ALTER TABLE "pedido_itens_item" DROP CONSTRAINT "FK_46a35d7343711d577a4dab85028"`);
        await queryRunner.query(`COMMENT ON COLUMN "fornecedor"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "fornecedor"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`DROP INDEX "IDX_598655e60da4b3ae5e98d0cc57"`);
        await queryRunner.query(`DROP INDEX "IDX_46a35d7343711d577a4dab8502"`);
        await queryRunner.query(`DROP TABLE "pedido_itens_item"`);
        await queryRunner.query(`DROP TABLE "pedido"`);
    }

}
