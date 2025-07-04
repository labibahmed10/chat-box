import dotenv from "dotenv";
import path from "path";
import mysql from "mysql2/promise";

dotenv.config({path: path.join((process.cwd(), ".env"))});

async function createDBConnection() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT),
    });

    await connection.connect();
    console.log("✅ DB connection verified!");
    return connection;
}

const config = {
    port: process.env.PORT,
}

export {
    config,
    createDBConnection,
}