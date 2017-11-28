const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    to: 'all',
    text: 'Hey. What is going on',
    creatAt: 123, 
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  }); 
});
app.use(express.static(publicPath));
server.listen(port, () => {
  console.log(`Server is up on Port ${port}`);
});