import {config, createDBConnection} from "./Config/config";
import http from "http";
import app from "./app"
import gracefulShutdown from "./Shared/utils/shutdown";
import {drizzle, MySql2Database} from "drizzle-orm/mysql2";
import {Connection} from "mysql2/promise";

let server: http.Server;
let mysqlConnection: Connection;
let DB: MySql2Database<Record<string, never>> & {
    $client: Connection;
} | null = null

async function connectDB() {
    try {
        mysqlConnection = await createDBConnection();
        DB = drizzle({
            client: mysqlConnection,
        });

        server = app.listen(config.port, () => {
            console.log(`⚡ app is listening on port ${config.port} `);
        });
    } catch (error) {
        console.error('DB connection failed:', error);
        process.exit(1);
    }
}

connectDB();


process.on("SIGTERM", () => gracefulShutdown(server, mysqlConnection, "SIGTERM received", 0));
process.on("SIGINT", () => gracefulShutdown(server, mysqlConnection, "SIGINT (Ctrl+C)", 0));

process.on("unhandledRejection", (reason) => {
    console.error("Unhandled Rejection:", reason);
    gracefulShutdown(server, mysqlConnection, "Unhandled Promise Rejection", 1).catch(err => {
        console.error("Shutdown error:", err);
        process.exit(1);
    });
});

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
    gracefulShutdown(server, mysqlConnection, "Uncaught Exception", 1).catch(err => {
        console.error("Shutdown error:", err);
        process.exit(1);
    });
});

export default DB;
