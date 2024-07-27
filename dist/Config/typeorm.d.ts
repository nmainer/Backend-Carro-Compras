import { DataSource } from "typeorm";
export declare const dataSource: DataSource;
declare const _default: (() => {
    type: string;
    database: string;
    host: string;
    port: number;
    username: string;
    password: string;
    logging: boolean;
    entities: string[];
    migrations: string[];
    synchronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    database: string;
    host: string;
    port: number;
    username: string;
    password: string;
    logging: boolean;
    entities: string[];
    migrations: string[];
    synchronize: boolean;
}>;
export default _default;
