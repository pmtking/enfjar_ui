import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  transports: ["websocket", "polling"],
  reconnection: true,
});

socket.on("connect", () => {
  console.log("✅ Connected to Socket:", socket.id);

  // Emit event after successful connection
  socket.emit("hello", "world");
});

export default socket;
