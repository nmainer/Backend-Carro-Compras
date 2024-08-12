import {  DataSource, DataSourceOptions } from "typeorm";
import {config as dotenvConfig} from "dotenv";
import { registerAs } from "@nestjs/config";

dotenvConfig({path: "./.env.development"});
const port = Number(process.env.DB_PORT);

const config ={
    type:"postgres",
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging:false,
    entities: [ __dirname + '/../**/*.entity{.js,.ts}'],
    migrations: ["dist/migrations/*{.ts,.js}"],
    synchronize: false,
};

export const dataSource = new DataSource(config as DataSourceOptions);

export default registerAs('typeorm', () => config);

