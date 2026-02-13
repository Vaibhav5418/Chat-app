💬 Real-Time Chat Application (TypeScript)

📖 Overview

This project is a console-based real-time chat application built using TypeScript and WebSockets. It allows users to create or join chat rooms, exchange messages instantly, and view active participants in real time.

The application is designed to demonstrate practical implementation of multiple Software Design Patterns in a real-world scenario, making the codebase scalable, maintainable, and modular.


🚀 Features

Create or join chat rooms

Real-time messaging via WebSockets

Active users list & notifications

Dynamic message formatting

Role-based user creation

Modular & pattern-based architecture


🧠 Design Patterns Used

| Type       | Pattern   | Use Case in Chat App                                 |
| ---------- | --------- | ---------------------------------------------------- |
| Behavioral | Observer  | Real-time message & active user notifications        |
| Behavioral | Strategy  | Dynamic message formatting (emoji, uppercase, plain) |
| Creational | Singleton | `ChatRoomManager` manages all chat rooms             |
| Creational | Factory   | Dynamically creates Admin, Regular, and Guest users  |
| Structural | Adapter   | WebSocket adapter for sending messages               |
| Structural | Decorator | Enhances messages with timestamp & emoji             |


📂 Folder Structure


<img width="532" height="687" alt="image" src="https://github.com/user-attachments/assets/857bd24c-9779-441c-9df6-86aaf7d3939b" />



⚙️ Requirements

Node.js ≥ 18

TypeScript

ws (WebSocket library)

ts-node (Run TS directly)


📦 Installation

Install runtime dependencies:

npm install ws readline

Install dev dependencies:

npm install -D typescript ts-node @types/node


▶️ How to Run

1️⃣ Start the Server: npx ts-node src/server.ts

2️⃣ Start a Client (New Terminal): npx ts-node src/app.ts

3️⃣ Usage Steps:

    Enter your username
    
    Enter chat room ID
    
    Start sending messages in real time
    
    Type exit to leave the chat
    
    Run multiple clients to test live interaction




