const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');


app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.send(index.html);
});

server.listen(port, () => {
  console.log(`Server is up on Port ${port}`);
});