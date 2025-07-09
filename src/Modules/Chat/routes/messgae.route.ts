import express from "express";
import { handleGetMessages, handleSendMessage } from "../controller/message.controller";

const messageRouter = express.Router();

messageRouter.post("/messages", handleSendMessage);
messageRouter.get("/messages", handleGetMessages);

export default messageRouter;
