import { Message } from "../../chat/Message"; // corrected

export interface IChatMessage {
    display(): string;
}

export class SimpleChatMessage implements IChatMessage {
    constructor(private msg: Message) {}
    display(): string {
        return this.msg.toString();
    }
}

export class TimestampDecorator implements IChatMessage {
    constructor(private message: IChatMessage) {}
    display(): string {
        return `[${new Date().toLocaleTimeString()}] ${this.message.display()}`;
    }
}

export class EmojiDecorator implements IChatMessage {
    constructor(private message: IChatMessage) {}
    display(): string {
        return `😊 ${this.message.display()} 😊`;
    }
}
