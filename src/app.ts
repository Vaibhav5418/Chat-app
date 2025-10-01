import WebSocket from "ws";
import readline from "readline";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function ask(question: string): Promise<string> {
    return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
    const username = await ask("Enter your username: ");
    const roomId = await ask("Enter chat room ID: ");

    const ws = new WebSocket("ws://localhost:8080");

    ws.on("open", () => {
        ws.send(JSON.stringify({ type: "join", username, roomId }));
        console.log(`Welcome ${username}! Type messages below (type "exit" to leave).`);
    });

    ws.on("message", (data: WebSocket.Data) => {
        console.log(data.toString());
    });

    rl.on("line", line => {
        if (line.trim().toLowerCase() === "exit") {
            rl.close();
            ws.close();
            return;
        }
        ws.send(JSON.stringify({ type: "message", username, roomId, content: line }));
    });
}

main();
