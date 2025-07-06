import dotenvx from "@dotenvx/dotenvx";
import path from "path";
import mysql from "mysql2/promise";

dotenvx.config({ path: path.join((process.cwd(), ".env")) });

export const DB_Variables = {
	host: process.env.DB_HOST as string,
	user: process.env.DB_USER as string,
	password: process.env.DB_PASSWORD as string,
	database: process.env.DB_NAME as string,
	port: Number(process.env.DB_PORT) as number,
};

async function createDBConnection() {
	try {
		const connection = await mysql.createConnection({ ...DB_Variables });

		await connection.connect();
		console.log("✅ DB connection verified!");
		return connection;
	} catch (error) {
		console.error("❌ DB connection failed:", error);
		throw error;
	}
}

const config = {
	port: process.env.PORT,
};

export { config, createDBConnection };
