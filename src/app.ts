import express, {Application, Request, Response} from "express";
import cors from "cors";


const app: Application = express();
const allowedOrigins = ["http://localhost:3000"];

app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));

export default app;