import { defineConfig } from "drizzle-kit";
import * as dotenvx from "@dotenvx/dotenvx";
import { DB_Variables } from "./src/Config/config";
import path from "path";

dotenvx.config({ path: path.join(process.cwd(), ".env") });

export default defineConfig({
	out: "./drizzle",
	dialect: "mysql",
	schema: "./src/Modules/**/*.schema.ts",
	dbCredentials: { ...DB_Variables },
	strict: true,
});
