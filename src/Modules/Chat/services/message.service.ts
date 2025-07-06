import { MessageInterface } from "../../../Shared/types/messages.interface";
import { createMessageRepository, getAllMessagesRepository } from "../repositories/message.repositories";

export const sendMessage = async (message: string, sender_id: string, receiver_id: string) => {
	return await createMessageRepository({ message, sender_id, receiver_id });
};

export const getMessages = async (): Promise<MessageInterface[]> => {
	return await getAllMessagesRepository();
};
