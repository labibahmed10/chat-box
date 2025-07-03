import { DataTypes, Model } from "sequelize";
import { MessageAttributes } from "../../../Shared/types/messages.interface";
import { sequelize } from "../../../Config/config";

export class MessageModel extends Model<MessageAttributes> {
  public id!: number;
  public message!: string;
  public userId!: number;
  public receiverId!: number | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

MessageModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    receiverId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "messages",
    modelName: "Message",
  }
);
