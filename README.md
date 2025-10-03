🔌 Frappe ↔ React Realtime Bridge (via Node.js + Socket.IO)

This project provides a working solution to enable real-time communication between Frappe (ERPNext backend) and a React frontend using Socket.IO with Node.js as an intermediary.

Frappe’s default real-time system is tightly coupled with its own WebSocket implementation, which makes it difficult to directly connect React or other clients. This bridge solves the problem by:

Subscribing to Redis events from Frappe.

Forwarding events to connected Socket.IO clients (React, Vue, etc.).

Allowing clients to send/receive real-time messages seamlessly.

✨ Features

🔗 Connect React (or any client) with Frappe events in real-time.

⚡ Socket.IO-based Node.js server for bi-directional communication.

📡 Redis event subscription to receive messages from Frappe.

🔄 Broadcast Frappe events to all connected clients.

🚀 Setup & Installation
1. Clone Repository
git clone https://github.com/richard1609jr/Custom-Realtime-Frappe-with-Client-Application..git

2. Install Dependencies
npm install express socket.io redis socket.io-client

3. Start Node.js Server
node server.js

✅ Server runs on http://localhost:9001

4. Start Client.js Server
node client.js

⚙️ How It Works
1. Node.js Server (server.js)

Runs a Socket.IO server.

Subscribes to Redis (events channel).

Forwards Frappe events to all connected clients.

2. React / Client (client.js)

Connects to the Node.js server via Socket.IO.

Listens for events (custom_event, etc.).

Can send messages to the server.

3. Frappe Side (frappe_publish.py)

Publish an event from Frappe:

import redis, json

r = redis.StrictRedis(host="localhost", port=13000, decode_responses=True)

r.publish("events", json.dumps({
    "event": "custom_event",
    "message": {"msg": "Hello from Frappe via Node!"}
}))


The event will be received by all connected React clients.

🖥️ Example Output

Server Logs

✅ Socket.IO server running on port 9001
🔗 Connected to Redis (Frappe events)
🟢 New client connected: 5tK8l9
📡 Event from Frappe: { event: 'custom_event', message: { msg: 'Hello from Frappe via Node!' } }


Client Logs

✅ Connected to socket server
💡 Realtime event from Frappe: { msg: 'Hello from Frappe via Node!' }

📌 Use Cases

Real-time chat system in React with Frappe backend.

Live dashboards (orders, invoices, tickets, etc.).

Notifications and alerts system.

Collaborative apps (task boards, project management).

🤝 Contributing

Pull requests are welcome! If you’ve faced similar issues with React ↔ Frappe real-time integration, feel free to improve or extend this repo.

📜 License

MIT License. Free to use and modify.
