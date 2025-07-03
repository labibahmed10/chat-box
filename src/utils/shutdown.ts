import http from "http";
import {Sequelize} from "sequelize";

async function gracefulShutdown(server: http.Server, sequelize: Sequelize, reason: string, exitCode: number = 1) {
    console.log(`\n🛑 Shutting down: ${reason}`);

    if (server) {
        console.log("⏳ Closing HTTP server...");
        await new Promise<void>((resolve) => {
            server.close(() => {
                console.log("✅ HTTP server closed.");
                resolve();
            });
        });
    }

    try {
        console.log("⏳ Closing database connection...");
        await sequelize.close();
        console.log("✅ Database connection closed.");
    } catch (err) {
        console.error("❌ Error closing DB:", err);
    }

    console.log(`👋 Exiting with code ${exitCode}`);
    process.exit(exitCode);
}


export default gracefulShutdown;

