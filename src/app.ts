import express, { Application, Request, Response } from "express";
import cors from "cors";
import messageRouter from "./Modules/Chat/routes/messgae.route";

const app: Application = express();
const allowedOrigins = ["http://localhost:3000"];

app.use(express.json());
app.use(
	cors({
		origin: (origin, callback) => {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
		credentials: true,
	}),
);

// Using routes here
app.use("/api/v1/chat", messageRouter);

export default app;
