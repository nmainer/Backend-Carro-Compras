"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const config_1 = require("@nestjs/config");
(0, dotenv_1.config)({ path: "./.env.development" });
const port = Number(process.env.DB_PORT);
const config = {
    type: "postgres",
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: false,
    entities: ["dist/**/*.entity{.js,.ts}"],
    migrations: ["dist/migrations/*{.ts,.js}"],
    synchronize: false,
};
exports.dataSource = new typeorm_1.DataSource(config);
exports.default = (0, config_1.registerAs)('typeorm', () => config);
//# sourceMappingURL=typeorm.js.map