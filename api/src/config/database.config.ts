import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { Database } from "./database.types";
import dotenv from "dotenv";

dotenv.config();

const dialect = new PostgresDialect({
  pool: new Pool({
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    max: 5,
  }),
});

export const db = new Kysely<Database>({ dialect });
