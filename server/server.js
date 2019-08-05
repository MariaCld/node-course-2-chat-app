const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
//communication beetween web server & client
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.emit('newEmail', {
        from: "mikae@exaple.com",
        text: "hey hey hye",
        createAt: 123
    })

    socket.emit('newMessage', {
        from:'john',
        text:'see you',
        createdAt:1234444
    })

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);

    })

    socket.on('disconnect', () => {
        console.log('client disconnected');
    })
})

server.listen(port, host, () => {
    console.log(`Server started on port ${port}`);
});
