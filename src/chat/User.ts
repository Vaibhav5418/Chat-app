import { Observer } from "../patterns/behavioral/Observer";
import { ChatProtocol } from "../patterns/structural/Adapter";
import { Message } from "./Message";

export class User implements Observer {
    constructor(public username: string, private protocol: ChatProtocol) {}

    update(message: string): void {
        this.protocol.sendMessage(this.username, message);
    }

    // Send message history to the new user
    updateHistory(messages: Message[]): void {
        messages.forEach(msg => {
            this.protocol.sendMessage(this.username, msg.toString());
        });
    }
}
