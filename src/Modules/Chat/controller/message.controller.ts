import { Request, Response } from "express";
import { getMessages, sendMessage } from "../services/message.service";

export const handleSendMessage = async (req: Request, res: Response): Promise<void> => {
	const { message, user_id, receiver_id } = req.body;
	try {
		const sentMessage = await sendMessage(message as string, user_id, receiver_id);
		res.status(201).json({
			message: "Message sent successfully",
			data: sentMessage,
		});
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
};

export const handleGetMessages = async (req: Request, res: Response): Promise<void> => {
	try {
		const messages = await getMessages();
		res
		.status(200)
		.json(messages);
	} catch (err: any) {
		res
		.status(500)
		.json({ error: err.message });
	}
};
