export class Message {
    timestamp: Date;

    constructor(public sender: string, public content: string) {
        this.timestamp = new Date();
    }

    toString(): string {
        const time = this.timestamp.toLocaleTimeString();
        return `[${time}] ${this.sender}: ${this.content}`;
    }
}
