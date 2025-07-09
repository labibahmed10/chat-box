import { Server as SocketServer } from "socket.io";
import { sendMessage } from "../Modules/Chat/services/message.service";

const setupChatSocket = (server: any): void => {
	const io = new SocketServer(server, {
		cors: {
			origin: "*",
		},
	});

	io.on("connection", (socket) => {
		console.log("🟢 Client connected:", socket.id);

		socket.on("sendMessage", async (data) => {
			try {
				const message = await sendMessage(data.content, data.userId, data.receiverId);
				io.emit("receiveMessage", message);
			} catch (err) {
				console.error("🔴 Error sending message:", err);
			}
		});

		socket.on("disconnect", () => {
			console.log("🟠 Client disconnected");
		});
	});
};

export default setupChatSocket;
