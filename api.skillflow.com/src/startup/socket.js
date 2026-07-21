import { Server } from 'socket.io';

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    socket.join('admin_room');
    socket.emit('server:ready', {
      rooms: ['admin_room', `user_${socket.id}`],
      message: 'Skillflow socket test connection ready',
    });
  });

  return io;
};

export const getSocket = () => io;
