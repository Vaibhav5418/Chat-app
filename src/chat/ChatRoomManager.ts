import { ChatRoom } from "./ChatRoom";

export class ChatRoomManager {
    private static instance: ChatRoomManager;
    private rooms: Map<string, ChatRoom> = new Map();

    private constructor() {}

    static getInstance(): ChatRoomManager {
        if (!ChatRoomManager.instance) {
            ChatRoomManager.instance = new ChatRoomManager();
        }
        return ChatRoomManager.instance;
    }

    getRoom(roomId: string): ChatRoom {
        if (!this.rooms.has(roomId)) {
            this.rooms.set(roomId, new ChatRoom(roomId));
        }
        return this.rooms.get(roomId)!;
    }
}
