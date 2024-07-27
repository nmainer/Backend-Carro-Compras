"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prueba21722105111789 = void 0;
class Prueba21722105111789 {
    constructor() {
        this.name = 'Prueba21722105111789';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "orders" ADD "orderdetailId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "UQ_1207798281ca56ceaf1c961f2ee" UNIQUE ("orderdetailId")`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_1207798281ca56ceaf1c961f2ee" FOREIGN KEY ("orderdetailId") REFERENCES "orderDetails"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_1207798281ca56ceaf1c961f2ee"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "UQ_1207798281ca56ceaf1c961f2ee"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "orderdetailId"`);
    }
}
exports.Prueba21722105111789 = Prueba21722105111789;
//# sourceMappingURL=1722105111789-Prueba2.js.map