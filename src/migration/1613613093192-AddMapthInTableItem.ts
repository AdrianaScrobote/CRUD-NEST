import {MigrationInterface, QueryRunner} from "typeorm";

export class teste1613613093192 implements MigrationInterface {
    name = 'teste1613613093192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "mpath" character varying DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "mpath"`);
    }

}
