import DB from "../../../server";
import { MessageInterface } from "../../../Shared/types/messages.interface";
import { messageTable } from "../schema/message.schema";

export const createMessageRepository = async ({ message, sender_id, receiver_id }: MessageInterface) => {
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


export const getAllMessagesRepository = async (): Promise<MessageInterface[]> => {
	return await DB?.select().from(messageTable) || [];
};
