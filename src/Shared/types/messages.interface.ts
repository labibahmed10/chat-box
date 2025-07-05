export interface MessageInterface {
  id?: number;
  message: string;
  userId: number | string;
  receiverId: number | string | null;
  createdAt?: Date;
  updatedAt?: Date;
}
