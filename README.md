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
