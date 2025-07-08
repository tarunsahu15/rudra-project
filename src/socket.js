import { io } from 'socket.io-client';

export const initSocket = async () => {
    console.log('Socket.IO connecting to:', 'https://rudra-project-b9bm.onrender.com/');
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    const url = 'https://rudra-project-b9bm.onrender.com/'; // Fallback
    return io(url, options);
};
