import {sequelize, config} from "./config/config";
import http from "http";
import app from "./app"
import gracefulShutdown from "./utils/shutdown";

let server: http.Server;

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');

        await sequelize.sync({force: false});
        console.log('Models synced.');

        server = app.listen(config.port, () => {
            console.log(`⚡ app is listening on port ${config.port} `);
        });
    } catch (error) {
        console.error('DB connection failed:', error);
        process.exit(1);
    }
}

connectDB();


process.on("SIGTERM", () => gracefulShutdown(server, sequelize, "SIGTERM received", 0));
process.on("SIGINT", () => gracefulShutdown(server, sequelize, "SIGINT (Ctrl+C)", 0));

process.on("unhandledRejection", (reason) => {
    console.error("Unhandled Rejection:", reason);
    gracefulShutdown(server, sequelize, "Unhandled Promise Rejection", 1).catch(err => {
        console.error("Shutdown error:", err);
        process.exit(1);
    });
});

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
    gracefulShutdown(server, sequelize, "Uncaught Exception", 1).catch(err => {
        console.error("Shutdown error:", err);
        process.exit(1);
    });
});
