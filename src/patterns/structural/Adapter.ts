import WebSocket from "ws";
export interface ChatProtocol { sendMessage(user:string, message:string): void; }
export class WebSocketAdapter implements ChatProtocol {
    constructor(private ws: WebSocket){}
    sendMessage(user:string, message:string){ this.ws.send(message); }
}
