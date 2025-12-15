import { io } from "socket.io-client"; 

// USE NGROK SOCKET URL
const SOCKET_URL = "https://eb4a6949d46b.ngrok-free.app";


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
