export interface MessageFormatter { format(message: string): string; }
export class PlainFormatter implements MessageFormatter { format(message: string) { return message; } }
export class EmojiFormatter implements MessageFormatter { format(message: string) { return `😊 ${message} 😊`; } }
export class UppercaseFormatter implements MessageFormatter { format(message: string) { return message.toUpperCase(); } }
