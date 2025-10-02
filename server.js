"use strict";

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const redis = require("redis");

const PORT = 9001; // Your Node.js server port

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

// Start server
server.listen(PORT, () => {
  console.log(`✅ Socket.IO server running on port ${PORT}`);
});

// Handle client connections
io.on("connection", (socket) => {
  console.log("🟢 New client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });

  socket.on("message", (data) => {
    console.log("📩 Received from client:", data);
  });
});

const redisClient = redis.createClient({ url: "redis://127.0.0.1:13000" });

redisClient.connect().then(() => {
  console.log("🔗 Connected to Redis (Frappe events)");

  redisClient.subscribe("events", (message) => {
    const parsed = JSON.parse(message);
    console.log("📡 Event from Frappe:", parsed);

    // forward to all clients
    io.emit(parsed.event, parsed.message);
  });
});
