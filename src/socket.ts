// import io from 'socket.io-client';

// // Use your production URL instead of localhost
// const SOCKET_URL = 'https://ba-lhhs.onrender.com';

// console.log('🔗 Connecting to production server:', SOCKET_URL);

// const socket = io(SOCKET_URL, {
//   transports: ['websocket', 'polling'],
//   reconnection: true,
//   reconnectionAttempts: Infinity,
//   reconnectionDelay: 1000,
//   reconnectionDelayMax: 5000,
//   timeout: 20000,
//   path: '/socket.io/',
//   forceNew: true,
//   autoConnect: true,
//   // Add secure connection settings
//   secure: true,
//   rejectUnauthorized: false // For development/testing only
// });

// // Rest of your connection handlers remain the same
// socket.on('connect', () => {
//   console.log('✅ SOCKET CONNECTED TO PRODUCTION:', socket.id);
// });

// socket.on('connect_error', (error) => {
//   console.log('❌ PRODUCTION SOCKET ERROR:', error.message);
//   // Try polling if websocket fails
//   if (error.message.includes('websocket')) {
//     console.log('🔄 Switching to polling transport...');
//     socket.io.opts.transports = ['polling'];
//     socket.connect();
//   }
// });

// export default socket;



// /Users/webasebrandings/Downloads/old codes/userapp-eazygo-Public-main/src/socket.ts

import io from 'socket.io-client';
import { Platform } from 'react-native';

// -----------------------------------------
// ✅ LOCALHOST CONFIGURATION
// -----------------------------------------
const LOCAL_IP = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
const PORT = '5001';

const SOCKET_URL = `http://${LOCAL_IP}:${PORT}`;

console.log('🔗 Connecting Socket to LOCALHOST:', SOCKET_URL);

const socket = io(SOCKET_URL, {
  transports: ['websocket'], // Use websocket for better local performance
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 20000,
  forceNew: true,
  autoConnect: true,
  secure: false, // Localhost is not secure (http)
  rejectUnauthorized: false
});

// Rest of your connection handlers remain the same
socket.on('connect', () => {
  console.log('✅ SOCKET CONNECTED TO LOCALHOST:', socket.id);
});

socket.on('connect_error', (error) => {
  console.log('❌ LOCALHOST SOCKET ERROR:', error.message);
  // Try polling if websocket fails
  if (error.message && error.message.includes('websocket')) {
    console.log('🔄 Switching to polling transport...');
    socket.io.opts.transports = ['polling'];
    socket.connect();
  }
});

export default socket;

































































































// import { io } from "socket.io-client"; 

// // Change from ngrok to your server IP
// const SOCKET_URL = "https://ba-lhhs.onrender.com";

// const socket = io(SOCKET_URL, {
//   transports: ["websocket"],
//   autoConnect: true,
//   reconnection: true,
//   reconnectionAttempts: 20,
//   reconnectionDelay: 2000,
//   timeout: 20000,
//   forceNew: true,
// });
// socket.on("connect", () => {
//   console.log("🟢 User socket connected:", socket.id);
// });

// export default socket;
