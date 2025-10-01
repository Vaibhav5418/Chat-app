import WebSocket, { WebSocketServer } from "ws";
import { ChatRoomManager } from "./chat/ChatRoomManager";
import { User } from "./chat/User";
import { WebSocketAdapter } from "./patterns/structural/Adapter";
import { Logger } from "./core/Logger";

const wss = new WebSocketServer({ port: 8080 });
const manager = ChatRoomManager.getInstance();

interface ClientData {
    username: string;
    roomId: string;
    userInstance: User;
}

const clients = new Map<WebSocket, ClientData>();

wss.on("connection", ws => {
    Logger.info("New client connected");

    ws.on("message", msg => {
        try {
            const data = JSON.parse(msg.toString());
            const { type, username, roomId, content } = data;

            if (type === "join") {
                const room = manager.getRoom(roomId);
                const user = new User(username, new WebSocketAdapter(ws));
                room.attach(user);
                clients.set(ws, { username, roomId, userInstance: user });
            }

            if (type === "message") {
                const client = clients.get(ws);
                if (!client) return;
                const room = manager.getRoom(client.roomId);
                room.sendMessage(client.username, content);
            }
        } catch (err) {
            Logger.warn("Invalid message received");
        }
    });

    ws.on("close", () => {
        const client = clients.get(ws);
        if (client) {
            const room = manager.getRoom(client.roomId);
            room.detach(client.userInstance);
            clients.delete(ws);
        }
    });
});

Logger.info("WebSocket server running on ws://localhost:8080");
