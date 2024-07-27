import { MigrationInterface, QueryRunner } from "typeorm";

export class Prueba21722105111789 implements MigrationInterface {
    name = 'Prueba21722105111789'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "orderdetailId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "UQ_1207798281ca56ceaf1c961f2ee" UNIQUE ("orderdetailId")`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_1207798281ca56ceaf1c961f2ee" FOREIGN KEY ("orderdetailId") REFERENCES "orderDetails"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_1207798281ca56ceaf1c961f2ee"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "UQ_1207798281ca56ceaf1c961f2ee"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "orderdetailId"`);
    }

}
