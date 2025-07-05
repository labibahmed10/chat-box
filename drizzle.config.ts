import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
	out: "./drizzle",
	dialect: "mysql",
	schema: "./src/Modules/**/*.schema.ts",

	dbCredentials: {
		database: process.env.DB_NAME as string,
		host: process.env.DB_HOST as string,
		port: Number(process.env.DB_PORT) as number,
		user: process.env.DB_USER as string,
		password: process.env.DB_PASSWORD as string,
	},

	strict: true,
});
