import { io } from "socket.io-client"; 

// Change from ngrok to your server IP
const SOCKET_URL = "https://5207a262405d.ngrok-free.app";

const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 20,
  reconnectionDelay: 2000,
  timeout: 20000,
  forceNew: true,
});
socket.on("connect", () => {
  console.log("🟢 User socket connected:", socket.id);
});

export default socket;
