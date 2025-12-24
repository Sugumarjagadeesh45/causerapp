import io from 'socket.io-client';

// -----------------------------------------
// 🌍 LIVE SERVER CONFIGURATION
// -----------------------------------------
const SOCKET_URL = 'https://taxi.webase.co.in';

console.log('🔗 Connecting Socket to LIVE SERVER:', SOCKET_URL);

const socket = io(SOCKET_URL, {
  transports: ['websocket'],
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 20000,
  forceNew: true,
  autoConnect: true,
  secure: true, // Important for HTTPS
});

socket.on('connect', () => {
  console.log('✅ SOCKET CONNECTED:', socket.id);
});

socket.on('connect_error', (error) => {
  console.log('❌ SOCKET ERROR:', error.message);
});

export default socket;





// import io from 'socket.io-client';
// import { Platform } from 'react-native';

// // -----------------------------------------
// // ✅ LOCALHOST CONFIGURATION
// // -----------------------------------------
// const LOCAL_IP = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
// const PORT = '5001';

// const SOCKET_URL = `http://${LOCAL_IP}:${PORT}`;

// console.log('🔗 Connecting Socket to LOCALHOST:', SOCKET_URL);

// const socket = io(SOCKET_URL, {
//   transports: ['websocket'], // Use websocket for better local performance
//   reconnection: true,
//   reconnectionAttempts: Infinity,
//   reconnectionDelay: 1000,
//   reconnectionDelayMax: 5000,
//   timeout: 20000,
//   forceNew: true,
//   autoConnect: true,
//   secure: false, // Localhost is not secure (http)
//   rejectUnauthorized: false
// });

// // Rest of your connection handlers remain the same
// socket.on('connect', () => {
//   console.log('✅ SOCKET CONNECTED TO LOCALHOST:', socket.id);
// });

// socket.on('connect_error', (error) => {
//   console.log('❌ LOCALHOST SOCKET ERROR:', error.message);
//   // Try polling if websocket fails
//   if (error.message && error.message.includes('websocket')) {
//     console.log('🔄 Switching to polling transport...');
//     socket.io.opts.transports = ['polling'];
//     socket.connect();
//   }
// });

// export default socket;



