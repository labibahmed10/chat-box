export interface MessageInterface {
	id?: number | undefined;
	message: string;
	sender_id: string;
	receiver_id: string;
	created_at?: Date;
	updated_at?: Date | null;
}
