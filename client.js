const { io } = require("socket.io-client");

const socket = io("http://localhost:9001");

socket.on("connect", () => {
  console.log("✅ Connected to socket server");

  // Send test message
  socket.emit("message", { msg: "Hello from client.js" });
});

socket.on("disconnect", () => {
  console.log("❌ Disconnected from server");
});

// Listen to Frappe events
socket.on("custom_event", (data) => {
  console.log("💡 Realtime event from Frappe:", data);
});
