import { Observer, Subject } from "../patterns/behavioral/Observer";
import { Message } from "./Message";
import { Logger } from "../core/Logger";

export class ChatRoom implements Subject {
    private users: Observer[] = [];
    private messages: Message[] = [];

    constructor(public roomId: string) {}

    attach(observer: Observer): void {
        this.users.push(observer);
        Logger.info(`${(observer as any).username} joined ${this.roomId}`);
        // Send message history to new user
        (observer as any).updateHistory(this.messages);
        this.notify(`[INFO]: ${(observer as any).username} joined ${this.roomId}`);
        this.broadcastActiveUsers();
    }

    detach(observer: Observer): void {
        this.users = this.users.filter(u => u !== observer);
        Logger.warn(`${(observer as any).username} left ${this.roomId}`);
        this.notify(`[INFO]: ${(observer as any).username} left ${this.roomId}`);
        this.broadcastActiveUsers();
    }

    notify(message: string): void {
        for (const user of this.users) {
            user.update(message);
        }
    }

    sendMessage(sender: string, content: string): void {
        const message = new Message(sender, content);
        this.messages.push(message);
        this.notify(message.toString());
    }

    getActiveUsers(): string[] {
        return this.users.map(u => (u as any).username);
    }

    private broadcastActiveUsers(): void {
        const activeUsernames = this.getActiveUsers();
        this.notify(`[Active Users]: ${JSON.stringify(activeUsernames)}`);
    }

    getHistory(): string[] {
        return this.messages.map(m => m.toString());
    }
}
