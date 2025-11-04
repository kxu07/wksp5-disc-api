import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
const { DATABASE_URL } = process.env;

export const pool = new Pool({
    connectionString: DATABASE_URL, 
    ssl: rejectUnauthorized
})