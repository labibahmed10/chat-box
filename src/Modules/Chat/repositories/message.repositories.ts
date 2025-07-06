import DB from "../../../server";
import { MessageType, messageTable } from "../schema/message.schema";

const CreateMessageRepository = async ({ message, sender_id, receiver_id }: MessageType) => {
	try {
		const result = await DB?.insert(messageTable)
			.values({
				message,
				sender_id,
				receiver_id,
			})
			.$returningId();

		return result;
	} catch (error) {
		console.error("Error inserting message:", error);
		throw error;
	}
};
