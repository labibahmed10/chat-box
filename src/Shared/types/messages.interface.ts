export interface MessageInterface {
	id?: number;
	message: string;
	sender_id: number | string;
	receiver_id: number | string | null;
	created_at?: Date;
	updated_at?: Date;
}
